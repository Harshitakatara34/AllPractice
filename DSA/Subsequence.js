
// Given two non-empty arrays of integers, write a function that determines
// whether the second array is a subsequence of the first one.

// array sequence

// [1, 3, 4] form a subsequence of the array
// [1, 2, 3, 4], and so do the numbers
// A subsequence of an array is a set of numbers that aren't necessarily adjacent
// in the array but that are in the same order as they appear in the array. For
// instance, the numbers [2, 4].

// function SubSequence(arr,sub){
//   let pt1=0
//   let pt2=0
//   while(pt1<arr.length && pt2<sub.length){
//     if(arr[pt1]===sub[pt2]){
//       pt2++;
//     }
//   pt1++
//   }
//   console.log(pt2===sub.length)
// }
// SubSequence(arr,sub)