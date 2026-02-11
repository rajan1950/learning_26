import React from 'react'
import { useState } from 'react'

export const InputDemo1 = () => {

    const [name, setName] = useState("")

    const nameHandler = (event) => {
        console.log(event.target.value)
        setName(event.target.value)
    }

    const [age, setAge] = useState("")

    const ageHandler = (event) => {
        console.log(event.target.value)
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>InputDemo1</h1>
            <div>
                <label>Name</label>
                <input type="text" onChange={(event) => nameHandler(event)}></input>
                {name}
            </div>
            <div>
                <label>AGE</label>
                <input type="text" onChange={(event)=>{ageHandler(event)}}></input>
                {age}
            </div>
        </div>
    )
}
