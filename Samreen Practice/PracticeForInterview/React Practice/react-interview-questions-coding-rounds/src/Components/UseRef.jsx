import { useEffect, useRef } from "react";

function UseRef() {
  const inputRef = useRef(null); // Create a ref object and initialize it as null

  const inputRes = useRef("temp");

  useEffect(() => {
    if (inputRef) {
      inputRef.current.focus(); // Use inputRef to access the DOM element and focus on it
    }
  }, []);

  const handleClick = () => {
    inputRes.current = "Samreen";
  };

  //  UseRef is used rerender not

  return (
    <div>
      <h1>useRef</h1>
      <h4>--------------------------------------</h4>
      <br />
      <h1>Not Rerender</h1>
      <h2>{inputRes.current}</h2>
      <button onClick={handleClick}>Add</button>
      <br />
      <h4>--------------------------------------</h4>
      <br />
      <h1>Focus</h1>
      <input ref={inputRef} type="text" />
    </div>
  );
}

export default UseRef;
