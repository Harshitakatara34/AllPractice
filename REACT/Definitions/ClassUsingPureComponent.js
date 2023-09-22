import './App.css';
import React from 'react'
class  App extends React.Component {
  constructor()
  {
    super();
    this.state={
      count:1
    }
  }
 render()
 {
  return (
    <div className="App">
      <button 
      onClick={()=>{this.setState({count:1})}}
      >Update Count</button>
    </div>
  );
 }
}

export default App;

//In this code our Component will re-render again and again as we are not changing the value of our state still it is rendering again and again 
// onclicking event so to avoid this behaviour we use PureComponent