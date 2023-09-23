// CUSTOM HOOK
// import { useState, useEffect } from "react";
// function useWindowDimensions() {
//   const [windowDimensions, setWindowDimensions] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight
//   });

//   useEffect(() => {
//     function handleResize() {
//       setWindowDimensions({
//         width: window.innerWidth,
//         height: window.innerHeight
//       });
//     }

//     window.addEventListener("resize", handleResize);

//     // Cleanup function to remove the event listener when the component unmounts
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []); // Empty dependency array ensures the effect runs only once

//   return windowDimensions;
// }

// export default useWindowDimensions







// import React from "react";
// import useWindowDimensions from "./useWindowDimensions"; // Adjust the path

// function MyComponent() {
//   const { width, height } = useWindowDimensions();

//   return (
//     <div>
//       <p>Window Width: {width}</p>
//       <p>Window Height: {height}</p>
//     </div>
//   );
// }

// export default MyComponent 