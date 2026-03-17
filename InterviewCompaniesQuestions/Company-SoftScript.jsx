// Lazy loading /s 

// import React, { Suspense } from "react";

// const Home = React.lazy(() => import("./Home"));

// function App() {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <Home />
//     </Suspense>
//   );
// }


// Home component loads only when required.
// Lazy Loading means loading data or components only when they are needed, not at the start.



// For imgae
<img src="image.jpg" loading="lazy" />

// Q: Difference between Lazy Loading and Eager Loading?
// 👉 Lazy = load when needed
// 👉 Eager = load everything at start

/////////=============================================

// React – Fetch Data with async/await + try/catch

// import { useEffect, useState } from "react";

// function Users() {
//   const [data, setData] = useState([]);   // array state
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch("https://api.example.com/users");
//         const result = await res.json();
//         setData(result);   // set array data
//       } catch (err) {
//         setError("Something went wrong");
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {error && <p>{error}</p>}
//       {data.map((item) => (
//         <p key={item.id}>{item.name}</p>
//       ))}
//     </div>
//   );
// }

//==============================
// Using Fetch 

  useEffect(() => {
    fetch("https://api.example.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));   // data is array
  }, []);


  //====================

//   ✅ Phone Validation (Simple Logic)
function validatePhone(phone) {
  return phone.length === 10 && !isNaN(phone);
}

//==============
function validateEmail(email) {
  return email.includes("@") && email.includes(".");
}

//============

import { useState } from "react";

function Users() {
  const [users, setUsers] = useState([
    { id: 1, name: "Samreen" },
    { id: 2, name: "Ali" }
  ]);

  const addUser = () => {
    const newUser = { id: 3, name: "John" };
    setUsers([...users, newUser]);
  };

  return (
    <div>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
      <button onClick={addUser}>Add User</button>
    </div>
  );
}

//===========

// String is Immutable in JavaScript.

// let name = "Samreen";
// name[0] = "A";

// console.log(name); 

// Output:
// Samreen


// 👉 It does NOT change.