// memo in React is a performance optimization technique for functional 
// components. It prevents unnecessary renders by memoizing the 
// component, so it only updates when its props change.



import React, { memo } from 'react';
// Functional component
import React, { memo, useState } from 'react';

const MyComponent = memo(({ message }) => {
  console.log('Rendering MyComponent');
  return <div>{message}</div>;
});

function App() {
  const [message, setMessage] = useState('Hello, World!');

  const changeMessage = () => {
    setMessage('New Message');
  };

  return (
    <div>
      <button onClick={changeMessage}>Change Message</button>
      <MyComponent message={message} />
    </div>
  );
}

export default App;
