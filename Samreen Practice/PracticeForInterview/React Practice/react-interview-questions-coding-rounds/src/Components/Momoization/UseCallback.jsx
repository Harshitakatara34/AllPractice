import React, { useState, useCallback } from "react";

function UseCallback() {
  const [count, setCount] = useState(0);
  const [data, setdata] = useState("hii");
  // Define a callback function that increments the count state
  const increment = useCallback(() => {
    console.log("data");
    setCount(count + 1);
  }, [count]);

  // const handleData = (e) =>{
  //   console.log('state')
  //  setdata(e.target.value)
  // }

  return (
    <div>
      <br />
      <hr />
      <h1>useCallback</h1>
      <br />

      {/* <button value={data} onClick={handleData}>State</button> */}
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default UseCallback;
