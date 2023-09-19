
// Lexical Enviroment (Global variable)
let name = 'john';

function sayHi(){
  let greet = "hi"
  console.log(greet)
}

sayHi()
console.log(name, sayHi)


//Lexical scope 
// outer point null and all given in diagram

// null  <- name = 'john' , sayHi()   <-   greet = 'h' 
                        //   ^     ^
                        //  |     |               ^
                        //   name   sayHi         |
                                        //    greet(console) 