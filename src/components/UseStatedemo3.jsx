import React, { useReducer } from 'react'
import { useState } from 'react'

export const UseStatedemo3 = () => {

    const [user, setUser] = useState(["PARTH", "RAJ", "KARAN"])
    const addUser = () => {
        setUser([...user, "YASH"])
    }

        return (
            <div style={{ textAlign: "center" }}>
                <h1>UseState Demo 3</h1>
                {
                    user.map((u) => {
                        return <li>{u}</li>
                    })
                }
                <button onClick={addUser}>Add User</button>
            </div>
        )
    }
