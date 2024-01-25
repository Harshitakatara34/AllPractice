// Controlled components are React components where their state is managed by React,
//  typically using useState, while uncontrolled components have their state managed by the
//   DOM and are typically accessed using refs or native JavaScript methods.






import { useRef } from "react";

// Controlled Example==>useState

// Uncontrolled Example ==>UseRef(Beacuse in useRef we can only access thodse proprty that dDOM provides us)
















// useRef
// import React, { useRef } from 'react';

// function UncontrolledInput() {
//   const inputRef = useRef();

//   const handleButtonClick = () => {
//     alert(`Input Value: ${inputRef.current.value}`);
//   };

//   return (
//     <div>
//       <input type="text" ref={inputRef} />
//       <button onClick={handleButtonClick}>Get Value</button>
//     </div>
//   );
// }

// export default UncontrolledInput;





// USESTATE
// import React, { useState } from 'react';

// function ControlledInput() {
//   const [inputValue, setInputValue] = useState('');

//   const handleChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   return (
//     <input
//       type="text"
//       value={inputValue}
//       onChange={handleChange}
//     />
//   );
// }

// export default ControlledInput;

