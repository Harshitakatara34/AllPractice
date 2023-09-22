

// Suspense in React is a feature that makes it easier to handle asynchronous data fetching, 
// like loading data from an API. It allows you to "suspend" rendering until the data is ready. 

import React, { Suspense } from 'react';

const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data loaded!');
    }, 2000);
  });
};

const DataComponent = () => {
  const data = fetchData(); // Simulate async data fetching

  return <div>{data}</div>;
};

function App() {
  return (
    <div>
      <h1>Data Loading with Suspense</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <DataComponent />
      </Suspense>
    </div>
  );
}

export default App;
