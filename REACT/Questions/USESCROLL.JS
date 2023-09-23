// import { useState, useEffect } from 'react';

// function useWindowScroll() {
//   // Initialize state variables to hold scroll positions
//   const [scrollX, setScrollX] = useState(window.scrollX);
//   const [scrollY, setScrollY] = useState(window.scrollY);

//   // Function to update scroll positions
//   const updateScrollPosition = () => {
//     setScrollX(window.scrollX);
//     setScrollY(window.scrollY);
//   };

//   useEffect(() => {
//     // Add scroll event listener when the component mounts
//     window.addEventListener('scroll', updateScrollPosition);

//     // Remove the scroll event listener when the component unmounts
//     return () => {
//       window.removeEventListener('scroll', updateScrollPosition);
//     };
//   }, []);

//   return { scrollX, scrollY };
// }

// export default useWindowScroll;




// import React from 'react';
// import useWindowScroll from './useWindowScroll';

// function ScrollInfo() {
//   const { scrollX, scrollY } = useWindowScroll();

//   return (
//     <div>
//       <p>Horizontal Scroll Position: {scrollX}px</p>
//       <p>Vertical Scroll Position: {scrollY}px</p>
//     </div>
//   );
// }

// export default ScrollInfo;