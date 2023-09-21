// useCallback is used to memoize callback functions. 
// It ensures that a callback function is not recreated on every 
// render unless its dependencies change. useCallback is typically used 
// for optimizing the performance of event handlers or callback props passed 
// to child components.


// Example====>
import React, { useState, useCallback } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  // Define a dependency variable
  const dependency = 'dependencyValue';

  // useCallback memoizes the function with a dependency array
  const handleClick = useCallback(() => {
    console.log('Button clicked! Dependency:', dependency);
  }, [dependency]);

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

