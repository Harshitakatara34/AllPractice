// React Profiler is a built-in tool in React that allows developers to analyze the performance '
// of their React applications, specifically tracking how long it takes for components to render. 
// It helps identify performance bottlenecks and optimize the rendering process.











import "./App.css";
import { Profiler } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
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
      <Profiler id="MyApp" onRender={onRenderCallback}>
        <Header />
        <Footer />
        <Memooo />
      </Profiler>

      {/* <Dta/> */}
    </div>
  );
}

export default App;
