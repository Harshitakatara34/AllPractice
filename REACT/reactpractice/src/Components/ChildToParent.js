
// Ans- In React, you can send data from a child component to a parent component by passing a callback function as a 
// prop to the child component. The child component then calls this callback function and passes the data as an argument.

// Parent component
function ParentComponent(props) { 
    const handleChildData = (data) =>
     { 
        console.log(data);
};
return (
<div>
<ChildComponent sendData={handleChildData} />
</div>
);
}
// Child component
function ChildComponent(props) { 
    const sendData = () => {
props.sendData('Data from child');
};
return (
<button onClick={sendData}>Send Data</button>
);
}

export default ParentComponent;