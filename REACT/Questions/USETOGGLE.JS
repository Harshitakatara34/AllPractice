// import { useState } from 'react';

// function useToggle(initialValue = false) {
//   // Use the useState hook to create a state variable for the boolean value
//   const [value, setValue] = useState(initialValue);

//   // Define a function to toggle the boolean value
//   const toggle = () => {
//     setValue((prevValue) => !prevValue);
//   };

//   // Return the current boolean value and the toggle function
//   return [value, toggle];
// }

// export default useToggle;


// import React from 'react';
// import useToggle from './useToggle';

// function MyComponent() {
//   // Use the useToggle hook to manage the boolean state
//   const [isToggled, toggle] = useToggle();

//   return (
//     <div>
//       <p>Toggle State: {isToggled ? 'True' : 'False'}</p>
//       <button onClick={toggle}>Toggle</button>
//     </div>
//   );
// }

// export default MyComponent;