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

















//======================================

// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5 

// function fn(n){

//   for(let i=1; i<=n; i++){
//     let bag = "";
//     for(let j=1; j<=i; j++){
//       bag += j +" "
//     }
//     console.log(bag)
//   }
// }

// fn(5)

//=========================

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

// function fn1(n1){

//   for(let i=1; i<=n1; i++){
//     let pattern = ""
//     for(let j=1; j<=i; j++){
//       pattern += i +" " 
//     }
//     console.log(pattern)
//   }
// }

// fn1(5)

//=======================

// 1
// 2 3
// 4 5 6
// 7 8 9 10

// let k = 1;
// function fn2(n2) {
//   for (let i = 1; i <= n2; i++) {
//     let pattern = ""
//     for (let j = 1; j <= i; j++) {
//       pattern = pattern + (k++) + " "
//     }
//     console.log(pattern)
//   }

// }
// fn2(4)


//=========================

// 12345
// 1234
// 123
// 12
// 1

// function fn3(n3){
//   for(let i=1; i<=n3; i++){
//     let bag = ""
//     for(let j=1; j<=n3-i; j++){
//       bag = bag + j 
      
//     }
//     console.log(bag)
//   }
// }

// fn3(6)


//=====================================

//     1
//    123
//   12345
//  1234567
// 123456789

// function fn4(n4) {
//   for (let i = 1; i <= n4; i++) {
//     let bag = "";
//     for (let j = 1; j <= n4 - i; j++) {
//       bag += " ";
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//       bag += k;
//     }
//     console.log(bag);
//   }
// }

// fn4(5);

//==========================
//   1
//  234
// 56789

// let d =1;
//  function fn5(n5) {
//    for (let i = 1; i <= n5; i++) {
//      let bag = "";
//      for (let j = 1; j <= n5 - i; j++) {
//        bag += " ";
//      }
//      for (let k = 1; k <= 2 * i - 1; k++) {
//        bag += d++;
    
//      }
//      console.log(bag);
//    }
//  }

//  fn5(3);

//======================
// *****
// *****
// *****
// *****
// *****


//  function fn6(n6) {
//    for (let i = 1; i <= n6; i++) {
//      let bag = "";
//      for (let j = 1; j <= n6; j++) {
//        bag += "*";
//      }

//      console.log(bag);
//    }
//  }

// fn6(5)

//====================

// *****
// *   *
// *   *
// *   *
// *****

//  function fn7(n7) {
//    for(let i=1; i<=n7; i++){
//      let bag = ""
//      for(let j=1; j<=n7; j++){
//        if(i===1 || i===n7){
//          bag = bag + "*"
//        }else{
//          if(j===1 || j===5){
//            bag = bag + "*"
//          }else{
//            bag = bag + " "
//          }
//        }
//      }
//      console.log(bag)
//    }
//  }

// fn7(5)

  

//======================

//     *
//    **
//   ***
//  ****
// *****

// function fn8(n8) {
//   for (let i = 1; i <= n8; i++) {
//     let bag = "";

//     for (let k = 1; k <= n8 - i; k++) {
//       bag = bag + " ";
//     }

//     for (let j = 1; j <= i; j++) {
//       bag = bag +  "*";
//     }

//     console.log(bag);
//   }
// }

// fn8(5);



//===================

// *
// **
// ***
// ****
// *****

//  function fn8(n8) {
//    for(let i=1; i<=n8; i++){
//      let bag = ""
//      for(let j=1; j<=i; j++){
//        bag = bag + "*"
//      }
//      console.log(bag)
//    }
//  }

// fn8(5)


//=====================

//     *
//    ***
//   *****
//  *******
// *********


// function fn9(n9) {
//   for (let i = 1; i <= n9; i++) {
//     let bag = "";

//     for (let k = 1; k <= n9 - i; k++) {
//       bag = bag + " ";
//     }

