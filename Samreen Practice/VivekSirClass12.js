// async and sync function
1.
function chips() {
    console.log('sync: chips');
}

function pizza() {
    setTimeout(()=>{
        console.log('async: pizza');
    }
    , 0);
}

function main() {
    chips();
    //1. sync: chips
    pizza();
    //5. async: pizza
    chips();
    //2. sync: chips
    chips();
    //3. sync: chips
    chips();
    //4. sync: chips
}

// main();

//===============
// async and sync function

function syncfun() {
    console.log('Hii')
}

function asyncfun() {
    setTimeout(()=>{
        console.log('Byee')
    }
    , 1000)

    syncfun()
}

function main1() {
    syncfun()
    syncfun()
    syncfun()
    asyncfun()
    asyncfun()
    syncfun()
}

// main1()

//=======================
//this keyword
2.
function sayGoodbye() {
    console.log("Good bye! ", this);
    //2. window
}

function sayHello() {
    console.log("Helloo! ", this);
    //1. window
    sayGoodbye();
}

// sayHello();

//==========================
//this keyword with async
function thiskey() {
    console.log('This keyword Show', this)
    //1 window
}

function thisAsync() {
    setTimeout(()=>console.log('Abhi', this), 1000)
    //2 window after 1 sec
    thiskey()
}

// thisAsync();

//===========================
function main() {

    function sayRegularHello() {
        console.log("Regular Hello ", this);
        //window
    }

    sayRegularHello();

    var sayArrowHello = ()=>{
        console.log("Arrow Hello ", this);
        // {name: 'Vivek'}
    }
    ;

    sayArrowHello();
}

// main.call({name: 'Vivek'})

//=================================

function callmain() {

    function hinormalfn() {
        console.log('Hell', this)
        //window
    }

    hinormalfn()

    const hiarrowfn = ()=>{
        setTimeout(()=>console.log('Heaven', this), 1)
        //window
    }
    hiarrowfn()
}

// callmain({name:'summi'}) //without used call Arrow function not given access the value of parent.

//====================================

function callmain1() {

    function hinormalfn1() {
        console.log('Hell', this)
        //window
    }

    hinormalfn1()

    const hiarrowfn1 = ()=>{
        setTimeout(()=>console.log('Heaven', this), 1)
        //window
    }
    hiarrowfn1()
}

// callmain1.apply([1,2,3]) //without used apply Arrow function not given access the value of parent.

//=====================================
// templet litrals

3.
let name = "Ilya";
// alert( `hello ${1}` );     //hello 1
// alert( `hello ${"name"}` ); //hello name
// alert( `hello ${name}` ); // hello Ilya

//========
const n = [1, 2, 3]
const p = "SUM"
// console.log(`${n}`)  //1,2,3
// console.log(`${p}`)  // SUM

//======================
//operator
4.
let a = 2;
let x = 1 + (a *= 2);

// console.log(a,x);   // 4 5

//====================
// ||, &&

// console.log( null || (2 && 3) || 4 );       // precedance solve 1. &&  then || 
// 3
// falsy value - 0, "", false, NaN, undefined, null 
// || first find true val and no true then sadly last false.
// && first find false val and no false then sadly last true.

//=====================
//nalish operator
5.
// a  ?? b
let y = (1 && 2) ?? 3;

// alert(y); // ?? - undefined, null - then b or any other then a.

//============

var g = null;
let v = g ?? 'hello'
// console.log(v)

//================
6.

//declare 
let firstName;
// initialize or assign 
firstName = 'John'
// declare & initialize 
let lastName = 'Smith';

//================
7.
// Primitives (value types)
// string, number, boolean, undefined, null, bigInt, symbol

// Non Primitives (reference types)
// object, array, function

//========================
// data type
8.

let k = 123567995773227745696977070n;
let k1 = [1, 3, 4]
// console.log(k)
//bigInt
// console.log(typeof k)
// console.log(typeof k1)   //object - every thing in js is an object or it is object oriented language
// `2^53-1)`  (that’s `9007199254740991`), or less than `-(2^53-1)`for negatives.

//===============
function main() {
    // console.log(this.name)
    function sayRegularHello() {
        console.log("Regular Hello ", this);
    }

    sayRegularHello();

    var sayArrowHello = ()=>{
        console.log("Arrow Hello ", this);
    }
    ;

    sayArrowHello();
}
// main.call({name: 'Vivek'});

