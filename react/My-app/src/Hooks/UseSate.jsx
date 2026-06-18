import React, { useState } from 'react'

const UseSate = () => {
    const[count,setCount]=useState(0)
    const[Quantity,setQuantity]=useState(1)
    const inc=()=>{
        setCount((count)=>count+1)
    }
    const reset=()=>{
        setCount(0)
    }
     const dec=()=>{
        setCount((count)=>count-1)
     }

  return (
    <div>
        <button onClick={inc}>Inc</button>
        <button onClick ={reset}>Reset</button>
        <button onClick={dec}>Decrease</button>
        <h1>Count :{count}</h1>      
    </div>
  )
}

export default UseSate
