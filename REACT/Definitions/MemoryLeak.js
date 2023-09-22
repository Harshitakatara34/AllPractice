// Ans- A memory leak in React occurs when a functional component that is no longer being
// used continues to take up memory resources. This can lead to slow performance or crashes
// if the memory usage continues to increase over time.

// Example====>
import React, { useEffect } from "react";
const ExampleComponent = () => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("Hello");
    }, 1000);
    return () => clearInterval(intervalId);    // If we will not use here ClearInterval then when if thiscomponent is 
                                            //  Unmounted it will not stop it will covers memory so to avoid it we have 
                                                // to use cleanupinterval(To avoid Slow Performance)
    // No cleanup function to clear the interval
  });
  return <div>Hello World</div>;
};
export default ExampleComponent;
