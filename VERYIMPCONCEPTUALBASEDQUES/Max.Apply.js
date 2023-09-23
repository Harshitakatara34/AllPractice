// const num=[1,4,6,7,9]
// console.log(Math.max.apply(null,num)) // 9  // we are doing apply here to get the every element of array .
// here max method doesn't take whole array it wants the every element and then it find the max value so for that 
// first we are calling it by apply and in apply we can give first argument as the value of this but here this value is not required
// so that's why we are giving null here and the other value in apply we accepts as an array so we are giving the second array 
// num here 



// Other Method
// const num=[1,3,4,6]
// console.log(Math.max(...arr))//6



// const num=[1,4,6,8,10] //NaN(doesn't take array)
// console.log(Math.max(1,4,6,8,10))//10