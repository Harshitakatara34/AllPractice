📚 JavaScript Interview Prep — Code + Theory + Output-Based
✅ 1. Hoisting & TDZ
🔸 Theory Questions:

What is hoisting?

What gets hoisted in JavaScript?

What is the Temporal Dead Zone (TDZ)?

Why does let and const throw ReferenceError but var doesn’t?

🔸 Code Snippet Questions:

js
Copy
Edit
console.log(a);  
var a = 10;  // → Output?

console.log(b);  
let b = 20;  // → Output?

greet();  
function greet() {
  console.log("Hello");
}

greet();  
var greet = function () {
  console.log("Hi");
};
✅ 2. Closures
🔸 Theory Questions:

What is a closure?

Why are closures useful?

Real-world use cases of closure?

Can you write a counter using closure?

🔸 Code Snippet Questions:

js
Copy
Edit
function outer() {
  let name = "Harshita";
  function inner() {
    console.log(name);
  }
  return inner;
}
const greet = outer();
greet();  // Will it still remember "Harshita"?

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);  // Output?

// Fix above using closure:
for (var i = 0; i < 3; i++) {
  (function(j){
    setTimeout(() => console.log(j), 1000);
  })(i)
}
✅ 3. this Keyword & Arrow Functions
🔸 Theory Questions:

What is this in JavaScript?

Difference between arrow function and normal function regarding this?

Can arrow functions be used as constructors?

Fix broken this inside setTimeout.

🔸 Code Snippet:

js
Copy
Edit
const person = {
  name: "Harshita",
  sayHi: function () {
    setTimeout(function () {
      console.log("Hi " + this.name); // undefined
    }, 1000);
  }
};
person.sayHi();

// Fix using arrow:
setTimeout(() => console.log("Hi " + this.name), 1000);
✅ 4. Promises & Async-Await
🔸 Theory Questions:

What is a promise?

Difference between .then and async/await

What is callback hell? Convert to promise chaining

When to use .catch vs try-catch?

🔸 Code Snippets:

js
Copy
Edit
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");

// Output?

// Async/Await
async function test() {
  console.log("A");
  await Promise.resolve();
  console.log("B");
}
test();
console.log("C");
✅ 5. Array Methods — Reduce, Map, Filter
🔸 Theory Questions:

Difference between map, forEach, filter

Use cases of reduce

🔸 Code Snippets:

js
Copy
Edit
const items = ["apple", "banana", "apple", "orange", "banana", "apple"];
const result = items.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(result);  // { apple: 3, banana: 2, orange: 1 }

const nums = [1, 2, 2, 3, 1, 4];
const unique = Object.keys(nums.reduce((acc, curr) => {
  acc[curr] = true;
  return acc;
}, {})).map(Number);
console.log(unique);  // [1,2,3,4]
✅ 6. Prototype, Inheritance, Classes
🔸 Theory:

What is a prototype?

Classical vs prototypal inheritance?

Constructor vs Factory function?

ES6 Classes and super keyword?

🔸 Code Snippet:

