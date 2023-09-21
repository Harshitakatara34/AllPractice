import logo from "./logo.svg";
import "./App.css";
import Temp from "./Components/Temp";
import Memooo from "./Components/memo";
import { Profiler } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
// import { Data } from './Components/Temp';
function App() {
  const onRenderCallback = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime
  ) => {
    // Log performance data
    console.log(`Component ${id} took ${actualDuration}ms to render.`);
  };

  return (
    <div className="App">
     
        <Header />
        <Profiler id="MyApp" onRender={onRenderCallback}>
        <Footer />
        </Profiler>
        <Memooo />
     

      {/* <Dta/> */}
    </div>
  );
}

export default App;
