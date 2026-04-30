
// closer is a function that retains the variable access from its outer scope and outer function finished the execution of the code.

// The scope is determine variable position in the code

const outer = () =>{
    
    const a = 10;
    
    return () =>{
       return a
    }
}

console.log(outer()()) // 10




const outer = () =>{
    
    let a = 10;
    
  const inIncr = () =>{
      a++
      console.log("inc",a)
  }
    
 const decInc = () =>{
     a--
       console.log("dec",a)
 }
 
 return {
     inIncr , decInc
 }
}

const a1 = outer()
a1.inIncr()
a1.inIncr()
a1.decInc()
const a2 = outer()
a2.inIncr()
a2.decInc()

