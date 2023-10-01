import { useReducer } from "react";

function CounterUseReducer() {
  function reducer(state, action) {
    switch (action.type) {
      case "Inc":
        return state + action.payload;

      case "Desc":
        if (state > 0) {
          return state + action.payload;
        }
        return state;

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, 0);

  const handleClickplus = () => {
    dispatch({ type: "Inc", payload: 1 });
  };

  const handleClickminus = () => {
    dispatch({ type: "Desc", payload: -1 });
  };

  return (
    <div>
      <hr />
      <h1>Counter with useReducer</h1>
      <h2>Counter: {state}</h2>
      <button onClick={handleClickplus}>+</button>
      <button onClick={handleClickminus}>-</button>
      <hr />
    </div>
  );
}

export default CounterUseReducer;
