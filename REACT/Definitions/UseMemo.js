// useMemo in React is a hook that memoizes (caches) the result of a computation 
// and recalculates it only when its dependencies change, optimizing performance
// returns memoized value

// useMemo is typically used for optimizing expensive calculations or data transformations.


import { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
export const UseMemo = () => {
  const [count, setCount] = useState(2);
  const [sub, setSub] = useState(2);
  const handleadd = () => {
    setCount(count + 1);
  };
  const handleSub = () => {
    setSub(sub - 1);
  };
  const mult = useMemo(() => {
    console.log("harshi");
    return count * 2;
  }, [count]);
  
  return (
    <>
      <h1>{mult}</h1>
      <button onClick={handleadd}>Add:{count}</button>
      <button onClick={handleSub}>Sub:{sub}</button>
    </>
  );
};
