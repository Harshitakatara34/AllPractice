// // call used 



// // new  work three - 
// // 1 let this = {}, 
// // 2. return this, 
// // Creature.prototype.walk function link in Creature

// // Creature.prototype.walk = () =>{
// //   console.log(`Human can walk and ${this.breeth} together.`)  //"Human can walk and undefined together."
// //   // it is a arrow function
// // }

// //===================================
// // Creature

// Creature.prototype.walk = function(){
//     console.log(`Human can walk and ${this.breeth} take for breething.`)  //"Human can walk and undefined together."
//     // it is a arrow function
//   }
//   // "Human can walk and oxygn take for breething." - it will work because it is a normal function
  
//   function Creature(breeth, sleep){
//     // let this = {}  - no need constructor function 
//     this.breeth = breeth
//     this.sleep = sleep
//     // return this - no need in constructor function
//   }
  
//   let c1 = new Creature('oxygn', true)
//   c1.walk()  //"Human can walk and oxygn take for breething."
//   console.log(c1.breeth) // "oxygn"
//   console.log(c1.sleep)  // true
  
  
//   //=====================================
//   Object.setPrototypeOf(Human.prototype, Creature.prototype)
//   //=======================================
//   // Human
  
//   Human.prototype.run = function(){
//     console.log(`Human can make healthy so eat ${this.eat} and drink more ${this.drink} to make healthy and then running faster.`)
//   }
  
//   function Human(breeth, sleep, eat, drink){
    
//     Creature.call(this, breeth, sleep) // call used then not need // this.breeth = breeth
//                                                                  // this.sleep = sleep
//     //========================
//     // used call no need
    
//     // this.breeth = breeth
//     // this.sleep = sleep
   
//     //=============================
    
//     this.eat=eat 
//     this.drink = drink
    
//   }
  
//   let h1 = new Human('oxygn', true, 'Vage' , 'water')
//   h1.run(); // "Human can make healthy so eat Vage and drink more water to make healthy and then running faster."
//   console.log(h1.eat, 'h1')  // "Vage" "h1"
//   console.log(h1.drink, 'h1')  // "water" "h1"
  
//   //========================
//   console.log(h1.sleep, 'h1')  // true "h1"
//   console.log(h1.breeth, 'h1')   //  "oxygn" "h1"
//   h1.walk()    // "Human can walk and oxygn take for breething." 
  
  
  
  
  