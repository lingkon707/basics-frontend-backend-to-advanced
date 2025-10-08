# 🪝 React Hooks Guide — When & Why

A practical explanation of the most commonly used React Hooks — when to use them and why they exist.

---

## 🧩 1. useState — Managing Component State

**🕒 When:**  
Use it when your component needs to remember and update a value (like input text, a toggle button, or counter).

**💡 Why:**  
`useState` allows components to store and update data reactively. Whenever the state changes, React automatically re-renders the component.

**Common Uses:**  
- Form input fields  
- Counters  
- Modals or toggles  
- UI theme switchers  

---

## ⚡ 2. useEffect — Handling Side Effects

**🕒 When:**  
Use it when you need to perform side effects after rendering — such as fetching data, updating the document title, or managing timers.

**💡 Why:**  
React’s rendering is pure. `useEffect` provides a safe place to run code that interacts with the outside world.

**Common Uses:**  
- Fetching data from APIs  
- Setting up event listeners  
- Managing subscriptions or timers  
- Syncing with local storage  

---

## 🌐 3. useContext — Consuming Shared Data

**🕒 When:**  
Use it when multiple components need access to the same data without prop drilling.

**💡 Why:**  
`useContext` makes global state management simple. It allows you to read data from a React context directly.

**Common Uses:**  
- Theme (light/dark)  
- Language selection  
- Authentication user data  
- Global app settings  

---

## 🔍 4. useRef — Accessing DOM or Persistent Values

**🕒 When:**  
Use it when you need to directly access or modify a DOM element, or store a value that doesn’t trigger a re-render when changed.

**💡 Why:**  
Unlike `useState`, updating a ref does not cause re-renders — perfect for performance-sensitive logic.

**Common Uses:**  
- Focusing input fields  
- Tracking previous values  
- Managing scroll or video playback  
- Storing timeouts or intervals  

---

## 🧠 5. useCallback — Memoizing Functions

**🕒 When:**  
Use it when you pass functions as props to child components and want to avoid unnecessary re-creation on each render.

**💡 Why:**  
Each render creates new function instances. `useCallback` ensures the same function reference is reused unless dependencies change.

**Common Uses:**  
- Button click handlers  
- Event listeners  
- Optimizing child re-renders  

---

## 💡 6. useMemo — Memoizing Values

**🕒 When:**  
Use it when performing expensive or slow calculations that only need to run when specific dependencies change.

**💡 Why:**  
`useMemo` caches computed values to avoid recalculating them on every render — improving performance.

**Common Uses:**  
- Filtering or sorting large datasets  
- Complex math or logic computations  
- Derived values from state  

---

## 🧮 7. useReducer — Complex State Logic

**🕒 When:**  
Use it when managing complex state or multiple related values (like forms or multi-step processes).

**💡 Why:**  
`useReducer` organizes logic into a single reducer function — making state updates predictable, testable, and easier to debug.

**Common Uses:**  
- Multi-step forms  
- Shopping carts  
- Game state logic  
- Conditional toggles  

---

## 🔁 8. Custom Hooks — Reusable Stateful Logic

**🕒 When:**  
Use it when you need to reuse the same logic in multiple components (e.g., window resize tracking, data fetching, etc.).

**💡 Why:**  
Custom hooks keep your components clean and follow the DRY principle (Don’t Repeat Yourself). They make code modular and reusable.

**Common Uses:**  
- `useFetch` for API calls  
- `useDarkMode` for themes  
- `useAuth` for authentication  
- `useDebounce` for input optimization  

---

## ✅ Summary Table

| Hook | When to Use | Why It Exists |
|------|--------------|---------------|
| `useState` | Track local, reactive data | Makes component data-driven |
| `useEffect` | Run code after render | Handle side effects safely |
| `useContext` | Share data globally | Avoid prop drilling |
| `useRef` | Access DOM or static value | Persist without re-render |
| `useCallback` | Prevent re-creating functions | Performance optimization |
| `useMemo` | Cache computed results | Avoid expensive recalculations |
| `useReducer` | Manage complex logic | Centralize updates cleanly |
| `Custom Hooks` | Reuse logic across components | Keep code modular & DRY |

---

🧭 **Tip:**  
Start with `useState` and `useEffect` — they’re used in 90% of React components.  
Move to `useMemo`, `useCallback`, and `useReducer` for performance and advanced patterns.

