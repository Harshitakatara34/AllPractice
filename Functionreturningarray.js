// a function that returns an array of a number and a function
function useState(num) {
    let count = num;
    let setCount = function () {
      console.log(`setting the count: ${count}`);
    }
  
    return [count, setCount]
  }
  
  // way 1
  let resultArr = useState(20);
  let resultCount = resultArr[0];
  let resultSetFunction = resultArr[1];
  
  resultSetFunction(); //-> setting the count: 20
  
// Way2

  // the destructuring way, super neat
  let [count, setCount] = useState(30);
  
  setCount(); //-> setting the count: 30