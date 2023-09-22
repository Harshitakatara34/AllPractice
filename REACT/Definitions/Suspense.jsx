

// Suspense in React is a feature that makes it easier to handle asynchronous data fetching, 
// like loading data from an API. It allows you to "suspend" rendering until the data is ready. 

// import React, { Suspense, useState, useEffect } from 'react';
// function MyComponent() {
// const [data, setData] = useState(null);
// useEffect(() => {
// fetch('https://fakestoreapi.com/products') .then(response => response.json())
// .then(data => setData(data))
// }, []);
// return (
// <Suspense fallback={<div>Loading...</div>}>
// <ul>
// {data?.map(item => (
// <li key={item.id}>{item.title}</li>
// ))}
// </ul>
// </Suspense>
// );
// }
// export default MyComponent



// For data fetching using Suspense, you would typically need to use a library or approach 
// designed specifically for that purpose, like Relay or concurrent mode with experimental APIs.

// If you'd like to use Suspense for data fetching, you might consider exploring a 
// library like Relay that's built on top of React and supports Suspense for data fetching. 
