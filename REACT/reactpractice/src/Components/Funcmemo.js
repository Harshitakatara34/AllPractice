import React, { useState } from 'react'

const Funcmemo = () => {
    const[state,setState]=useState(0)
    console.log("jump")
  return (
    <>
 <div>Funcmemo</div>
    <button onClick={()=>setState(0)}>{state}</button>
    </>
   
  )
}

export default Funcmemo