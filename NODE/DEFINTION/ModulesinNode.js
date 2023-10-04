// Node.js modules: Reusable code units  for organizing backend functionality.

// 1.Core Module (inbuilt module)  ex==>fs
// 2.Local Module(custom module)  ex==>any module created by own
// 3.Third Party Module(external module)(by own) (by npm)  ex==>axios,express,mongoose


  



// FS,os
// const fs = require('fs');
// fs.readFile('example.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });


// // axios
// const axios = require('axios');
// axios.get('https://jsonplaceholder.typicode.com/posts/1')
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });



// (Custom Module)
//MatUtil.js

// mathUtils.js
// exports.add = (a, b) => a + b;
// exports.subtract = (a, b) => a - b;

// // app.js

// const mathUtils = require('./mathUtils.js');
// console.log(mathUtils.add(5, 3)); // Output: 8
// console.log(mathUtils.subtract(10, 4)); // Output: 6
