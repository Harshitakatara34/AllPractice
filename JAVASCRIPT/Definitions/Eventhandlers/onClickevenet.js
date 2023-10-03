function Component() {
    const handle = (value) => {
      console.log(`Clicked with value: ${value}`);
    };
  
    const handleClick = (event) => {
      console.log(`Clicked at coordinates: ${event.clientX}, ${event.clientY}`);
    };
  
    return (
      <div>
        <button onClick={() => handle(100)}>Click with 100</button>
        <button onClick={handleClick}>Click and Log Coordinates</button>   // handleclick() because we can't directly invoke it 
                                                                                      {/* we are giving reference here */}
 </div>                                                              
    );
  }
  
//   In summary, use onClick={() => handle(100)} when you need to pass specific 
//   arguments to the event handler and use onClick={handleClick} when you don't 
//   need to pass arguments directly and want to optimize performance by avoiding
//    unnecessary function creation.




