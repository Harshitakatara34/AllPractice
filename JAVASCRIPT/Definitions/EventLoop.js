 // Event loop based three parameters

1. // Execution Stack//call stack

1.1 // Global Execution Context - (GEC)
// This is default evecution context in JS in which JS code starts its execution when file first loads in the browser.

1.2 // Execution Context 
1. // Sync Funtion - execute and remove the execution stack
2. // Async Function - execution context make => go to web Apis => after sync complete => message queue => event loop to => Execution Stack to execute after sync fun execute.

2. //Web Apis - Async function inside

3. //Message Queue - async function Web Apis to==> Message Queue to==> Execution Stack help of Event Loop

// LILO = stack
// FIFO = Queue




// Example

const fun2 = () =>{
    setTimeout(()=>{
        console.log('Execute fun2')
    },1000)
}

const fun1 = ()=>{
    console.log('Execute fun1')
    fun2()
    console.log('Ending fun1')
}
fun1()

//output 
        //  Execute fun1
        //  Ending fun1 
        //  Execute fun2