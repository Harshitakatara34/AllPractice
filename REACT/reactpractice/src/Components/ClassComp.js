import React from "react";
class  ClassComp extends React.Component {


  constructor()
  {
    super();
    this.state={
      count:1
    }
  }

 render()
 {
    console.log("jump from class comp")
  return (
    <div className="App">
      <button 
      onClick={()=>{this.setState({count:1})}}
      >Update Count</button>
    </div>
  );
 }
}

export default ClassComp;