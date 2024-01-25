// useRef is a hook in React that provides a way to keep mutable values that persist across 
// renders without causing a re-render.


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




// UseRef directly DOM ko manipulate krta h to ise thodas Hum avoid krte h kuki y react ki property ko follow ni krta.