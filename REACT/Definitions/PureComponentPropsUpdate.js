
// Parent Component
// import './App.css';
// import React from 'react'
// import Counter from './Counter'
// class  App extends React.Component {
//   constructor()
//   {
//     super();
//     this.state={
//       count:1
//     }
//   }
//  render()
//  {
//   return (
//     <div className="App">
//      <Counter count={this.state.count} />
//       <button 
//       onClick={()=>{this.setState({count:this.state.count+1})}}
//       >Update Count</button>
//     </div>
//   );
//  }
// }

// export default App;



// Counter.js

// import React from 'react'
// class Counter extends React.PureComponent{
//     render()
//     {
//         console.warn("counter re-render")
//         return(
//             <div>
//                 <h1>Counter Component {this.props.count}</h1>
//             </div>
//         )
//     }
// }

// export default Counter



//Here we are updating the value of state so whenever the state get updated only then the child Component re-render because of 
// PureComponent but if we will not use Pure component it will re-render everytinme again and again whether state will update or not .
