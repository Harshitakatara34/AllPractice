function temp() {
    for (let i = 0; i < arguments.length; i++) {
      console.log(arguments[i]);
    }
  }
  
  temp.apply(null, [1, 2, 3, 4]);
  