// *2) Check if Palindrome* - Checks if the string entered by the user is a palindrome. That is that it reads the same forwards as backward like “racecar”


let str="racecar"
function Palindrome(str){
  let bag=""
  for(let i=str.length-1;i>=0;i--){
    bag+=str[i]
  }
(bag===str)?console.log("Palindrome"):console.log("NotPalindrome")
}
Palindrome(str)


