
//=========  // 1 3 2 
console.log("1")

setTimeout(()=>{
    console.log('2')
}, 0)

console.log('3')

//========. // 1 2 3 - hold behaviour of async code

console.log("1")

const p = new Promise((res)=>{
    setTimeout(()=>{
    console.log('2')
    res()
}, 0)
})

p.then(()=> console.log('3') )

//========. // 1 2 3  - hold behaviour of async code with async await

console.log("1")

const p = new Promise((res)=>{
    setTimeout(()=>{
    console.log('2')
    res()
}, 0)
})

async function fn(){
    await p
    console.log('3')
}
fn()

//========. // 1 2 3  - hold behaviour of async code with async await

console.log("1")

async function run() {
    await new Promise((res)=>{
        setTimeout(()=>{
            console.log('2')
            res()
        }, 0)
    })
    console.log('3')
}

run()