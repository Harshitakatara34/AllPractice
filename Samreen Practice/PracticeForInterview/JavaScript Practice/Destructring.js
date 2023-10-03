// //  let user = {

// //      name: 'Samreen',
// //      age: 13,
// //      post: [{title: 'post1', 
// //              title3: 'post2'}
// //            ]
// //  }

// // const {name:f, age: a1=22, ...a} = user

// // // console.log(f, a1, a)  // (print a1 value 13) a1 value will not changed

// // // console.log(user.post)

// // let {post:[{title:t, title3}]} = user;

// // console.log(t, title3)  // post1 post2

// //====================================


// // let person = [1,3, 4,8, 9,55, 77]

// // const [h, b, c, d, ...e] = person

// // console.log(person)   //  [1, 3, 4, 8, 9, 55, 77]

// //======================================

// let user2 = ['a', 'b', 443, 345]
// let bh = [...user2]
// bh.push(44)

// // console.log(bh, user2)  

// //===============================

// // destructure name changed
// let arr1 = ['ff', 22, false]

// const [ jk, ...s] = arr1

// console.log(arr1)  //  ['ff', 22, false]


// //================================

// let ob = {
//     city: 'lko',
//     marks: {
//         math: '30',
//         hindi: '50'
//     }
// }


// const {city: city1, ...v} = ob;
// // console.log(city1, v)  //lko marks 
// const {marks: {math:english, hindi}} = ob
// console.log(english, hindi)  // 30 50
