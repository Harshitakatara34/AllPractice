// *6)Find Second largest element in an array*

// Input:
// N = 6
// Arr[] = {12, 35, 1, 10, 34, 1}
// Output: 34
// Explanation:The largest element of the
// array is 35 and the second largest element
// is 34.


// Input:
// N = 3
// Arr[] = {10, 5, 10}
// Output: 5
// Explanation:The largest element of
// the array is 10 and the second
// largest element is 5.



let max=-Infinity
let secondmax=-Infinity
for(let i=0;i<Arr.length;i++){
  if(Arr[i]>max){
    secondmax=max;
    max=Arr[i]
  }
  else if (Arr[i]>secondmax&& Arr[i]!=max){
    secondmax=Arr[i]
  }

}
  console.log(secondmax)

