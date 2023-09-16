// Nullish Operator will check only null or undefined 
let user1;
alert(user1 ?? "Anonymous"); // Anonymous
// here user is undefined that's why it is giving Anonymous it will work only for null & undefined

// here it will give john as user is not undefined r null
let user = "John";
console.log(user ?? "Anonymous"); // John (user is not null/undefined)