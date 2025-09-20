// npm i framer-motion

import React, { useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Ludo App – single-file React component using TailwindCSS
 *
 * Notes
 * - Local hot-seat multiplayer (2–4 players)
 * - Dice RNG (1–6) with roll animation
 * - Must roll 6 to leave base; extra turn on 6
 * - Path tracking on a 52-node ring + 6-node home stretch per player
 * - Safe squares (cannot capture on them)
 * - Capture sends opponent tokens back to base
 * - Exact roll needed to reach final home (index 5 in home path)
 * - Minimal lobby, results screen, emoji reactions
 * - SVG board for clean, responsive layout
 */

export default function LudoApp() {
  return <GameShell />;
}

/** --------------------------- Types & Helpers --------------------------- */

type Color = "red" | "blue" | "yellow" | "green";

type Screen = "home" | "lobby" | "game" | "results";

interface Player {
  id: number;
  name: string;
  color: Color;
  active: boolean;
}

interface Token {
  // Where is the token?
  // base: not on the ring yet
  // ring: on the 52-slot shared ring, position is ringIndex [0..51]
  // home: in the player's private home path, homeIndex [0..5]
  state: "base" | "ring" | "home" | "finished";
  ringIndex?: number;
  homeIndex?: number; // 0..5 (5 is final home triangle)
}

interface GameState {
  players: Player[];
  tokens: Record<number, Token[]>; // 4 tokens per player
  currentPlayerId: number; // index into players[]
  diceValue: number | null;
  rolling: boolean;
  turnLog: string[];
  winnerId: number | null;
  emojiFeed: { id: number; emoji: string; by: number }[];
}

const COLOR_HEX: Record<Color, string> = {
  red: "#ef4444",
  blue: "#3b82f6",
  yellow: "#eab308",
  green: "#22c55e",
};

// Order around the ring (clockwise): red -> blue -> yellow -> green
const ORDER: Color[] = ["red", "blue", "yellow", "green"];

// Starting ring indices separated by 13 (52/4) – conventional layout
const START_INDEX: Record<Color, number> = {
  red: 0,
  blue: 13,
  yellow: 26,
  green: 39,
};

// Home entry is the square just before that color's START (wrapping around)
const HOME_ENTRY_INDEX: Record<Color, number> = {
  red: (START_INDEX.red + 51) % 52, // 51
  blue: (START_INDEX.blue + 51) % 52, // 12
  yellow: (START_INDEX.yellow + 51) % 52, // 25
  green: (START_INDEX.green + 51) % 52, // 38
};

// 8 safe squares commonly used in Ludo (starts + starred cells)
const SAFE_SQUARES = new Set<number>([0, 8, 13, 21, 26, 34, 39, 47]);

/** Compute 52 ring coordinates on a circle plus 4×6 home-path coordinates. */
function useBoardGeometry() {
  // Responsive square canvas; we map positions in normalized 0..1 space
  const ring = useMemo(() => {
    const N = 52;
    const cx = 0.5; // center
    const cy = 0.5;
    const R = 0.42; // ring radius
    const pts: { x: number; y: number }[] = [];
    for (let i = 0; i < N; i++) {
      const theta = -Math.PI / 2 + (2 * Math.PI * i) / N; // start top
      pts.push({ x: cx + R * Math.cos(theta), y: cy + R * Math.sin(theta) });
    }
    return pts;
  }, []);

  const homePaths = useMemo(() => {
    const homeLen = 6; // 0..5 – last index (5) is final home
    const centers: Record<Color, { x: number; y: number }[]> = {
      red: [],
      blue: [],
      yellow: [],
      green: [],
    };

    const center = { x: 0.5, y: 0.5 };
    const insets: Record<Color, { base: { x: number; y: number }; dir: { x: number; y: number } }> = {
      red: { base: { x: 0.5, y: 0.12 }, dir: { x: 0, y: 1 } }, // top -> center
      blue: { base: { x: 0.88, y: 0.5 }, dir: { x: -1, y: 0 } }, // right -> center
      yellow: { base: { x: 0.5, y: 0.88 }, dir: { x: 0, y: -1 } }, // bottom -> center
      green: { base: { x: 0.12, y: 0.5 }, dir: { x: 1, y: 0 } }, // left -> center
    };

    (Object.keys(insets) as Color[]).forEach((c) => {
      const { base, dir } = insets[c];
      const segment: { x: number; y: number }[] = [];
      for (let i = 0; i < homeLen; i++) {
        const t = (i + 1) / (homeLen + 1); // evenly spaced towards center
        segment.push({ x: base.x + (center.x - base.x) * t, y: base.y + (center.y - base.y) * t });
      }
      centers[c] = segment;
    });

    return centers;
  }, []);

  // Token base (yard) clusters for each color (four tokens)
  const yards = useMemo(() => {
    const pad = 0.11;
    const clusters: Record<Color, { x: number; y: number }[]> = {
      red: [
        { x: 0.18, y: 0.18 },
        { x: 0.32, y: 0.18 },
        { x: 0.18, y: 0.32 },
        { x: 0.32, y: 0.32 },
      ],
      blue: [
        { x: 0.68, y: 0.18 },
        { x: 0.82, y: 0.18 },
        { x: 0.68, y: 0.32 },
        { x: 0.82, y: 0.32 },
      ],
      yellow: [
        { x: 0.68, y: 0.68 },
        { x: 0.82, y: 0.68 },
        { x: 0.68, y: 0.82 },
        { x: 0.82, y: 0.82 },
      ],
      green: [
        { x: 0.18, y: 0.68 },
        { x: 0.32, y: 0.68 },
        { x: 0.18, y: 0.82 },
        { x: 0.32, y: 0.82 },
      ],
    };
    return clusters;
  }, []);

  return { ring, homePaths, yards };
}

/** Compute legal moves for a single token given the dice and rules. */
function getLegalDestination(
  token: Token,
  dice: number,
  color: Color
): { kind: "ring"; index: number } | { kind: "home"; index: number } | null {
  if (token.state === "finished") return null;

  if (token.state === "base") {
    if (dice === 6) {
      return { kind: "ring", index: START_INDEX[color] };
    }
    return null;
  }

  if (token.state === "ring" && typeof token.ringIndex === "number") {
    const homeEntry = HOME_ENTRY_INDEX[color];

    // Distance from current position to homeEntry going forward
    const distToEntry = (homeEntry - token.ringIndex + 52) % 52;

    if (dice <= distToEntry) {
      // Pure ring move
      return { kind: "ring", index: (token.ringIndex + dice) % 52 };
    }

    // Steps remaining once we step onto homeEntry
    const stepsIntoHome = dice - distToEntry - 1; // landing next step enters home[0]
    if (stepsIntoHome < 0) return null; // shouldn't happen
    if (stepsIntoHome <= 5) {
      return { kind: "home", index: stepsIntoHome };
    }
    // Overshoot final home
    return null;
  }

  if (token.state === "home" && typeof token.homeIndex === "number") {
    // Move further along home path; must land exactly on 5
    const dest = token.homeIndex + dice;
    if (dest === 5) return { kind: "home", index: 5 };
    if (dest < 5) return { kind: "home", index: dest };
    return null; // overshoot
  }

  return null;
}

/** ------------------------------ Game Shell ----------------------------- */

function GameShell() {
  const [screen, setScreen] = useState<Screen>("home");
  const [numPlayers, setNumPlayers] = useState(4);
  const [state, setState] = useState<GameState | null>(null);

  function startMatch() {
    const selectedColors: Color[] = ORDER.slice(0, numPlayers);
    const players: Player[] = selectedColors.map((c, i) => ({
      id: i,
      name: c.toUpperCase(),
      color: c,
      active: true,
    }));
    const tokens: Record<number, Token[]> = {};
    players.forEach((p) => (tokens[p.id] = Array.from({ length: 4 }, () => ({ state: "base" }))));

    setState({
      players,
      tokens,
      currentPlayerId: 0,
      diceValue: null,
      rolling: false,
      turnLog: ["Game started"],
      winnerId: null,
      emojiFeed: [],
    });
    setScreen("game");
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        {screen === "home" && <HomeScreen onNext={() => setScreen("lobby")} />}
        {screen === "lobby" && (
          <LobbyScreen
            value={numPlayers}
            onChange={setNumPlayers}
            onStart={startMatch}
            onBack={() => setScreen("home")}
          />
        )}
        {screen === "game" && state && (
          <GameScreen state={state} setState={setState} onFinish={() => setScreen("results")} />
        )}
        {screen === "results" && state && (
          <ResultsScreen state={state} onReplay={() => setScreen("lobby")} />
        )}
      </div>
    </div>
  );
}

/** ------------------------------- Screens ------------------------------- */

function HomeScreen({ onNext }: { onNext: () => void }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <motion.h1 className="text-4xl md:text-5xl font-extrabold tracking-tight" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        Ludo – React + Tailwind
      </motion.h1>
      <p className="mt-4 text-slate-300">
        Race your four tokens from base to home. Roll six to start, capture rivals, and be the first to finish!
      </p>
      <div className="mt-8">
        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={onNext}
          className="px-6 py-3 rounded-2xl bg-indigo-500 font-semibold shadow-lg hover:shadow-indigo-500/30"
        >
          Start
        </motion.button>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <InfoCard title="Objective">
          Move all four tokens into your color’s home triangle in the center.
        </InfoCard>
        <InfoCard title="Key Rules">
          Roll a 6 to leave base; 6 grants an extra turn. Capture opponents on non-safe squares; exact roll to finish.
        </InfoCard>
      </div>
    </div>
  );
}

