
// Questions -
//  bacchanify()
// you should be able to invoke arr.bacchanify()
//it will give you back a new array
// in every item ji will be appended.
// result output: ["one ji", "two ji", "three ji"]

//================================================================
//Solution

let arr = ["one", "two", "three"];

Array.prototype.bacchanify = function(){
             
  let newdata = this.map((item)=> item + ' ji')
   return newdata
}


let newArr = arr.bacchanify();   
console.log(newArr)   // ["one ji","two ji","three ji"]
console.log(arr)     // ["one","two","three"]



//====================================

let arr2 = ["A", "O", "Suno"];

let newArr2 = arr2.bacchanify()
console.log(newArr2)  // ["A ji","O ji","Suno ji"]
console.log(arr2)        //  ["A", "O", "Suno"];



//==========================================

// Another Solution 

let arr1 = ["one", "two", "three"];


Array.prototype.bacchanify = function(){
  
  let newArr = arr1.map((item) => item+' ji')
  console.log(newArr)

}
 
arr1.bacchanify()   // ["one ji","two ji","three ji"]
 

