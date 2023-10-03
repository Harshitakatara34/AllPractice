// // All iPhone1
// iPhone1.prototype.diel = ()=>{
//     console.log('tring...')
//   }
  
//   iPhone1.prototype.camera = () =>{
//     console.log('Camera 400xx300mp')
//   }
  
//   function iPhone1 (o, color, network){
//     let obj = o;
    
//     Object.setPrototypeOf(obj, iPhone1.prototype)  // tring...
//     obj.color = color;
//     obj.network = network;
    
//     obj.fun = () =>{
//       console.log('iPhone1')
//     }
    
//     return obj;
//   }
  
  
//   let i1 = iPhone1({}, 'Red', '3g')
  
//    console.log(i1)  
//   //{
//   //   "color": "Red",
//   //   "network": "3g",
//   //   "fun": () => {\n    console.log('Click it');\n  }
//   // }
  
  
//   i1.fun()   // Click it
  
//   console.log(i1.color)  // Red
//   console.log(i1.network)  // 3g
  
//   i1.diel()
  
//   i1.camera()  // 
  
  
//   //===============================
//   Object.setPrototypeOf(iPhone2.prototype, iPhone1.prototype)
//   //===============================
//   // All iphone2
  
  
//   iPhone2.prototype.videocall = () =>{
//     console.log('VC')
//   }
  
//   function iPhone2(color, network, blutooth){
    
//     let obj = {};
    
//     iPhone1( obj, color, network )   // obj, all access the properties 
    
//     Object.setPrototypeOf(obj, iPhone2.prototype)
    
//   // insted of this used - obj = o; and call iPhone(pass data)
//   //   obj.color = color
//   //   obj.network = network;
    
//     obj.blutooth = blutooth;
    
//     obj.fun2 = ()=>{
//       console.log('iPhone2')
//     }
//     return obj;
//   }
  
//   let i2 = iPhone2('Black', '4g', '2.5')
  
//   console.log(i2.blutooth)
//   i2.fun2(); //iPhone2
//   i2.videocall()  // VC
  
//   console.log(i2) 
  
//   // {
//   //   "color": "Black",
//   //   "network": "4g",
//   //   "blutooth": "2.5",
//   //   "fun2": () => {\n    console.log('iPhone2');\n  }
//   // }
  
//   // Prototype Work iPhone1 and iPhone2  Connect thats way i2 link and channe of iPhone1.prototype and iPhone2.prototype  
//   // so access camera and diel.
//   i2.camera()
//   i2.diel()
  
//   console.log(i2.color, 'i2')  //"Black" "i2"
//   console.log(i2.network, 'i2')  //"4g" "i2"
//   console.log(i2.blutooth, 'i2')  //"2.5" "i2"s
  
  
//   // Not Access i1 because not any chane to iPhone1 access the proprties of iPhone2
  
//   // console.log(i1.blutooth) // undefined
//   // // i1.videocall()  // TypeError