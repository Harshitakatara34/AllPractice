// 8) Given an array of integers and a number k, find the maximum sum of a subarray of size k.

// *Time Complexity:* O(n)

// *Auxiliary Space:* O(1)


// Input  : arr[] = {10, 4, 13, 10, 23, 3, 1, 10, 20,1,1,10}
//          k = 4
// Output : 50


function maxSubarraySum(arr, k) {
    if (k > arr.length) {
      return null;
    }                    
    let maxSum = 0;
    let currentSum = 0;
  
    for (let i = 0; i < k; i++) {
      maxSum += arr[i];  
    }
    currentSum = maxSum;   
    for (let i = k; i < arr.length; i++) {
      currentSum = currentSum - arr[i - k] + arr[i];
      if (currentSum > maxSum) {
        maxSum = currentSum
      }
    }
    return maxSum;
  }
  
  // Example usage:
  const arr = [1,2,3,4];
  const k = 2;
  const result = maxSubarraySum(arr, k);
  console.log(result); // Output: 50