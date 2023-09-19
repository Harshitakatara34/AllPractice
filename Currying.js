function add(a) {
    return function(b) {
      return function(c) {
        return a + b + c;
      }
    }
  }
  
  var result = add(1)(2)(3);
  console.log(result);

  
  // The function that returns anothher function is known as currying
  