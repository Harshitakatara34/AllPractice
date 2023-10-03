

// ConstructorFun.prototype.SayHi = function(){
//     console.log(`How are you ${this.name}`)
//   }
  
  
  
//   function ConstructorFun(name, age){
    
//     // let this = {}
    
//     this.name = name;
//     this.age = age;
    
//     this.fun1 = function(){
//       console.log(`fun 1`)
//     }
    
//     // return this
    
//   }
  
//   let c1 = new ConstructorFun('Suman', 23)
//   console.log(c1.name) // Suman
//   console.log(c1.age) // 23
//   c1.fun1() // Hello Suman
//   c1.SayHi() //  How are you Suman
  
  
//   //=========================================
  
  
//   Object.setPrototypeOf(ConstructorFun2.prototype, ConstructorFun.prototype)
  
  
//   //=========================================
  
  
//   ConstructorFun2.prototype.sayBye = function(eid){
//     console.log(`Hello ${this.name} ${eid} Mubarak.`)
//   }
  
  
//   function ConstructorFun2(name, age, color, height){
    
    
//     ConstructorFun.call(this, name, age)
    
//     // this.name = name;
//     // this.age = age ;
    
    
    
//     this.color = color;
//     this.height = height;
    
  
//     this.fun2 = function(){
//       console.log(`function 2`)
//     }
    
    
//   }
  
//   let c2 = new ConstructorFun2("Sheela", 34, 'Fair', 'tall')
//   console.log(c2.color) // fair
//   console.log(c2.height) // tall
//   c2.fun2() // function 2
//   c2.sayBye('Eid') // Hello Sheela Eid Mubarak.
  
  
//   //====================================
  
//   c2.SayHi() //How are you Sheela
//   c2.fun1()  // fun 1
//   console.log(c2.name)  // Sheela
//   console.log(c2.age)   // 34