function LobbyScreen({ value, onChange, onStart, onBack }: { value: number; onChange: (n: number) => void; onStart: () => void; onBack: () => void }) {
  return (
    <div className="mx-auto max-w-3xl">
      <h2 className="text-2xl font-bold">Game Lobby</h2>
      <p className="text-slate-300 mt-2">Choose players and begin. Local hot-seat multiplayer.</p>
      <div className="mt-6 flex items-center gap-4">
        <label className="text-sm text-slate-300">Players</label>
        <select
          className="bg-slate-800 rounded-xl px-3 py-2"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        >
          {[2, 3, 4].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-8 flex gap-3">
        <button onClick={onBack} className="px-4 py-2 rounded-xl bg-slate-700">Back</button>
        <button onClick={onStart} className="px-5 py-2 rounded-xl bg-emerald-500 font-semibold shadow">
          Start Game
        </button>
      </div>
    </div>
  );
}

function ResultsScreen({ state, onReplay }: { state: GameState; onReplay: () => void }) {
  const winner = state.winnerId != null ? state.players[state.winnerId] : null;
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl font-bold mb-2">Results</h2>
      {winner ? (
        <div className="text-lg">
          <span>Winner: </span>
          <span className="inline-flex items-center gap-2 font-extrabold">
            <ColorDot color={winner.color} /> {winner.name}
          </span>
        </div>
      ) : (
        <p>No winner yet.</p>
      )}
      <button onClick={onReplay} className="mt-8 px-6 py-3 rounded-2xl bg-indigo-500 font-semibold shadow-lg">
        Play Again
      </button>
      <div className="mt-6 text-left bg-slate-800/70 rounded-2xl p-4 max-h-64 overflow-auto">
        <h3 className="font-semibold mb-2">Turn Log</h3>
        <ul className="space-y-1 text-sm">
          {state.turnLog.map((t, i) => (
            <li key={i} className="text-slate-300">{t}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ColorDot({ color }: { color: Color }) {
  return <span className="inline-block w-3 h-3 rounded-full" style={{ background: COLOR_HEX[color] }} />;
}

/** ------------------------------ Game Board ----------------------------- */

function GameScreen({ state, setState, onFinish }: { state: GameState; setState: React.Dispatch<React.SetStateAction<GameState | null>>; onFinish: () => void }) {
  const { ring, homePaths, yards } = useBoardGeometry();
  const boardRef = useRef<SVGSVGElement | null>(null);

  const current = state.players[state.currentPlayerId];

  function rollDice() {
    if (state.rolling || state.winnerId != null) return;
    setState((s) => (s ? { ...s, rolling: true } : s));

    // Simple animation delay; produce value 1..6
    setTimeout(() => {
      const val = 1 + Math.floor(Math.random() * 6);
      const turnText = `${current.name} rolled ${val}`;
      setState((s) => (s ? { ...s, diceValue: val, rolling: false, turnLog: [...s.turnLog, turnText] } : s));
    }, 400);
  }

  function nextPlayer(extraTurn: boolean) {
    setState((s) => {
      if (!s) return s;
      if (extraTurn && s.winnerId == null) return s; // current keeps turn (UI will allow roll again)
      const n = s.players.length;
      const nxt = (s.currentPlayerId + 1) % n;
      return { ...s, currentPlayerId: nxt, diceValue: null };
    });
  }

  function applyCapture(s: GameState, landingRingIndex: number, byColor: Color) {
    // If landing on opponent tokens on non-safe square, send them to base
    if (SAFE_SQUARES.has(landingRingIndex)) return s;
    const byPlayer = s.players.find((p) => p.color === byColor)!;

    const tokens = { ...s.tokens };
    s.players.forEach((p) => {
      if (p.id === byPlayer.id) return;
      tokens[p.id] = tokens[p.id].map((tk) => {
        if (tk.state === "ring" && tk.ringIndex === landingRingIndex) {
          return { state: "base" } as Token; // captured
        }
        return tk;
      });
    });
    return { ...s, tokens };
  }

  function allFinishedFor(playerId: number) {
    return state.tokens[playerId].every((t) => t.state === "finished");
  }

  function handleTokenClick(tokenIndex: number) {
    if (state.winnerId != null) return;
    const player = state.players[state.currentPlayerId];
    const tk = state.tokens[player.id][tokenIndex];
    const dice = state.diceValue;
    if (!dice) return;

    const dest = getLegalDestination(tk, dice, player.color);
    if (!dest) return;

    setState((s) => {
      if (!s) return s;
      const tokens = { ...s.tokens };
      const arr = [...tokens[player.id]];
      const prev = arr[tokenIndex];

      let log = s.turnLog.slice();

      if (dest.kind === "ring") {
        arr[tokenIndex] = { state: "ring", ringIndex: dest.index };
      } else if (dest.kind === "home") {
        if (dest.index === 5) {
          arr[tokenIndex] = { state: "finished" };
          log.push(`${player.name} finished a token!`);
        } else {
          arr[tokenIndex] = { state: "home", homeIndex: dest.index };
        }
      }

      tokens[player.id] = arr;
      let newState: GameState = { ...s, tokens, turnLog: log };

      // Handle capture when landing on ring
      if (dest.kind === "ring") {
        newState = applyCapture(newState, dest.index, player.color);
      }

      // Check win
      if (allFinishedFor(player.id)) {
        newState = { ...newState, winnerId: player.id };
      }

      // Move to next player (unless dice==6)
      const extra = s.diceValue === 6;
      return { ...newState, diceValue: extra ? null : null, currentPlayerId: extra ? s.currentPlayerId : (s.currentPlayerId + 1) % s.players.length };
    });
  }

  // If player has rolled and no legal moves exist, auto-advance turn (except still allow extra for 6)
  function skipIfNoMoves() {
    const dice = state.diceValue;
    if (!dice) return;
    const p = state.players[state.currentPlayerId];
    const moves = state.tokens[p.id].some((tk) => getLegalDestination(tk, dice, p.color));
    if (!moves) {
      setState((s) => {
        if (!s) return s;
        const log = `${p.name} has no legal moves${dice === 6 ? ", but gets another roll" : ""}.`;
        let nxt = s.currentPlayerId;
        if (dice !== 6) {
          nxt = (s.currentPlayerId + 1) % s.players.length;
        }
        return { ...s, turnLog: [...s.turnLog, log], currentPlayerId: nxt, diceValue: null };
      });
    }
  }

  // Auto-check for skip when dice is present
  React.useEffect(() => {
    skipIfNoMoves();
  }, [state.diceValue]);

  const winner = state.winnerId != null ? state.players[state.winnerId] : null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6">
      <div className="bg-slate-800/60 rounded-3xl p-4 lg:p-6 shadow-inner">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-bold">Turn</h3>
            <span className="inline-flex items-center gap-2 text-lg font-extrabold">
              <ColorDot color={current.color} /> {current.name}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Dice value={state.diceValue} rolling={state.rolling} onRoll={rollDice} disabled={!!winner} />
            <button
              className="px-3 py-2 rounded-xl bg-slate-700 text-sm"
              onClick={() =>
                setState((s) => (s ? { ...s, emojiFeed: [...s.emojiFeed, { id: Date.now(), emoji: "🎉", by: s.currentPlayerId }] } : s))
              }
              disabled={!!winner}
            >
              Send 🎉
            </button>
            <button
              className="px-3 py-2 rounded-xl bg-slate-700 text-sm"
              onClick={() => setState((s) => (s ? { ...s, turnLog: [...s.turnLog, "Game ended"], winnerId: s.currentPlayerId } : s))}
            >
              Forfeit → Win Opponent
            </button>
          </div>
        </div>

        <BoardSVG ref={boardRef} ring={ring} homePaths={homePaths} yards={yards} state={state} onTokenClick={handleTokenClick} />

        {winner && (
          <div className="mt-4 flex items-center justify-between">
            <div className="text-lg font-semibold flex items-center gap-2">
              <span>Winner:</span> <ColorDot color={winner.color} /> {winner.name}
            </div>
            <button className="px-4 py-2 rounded-xl bg-indigo-500 font-semibold" onClick={onFinish}>
              Continue
            </button>
          </div>
        )}
      </div>

      <Sidebar state={state} setState={setState} />
    </div>
  );
}

/** ------------------------------- Sidebar ------------------------------- */

function Sidebar({ state, setState }: { state: GameState; setState: React.Dispatch<React.SetStateAction<GameState | null>> }) {
  const p = state.players[state.currentPlayerId];
  return (
    <div className="bg-slate-800/60 rounded-3xl p-4 lg:p-6">
      <h3 className="text-xl font-bold mb-2">Players</h3>
      <div className="space-y-2">
        {state.players.map((pl) => (
          <div key={pl.id} className={`flex items-center justify-between rounded-2xl p-3 ${pl.id === state.currentPlayerId ? "bg-slate-700/60" : "bg-slate-700/30"}`}>
            <div className="flex items-center gap-2">
              <ColorDot color={pl.color} />
              <span className="font-semibold">{pl.name}</span>
            </div>
            <div className="text-sm text-slate-300">Finished: {state.tokens[pl.id].filter((t) => t.state === "finished").length}/4</div>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-bold mt-6 mb-2">Emoji Feed</h3>
      <div className="h-36 overflow-auto bg-slate-900/40 rounded-2xl p-2">
        {state.emojiFeed.length === 0 && <div className="text-slate-400 text-sm">No reactions yet.</div>}
        <ul className="space-y-1">
          {state.emojiFeed.slice().reverse().map((e) => (
            <li key={e.id} className="text-2xl leading-none">{e.emoji}</li>
          ))}
        </ul>
      </div>

      <h3 className="text-xl font-bold mt-6 mb-2">Turn Log</h3>
      <div className="h-48 overflow-auto bg-slate-900/40 rounded-2xl p-2 text-sm">
        <ul className="space-y-1">
          {state.turnLog.slice().reverse().map((t, i) => (
            <li key={i} className="text-slate-300">{t}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/** --------------------------------- Dice -------------------------------- */

function Dice({ value, rolling, disabled, onRoll }: { value: number | null; rolling: boolean; disabled?: boolean; onRoll: () => void }) {
  return (
    <motion.button
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      onClick={() => !disabled && !rolling && onRoll()}
      className={`w-14 h-14 rounded-2xl grid place-content-center font-extrabold text-2xl select-none ${disabled ? "bg-slate-700 text-slate-400" : "bg-slate-100 text-slate-900"}`}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span key={rolling ? "roll" : String(value ?? "•")}
          initial={{ rotate: 0, opacity: 0.4 }}
          animate={{ rotate: rolling ? 360 : 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: rolling ? 0.4 : 0.2 }}
        >
          {value ?? "•"}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}

/** -------------------------------- Board -------------------------------- */

const TOKEN_RADIUS = 12; // px

const BoardSVG = React.forwardRef<SVGSVGElement, {
  ring: { x: number; y: number }[];
  homePaths: Record<Color, { x: number; y: number }[]>;
  yards: Record<Color, { x: number; y: number }[]>;
  state: GameState;
  onTokenClick: (i: number) => void;
}>(({ ring, homePaths, yards, state, onTokenClick }, ref) => {
  const size = 640; // viewBox square
  const VB = `0 0 ${size} ${size}`;

  function toXY(pt: { x: number; y: number }) {
    return { x: pt.x * size, y: pt.y * size };
  }

  function tokenPos(playerId: number, tokenIdx: number): { x: number; y: number } {
    const p = state.players[playerId];
    const t = state.tokens[playerId][tokenIdx];
    if (t.state === "base") {
      return toXY(yards[p.color][tokenIdx]);
    }
    if (t.state === "ring" && typeof t.ringIndex === "number") {
      return toXY(ring[t.ringIndex]);
    }
    if (t.state === "home" && typeof t.homeIndex === "number") {
      return toXY(homePaths[p.color][t.homeIndex]);
    }
    // finished -> draw at center cluster
    return { x: size * 0.5 + (tokenIdx - 1.5) * 16, y: size * 0.5 };
    }

  return (
    <svg ref={ref} viewBox={VB} className="w-full rounded-3xl bg-slate-900 shadow-lg">
      {/* Board background */}
      <defs>
        <radialGradient id="gCenter" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#020617" />
        </radialGradient>
      </defs>
      <rect x={0} y={0} width={size} height={size} fill="url(#gCenter)" />

      {/* Home diamond */}
      <polygon points={`${size * 0.5},${size * 0.22} ${size * 0.78},${size * 0.5} ${size * 0.5},${size * 0.78} ${size * 0.22},${size * 0.5}`} fill="#0b1220" stroke="#1f2937" strokeWidth={3} />

      {/* Color wedges */}
      <Wedge cx={size * 0.5} cy={size * 0.22} color={COLOR_HEX.red} />
      <Wedge cx={size * 0.78} cy={size * 0.5} color={COLOR_HEX.blue} />
      <Wedge cx={size * 0.5} cy={size * 0.78} color={COLOR_HEX.yellow} />
      <Wedge cx={size * 0.22} cy={size * 0.5} color={COLOR_HEX.green} />

      {/* Ring path dots */}
      {ring.map((pt, i) => {
        const { x, y } = toXY(pt);
        const safe = SAFE_SQUARES.has(i);
        return <circle key={i} cx={x} cy={y} r={6} fill={safe ? "#22d3ee" : "#334155"} stroke="#0ea5e9" strokeWidth={safe ? 2 : 0} />;
      })}

      {/* Home paths */}
      {(Object.keys(homePaths) as Color[]).map((c) =>
        homePaths[c].map((pt, i) => {
          const { x, y } = toXY(pt);
          return <circle key={`${c}-h-${i}`} cx={x} cy={y} r={6} fill="#475569" stroke={COLOR_HEX[c]} strokeWidth={i === 5 ? 3 : 1} />;
        })
      )}

      {/* Tokens */}
      {state.players.flatMap((p) =>
        state.tokens[p.id].map((tk, ti) => {
          const pos = tokenPos(p.id, ti);
          const key = `${p.id}-${ti}`;
          const clickable = state.players[state.currentPlayerId].id === p.id && state.diceValue != null;
          return (
            <motion.g key={key} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", stiffness: 200, damping: 15 }}>
              <motion.circle
                cx={pos.x}
                cy={pos.y}
                r={TOKEN_RADIUS}
                fill={COLOR_HEX[p.color]}
                stroke="#0b1220"
                strokeWidth={3}
                className={clickable ? "cursor-pointer" : ""}
                onClick={() => clickable && onTokenClick(ti)}
                whileHover={clickable ? { scale: 1.08 } : undefined}
                whileTap={clickable ? { scale: 0.95 } : undefined}
              />
              <text x={pos.x} y={pos.y + 4} textAnchor="middle" fontSize={10} fill="#0b1220" fontWeight={700}>
                {ti + 1}
              </text>
            </motion.g>
          );
        })
      )}

      {/* Player start markers */}
      {(Object.keys(START_INDEX) as Color[]).map((c) => {
        const i = START_INDEX[c];
        const { x, y } = toXY(ring[i]);
        return <circle key={`start-${c}`} cx={x} cy={y} r={10} fill="none" stroke={COLOR_HEX[c]} strokeDasharray="4 2" strokeWidth={2} />;
      })}

      {/* Legend */}
      <Legend size={size} />
    </svg>
  );
});

function Wedge({ cx, cy, color }: { cx: number; cy: number; color: string }) {
  return <circle cx={cx} cy={cy} r={40} fill={color} opacity={0.25} stroke={color} strokeWidth={2} />;
}

function Legend({ size }: { size: number }) {
  const x = size * 0.5;
  const y = size * 0.92;
  return (
    <g>
      <text x={x} y={y} textAnchor="middle" fill="#94a3b8" fontSize={12}>
        Roll a 6 to leave base · 6 grants extra turn · Capture on non-safe squares · Exact roll to finish
      </text>
    </g>
  );
}

/** ------------------------------- InfoCard ------------------------------ */

function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-slate-800/60 p-4 text-left shadow">
      <h4 className="font-bold mb-1">{title}</h4>
      <div className="text-slate-300 text-sm">{children}</div>
    </div>
  );
}
