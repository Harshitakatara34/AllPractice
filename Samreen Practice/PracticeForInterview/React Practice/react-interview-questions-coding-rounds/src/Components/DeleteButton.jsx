import { useState } from "react";

const DeleteButton = () => {
  const [btn, setbtn] = useState(true);

  const handleleClick = () => {
    setbtn(false)
  };
  return <div>
    <br/>
    <hr/>
    <h1>Delete Button</h1>
    <br/>
  {btn && <button onClick={handleleClick}>Delete</button>}
  </div>;
};

export default DeleteButton;
