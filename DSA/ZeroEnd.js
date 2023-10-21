// 11) Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.


// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// function moveZerosToEnd(nums) {
//     const result = [];
//     let zeroCount = 0;
  
//     // Collect non-zero elements and count zeros
//     for (const num of nums) {
//       if (num !== 0) {
//         result.push(num);
//       } else {
//         zeroCount++;
//       }
//     }
  
//     // Append zeros to the end
//     for (let i = 0; i < zeroCount; i++) {
//       result.push(0);
//     }
  
//     // Copy the result back to the original array
//     for (let i = 0; i < nums.length; i++) {
//       nums[i] = result[i];
//     }
//     console.log(result)
//   }