// 1 . let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// // alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

// let sum=arr.reduce((acc,elem)=>{
//   return acc+elem.age
// },0)
// console.log(sum)



// 2.let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"}
//   ];
  
//   let newArr = users.reduce((acc, user) => {
//     acc[user.name] = user.id;
//     return acc;
//   }, {});
  
//   console.log(newArr);
  



// 3.let users = [
//     {age: 16},
//     {age: 20},
//     {age: 23},
//     {age: 30}
//   ];
  
//   // [16, 20, 23, 30]
  
//   let newArr = users.reduce((acc, item)=> {
//     acc.push(item.age)
//     return acc;
//   },[])
// console.log(newArr)  



// 4.let data = [
//     { name: "John", subject: "Javascript" },
//     { name: "John", subject: "HTML" },
//     { name: "John", subject: "CSS" },
//     { name: "Pete", subject: "Java" },
//     { name: "Pete", subject: "English" },
//     { name: "Pete", subject: "Maths" },
//     { name: "Mary", subject: "Rust" },
//     { name: "Mary", subject: "Elm" },
//   ];
  
//   let subjectHash = data.reduce((acc, item) => {
//     if (!acc[item.name]) {
//       acc[item.name] = [];
//     }
//     acc[item.name].push(item.subject);
//     return acc;
//   }, {});
  
//   console.log(subjectHash);
  