//-==============

let obw = {
    a: 'summi',
    greet: function() {
        console.log('hii', `${this.a}`)
        return 'ji'
    }
}

// setTimeout(obw.greet.bind(obw))   // again cal then return value 
// setTimeout(obw.greet.call(obw))   // need to again call or call back function inside setTimeout.

// console.log(obw.greet)  // function return
// console.log(obw.greet())  // function return value = ji

//=================

// console.log(typeof null) //object
// console.log(typeof NaN , "line 286") // number
// console.log(typeof undefined) //undefined

let arr = [1.3]
// console.log( Array.isArray(arr) , 'line 266') //
//Array.isArray(arr) - true

const val = function() {// console.log('Bye')
}

// console.log(typeof val)  //function

//=========

// console.log( null || (2 && 3) || 4 );   //3 
// null || 3 || 4  => 3

// 0, "", undefined, NaN, null, false

//============
// let x3 = (1 && 2) ?? 3;
// console.log(x3);

//====================
// let xyz = undefined;
// console.log(xyz)
//undefined

//================

let y2 = Symbol('hello');
// console.log( typeof y2,'symbol') //symbol

let z = null;
// a bug in JS :

// console.log(typeof z) //object

//====
// 1. array
//2. null 
//3 object

//====
//NaN - number

//==============

const aVeryBigNumber = 1234567890123456789012345678901234567890;
// console.log(aVeryBigNumber)

//===========================

let a3 = null;
(a3) ?? 'You are nully'
// You are nully

let a4 = "";
// let a4 = 3,4,5, 0, "", NaN  - output = a4 when null, undefined -output = next value "You are nully" line 321
(a4) ?? 'You 0'
// 0

//=======================

// same as var
let c
// undefined
c = 5;
//dynamic type
// console.log(c)

//====================

//let var const scope

1.
//let

let scopelet = 5;
// console.log(scopelet, '1')  //5 

function scope() {
    // console.log(scopelet)   // Referance error  
    let scopelet = 9;
    // console.log(scopelet, '2')   //9 
    if (true) {
        // console.log(scopelet)      // Referance error
        let scopelet = 334;
        // console.log(scopelet, '3')     //334
    }
    // console.log(scopelet, '4') // 9
}

if (true) {
    // console.log(scopelet, '6')   // Referance error
    let scopelet = 33;
    // console.log(scopelet, '5')    //33
}

scopelet = 50;
// console.log(scopelet, '6')     //50 
scope()
// console.log(scopelet, '7')    //50

function gn() {
    // console.log(k)
    // Reference error - k is not defined
    let k = 33
}

// console.log(k)
// Reference error - k is not defined

//=========================
2.
// var

var scopevar = 5;
// console.log(scopevar, '1')  //5 

function scope() {
    // console.log(scopevar, '2')   // undefined - functional scope
    var scopevar = 9;
    // console.log(scopevar, '3')   //9 
    if (true) {
        // console.log(scopevar, '4')      // 9
        var scopevar = 33;
        // console.log(scopevar, '5')     //33
    }
}

if (true) {
    // console.log(scopevar, '6')   //5
    var scopevar = 33;
    // console.log(scopevar, '7')    //33
}

scopevar = 50;
// console.log(scopevar, '8')     //50 
scope()
// console.log(scopevar, '9')    //50  

function gn() {
    var kr = 33
}
gn()
// console.log(kr)   // Reference error - k is not defined

//====================================

//const 
//allow mutate in const or vali and objval both are updated becouse of reference

const vali = {
    name: "jummu",
    city: 'Agra'
}

// vali = objval // reference error

const objval = vali
// mutate

objval.name = "Sagar"
// console.log(objval, vali)

//===============
//mutate array and reference in memory jb and jb2 are both updated
const jb = [1, 4, "DUM"]

const jb2 = jb;
jb2.push(66)

// console.log(jb, jb2)

//=================

// const sarr = [30, 22, 44];
// sarr.push('juned')

// sarr = [3, 44, 903, "ndd"]  

// console.log(sarr)     // error

//===========================

let sarr = [30, 22, 44];
sarr.push('juned')

sarr = [3, 44, 903, "ndd"]
// error

