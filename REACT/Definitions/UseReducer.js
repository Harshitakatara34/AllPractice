// USEREDUCER

// React hook used to manage and update state in functional components by defining a reducer 
// function that specifies how state changes in response to actions. 
// It's particularly useful for complex state management scenarios.

// Example===>
import React, { useReducer } from 'react';

// Reducer function
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    default:
      return state;
  }
};

function Counter() {
  // Initial state and the reducer function
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {state.count}</p>
      {/* <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>   // state ={ count: 1 } */}
    </div>
  );
}

export default Counter;
