// function f1(name, age) {
//     this.name = name;
//     this.age = age;
//   }
  
//   function f2(n, a) {
    
//     // hint: we are invoking f2 with the new keyword
//     // attach name & age to this without changing anything in f1
//     // use .call
//     console.log(this)
//     f1.call(this,n,a)
//   }
  
//   let j = new f2('John', 20); 
//   console.log(j)