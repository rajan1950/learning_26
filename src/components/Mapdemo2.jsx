import React, { useSyncExternalStore } from 'react'

export const Mapdemo2 = () => {

    let users = [
        { id: 1, name: 'Rajan', age: 22, gender: 'M' },
        { id: 2, name: 'Ronak', age: 21, gender: 'M' },
        { id: 3, name: 'mahi', age: 23, gender: 'F' },
        { id: 4, name: 'Ankita', age: 20, gender: 'F' },

    ]

    return (
        <div>
            <h1>Map Demo 2</h1>
            {
                users.map((user) => {
                    return <li>{user.id}-{user.name}-{user.age}-{user.gender}</li>
                })
            }
        </div>
    )
}
