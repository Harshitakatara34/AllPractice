// A Higher Order Component (HOC) in React is a function that takes a component as input 
// and returns a new component with enhanced or modified behavior, 
// enabling code reuse and logic separation in React applications.


import React from 'react';

// Define a Higher Order Component (HOC)
const withTimestamp = (WrappedComponent) => {
  const timestamp = new Date().toLocaleString();
  
  return () => (
    <div>
      <WrappedComponent />
      <p>Timestamp: {timestamp}</p>
    </div>
  );
};

// Your original component
const Message = () => <p>Hello, world!</p>;

// Wrap the Message component with the withTimestamp HOC
const MessageWithTimestamp = withTimestamp(Message);

function App() {
  return (
    <div>
      <MessageWithTimestamp />
    </div>
  );
}

export default App;

