const uh1 ={
    name: 'ghi',
    nest:{
      age: 23,
      edica: {
        mainfun : function(){
          console.log(this, `My age is 23`)  // 'My age is 23'
        }
      }
    }
  }
  
  console.log(uh1.nest.edica.mainfun())