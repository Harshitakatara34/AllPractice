import { useContext } from "react";
import { createToggleContext } from "./ToggleFunction";
import Navbar from "./Navbar";

function Home() {
  const { toggledata, toggle } = useContext(createToggleContext);

  return (
    <div>
      <h1>Context Api</h1>
      <div
        style={{
          backgroundColor: toggle === "light" ? "black" : "white",
          color: toggle === "light" ? "white" : "black"
        }}
      >
        <Navbar />
        <button onClick={toggledata}>Toggle</button>
        <br />
        <br />
      </div>
    </div>
  );
}

export default Home;
