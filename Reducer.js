// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [john, pete, mary];

// let getAverageAge = arr.reduce((acc, item) => {
//   return acc + item.age;
// }, 0) / arr.length;

// console.log(getAverageAge); // Output: 28




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
  





// ######3--------------------------------------------------------------------##########
// const data = [
//     { name: 'Superman', favoriteIceCreams: ['Strawberry', 'Vanilla', 'Chocolate', 'Cookies & Cream'] },
//     { name: 'Batman', favoriteIceCreams: ['Cookies & Cream', 'Mint Chocolate Chip', 'Chocolate', 'Vanilla'] },
//     { name: 'Flash', favoriteIceCreams: ['Chocolate', 'Rocky Road', 'Pistachio', 'Banana'] },
//     { name: 'Aquaman', favoriteIceCreams: ['Vanilla', 'Chocolate', 'Mint Chocolate Chip'] },
//     { name: 'Green Lantern', favoriteIceCreams: ['Vanilla', 'French Vanilla', 'Vanilla Bean', 'Strawberry'] },
//     { name: 'Robin', favoriteIceCreams: ['Strawberry', 'Chocolate', 'Mint Chocolate Chip'] }
//   ];
//   let temp=data.reduce((acc,elem)=>{
//   elem.favoriteIceCreams.forEach((el)=>{
//     if(!acc[el]){
//       acc[el]=1
//     }
//     else{
//       acc[el]++
//     }
//   })
//     return acc
//   },{})
  
//   console.log(temp)
  
  /*
  {
    Strawberry: 3,
    Vanilla: 4,
    Chocolate: 5,
    'Cookies & Cream': 2,
    'Mint Chocolate Chip': 3,
    'Rocky Road': 1,
    Pistachio: 1,
    Banana: 1,
    'French Vanilla': 1,
    'Vanilla Bean': 1
  }
  */




//   ####################################-----------------------------------------------################################

// const wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
//   ];
  
//   // Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once: 227005
//   let data=wishlist.reduce((acc,el)=>{
//     return acc+el.price
//   },0)
//   console.log(data)

// ##############################--------------------------------------------------

