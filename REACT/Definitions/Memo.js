// memo in React is a performance optimization technique for functional 
// components. It prevents unnecessary renders by memoizing the 
// component, so it only updates when its props change.



import React, { memo, useState } from 'react';

const MyComponent = memo(({ message }) => {
  console.log('Rendering MyComponent');
  return <div>{message}</div>;
});

function Memooo() {
  const [message, setMessage] = useState("tempo");
const[state,setState]=useState(0)
console.log(state)
  const changeMessage = () => {
    setMessage("gaadi");
    setState(state+1)
  };

  return (
    <div>
      <button onClick={changeMessage} >Change Message</button>
      <MyComponent message={message}  />
    </div>
  );
}

export default Memooo;
