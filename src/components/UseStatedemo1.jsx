import React from 'react'
import { useState } from 'react'

export const UseStatedemo1 = () => {

    //var count = 0;

    const [count,setCount] = useState(0)

    const increment = () => {
        console.log("Count value before increment ");
        //count ++;
        setCount(count + 1);
        console.log("Count value after increment ");
    }

     const decrement = () => {
        console.log("Count value before increment ");
        //count ++;
        setCount(count - 1);
        console.log("Count value after increment ");
    }


  return (
    <div style={{ textAlign: "center" }}>
        <h1>UseState Demo 1</h1>
        <h1> count = {count}</h1>
        <button className='mr-5' onClick={increment}>+</button>
        
        <button onClick={decrement}>-</button>
    </div>
  )
}
