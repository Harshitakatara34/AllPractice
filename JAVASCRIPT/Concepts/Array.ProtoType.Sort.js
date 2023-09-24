// let shapes = [
//     {sides: 4, color: 'red'},
//     {sides: 1, color: 'blue'},
//     {sides: 3, color: 'crange'},
//     {sides: 2, color: 'dreen'}
//   ];


// shapes.sort(function(a, b) {
//     console.log(a.color, b.color)
//     // iteration: 1
//     // a: {sides: 1, color: 'blue'}
//     // b: {sides: 4, color: 'red'}
  
//      if (a.sides < b.sides) {
//       return -1
//      } 
  
//      if (a.sides > b.sides) {
//       return 1
//      }
  
//      return 0;
  
//     // the logic can return 
//     // 0 : a and b are of equal order
//     // -1 : a should come before b 
//     // 1 : a should come after b
//   });
  
//   console.log(shapes);







//   shapes.sort(function(a, b) {
//     console.log(a.color, b.color)
//     // iteration: 1
//     // a: {sides: 1, color: 'blue'}
//     // b: {sides: 4, color: 'âred'}
  
//      if (a.color.localeCompare(b.color) === -1) {
//       return -1
//      } 
  
//      if (a.color.localeCompare(b.color) === 1) {
//       return 1
//      }
  
//      return 0;
  
//     // the logic can return 
//     // 0 : a and b are of equal order
//     // -1 : a should come before b 
//     // 1 : a should come after b
//   });
  
//   console.log(shapes);
  



//   // How does array.prototype.sort works in javascript
//   // its an array method
//   // it mutates the input array (in place)
//   // it takes in a callback function
//   // the callback function gets two items of the input array usually stored as a , b
//   // the callback function is expected to return either 0, a -ve number or a +ve number
//   // if the callback returns a -ve number this means that a should come before b;
//   // if the callback returns a +ve number this means that a should come after b;
//   // if the callback returns 0, this means, no change in order is required

  let a = 'temp'
  let b = 'data'

  let c = 'aaaa'
  let d = 'aaaa'
  
  
  console.log(c.localeCompare(d));  

  // It will compare like with alphaetical order 
//   jese isme c ki value aaaa h and then d h aaaa dono equal h to 0

  console.log(a.localeCompare(b));
//   a=temp b=data
// isme b pehle ayega to jispe localCompare kra rhe  vo pehle aa rha h to 1 


  console.log(b.localeCompare(a));
// b=data and a=temp   
// isme jisko hum compare kr rhe h vo last m hi rhega to y -1 dega  

  console.log(b.localeCompare(c));
// yaha b=data h and c=aaaa 
// isme jisko comapre kr rhe h vo alphabetcally pehle aajaega to iska 1 hoga 