// React uses the event loop to handle component updates.
//  When state or props change, React schedules a re-render.
//   It doesn't immediately apply changes but waits for the next
//    loop iteration to update the DOM efficiently.




// The event loop in React is a mechanism that ensures efficient rendering and handling of events in 
// a React application. In short, it works like this:

// Render Queue: React maintains a queue of updates that represent changes to the virtual DOM.

// Reconciliation: When an event, state change, or data update occurs, React schedules a reconciliation process. 
//                 This process calculates the differences (diffing) between the new virtual DOM and the previous one.

// Batching: React batch-processes multiple updates together to minimize unnecessary DOM manipulation. 
//                  This batching is done to optimize performance.

// Commit Phase: React then commits the updates to the actual DOM in a single pass, applying only the necessary changes, 
//                       which reduces reflows and repaints.





// Example
// import React, { useState } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     setCount(count + 1); // Updating state triggers a re-render
//   };

//   console.log('Rendered!'); // This log is part of the render phase

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={handleClick}>Increment</button>
//     </div>
//   );
// }

// export default Counter;




// In this example, when the "Increment" button is clicked, it triggers a state update (setCount), 
// which schedules a re-render. React's event loop efficiently updates only the parts of the DOM that changed, 
// resulting in a smooth user experience.

// The event loop in React ensures that updates are processed in a way that maximizes performance by 
// minimizing DOM manipulations and providing a responsive user interface.





