import { useState } from "react";
import MemoChild from "./MemoChild";

function Memo() {
  const [data, setdata] = useState(0);
  // const [state, setState] = useState()

  return (
    <div>
      <br />
      <hr />
      <br />
      <h1>Memo</h1>
      <h3>{data}</h3>
      <button onClick={() => setdata(data + 1)}>Click</button>
      {/* <MemoChild state={state} /> */}
      <MemoChild />
    </div>
  );
}

export default Memo;
