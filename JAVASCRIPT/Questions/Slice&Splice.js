// Slice

let a = [1, 3, 4, 5, 7];

// let b = a.slice(1,3)  // (start, end) // [3, 4]
// console.log(a, b)  // [1, 3, 4, 5, 7] , [3, 4]

// let c= a.slice(2,4,4)
// console.log(a, c)  // [1, 3, 4, 5, 7], [4, 5]

let d = a.slice(1, -2); // [3, 4]
console.log(d);

let e = a.slice(0, -3); // [1, 3, 4]
console.log(e);

// doubt

// let d= a.slice(-1,3)
// console.log(d)

// let d= a.slice(-1, -2)
// console.log(d)

//=================================

// Splice

// Splice

let arr = [2, 4, 5, 6];

arr.splice(1, 0, 8); // (index, delete, add)
console.log(arr); // ) [2, 8, 4, 5, 6] --> add index 1

// it will work in new array again ([2, 8, 4, 5, 6])
arr.splice(-1, 0, 3);
console.log(arr); // [2, 8, 4, 5, 3, 6]

// delete 2 index(3 se) (5, 3)
arr.splice(3, 2, 2);
console.log(arr); // [2, 8, 4, 2, 6]

//===============================

// let arr = [2, 8, 4, 2, 6]

// arr.splice(3,-10,5)     // -10 means not indexing -10 allow means index is not in minus
// console.log(arr)
