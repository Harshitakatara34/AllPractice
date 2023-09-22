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
