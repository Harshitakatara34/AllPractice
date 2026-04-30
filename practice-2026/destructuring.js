
// obj destructuring

const obj = {
    name : "summi",
    age: '26',
    city: 'Hyderabad',
    name: "Samreen"
}

// Duplicate keys allowed nahi hote logically
// But JS overwrite kar deta hai (name: "Samreen")

const {name: fullName, age=28, city} = obj
console.log(fullName, age, city)

//================

let ob = {
    name: 'g',
    age: 12
}
const name = ob.name;
const age = ob.age;

console.log(name, age)

const {name: name1, age:age1} = ob
console.log(name1, age1)

//================

let ob = {
    name: 'g',
    age:'a',
    city:{
        address:'begam ward',
        pincode: 23001
    }
}
const name = ob.name;
const age = ob.age;
const address = ob.city.address

console.log(name, age, address)

const {name: name1, age:age1, city: {address: add}} = ob
console.log(name1, age1, add )

//===============

const obj = {
  name: "Sam"
};

const { age = 28 } = obj;

console.log(age);

//================

const obj = {
  name: "Sam",
  age: undefined
};

const { age = 28 } = obj;

console.log(age); // 28, kyuki age ki value undefined hai, to default value assign ho jayegi

// ================

// null, 0, false, "" , inme same value hote hai, but undefined me value nahi hoti, isliye default value assign hoti hai

//================
// Array destructuring

let arr = [1, 3, 4, 2,]

const [a,b] = arr

console.log(a, b) // 1, 3

//===============

// rest operator- Gether the rest element into an array

let arr = [1, 3, 4, 2,]

const [a,b, ...rest] = arr

console.log(a, b, rest) // 1, 3, [4, 2]

//===============

// spread operator - Spread the array elements into individual elements

let arr = [1, 3, 4, 2,]

const [...spread] = arr

console.log(spread) // [ 1, 3, 4, 2 ]

//================
let arr = [1, 3, 4, 2,]


console.log(...arr) // 1, 3, 4, 2 

