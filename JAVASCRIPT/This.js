const uh1 ={
    name: 'ghi',
    temp:function(){
      console.log(this)
    },
    nest:{
      age: 23,
      tempo:function(){
        console.log(this)
      },
      edica: {
        name:"harshi",
        mainfun : function(){
          console.log(this, `My age is 23`)  // 'My age is 23'
        }
      }
    }
  }
  console.log(uh1.nest.tempo())
  
  console.log(uh1.nest.edica.mainfun())
  console.log(uh1.temp())