// Lazy loading is a technique for loading resources (like components) only when they're needed, 
// improving performance.

import React, { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  return (
    <div>
      <h1>My React App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default App;
// Suspense is a React feature that allows you to handle asynchronous operations, including lazy 
// loading, by specifying a fallback UI during loading.