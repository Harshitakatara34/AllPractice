import { useState } from "react";

const initState = {
  name: "",
  email: "",
  password: ""
};

function ValidationForm() {
  const [change, setChange] = useState(initState);

  const [data, setData] = useState([]);

  const handleChanged = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setChange({ ...change, [name]: value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!change.name | !change.email | !change.password) {
      alert("Please Fill all detailes!");
    } else {
      setData([...data, change]);
      alert("User Register");
    }
  };

  const { name, email, password } = data;

  console.log(data);
  console.log(change);

  return (
    <div>
      <br />
      <hr />
      <h1>Validation Form</h1>
      <br />
      <form>
        <input
          placeholder="Enter Name"
          onChange={handleChanged}
          name="name"
          type="text"
          value={name}
          // required
        />
        <br />
        <input
          placeholder="Enter Email"
          onChange={handleChanged}
          name="email"
          type="email"
          value={email}
          // required
        />
        <br />
        <input
          placeholder="Enter Password"
          onChange={handleChanged}
          name="password"
          type="password"
          value={password}
          // required
        />
        <br />
        <input type="submit" value="Submit" onClick={handleClick} />
      </form>
    </div>
  );
}

export default ValidationForm;