// console.log(sarr)   //  [3, 44, 903, 'ndd']

//================

function nullar() {
    return null
}
nullar()
//null

//===========================

function objRet(name, age) {
    let obr = {};
    obr.name = "vijay"
    obr.age = 32
    return obr
}

objRet()
objRet("ray", 42)

//===================
// browser - javascript engine - to excute code
// v8 - chrome used engine
// fire fox - spiderMonkey

//===================

// this === window  // true

//=====================

// reference premitive and non premitive

//premitive
let str1 = 'hellostr'
let str2 = str1
let str3 = str2;
 
str3 = 'str3hii'   // str3hii
// console.log(str1, str2, str3)   //hellostr hellostr str3hii

//str3 is changed totally

//used stack to store is in memory saparatily


//non premitive
let arrs = [1, 3,]
let arrs3 = arrs
arrs3.push(88)
// console.log(arrs, arrs3)  // [1, 3, 88] , [1, 3, 88]

// both changed because of reference 
// used stack and store valur [1, 3] like this in heap memory.
// stack, heap

// works , obj, array, function
//==========================

//============
let jk = [12,33]
let kj = [12,33]

// console.log(jk, kj)    // both are not a part of reference



//==================


// truly and falsy 

//   && = first falsy value find and not find then last truely given value
// || =  first truely value find and not find then last falsy given value

// falsy = 0, false, "", NaN, undefined, null


//========================

let xf = 0;
xf ? 'p' : 's'


// mean 0 falsy then return false side 's' 


//==============================


//=================================
// for in loop
// main

let objinLoop = {name: 'title' , age: 33 , greet: function(){
  // console.log(this)
}}

for( let key in objinLoop){
   // console.log(key)  // name, age
   // console.log(objinLoop[key])  
}

  // console.log(objinLoop.greet())   //{name: 'title', age: 33, greet: ƒ}


let arrinLoop = [1, 3, 44, 33, 22, "dolly", false]

for( let key in arrinLoop){
   // console.log(key)  // 0, 1, 2, 3, 4, 5, 6 - index
    // console.log(arrinLoop[key])  // 1, 3, 44, 33, 22, "dolly", false - value
  
}


//============================
//for of 

// let objofLoop = {vega: 'Patato', price:34}

// for(let v of objofLoop){
//   console.log(v)    //The for...of loop is used to iterate over the values of iterable
//                    //objects like arrays, strings, maps, sets, etc., but not plain objects.
// }

//=========================
// Object.keys
let objofLoop = {vega: 'Patato', price:34}

for(let v of Object.keys(objofLoop)){
  // console.log(v)    // vega price
}

//=================
//for of in array
let arrofLoop = [1, 3, 4, 5,6]
for(let n of arrofLoop){
  // console.log(n)   // 1, 3, 4, 5,6 - given value not index
}


//=======================
//Arrow function

let greet = () =>`Go to Hell! dont repeat this sentences of any persone because hell 
  is very dengerous place and always thing how to protect. Always pray to Allah.`


// console.log(greet())

//===========

// let greet1 = () => {name:'rr'}  // undefined
// let greet1 = () => ({name:'rr'} )  //  {name: 'rr'} // {} it will confused because it dont know object it will things {} breactet and you not used return 
 
// console.log(greet1())  // {name: 'rr'}



//====================

// let gre = (name) => `Hello ${name}`;
// let gre = name => `Hello ${name}`;

// console.log(gre('gunna'))  //Hello gunna

//==============
//IFE

// (age => `Hello I am ${age} years old`)(23); // 'Hello I am 23 years old'



//=====================
// //obj shorthand

// let objshorthand = (name, age) => ({
//   name: name,
//   age : age
// })

// objshorthand('Summi', 23)  // {name: 'Summi', age: 23}


//    or

let objshorthand = (name, age) => ({
  name,
  age
})

// objshorthand('Summi', 23)  // {name: 'Summi', age: 23}


//=================
//rest operator

let resop = (name, age, level, ...rest) => { 
  // console.log(name, age, level, rest)    //samreen 23 simple (3) [2, 3, Array(3)] // in array all values
}

resop("samreen", 23, 'simple', 2, 3, [1,2,"sum"])

// 2. 
function resop1 (a, b, c, ...d){
  return console.log(a, b, c, d)
}