//     for (let j = 1; j <= 2*i-1; j++) {
//       bag = bag +  "*";
//     }

//     console.log(bag);
//   }
// }

// fn9(5);


//===================

// 54321
// 5432
// 543
// 54
// 5


// function fn10(n10) {
//   for (let i = 1; i<=n10; i++) {
//     let bag = "";

//     for (let k = n10; k >= i; k--) {
//       bag = bag + k ;
      
//     }

//     console.log(bag);
//   }
// }

// fn10(5);


//===============

// 54321
// 4321
// 321
// 21
// 1

// function fn11(n11) {
//   for (let i=n11; i>=1; i--) {
//     let bag = "";

//     for (let k = i; k>=1 ; k--) {
//       bag = bag + k ;

//     }

//     console.log(bag);
//   }
// }

// fn11(5);

//===============

// *
// **
// * *
// *  *
// *   *
// ******

// function fn11(n11) {
//   for (let i = 1; i <= n11; i++) {
//     let bag = "";

//     for (let k = 1; k <= i; k++) {
//       bag = bag + "$";
//     }

//     console.log(bag);
//   }

//   for (let i = n11; i >= 1; i--) {
//     let bag = "";

//     for (let k = 1; k <= i; k++) {
//       bag = bag + "%";
//     }

//     console.log(bag);
//   }
// }

// fn11(4);


//================

// *****
// ****
// ***
// **
// *

// function fn11(n11) {
//   for (let i=n11; i>=1; i--) {
//     let bag = "";

//     for (let k = i; k>=1 ; k--) {
//       bag = bag + "*";

//     }

//     console.log(bag);
//   }
// }

// fn11(5);

//======================

// A
// AA
// AAA
// AAAA
// AAAAA

// function fn11(n11) {
//   for (let i=1; i<=n11; i++) {
//     let bag = "";

//     for (let k = 1; k<=i ; k++) {
//       bag = bag + "A";

//     }

//     console.log(bag);
//   }
// }

// fn11(5);


//==================

// $
// $$
// $$$
// $$$$
// %%%%%
// %%%%
// %%%
// %%
// %

// function fn11(n11) {
//   for (let i=1; i<=n11; i++) {
//     let bag = "";

//     for (let k = 1; k<=i-1 ; k++) {
//       bag = bag + "$";

//     }

//     console.log(bag);
//   }

//   //==============

//   for (let i=n11; i>=1; i--) {
//     let bag = "";

//     for (let k = 1; k<=i; k++) {
//       bag = bag + "%";

//     }

//     console.log(bag);
//   }
  
// }

// fn11(5);


//=pppppppppp

// function fn11(n11) {
//   for (let i = 1; i <= n11; i++) {
//     let bag = "";

//     for (let k = 1; k <= i; k++) {
//       bag = bag + "$";
//     }

//     console.log(bag);
//   }

//   for (let i = n11; i >= 1; i--) {
//     let bag = "";

//     for (let k = 1; k <= i; k++) {
//       bag = bag + "%";
//     }

//     console.log(bag);
//   }
// }

// fn11(4);



//=======================

// AAAAA
// AAAA
// AAA
// AA
// A

// B
// BB
// BBB
// BBBB
// BBBBB


let rows = 5;
let char1 = "A";
let char2 = "B";

// pattern variable carries the final pattern in string format
let pattern = "";

// outer loop - I -> runs for `rows` no. of times
// forms an inverse character triangle with 'A'.
for (let n = 1; n <= rows; n++) {
   for (let num = 1; num <= 6 - n; num++) {
      pattern += char1;
   }
   pattern += "\n";
}
pattern += "\n";

// outer loop - II -> runs for `rows` no. of times
// forms a character triangle with 'B'.
for (let n = 1; n <= rows; n++) {
   for (let num = 1; num <= n; num++) {
      pattern += char2;
   }
   pattern += "\n";
}

console.log(pattern);


//===========================

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
