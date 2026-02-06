import React from 'react'
import { useState } from 'react'

export const UseStatedemo2 = () => {

    const [loading, detloading] = useState(true) //boolean value
    const stopLoading = () => {
        detloading(false);
    }

    const startLoading = () => {
        detloading(true);
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>UseState Demo 2</h1>
            {
                 loading == true && <h1>Loading.....</h1>
            }
            <button className='mr-5' onClick={startLoading}>Start Loading</button>
            
            <button onClick={stopLoading}>Stop Loading</button>
             
        </div>
    )
}
