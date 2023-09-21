 
 // Component does not re-render because of useRef
 import React, { useRef, useEffect, useState } from 'react';
function ExampleComponent() {
  // Creating a ref to a DOM element
  const myInputRef = useRef(null);

//   useEffect(() => {
//     // Focus the input element when the component mounts

//     myInputRef.current.focus();
//     console.log(myInputRef);
//   }, []);
console.log("harshi")  // It will not re-render again and again because our component will not re-render due to useRef.
const handleInput=()=>{
    myInputRef.current.focus();
        console.log(myInputRef);
}

  return <input ref={myInputRef} onInput={handleInput}/>;
}
export default ExampleComponent;








// Component re-render
// export const Data=()=>{
//     const[state,setState]=useState(2)
//     console.log("data")
//     return(
//         <>
//             <button onClick={()=>setState(state+1)}>temp</button>
//         </>
//     )
// }