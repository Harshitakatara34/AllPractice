// 10) Write an efficient program to find the sum of contiguous subarray within a one-dimensional array of numbers that has the largest sum.

// jsx
// [-2, -3, 4, -1, -2, 1, 5, -3]

// Maximum contiguous sum is 7




// function maxSubarraySum(arr) {
//     let maxSum = arr[0];  
//     let currentSum = arr[0]; 
//     for (let i = 1; i < arr.length; i++) {
//       currentSum = Math.max(arr[i], currentSum + arr[i]);
//       maxSum = Math.max(maxSum, currentSum);
//     }
  
//     return maxSum;
//   }
//   const arr = [-2, -3, 4, -1, -2, 1, 5, -3];
//   const result = maxSubarraySum(arr);
//   console.log(Maximum contiguous sum is ${result});