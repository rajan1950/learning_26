import React from 'react'

export const Functiondemo = () => {

    const test = () => {
        alert("Test Function Called ....")
    }
    const test2 = (name) => {
        alert("value of x" + name)
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>function demo 1</h1>
            <button onClick={test}>Click</button>
            <button onClick={() => test2("100")}>Click2</button>
        </div>
    )
}
