import { useState } from "react";

function TodoToggleFilter() {
  const [input, setinput] = useState("");
  const [data, setdata] = useState([]);
  const [filterValue, setFilterValue] = useState("all");
  const [searchd, setSearchd] = useState(""); // State to hold search text

  // input change
  const handleChnage = (e) => {
    setinput(e.target.value);
  };

  // for Add
  const handleClick = () => {
    setdata([...data, { title: input, completed: false }]);
    setinput("");
  };

  // For Delete
  const handleRemove = (index) => {
    let newData = data.filter((item, i) => i !== index);
    setdata(newData);
  };

  // for toggle
  const handleToggle = (index) => {
    let newData = [...data];
    newData[index].completed = !newData[index].completed;
    setdata(newData);
  };

  // Search
  const handleSearch = (e) => {
    setSearchd(e.target.value);
  };

  // Filter
  const handleFilter = (e) => {
    setFilterValue(e.target.value);
  };

  // Filter data based on filterValue and searchd

  const filteredData = data.filter((item) => {
    if (filterValue === "all") return true;
    if (filterValue === "completed") return item.completed;
    if (filterValue === "notcompleted") return !item.completed;
    return true;
  });

  const searchedData = filteredData.filter((item) => {
    return item.title.toLowerCase().includes(searchd.toLowerCase());
  });

  return (
    <div>
      <br />
      <br />
      <hr />
      <br />
      <br />
      <h1>Todo Search App</h1>

      <input
        type="text"
        placeholder="Search"
        value={searchd}
        onChange={handleSearch}
      />
      <br />
      <select name="" id="" onChange={handleFilter} value={filterValue}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="notcompleted">Not Completed</option>
      </select>

      <br />
      <br />
      <input onChange={handleChnage} value={input} type="text" />
      <button onClick={handleClick}>Add</button>

      {searchedData.map((item, index) => {
        return (
          <div key={index}>
            <h3>
              {item.title} === {item.completed ? "Completed" : "Not Completed"}
            </h3>
            <button onClick={() => handleRemove(index)}>Remove</button>
            <button onClick={() => handleToggle(index)}>Toggle</button>
          </div>
        );
      })}
    </div>
  );
}

export default TodoToggleFilter;
