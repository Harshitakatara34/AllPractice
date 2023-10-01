import { useState } from "react";

function ButtonColorChange() {
  const [btn, setbtn] = useState("red");

  const handleColor = () => {
    setbtn("yellow");
  };
  return (
    <div>
      <br />
      <hr />
      <h1>Button Color Changed</h1>
      <br />
      <div>
        <button style={{ backgroundColor: btn }} onClick={handleColor}>
          Color Changed
        </button>
      </div>
    </div>
  );
}

export default ButtonColorChange;
