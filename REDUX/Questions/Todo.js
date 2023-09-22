// Store.js
// import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
// import thunk from "redux-thunk";
// import todoReducer from "./reducers"; // Assuming you have a 'reducers.js' for your todo app
// const allReducers = combineReducers({
//   todoReducer, // Assuming your todo reducer is named 'todoReducer'
// });

// export const store = legacy_createStore(allReducers, applyMiddleware(thunk));








// // actionTypes.js
// export const ADD_TODO = 'ADD_TODO';
// export const TOGGLE_TODO = 'TOGGLE_TODO';
// export const REMOVE_TODO = 'REMOVE_TODO';







// // actions.js
// import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actionTypes';

// export const addTodo = (text) => ({
//   type: ADD_TODO,
//   payload: {
//     text,
//     completed: false,
//   },
// });

// export const toggleTodo = (id) => ({
//   type: TOGGLE_TODO,
//   payload: {
//     id,
//   },
// });

// export const removeTodo = (id) => ({
//   type: REMOVE_TODO,
//   payload: {
//     id,
//   },
// });







// // reducers.js
// import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actionTypes';

// const initialState = [];

// const todoReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return [...state, action.payload];
//     case TOGGLE_TODO:
//       return state.map((todo) =>
//         todo.id === action.payload.id
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );
//     case REMOVE_TODO:
//       return state.filter((todo) => todo.id !== action.payload.id);
//     default:
//       return state;
//   }
// };

// export default todoReducer;












// TodoApp.js
// // TodoApp.js
// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { addTodo, toggleTodo, removeTodo } from './actions';

// function TodoApp() {
//   const todos = useSelector((state) => state);
//   const dispatch = useDispatch();
//   const [newTodo, setNewTodo] = useState('');

//   const handleAddTodo = () => {
//     if (newTodo.trim() !== '') {
//       dispatch(addTodo(newTodo));
//       setNewTodo('');
//     }
//   };
//   return (
//     <div>
//       <h1>Todo List</h1>
//       <input
//         type="text"
//         value={newTodo}
//         onChange={(e) => setNewTodo(e.target.value)}
//       />
//       <button onClick={handleAddTodo}>Add</button>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             <input
//               type="checkbox"
//               checked={todo.completed}
//               onChange={() => dispatch(toggleTodo(todo.id))}
//             />
//             {todo.text}
//             <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoApp;













// index.js
// // index.js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import store from './store';
// import TodoApp from './TodoApp';

// ReactDOM.render(
//   <Provider store={store}>
//     <TodoApp />
//   </Provider>,
//   document.getElementById('root')
// );
