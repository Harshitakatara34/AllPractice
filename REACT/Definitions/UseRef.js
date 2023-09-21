// useRef is a React Hook that provides a reference to a mutable object. It's often used to access 
// and interact with DOM elements directly or to persist values across renders without causing re-renders.





// Example:===>

// import React, { useRef, useEffect } from 'react';

// function ExampleComponent() {
//   // Creating a ref to a DOM element
//   const myInputRef = useRef(null);

//   useEffect(() => {
//     // Focus the input element when the component mounts
//     myInputRef.current.focus();
//   }, []);

//   return <input ref={myInputRef} />;
// }
