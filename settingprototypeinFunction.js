// // just a made up example to demonstrate object creation & inheritance.

// iPhone1.prototype.dial = function(){
//     console.log('tring.. tring...');
//   }
  
//   iPhone1.prototype.sendMessage = function() {
//     console.log('Sending message...');
//   }
  
//   iPhone1.prototype.cameraClick = function() {
//     console.log('Camera clicked')
//   }
  
//   function iPhone1(generation, ASIN, weight, OS, RAM, color, display, camera) {
//     let obj = {};
//     Object.setPrototypeOf(obj, iPhone1.prototype);  
      
//     obj.generation = generation;
//     obj.asin = ASIN;
//     obj.weight = weight;
//     obj.os = OS;
//     obj.ram = RAM;
//     obj.color = color;
//     obj.display = display;
//     obj.camera = camera
  
//     return obj;  
//   }
  
  
//   let i1 = iPhone1(1,'B09X67JBQV',7.8,'IOS', '128mb','Gray','90mm','2.0 MP');
  
//   // --------------------------------
//   // bluetooth feature added
//   // 3g Internet feature added
//   // high resolution capture added
//   // -------------------------------- 
  
//   Object.setPrototypeOf(iPhone2.prototype, iPhone1.prototype)
  
//   iPhone2.prototype.connectWithBlutoothDevice = function(){
//     console.log('Connecting with bluetooth divice...')
//   }
  
//   iPhone2.prototype.connectWithInternet = function(){
//     console.log('Connecting with 3g Internet...')
//   }
  
//   iPhone2.prototype.cameraClick = function(){
//     console.log('Clicking a high resolution pic...')
//   }
  
//   function iPhone2(generation, ASIN, weight, OS, RAM, color, display, camera, bluetooth, internetType){
//     let obj = {};
//     Object.setPrototypeOf(obj, iPhone2.prototype); 
      
//     obj.generation = generation;
//     obj.asin = ASIN;
//     obj.weight = weight;
//     obj.os = OS;
//     obj.ram = RAM;
//     obj.color = color;
//     obj.display = display;
//     obj.camera = camera;
      
//     obj.bluetooth = bluetooth;
//     obj.internet = internetType;
  
//     return obj;  
//   }
  
//   let i2 = iPhone2(2,'B09dfgsgQV',9.8,'IOS 2', '256mb','Gray','99mm','4.0 MP', '2.0', '3g');