import React, { createContext, useContext } from "react";

const ThemeContext = createContext("light");

function DisplayTheme() {
  const theme = useContext(ThemeContext);
  return <h2>Theme: {theme}</h2>;
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <DisplayTheme />
    </ThemeContext.Provider>
  );
}

export default App;
