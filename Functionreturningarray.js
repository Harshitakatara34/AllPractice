// a function that returns an array of a number and a function
function useState(num) {
    let count = num;
    let setCount = function () {
      console.log(`setting the count: ${count}`);
    }
  
    return [count, setCount]
    // [20,function]
  }
  
  // way 1
  let resultArr = useState(20);
//   [20,function]
  console.log(resultArr)

  let resultCount = resultArr[0];
  console.log(resultCount)
  let resultSetFunction = resultArr[1];
  console.log(resultSetFunction())
  
//   resultSetFunction(); //-> setting the count: 20




  




// Way2
// Destructuring can be done in function also 

  // the destructuring way, super neat
//   let [count, setCount] = useState(30);
  
//   setCount(); //-> setting the count: 30
console.log(count)

