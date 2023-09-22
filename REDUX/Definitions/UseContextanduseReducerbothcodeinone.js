import React, { useReducer, useContext } from 'react';
const initialState = { count: 0 };
const reducer = (state, action) => {
switch (action.type) {
case 'increment':
    return { count: state.count + 1 };
    case 'decrement':
return { count: state.count - 1 };
default:
return state;
}
};
const CountContext = React.createContext();
const CountProvider = ({ children }) => { 
     const [state, dispatch] = useReducer (reducer, initialState); 
    return (
 <CountContext.Provider value={{ state, dispatch }}>
{children}
</CountContext.Provider>
);
};


const Counter = () => {
const { state, dispatch } = useContext(CountContext);
return (
<>
<p>{state.count}</p>
<button onClick={() => dispatch({ type: 'increment' })}>
+
</button>
<button onclick={() => dispatch({ type: decrement })}>-
</button>
</>
);
};


const App = () => {
return (
<CountProvider>
<Counter />
</CountProvider>
);
};

export default App