import { useState } from "react";

function Counter() {
  const [count, setcount] = useState(0);

  const handleClickPlus = () => {
    setcount(count + 1);
  };

  const handleClickMinus = () => {
    if (count > 0) {
      setcount(count - 1);
    }
  };

  return (
    <div>
      <h1>Counter with useState</h1>
      <h2>Count:{count}</h2>
      <button onClick={handleClickPlus}>+</button>
      <button onClick={handleClickMinus}>-</button>
    </div>
  );
}

export default Counter;
