// import { useState, useEffect } from 'react';


// function useDebounce(value, delay) {
//   // State to hold the debounced value
//   const [debouncedValue, setDebouncedValue] = useState(value);

//   useEffect(() => {
//     // Set a timer to update the debounced value after the specified delay
//     const timer = setTimeout(() => {
//       setDebouncedValue(value);
//     }, delay);

//     // Clear the timer if the value changes before the delay period is over
//     return () => {
//       clearTimeout(timer);
//     };
//   }, [value, delay]);

//   return debouncedValue;
// }

// export default useDebounce;





// import React, { useState } from 'react';
// import useDebounce from './useDebounce'; // Import the custom hook

// function MyComponent() {
//   const [inputValue, setInputValue] = useState('');
//   const debouncedValue = useDebounce(inputValue, 300); // Debounce inputValue with a 300ms delay

//   // The debouncedValue will only update after 300ms of inactivity in inputValue
//   // You can use debouncedValue in your component as needed.

//   return (
//     <div>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <p>Debounced Value: {debouncedValue}</p>
//     </div>
//   );
// }

// export default MyComponent;
