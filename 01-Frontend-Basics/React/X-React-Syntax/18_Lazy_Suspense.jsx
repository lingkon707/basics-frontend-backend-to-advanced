import React, { Suspense, lazy } from "react";

const LazyComponent = lazy(() => import("./LazyComponent"));

function App() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <LazyComponent />
    </Suspense>
  );
}

export default App;
