// Functional component
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