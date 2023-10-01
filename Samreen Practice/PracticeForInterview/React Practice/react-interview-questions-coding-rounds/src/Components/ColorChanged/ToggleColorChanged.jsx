import { useState } from "react";

function ToggleColorChanged() {
  const [col, setcol] = useState("red");

  const handleCol = () => {
    let newdata = col === "red" ? "yellow" : "red";
    setcol(newdata);
  };

  return (
    <>
      <br />
      <hr />
      <h1>Toggle Color</h1>
      <br />
      <button style={{ backgroundColor: col }} onClick={handleCol}>
        ToggleColor
      </button>
    </>
  );
}

export default ToggleColorChanged;
