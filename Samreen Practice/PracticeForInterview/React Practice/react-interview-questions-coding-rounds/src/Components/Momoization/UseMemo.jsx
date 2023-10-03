import { useState, useMemo } from "react";

function UseMemo() {
  const [c1, setc1] = useState(0);
  const [c2, setc2] = useState(0);

  const hancleClickPlue = () => {
    console.log("c1");
    setc1(c1 + 1);
  };

  // only c1 value will render the handleNew
  //function value not c2

  // commant console hatane se pata lagega
  const handleNew = useMemo(() => {
    // console.log(c1*3)
  }, [c1]);

  const hancleClickMinus = () => {
    console.log("c2");
    setc2(c2 - 1);
  };

  return (
    <div>
      <br />
      <hr />
      <h1>useMemo</h1>
      <br />
      <button onClick={hancleClickPlue}>count+</button>
      <h3>{c1}</h3>
      <h1>{handleNew}</h1>
      <button onClick={hancleClickMinus}>count-</button>
      <h3>{c2}</h3>
    </div>
  );
}

export default UseMemo;
