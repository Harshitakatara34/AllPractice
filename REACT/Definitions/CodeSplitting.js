//  code splitting in React is a technique to improve website performance by splitting the code 
//  into smaller parts and loading them only when needed, reducing initial load times.



// code Splitting using lazy loading

// import React, { Suspense } from 'react';
// // Lazy-load the component
// const LazyComponent = React.lazy(() => import('./LazyComponent'));

// function App() {
//   return (
//     <div>
//       <h1>My React App</h1>
//       <Suspense fallback={<div>Loading...</div>}>
//         <LazyComponent />
//       </Suspense>
//     </div>
//   );
// }

// export default App;

// We use React.lazy(() => import('./LazyComponent')) to dynamically load the LazyComponent when it's needed.
// The <Suspense> component is used to display a loading message while LazyComponent is being loaded.





























// Code Splitting in React:

// Code splitting is a strategy to divide a large React application into smaller chunks or modules.
// These chunks are loaded dynamically when needed, reducing the initial load time and improving performance.
// It's achieved using tools like Webpack and React's built-in React.lazy and import() functions.
// Code splitting helps minimize the amount of JavaScript that needs to be downloaded and executed when a user 
// visits your site, resulting in faster page loads.
// In summary, code splitting in React is a technique that optimizes web application performance by breaking the 
// code into smaller pieces that are loaded on-demand, reducing initial loading times.