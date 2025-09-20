import React from "react";
import Profile from "./Profile";
import profileData from "./profileData.json";

function App() {
  return <Profile data={profileData} />;
}

export default App;  // <-- This default export is required ****
