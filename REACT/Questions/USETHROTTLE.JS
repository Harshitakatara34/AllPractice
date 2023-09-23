// import { useState, useEffect } from 'react';

// function useThrottle(callback, delay, dependencies) {
//   const [throttleValue, setThrottleValue] = useState(null);

//   useEffect(() => {
//     let timeoutId;
    
//     if (!throttleValue) {
//       // Initial invocation or after the throttle period has passed
//       callback();
//       const throttleId = setTimeout(() => setThrottleValue(null), delay);
//       setThrottleValue(throttleId);
//     } else {
//       // Within the throttle period, cancel the previous timeout
//       clearTimeout(throttleValue);
//       const throttleId = setTimeout(() => {
//         callback();
//         setThrottleValue(null);
//       }, delay);
//       setThrottleValue(throttleId);
//     }

//     // Cleanup the timeout on unmount and when dependencies change
//     return () => clearTimeout(throttleValue);
//   }, [...dependencies, callback, delay, throttleValue]);

//   return throttleValue;
// }

// export default useThrottle;




// import React, { useState } from 'react';
// import useThrottle from './useThrottle'; // Import the custom hook

// function MyComponent() {
//   const [count, setCount] = useState(0);

//   // Usage of useThrottle to throttle incrementing the count
//   const throttledIncrement = useThrottle(() => {
//     setCount(count + 1);
//   }, 1000); // Throttle to once per second

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={throttledIncrement}>Increment (Throttled)</button>
//     </div>
//   );
// }

// export default MyComponent;
