import React, { Suspense } from 'react';

const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data loaded!');
    }, 2000);
  });
};

const AsyncComponent = ({ data }) => {
  return <div>{data}</div>;
};

const MyComponent = () => {
  const data = fetchData(); // Move data fetching outside the component

  return (
    <div>
      <h1>Data Loading with Suspense</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <AsyncComponent data={data} />
      </Suspense>
    </div>
  );
};

export default MyComponent;
