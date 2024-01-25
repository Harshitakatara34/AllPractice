// useCallback is used to memoize callback functions. 
// It ensures that a callback function is not recreated on every 
// render unless its dependencies change. useCallback is typically used 
// for optimizing the performance of event handlers or callback props passed 
// to child components.


// Example====>
import React, { useState, useCallback } from 'react';

const ChildComponent = ({ onClick }) => {
  console.log('ChildComponent rendering');
  return (
    <div>
      <button onClick={onClick}>Click Me in Child</button>
    </div>
  );
};

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const dependency = 'dependencyValue';

  const handleClick = useCallback(() => {
    console.log('Button clicked! Dependency:', dependency);
  }, [dependency]);

  return (
    <div>
      <button onClick={handleClick}>Click Me in Parent</button>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      {/* Pass the memoized handleClick function as a prop to ChildComponent */}
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

export default ParentComponent;

