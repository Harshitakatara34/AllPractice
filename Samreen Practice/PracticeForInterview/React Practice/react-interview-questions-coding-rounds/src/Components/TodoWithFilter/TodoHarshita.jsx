import React, { useState } from "react";

export const TodoHarshita = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "completed") return todo.completed;
    if (filter === "notcompleted") return !todo.completed;
    return true;
  });

  const searchedTodos = filteredTodos.filter((todo) => {
    return todo.text.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        placeholder="Add a new todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <input
        type="text"
        placeholder="Search todos"
        value={search}
        onChange={handleSearchChange}
      />
      <ul>
        {searchedTodos.map((todo, index) => (
          <li key={index}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none"
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => toggleTodo(index)}>Toggle</button>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <select value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="notcompleted">Not Completed</option>
        </select>
      </div>
    </div>
  );
};
