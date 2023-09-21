// memo in React is a performance optimization technique for functional 
// components. It prevents unnecessary renders by memoizing the 
// component, so it only updates when its props change.



import React, { memo } from 'react';
// Functional component
const MyComponent = ({ name }) => {
  console.log('Rendering MyComponent');
  return <div>{name}</div>;
};

// Wrap the component with memo to optimize rendering
const MemoizedComponent = memo(MyComponent);

function App() {
  const [name, setName] = React.useState('John');

  const changeName = () => {
    setName('Alice');
  };

  return (
    <div>
      <button onClick={changeName}>Change Name</button>
      <MemoizedComponent name={name} />
    </div>
  );
}

export default App;
