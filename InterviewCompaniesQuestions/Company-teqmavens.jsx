// 1.

// 0 in last

// let arr = [0,12,0,14];

// let filterAr = arr.filter(i => i!==0)
// console.log(filterAr)

// let filterArforZero = arr.filter(i=> i==0)

// console.log(filterArforZero)

// let val = [...filterAr, ...filterArforZero]

// console.log(val)



// 2.
// SQL injections what is?



// 3. Sql you know?



// 4. Reverse string. Without inbuilt function



// 5. You used the token and authentication from react achieved.



// 6.  Debouncing , Throttling



// 7. Functin1, 2, 3 , 4 and handle error in promice 

// function func1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Function 1");
//       resolve();
//     }, 1000);
//   });
// }

// function func2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Function 2");
//       resolve();
//     }, 1000);
//   });
// }

// function func3() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Function 3");
//       reject("Error in Function 3"); // Error here
//     }, 1000);
//   });
// }

// function func4() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Function 4");
//       resolve();
//     }, 1000);
//   });
// }

// // Calling in sequence using .then()

// func1()
//   .then(() => {
//     return func2();
//   })
//   .then(() => {
//     return func3();
//   })
//   .then(() => {
//     return func4();
//   })
//   .catch((error) => {
//     console.log("Caught Error:", error);
//   });

// Function 1
// Function 2
// Function 3
// Caught Error: Error in Function 3
// 👉 func4() run nahi hoga kyunki func3() ne reject kar diya.
//  👉 Error direct .catch() me chala gaya.




// 8. Api performance slow so how to increase 

// 🔹 1️⃣ Database Optimization
// Proper indexing lagao (frequently searched fields par)


// Unnecessary fields avoid karo (select use karo)


// Heavy queries optimize karo


// Aggregation pipeline efficient banao



// 🔹 2️⃣ Caching Use Karo
// Frequently used data ko cache karo


// Example: Redis


// Response cache karne se DB load kam hota hai



// 🔹 3️⃣ Pagination Lagao
// Ek hi baar me pura data mat bhejo


// Use: limit & skip


// Model.find().skip(0).limit(10);

// 🔹 4️⃣ Compression Enable Karo
// compression middleware use karo (Express me)


// Response size kam hoga



// 🔹 5️⃣ Async / Parallel Calls
// Independent APIs ko parallel run karo


// Use Promise.all()



// 🔹 6️⃣ Avoid Unnecessary Re-renders (Frontend)
// Proper memoization use karo (useMemo, useCallback)



// 🔹 7️⃣ Server Scaling
// Load balancer use karo


// Horizontal scaling (multiple instances)


// PM2 cluster mode use karo



// 🔹 8️⃣ Reduce Response Size
// Sirf required fields bhejo


// Large images ya files optimize karo


// 9. Let, var, const


// 10. ==, ===


// 11. … spread


// 12. Cors 


// 13. Authentication, authorization


// 14. Use ref


// 15. React application ki performance kaise bdaye


// 16. useMemo , useCallback


// 17. Props, state in react


// 18. Lazy loading, Suspense


// 19. React hooks 


// 20. code splitting , 


// 21. Asynchronus, scnchrones


// 22. Promises, 


// 23. Promise hell


// 24. Callback


// 25. Callc\backhell


// 26. Map, forEach


// 27. All https request


// 28. Optimised the backend code

