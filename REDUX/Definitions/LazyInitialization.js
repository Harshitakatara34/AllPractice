import React, { useState } from "react";

function MyComponent2() {
  // Lazy initialization using a function
  const [count, setCount] = useState(() => computeInitialCount());
  // We are using callback here because  callback functions are used to delay the execution of a
  // function until a specific condition is met or an event occurs

  // Function to compute the initial count value
  function computeInitialCount() {
    console.log("Temppppp");
    // Expensive computation or logic to determine the initial count
    return 0; // In this example, we simply initialize it to 0
  }
  // this computeInitialCount function is called only once
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent2;