// resop1(1, 2, 3, 33, 44, 'summi', {name: 'jalebi'})   //1 2 3 (4) [33, 44, 'summi', {…}]
//..........................

//==============
// spread
// fail reference of non premitive using spread
let sparr = [1, 2, 3,4]
let sparr2 = [...sparr]
sparr2.push(34)
// console.log(sparr, sparr2)  //  [1, 2, 3, 4] ,  [1, 2, 3, 4, 34]


//=====================================

// //symbal
1.
let synbolval = Symbol('Hii I am Symbol')    //Symbol(Hii I am Symbol)

// console.log(synbolval)   //Symbol(Hii I am Symbol)

//obj symbol

2.

// let sbol = {
//     name: 'symbal',
//     [symtitle] : 44
// }


// console.log(sbol[symtitle])


//==============
// Create an object with a symbol property
let mySymbol = Symbol()

const person = {
  name: 'John',
  age: 30,
  [mySymbol]: 'Private information'
};

// Accessing the regular properties 
// console.log(person["name"]); // John   
// console.log(person.age); // 30

// Accessing the symbol property
// console.log(person[mySymbol]); // Private information



//================================

let as = [1,2,3]
let as1 = [1, 2,3 ];
// console.log((as === as1) ? 'yes' : 'no')  // no


let sy1 = Symbol('Hi')  
let sy2 = Symbol('Hi')

// false
// let res = (sy1 === sy2) ? 'true' : 'false'

// console.log(res)  //false;

if(sy1 === sy2){
    // console.log('true')
}else{
    // console.log('false')
}  

// It given false because symbol are unique, but it is premitive type



//=================================

let symbol1 = Symbol()

let obj = {
  [symbol1]: 'world'
}

// obj[symbol1] = 'Something else'


// console.log(obj)   //{Symbol(): 'Something else'}
// delete obj[symbol1]   
// console.log(obj)    // {}



//==============================
// // this
// let feelingData = {
//  tem : 'hi',
// addData: function (name, feeling) {
// // console.log(this.tem)   //hi
// console.log(feelingData.tem)  
//     this[name] = feeling;

//     // console.log(this)  
//   }
// }

// console.log(feelingData.tem)

// feelingData.addData('John', 'bad');
// feelingData.addData('Michael', 'good');
// feelingData.addData('John', 'bad');
// feelingData.addData('John', 'great');
// feelingData.addData('mu', 'great');


// console.log(feelingData);
// // John: "great"
// // Michael: "good"


//========================

let feelingData12 = {
  addData: function (name, feeling) {
    this[Symbol(name)] = feeling;
  }
}

// feelingData12.addData('John', 'bad');
// feelingData12.addData('Michael', 'good');
// feelingData12.addData('John', 'bad');
// feelingData12.addData('John', 'great');

// console.log(feelingData12);  //{Symbol(John): 'bad', Symbol(Michael): 'good', Symbol(John): 'bad', Symbol(John): 'great', addData: ƒ}

// Symbol(John): "bad"
// Symbol(John): "bad"
// Symbol(John): "great"
// Symbol(Michael): "good"



//=====================


// let passcodeSym = Symbol('passcode');
// let roleSym = Symbol.for('role');

// let obj45 = {
//   name: 'John doe',
//   age: 36,
//   [passcodeSym]: 'world',
//   [roleSym]: 'trainee'
// }

// out = {name: 'John doe', age: 36, Symbol(passcode): 'Hello', Symbol(role): 'developer', Symbol(passcode): 'Hello'}
// obj45[Symbol('passcode')] = 'Hello'; // it is add  Symbol(passcode): 'Hello' and 
// obj45[Symbol.for('role')] = 'developer'; 
// obj45[passcodeSym] = 'Hello'; // 

// console.log(obj45)


//============================

let passcodeSym = Symbol('passcode');
let roleSym = Symbol.for('role');

let obje = {
  name: 'John doe',
  age: 36,
  [passcodeSym]: 'world',
  [roleSym]: 'trainee'
}

obje[Symbol('passcode')] = 'Hello'; // will not overwrite but create a new property with the same descriptor
obje[Symbol.for('role')] = 'developer'; // will overwrite the existing one with the same descriptor

//======
// console.log(obje.passcodeSym); // undefined
// console.log(Object.getOwnPropertyNames(obje)); // (2) ['name', 'age']

