'use client'

import React, { useState } from 'react'

// App.jsx — Single-file Next.js + Tailwind UI component // Drop into a Next.js app (app/page.jsx or pages/index.jsx) and it will render.

export default function App() { const [active, setActive] = useState('overview')

const topics = [ { id: 'overview', title: 'Overview' }, { id: 'anatomy', title: 'Anatomy' }, { id: 'physiology', title: 'Physiology' }, { id: 'pharmacology', title: 'Pharmacology' }, { id: 'examples', title: 'Examples' }, ]

const snippets = { anatomy: 'Anatomy = Structure. Example: Heart has 4 chambers.', physiology: 'Physiology = Function. Example: Heart pumps blood.', pharmacology: 'Pharmacology = Drugs/Control. Example: Beta-blocker slows heart rate.', heart: 'Heart — Anatomy: 4 chambers. Physiology: pumps blood. Pharmacology: beta-blockers, diuretics, aspirin.', lungs: 'Lungs — Anatomy: bronchi & alveoli. Physiology: gas exchange. Pharmacology: inhalers for asthma.', kidney: 'Kidney — Anatomy: cortex & medulla. Physiology: filter blood, produce urine. Pharmacology: diuretics, ACE inhibitors.', }

function copy(text) { navigator.clipboard.writeText(text).then(() => { // subtle feedback (could be improved) alert('Copied to clipboard!') }) }

function shareWhatsApp(text) { const encoded = encodeURIComponent(text) const url = https://wa.me/?text=${encoded} window.open(url, '_blank') }

return ( <div className="min-h-screen bg-slate-50 p-6 md:p-10"> <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-4"> {/* Sidebar */} <aside className="md:col-span-1 border-r hidden md:block"> <div className="p-6"> <h1 className="text-2xl font-semibold mb-1">A → P → P</h1> <p className="text-sm text-slate-500 mb-4">Anatomy → Physiology → Pharmacology</p> <nav className="space-y-2"> {topics.map((t) => ( <button key={t.id} onClick={() => setActive(t.id)} className={w-full text-left px-3 py-2 rounded-md transition-colors flex items-center gap-3 ${ active === t.id ? 'bg-indigo-50 border border-indigo-100' : 'hover:bg-slate-50' }} > <span className="w-2 h-2 rounded-full bg-indigo-400" /> <span className="font-medium">{t.title}</span> </button> ))} </nav>

<div className="mt-6 text-xs text-slate-500">
          <div className="mb-2">Quick share</div>
          <div className="flex gap-2">
            <button
              onClick={() => shareWhatsApp(snippets.anatomy)}
              className="flex-1 px-3 py-2 bg-green-50 rounded-md text-sm border border-green-100"
            >
              WhatsApp Anatomy
            </button>
            <button
              onClick={() => copy(snippets.anatomy)}
              className="px-3 py-2 bg-slate-100 rounded-md text-sm"
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    </aside>

    {/* Main */}
    <main className="md:col-span-3 p-6 md:p-8">
      <header className="flex items-start justify-between">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold">Full-ground UI: Anatomy → Physiology → Pharmacology</h2>
          <p className="text-sm text-slate-500 mt-1">Interactive notes, examples, and quick WhatsApp share snippets — built with Next.js + Tailwind.</p>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <span className="text-xs text-slate-500">Export:</span>
          <button
            onClick={() => copy([snippets.anatomy, snippets.physiology, snippets.pharmacology].join('\n'))}
            className="px-3 py-2 bg-slate-100 rounded-md text-sm"
          >
            Copy All
          </button>
          <button
            onClick={() => shareWhatsApp([snippets.anatomy, snippets.physiology, snippets.pharmacology].join('\n'))}
            className="px-3 py-2 bg-green-50 border border-green-100 rounded-md text-sm"
          >
            Share WhatsApp
          </button>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {/* Definitions */}
        <div className="md:col-span-2 space-y-4">
          <Card title="Core Definitions">
            <div className="space-y-2">
              <InfoRow title="Anatomy" emoji="🧍" desc="Structure — what parts exist" />
              <InfoRow title="Physiology" emoji="⚙️" desc="Function — how parts work" />
              <InfoRow title="Pharmacology" emoji="💊" desc="Drugs — how we control or modify function" />
            </div>
          </Card>

          <Card title="How they connect (simple)">
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Anatomy</strong> defines the parts.</li>
              <li><strong>Physiology</strong> explains how those parts work together.</li>
              <li><strong>Pharmacology</strong> shows how we intervene with drugs when function fails or needs support.</li>
            </ol>
          </Card>

          <Card title="WhatsApp-ready snippets">
            <div className="space-y-3">
              {Object.entries(snippets).slice(0,3).map(([k,v]) => (
                <div key={k} className="flex items-center justify-between gap-3">
                  <div className="text-sm">{v}</div>
                  <div className="flex gap-2">
                    <button onClick={() => shareWhatsApp(v)} className="px-3 py-1 rounded-md bg-green-50 border border-green-100 text-sm">WA</button>
                    <button onClick={() => copy(v)} className="px-3 py-1 rounded-md bg-slate-100 text-sm">Copy</button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right column: examples */}
        <div className="space-y-4">
          <Card title="Examples" small>
            <div className="space-y-3">
              <ExampleCard title="Heart" text={snippets.heart} onCopy={() => copy(snippets.heart)} onShare={() => shareWhatsApp(snippets.heart)} />
              <ExampleCard title="Lungs" text={snippets.lungs} onCopy={() => copy(snippets.lungs)} onShare={() => shareWhatsApp(snippets.lungs)} />
              <ExampleCard title="Kidney" text={snippets.kidney} onCopy={() => copy(snippets.kidney)} onShare={() => shareWhatsApp(snippets.kidney)} />
            </div>
          </Card>

          <Card title="Quick Flow (1-line)" small>
            <div className="text-sm">🧍 Anatomy → ⚙️ Physiology → 💊 Pharmacology</div>
          </Card>

          <Card title="Usage tips" small>
            <ul className="text-sm list-disc list-inside space-y-1 text-slate-600">
              <li>Send short snippets for WhatsApp or combine for a mini-thread.</li>
              <li>Use the example cards to explain to patients or classmates.</li>
            </ul>
          </Card>
        </div>
      </section>

      <footer className="mt-6 text-xs text-slate-500">Designed with Next.js + Tailwind CSS — single-file demo for quick sharing.</footer>
    </main>
  </div>
</div>

) }

function Card({ title, children, small }) { return ( <div className={p-4 rounded-xl border ${small ? 'bg-white' : 'bg-white'} shadow-sm}> <h3 className="font-semibold text-slate-800 mb-2">{title}</h3> <div className="text-sm text-slate-600">{children}</div> </div> ) }

function InfoRow({ title, emoji, desc }) { return ( <div className="flex items-start gap-3"> <div className="text-2xl">{emoji}</div> <div> <div className="font-medium">{title}</div> <div className="text-sm text-slate-500">{desc}</div> </div> </div> ) }

function ExampleCard({ title, text, onCopy, onShare }) { return ( <div className="p-3 rounded-lg border bg-slate-50"> <div className="flex items-start justify-between"> <div> <div className="font-medium">{title}</div> <div className="text-xs text-slate-500 mt-1">{text}</div> </div> <div className="flex flex-col gap-2"> <button onClick={onShare} className="px-2 py-1 rounded-md text-xs bg-green-50 border border-green-100">WA</button> <button onClick={onCopy} className="px-2 py-1 rounded-md text-xs bg-slate-100">Copy</button> </div> </div> </div> ) }

