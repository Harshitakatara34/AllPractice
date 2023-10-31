// Controlled components have their state managed by the application, 

                // or

// A controlled component is a form element (such as an input field) whose value is controlled by the state of the application.


//Example

// import React, { Component } from 'react';

// class ControlledComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { inputValue: '' };
//   }

//   handleInputChange = (e) => {
//     this.setState({ inputValue: e.target.value });
//   }

//   render() {
//     return (
//       <input
//         type="text"
//         value={this.state.inputValue}
//         onChange={this.handleInputChange}
//       />
//     );
//   }
// }
