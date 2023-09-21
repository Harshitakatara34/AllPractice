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
  const changeMessage = () => {        
    setState(state+1)
  };

  return (
    <div>
      <button onClick={changeMessage} >Change Message</button>
      <MyComponent message={message}  />
    </div>
  );
}

// In this code when we click on button our state value gets update so our memo function will re-render because its state get
// updated and when our memo function will re-render then out child component(Mycomponent) will render unnessaciarly as our
// Mychild component stats are not updated still myComponent is re-rendering so to avoid it we use Memo .

export default Memooo;
