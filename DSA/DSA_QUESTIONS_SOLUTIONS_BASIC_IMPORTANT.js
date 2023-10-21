// maximum sum in subarray
// maxsumsubarray

// let arr=[1,2,3,4]
// let maxSum=arr[0]
// let currSum=arr[0]
// for(let i=1;i<arr.length;i++){
//   currSum=Math.max(arr[i],currSum+arr[i])
//   maxSum=Math.max(currSum,maxSum)
// }
// console.log(maxSum)

//======================================


// missing integer

// let arr=[1,4,6]
// let n=7
// let ans=[]
// let count=0
// while(count<=n){
//   if(arr.includes(count)){
//     count++
//   }
//   else{
//     ans.push(count)
//     count++;
//   }
// }
// console.log(ans)

//=================================


// fabbinoci series 

// function Fibonacci(n){
//   if(n<=1){
//     return n
//   }
//   return Fibonacci(n-1)+Fibonacci(n-2)
// }
// console.log(Fibonacci(4))


//==========================

// Fabinocci 

// function Fibonacci(n) {
//   if (n <= 1) {
//     return n;
//   }

//   let fibPrev = 0;
//   let fibCurrent = 1;

//   for (let i = 2; i <= n; i++) {
//     const temp = fibCurrent;
//     fibCurrent = fibPrev + fibCurrent;
//     fibPrev = temp;
//   }

//   return fibCurrent;
// }

// console.log(Fibonacci(4)); // Outputs: 3

//===============================

//Anagram

// function areAnagrams(str1, str2) {
//   // Remove spaces and convert to lowercase to make the comparison case-insensitive and ignore spaces.
//   str1 = str1.replace(/\s/g, '').toLowerCase();
//   str2 = str2.replace(/\s/g, '').toLowerCase();

//   // Check if the lengths of the two strings are different. If they are, they can't be anagrams.
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   // Sort the characters in both strings and compare them.
//   const sortedStr1 = str1.split('').sort().join('');
//   const sortedStr2 = str2.split('').sort().join('');

//   return sortedStr1 === sortedStr2;
// }

// // Example usage:
// const string1 = "listen";
// const string2 = "silent";

// if (areAnagrams(string1, string2)) {
//   console.log(${string1} and ${string2} are anagrams.);
// } else {
//   console.log(${string1} and ${string2} are not anagrams.);
// }

//===================================
// second max

// let arr=[1,2,6,8]
// let max=-Infinity
// let secondmax=-Infinity
// for(let i=0;i<arr.length;i++){
//   if(arr[i]>max){
//     secondmax=max
//     max=arr[i]
//   }
// else if(arr[i]>secondmax && arr[i]!=max){
//   secondmax=arr[i]
// }
// }
// console.log(secondmax)

//======================

// palindrom

// let ans=404
// let rem=0
// while(ans>0){
//   let rev=ans%10
//   rem=rem*10+rev
//   ans=Math.floor(ans/10)
// }
// console.log(rem)

// ===================

// Amstrom


//=========================

// prime number

// function Prime(n){
//   for(let i=2;i<n;i++){
//     if(n%i==0){
//       return false
//     }
//   }
//   return true
// }
// console.log(Prime(7))


//===============================

//pattren 

// function pattern(n){
//   let bag=""
//   for(let i=1;i<=n;i++){
//     bag=""
//     for(let j=1;j<=i;j++){
//       bag+="*"
//     }
//       console.log(bag)
//   }

// }
// pattern(4)


// =================================

// Patterns Program
//1.  

//     *
//     * *
//     * * *
//     * * * * 

// function pattern(n) {
//   for (let i = 1; i <= n; i++) {
//       let bag = ""
//     for(let j=1; j<=i; j++){
//       bag = bag + "*" + " "
//     }
//     console.log(bag)
//   }
// }

// pattern(4)


//==========================

// 2

// * * * *
// * * *
// * * 
// *  
  

// function pattern2(n2){
//   for(let i=1; i<=n2; i++){
//     let bag = ""
//     for(let j=i; j<=n2; j++){
//      bag = bag+"*"+ " "
//     }
//     console.log(bag)
//   }
  
// }

// pattern2(4)

//=============================
//3. 

// ****
//  ***
//   **
//    *

// function pattern3(n3) {
//   for (let i = 1; i <= n3; i++) {
//     let bag = "";
//     for (let k = 1; k < i; k++) {
//       bag = bag + " ";
//     }
//     for (let j = i; j <= n3; j++) {
//       bag = bag + "*";
//     }
//     console.log(bag);
//   }
// }

// pattern3(4);


//==============================
//4.

 //    *
 //   ** 
 //  ***
 // ****    

// function pattern4(n4) {
//   for (let i = 1; i <= n4; i++) {
//     let bag = "";
//     for (let k = 1; k <= n4-i; k++) {
//       bag = bag + " ";
//     }
//     for (let j = 1; j <=i; j++) {
//       bag = bag + "*" 
//     }
//     console.log(bag);
//   }
// }

// pattern4(4);


//==========================

//5.

 //    *
 //   * * 
 //  * * *
 // * * * *
 //  * * *
 //   * *
 //    * 

// function pattern5(n5) {
//   for (let i = 1; i <= n5; i++) {
//     let bag = "";
//     for (let k = 1; k <= n5-i; k++) {
//       bag = bag + " ";
//     }
//     for (let j = 1; j <=i; j++) {
//       bag = bag + "*" + " "
//     }
//     console.log(bag);
//   }
//   for (let i = 2; i <= n5; i++) {
//     let bag = "";
//     for (let k = 1; k < i; k++) {
//       bag = bag + " ";
//     }
//     for (let j = i; j <= n5; j++) {
//       bag = bag + "*" + " "
//     }
//     console.log(bag);
//   }
// }

// pattern5(4);


//==============================

// function maxSumSubaray(arr,n){

//     for(let i=0; i<n; i++){
//   let bag = []
//       for(let j=i; j<n; j++){
  
//         bag.push(arr[j])
  
//         console.log(bag)
//       }
//     }
//   }
  
//   maxSumSubaray([1,3,4,5,6], 5)


//================================

// Subarray


// function maxSumSubaray(arr,n){

//     for(let i=0; i<n; i++){
//   let bag = []
//       for(let j=i; j<n; j++){
  
//         bag.push(arr[j])
  
//         console.log(bag)
//       }
//     }
//   }
  
//   maxSumSubaray([1,3,4,5,6], 5)


//============================================

