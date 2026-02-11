import React from 'react'
import { CardComponent } from './CardComponent'

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
            <button className="mr-5" onClick={test}>Click1</button>
            <button onClick={() => test2("100")}>Click2</button>
            <CardComponent title="Card Title" description="This is a description"></CardComponent>
        </div>
    )
}
