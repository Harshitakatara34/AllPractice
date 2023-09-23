// Temporal Dead Zone(TDZ) : the area in which a variable is not accessible. Temporal because it depends on time of excution not position

// {
//   // TDZ starts 
//   const say = () => console.log(msg); // hi

//   let msg = 'hi'; 
//   say(); 
// }
