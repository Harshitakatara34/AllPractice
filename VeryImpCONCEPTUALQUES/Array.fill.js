// const arr=new Array(3).fill([])
// arr[0].push(5)
// console.log(arr)


// Ans===>
// 0
// : 
// [5]
// 1
// : 
// [5]
// 2
// : 
// [5]
// length
// : 
// 3


// Reason====>

// const arr = new Array(3) creates a new array with a length of 3. Initially, this array contains three empty slots, 
//             but it's not an array of three separate arrays.

// fill([]) fills each slot in the array with a reference to the same empty array ([]). 
//          So, all three slots in arr now point to the same empty array in memory.

// arr[0].push(5) pushes the value 5 into the empty array that all slots in arr are referencing. 
//              Since they all reference the same array, the result is that the 5 is pushed into the same array three times.

// When you console.log(arr), it prints the array arr, which contains three references to the same array [5]. 
//        So, you see [5] three times in the output.






































// Using a loop to create separate arrays
const arr = new Array(3);
for (let i = 0; i < 3; i++) {
  arr[i] = [];         // Reference to a separate empty array
}

// Now you can push values into each separate array
arr[0].push(5);

console.log(arr); // Output: [ [ 5 ], [], [] ]
