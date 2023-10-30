// import React, { useState } from 'react';

// function Vote() {
//   const [age, setAge] = useState(0);
//   const [canVote, setCanVote] = useState(false);

//   const handleAgeChange = (e) => {
//     const newAge = parseInt(e.target.value);
//     setAge(newAge);
//     setCanVote(newAge >= 18);
//   };

//   return (

//     <div>
//       <br/>
//       <hr/>
//       <br/>
//       <h1>Can You Vote?</h1>
//       <label>
//         Enter your age:
//         <input type="number" value={age} onChange={handleAgeChange} />
//       </label>
//       <p>
//         {canVote
//           ? "You are eligible to vote."
//           : "You are not eligible to vote."
//         }
//       </p>
//     </div>
//   );
// }

// export default Vote;

//======================

import React, { useEffect, useState } from "react";

function Vote() {
  const [agevote, setagevote] = useState("");

  let age = 1;

  useEffect(()=>{
    if (age >= 18) {
      setagevote("Voting");
    } else {
      setagevote("not Voting");
    }
  },[age])



  return (
    <>
      <br />
      <hr />
      <br />
      <h1>Vote: {agevote}</h1>
    </>
  );
}

export default Vote;
