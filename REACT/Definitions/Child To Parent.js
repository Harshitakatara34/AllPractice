// data will flow from parent to child but if we want to do it with child to parent



// child to parent by passing a callback function as a prop




import React, { useState } from 'react';
// Child component
function ChildComponent(props) {
  // Define a local state in the child component
  const [childState, setChildState] = useState('');

  // Function to update the parent's state with data from the child
  const sendDataToParent = () => {
    props.onDataReceived(childState);
  };

  return (
    <div>
      <input
        type="text"
        value={childState}
        onChange={(e) => setChildState(e.target.value)}
      />
      <button onClick={sendDataToParent}>Send Data to Parent</button>
    </div>
  );
}


// Parent component
function ParentComponent() {
  // Define a state in the parent component to store data received from the child
  const [parentState, setParentState] = useState('');

  // Function to receive data from the child and update the parent's state
  const onDataReceived = (data) => {
    setParentState(data);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Data received from child: {parentState}</p>
      <ChildComponent onDataReceived={onDataReceived} />
    </div>
  );
}

export default ParentComponent;






// If you want to send state data from a child component to a parent component,
//  you should define the state in the parent component and pass down functions 
//  as props to the child component to allow it to update the parent's state.


// Define
// / Ans- In React, you can send data from a child component to a parent component by passing a callback function as a 
// prop to the child component. The child component then calls this callback function and passes the data as an argument.