for (const key in obje) {
  // console.log(key);
}
// name
// age

// console.log(Object.keys(obje))     //  ['name', 'age'] , not add symbol
// console.log(Object.entries(obje))  //  [ [ 'name', 'John doe' ], [ 'age', 36 ] ]
// console.log(JSON.stringify(obje))  // {"name":"John doe","age":36}


// console.log(Object.getOwnPropertySymbols(obje));
// (3) [Symbol(passcode), Symbol(role), Symbol(passcode)]

// console.log(Reflect.ownKeys(obje));
//(5) ['name', 'age', Symbol(passcode), Symbol(role), Symbol(passcode)]



//====================
// String conversion
let original = 45;
let converted = String(original);

// console.log(converted)   //45
// console.log(typeof converted)  //string



//============
// Number edge cases
let temptt;
let hid  = null
let gh= true
// console.log(+gh) // 1
// console.log(+hid) // 0
// console.log(temptt)  // undefined
// console.log(+(temptt))  //NaN
// console.log(Number(temptt))  //NaN



//============
//ParseInt
// console.log(parseInt('Rs.'))  // NaN

// console.log(parseInt('400 Rs.'))  // 400


//==============
// boolean

// console.log(Boolean("ABC")); // true
// console.log(Boolean("")); // false

// console.log(!!("ABC")); // true
// console.log(!("")); // true


//===================
// && , || 
let bankbalance = 100;
let accountactive = false;

// (bankbalance > 0) && (accountactive) && console.log('not active');  //false


//===========================
let arrr = [1, 3, 5, 7, 9];
let ad = {...arrr};   
 
// console.log(ad, arrr); // {0: 1, 1: 3, 2: 5, 3: 7, 4: 9} ,  [1, 3, 5, 7, 9]

//COPY - THEN MAKE CHANGES 



//=========================
// rest operator helps collect all the arguments in an array
function doSomething(first, second, ...rest) {
  // console.log(first, second, rest); // rest is guarenteed to be an array
}

doSomething('one', 'two', 'three', 'four', 'five'); //one two  ['three', 'four', 'five']

// rest return new aRRAY



//==========================

//Desturecture





//=============================
// Nested Object

const uh1 ={
    name: 'ghi',
    temp:function(){
      console.log(this)
    },
    nest:{
      age: 23,
      tempo:function(){
        console.log(this)
      },
      edica: {
        name:"harshi",
        mainfun : function(){
          console.log(this, `My age is 23`)  // 'My age is 23'
        }
      }
    }
  }
  // console.log(uh1.nest.tempo())
  
  // console.log(uh1.nest.edica.mainfun())
  // console.log(uh1.temp())


//================
// hosting
// console.log(X)   // X is not define

// function host(){
//   var X = 220;
//  return 'hi'  
// }

// host()


//====================


const subob = {name:'d', age: 23}

for (let gg of Object.entries(subob)){
  console.log(gg)   
}


const subjects = ['javascript', 'html', 'css'];

for (let subject of subjects) {
  console.log(subject);
}




//=====================

// Errors let, const and var and debugger

1.
// debugger;

// const av1 = 152;
// av1 =2;  //  TypeError: Assignment to constant variable.
// console.log(av1)


2.
// const av1 = 152;
// av1 =2;  //  TypeError: Assignment to constant variable.
// console.log(av1)


3.
//====
// console.log(av3) //ReferenceError: av3 is not defined
// let av3 = 234


4.
//====
// let av4 = 34;
// let av4 =88; 
// SyntaxError: Identifier 'av4' has already been declared


//========================

//hosting


// function fb (){
//   console.log('hi')     //  hii undefined
// }

// console.log(fb()) 
// fb()



//====================

// console.log(a);     // undefined
// var a = 10;

// function foo() {
//   console.log(b);      // undefined
//   var b = 20;
// }

// foo();


//========================

// var a;
// console.log(a); // 'a' is declared but not assigned a value yet, so it's undefined
// a = 10;

// function foo() {
//   var b;
//   console.log(b); // 'b' is declared but not assigned a value yet, so it's undefined
//   b = 20;
// }

// foo(); 

// undefined undefined


//========================
// Dought
// let arrt=[1,3,5]

// let bh = arrt.forEach((item)=>{
//   return arrt
// })

// console.log(bh)
