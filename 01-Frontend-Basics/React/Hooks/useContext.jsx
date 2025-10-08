import { createContext, useContext } from "react";

const ThemeContext = createContext("light");

export default function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Child />
    </ThemeContext.Provider>
  );
}

function Child() {
  const theme = useContext(ThemeContext);
  return <p>Current theme: {theme}</p>;
}
