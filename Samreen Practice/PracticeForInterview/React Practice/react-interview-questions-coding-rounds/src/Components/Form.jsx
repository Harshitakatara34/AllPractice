import { useState } from "react";

const Form = () => {
  const [change, setchange] = useState();

  const handleClick = (e) => {
    alert(change);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setchange(e.target.value);
  };

  return (
    <div>
      <h1>Form Alert With Name</h1>
      <input type="text" value={change} onChange={handleChange} />
      <button onClick={handleClick}>Submit</button>
      <hr />
    </div>
  );
};

export default Form;
