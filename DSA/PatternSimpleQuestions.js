// // Patterns Program
// //1.  

// //     *
// //     * *
// //     * * *
// //     * * * * 

// // function pattern(n) {
// //   for (let i = 1; i <= n; i++) {
// //       let bag = ""
// //     for(let j=1; j<=i; j++){
// //       bag = bag + "*" + " "
// //     }
// //     console.log(bag)
// //   }
// // }

// // pattern(4)


// //==========================

// // 2

// // * * * *
// // * * *
// // * * 
// // *  
  

// // function pattern2(n2){
// //   for(let i=1; i<=n2; i++){
// //     let bag = ""
// //     for(let j=i; j<=n2; j++){
// //      bag = bag+"*"+ " "
// //     }
// //     console.log(bag)
// //   }
  
// // }

// // pattern2(4)

// //=============================
// //3. 

// // ****
// //  ***
// //   **
// //    *

// // function pattern3(n3) {
// //   for (let i = 1; i <= n3; i++) {
// //     let bag = "";
// //     for (let k = 1; k < i; k++) {
// //       bag = bag + " ";
// //     }
// //     for (let j = i; j <= n3; j++) {
// //       bag = bag + "*";
// //     }
// //     console.log(bag);
// //   }
// // }

// // pattern3(4);


// //==============================
// //4.

//  //    *
//  //   ** 
//  //  ***
//  // ****    

//  function pattern4(n4) {
//     for (let i = 1; i <= n4; i++) {
//       let bag = "";
//       for (let k = 1; k <= n4-i; k++) {
//         bag = bag + " ";
//       }
//       for (let j = 1; j <=i; j++) {
//         bag = bag + "*" 
//       }
//       console.log(bag);
//     }
//   }
  
//   pattern4(4);
  
  
//   //==========================
  
//   //5.
  
//    //    *
//    //   * * 
//    //  * * *
//    // * * * *
//    //  * * *
//    //   * *
//    //    * 
  
//   function pattern5(n5) {
//     for (let i = 1; i <= n5; i++) {
//       let bag = "";
//       for (let k = 1; k <= n5-i; k++) {
//         bag = bag + " ";
//       }
//       for (let j = 1; j <=i; j++) {
//         bag = bag + "*" + " "
//       }
//       console.log(bag);
//     }
//     for (let i = 2; i <= n5; i++) {
//       let bag = "";
//       for (let k = 1; k < i; k++) {
//         bag = bag + " ";
//       }
//       for (let j = i; j <= n5; j++) {
//         bag = bag + "*" + " "
//       }
//       console.log(bag);
//     }
//   }
  
//   pattern5(4);