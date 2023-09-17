// write a factory function iPhone1 to create iPhone objects in bulk quantiy
// iPhone1 takes in ASIN, color, display, camera
// the object it creates has the following 
// properties: ASIN, color, display, camera
// methods: 
// dial - console logs "tring.. tring..."
// sendMessage - console logs "Sending message..."
// cameraClick - "Camera clicked"

// function iPhone1(ASIN, color, display, camera) {
//     let obj = {};
    
//     obj.ASIN = ASIN;
//     obj.color = color;
//     obj.display = display;
//     obj.camera = camera;
    
//     obj.dial = function() {
//       console.log("tring.. tring...")
//     }
    
//     obj.sendMessage = function() {
//       console.log("Sending message...")
//     }
    
//     obj.cameraClick = function() {
//       console.log("Camera clicked")
//     }
    
//     return obj;
//   }





// ###########----------------------------------------------------------------------------------------------------####

// Animal
//     ├── noOfLegs <number>
//     ├── vegetarian <boolean>
//     └── eat() <function that logs `eating...` >

// Write a factory function that can be used to create animal objects in bulk quantity. 

// every animal oject must have 2 properties: noOfLegs, vegetarian
// every animal must have 2 methods
// eat() // console.log(`eating...`)
// greet() // console.log(`Hi, I have <noOfLegs> legs.`)

function animal(noOfLegs, vegetarian) {
    let obj={}
    obj.noOfLegs=noOfLegs
    obj.vegetarian=vegetarian
    obj.eat=function(){
      console.log("eating.....")
    }
    obj.greet=function(){
      console.log(`Hi,I have Legs`)
    }
    return obj
  }
  
  // example invocation
  let a1 = animal(4,true);
  console.log(a1.eat())
  // a1.eat() // eating...
  // a1.greet() // Hi, I have 4 legs.
  
  
  let i1 = iPhone1(1,'B09X67JBQV',7.8,'IOS', '128mb','Gray','90mm','2.0 MP')
  
  i1.dial(); // "tring.. tring..."
  i1.sendMessage(); // "Sending message..."
  i1.cameraClick(); // "Camera clicked"