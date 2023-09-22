// Lazy loading means loading things when you use them, not all at once.
// Code splitting means breaking your code into smaller parts and loading them only 
// when necessary for better performance.








// Example====>


// // LazyComponent.js                                                         
// import React from 'react';

// const LazyComponent = () => {
//   return (
//     <div>
//       <h2>This is a Lazy Component</h2>
//       <p>Loaded lazily!</p>
//     </div>
//   );
// };

// export default LazyComponent;




// // App.js
// import React, { lazy, Suspense } from 'react';

// // Define a component that will be lazily loaded
// const LazyComponent = lazy(() => import('./LazyComponent'));

// function App() {
//   return (
//     <div>
//       <h1>Welcome to My Lazy Loading App</h1>
//       <Suspense fallback={<div>Loading...</div>}>
//         {/* Lazy-loaded component */}
//         <LazyComponent />
//       </Suspense>
//     </div>
//   );
// }

// export default App;



