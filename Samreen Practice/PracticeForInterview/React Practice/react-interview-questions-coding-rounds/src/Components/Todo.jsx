import { useState } from "react";

function Todo() {
  const initState = [
    { text: "Js", completed: false },
    { text: "Java", completed: false },
    { text: "Python", completed: false }
  ];

  const [todo, settodo] = useState(initState);

  const [change, setchange] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setchange(e.target.value);
  };

  const handleBtn = (e) => {
    e.preventDefault("");
    settodo([...todo, { text: change, completed: false }]);
    setchange("");
  };

  const handleDelete = (index) => {
    let newdata = todo.filter((item, i) => i !== index);
    settodo(newdata);
  };

  // filter is not work properlly

  const handleFilter = (e) => {
    let newdata = [...todo];
    if (e.target.value === "completed") {
      let f = newdata.filter((item) => item.completed === false);
      settodo(f);
    } else if (e.target.value === "notcompleted") {
      let h = newdata.filter((item) => item.completed === true);
      settodo(h);
    } else {
      settodo(initState);
    }
  };

  //filter

  const handleFilter2 = (e) => {
    if (e.target.value === "") {
      settodo(initState);
    } else {
      let newArr = initState.filter((item) => item.text === e.target.value);
      settodo(newArr);
    }
  };

  const handletoggle = (index) => {
    let newdata = [...todo];
    newdata[index].completed = !newdata[index].completed;
    settodo(newdata);
  };

  return (
    <div>
      <hr />
      <h1>Todo App</h1>
      <br />
      <br />
      <select onChange={handleFilter}>
        <option value="">Select by Status</option>
        <option value="completed">Completed</option>
        <option value="notcompleted">Not Completed</option>
      </select>

      <select onChange={handleFilter2}>
        <option value="">Select Subject</option>
        <option value="Js">Js</option>
        <option value="Java">Java</option>
        <option value="Python">Python</option>
      </select>

      <br />
      <br />
      <input value={change} onChange={handleChange} type="text" />
      <button onClick={handleBtn}>Add</button>

      {todo.map((item, index) => {
        return (
          <div>
            <h3>{item.text}</h3>
            <button onClick={() => handleDelete(index)}>Delete</button>
            <button onClick={() => handletoggle(index)}>
              {item.completed ? "Not Completed" : "Completed"}
            </button>
          </div>
        );
      })}
      <br />
      <hr />
      <br />
    </div>
  );
}

export default Todo;
