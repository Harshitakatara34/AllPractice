// uncontrolled components manage their state internally. 

//                 or

// form elements where the value is not controlled by React state. Instead, they rely on the DOM itself to manage and store the input's value.

  
// Example

// import React from 'react';

// function UncontrolledComponent() {
//   let inputRef = React.createRef();

//   function handleButtonClick() {
//     alert('Input Value: ' + inputRef.current.value);
//   }

//   return (
//     <div>
//       <input type="text" ref={inputRef} />
//       <button onClick={handleButtonClick}>Get Input Value</button>
//     </div>
//   );
// }