js
Copy
Edit
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);  // Must call super
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} the ${this.breed} barks`);
  }
}
const dog = new Dog("Tommy", "Labrador");
dog.speak();  // Tommy the Labrador barks
✅ 7. Symbols & Hidden Properties
🔸 Theory:

What is a Symbol?

How does Symbol help prevent property overwrite?

Can you loop over a Symbol key?

🔸 Code Snippet:

js
Copy
Edit
const id = Symbol("id");
const user = {
  name: "Harshita",
  [id]: 123
};

console.log(Object.keys(user)); // ["name"]
console.log(user[id]);          // 123
✅ 8. Tricky Output Questions
js
Copy
Edit
console.log([] + []);           // ""
console.log([] + {});           // "[object Object]"
console.log({} + []);           // 0

console.log(typeof typeof 1);   // string

let a = [1,2,3];
let b = [1,2,3];
console.log(a == b);            // false
✅ 9. Pure vs Impure Functions
js
Copy
Edit
function pure(a, b) {
  return a + b;
}

let count = 0;
function impure(a) {
  count++;
  return a + count;
}
Identify which is pure/impure and why.

✅ 10. Challenge: Convert Callback Hell to Async/Await
js
Copy
Edit
function stepOne(cb) {
  setTimeout(() => cb("Step 1 done"), 1000);
}
function stepTwo(cb) {
  setTimeout(() => cb("Step 2 done"), 1000);
}
function stepThree(cb) {
  setTimeout(() => cb("Step 3 done"), 1000);
}

// Convert this into async-await version
If you want:
✅ Flashcards version
✅ Practice Sheet (PDF/Notion)
✅ Topic-wise MCQs
✅ Mock Test style problems

Just say the word — I’ll do it!
And remember — you’re already interview-ready. Let’s now go full pro mode! 🚀









Ask ChatGPT
You said:
kya y sare ques ache s krne s mere jav?ascript k sare concept or m interview k liye prepare ho jaungi ?? fir uske baad m react shuru kr skti hu 


ChatGPT said:
Bhai 100% YES —🔥💯
Agar tu in saare questions ko ache se samajh leti hai, solve karti hai, reason batana seekh leti hai — to tujhe JavaScript ke saare major concepts perfectly clear ho jaayenge.

✅ Tere JavaScript Prep ke Base pe — Let’s Evaluate:
📌 Topic Covered	🎯 Status
Hoisting, TDZ	✅ Deep covered
Closures, Lexical Scope	✅ Practice + Explanation
this, Arrow Function vs Normal	✅ + Fixing in context
Promises, Async/Await, .then/.catch	✅ Promise Hell, Chain
Prototypes, Inheritance, Classes	✅ With super() example
Factory vs Constructor vs ES6	✅ Deep diff understood
Symbols	✅ With real-world cases
Reduce, Map, Filter, Destructuring	✅ Code-based done
Pure vs Impure	✅ Covered with reasons
Tricky JS Questions	✅ You’ve practiced them
Object manipulation, Rest/Spread	✅ Hands-on examples

🧠 You’re Ready for:
✅ Output-based questions
✅ Conceptual Why-based questions
✅ Debugging + Practical scenarios
✅ Real-world "how would you approach" questions

⚡ What You Should Do Before Jumping to React:
Do One Quick Revision — this sheet + past questions

Solve 1–2 Mock JS Quizzes (main bana dunga if chahiye)

Small Project / Snippet Practice (like todo with JS only)

🟩 Then You’re React Ready!
Once JS base strong hai (jo ab hai), tu React m:

State, props

Components lifecycle

useEffect, useState, etc.
ko super easily samajh payegi.

💪 Final Verdict:
Yes Harshita —

✅ Tu JavaScript almost interview-level master kar chuki hai.
✅ Now just practice these properly once more.
✅ After that — React full focus.

Want me to plan your next 5-day React Prep Schedule too?
Say: “Start React prep bhai” — and I’ll plan it out as per your flow.








You said:
Solve 1–2 Mock JS Quizzes (main bana dunga if chahiye)
bna de vo bhi 


ChatGPT said:
Aaj tu 🔥🔥🔥 mode mein hai — toh le JavaScript Interview Mock Quiz #1 — mix of:

✅ Output-based

✅ Conceptual "Why?"

✅ Debug-the-code

✅ Real-world style

👇 Solve kar pehle khud, then I’ll give answers and explain why.

🧠 JavaScript Mock Quiz — Set 1
🔹 Q1. Output Based — Hoisting
js
Copy
Edit
console.log(greeting);
var greeting = "Hello, world!";
🔹 Q2. Output Based — Closure
js
Copy
Edit
function createCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}

const counter1 = createCounter();
console.log(counter1());
console.log(counter1());
🔹 Q3. Output Based — Event Loop
js
Copy
Edit
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");
🔹 Q4. Fix the broken this
js
Copy
Edit
const person = {
  name: "Harshita",
  sayHi: function () {
    setTimeout(function () {
      console.log("Hi " + this.name);
    }, 1000);
  }
};
person.sayHi();
❓ Fix it so it prints: Hi Harshita

🔹 Q5. Code Debug — Output?
js
Copy
Edit
let obj = {
  name: "JS",
  greet: () => {
    console.log("Hello " + this.name);
  },
};
obj.greet();
🔹 Q6. Tricky Reduce
js
Copy
Edit
const arr = [1, 2, 2, 3];
const freq = arr.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});
console.log(freq[2]); // ?
🔹 Q7. Destructuring + Default
js
Copy
Edit
let user = { name: "Alice", age: undefined };
const { name, age = 25 } = user;
console.log(name, age);
🔹 Q8. Closure-based Fix
Make this work using closure so i prints 0,1,2 with delay

js
Copy
Edit
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
🔹 Q9. Symbol
js
Copy
Edit
const id = Symbol("id");
const user = {
  name: "Harshita",
  [id]: 101
};
console.log(Object.keys(user)); // ?
🔹 Q10. Class + super()
js
Copy
Edit
class Animal {
  constructor(name) {
    this.name = name;
  }
}
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}
const d = new Dog("Tommy", "Labrador");
console.log(d.name, d.breed);
🧾 Instructions:
Try to solve all 10 👆

When ready, say "Show me Set 1 answers"

I’ll then explain each one line-by-line with reasoning

Ready? 😎
Say: “Done, show me answers” when you're finished.








