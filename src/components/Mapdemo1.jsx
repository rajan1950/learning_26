import React from 'react'

export const Mapdemo1 = () => {

    let cars = ['BMW', 'Volvo', 'Saab', 'Ford']

    return (
        <div>
            <h1>Car Brands</h1>
            {
                cars.map((c)=>{
                    return <h1>{c}</h1>
                })

            }
        </div>
    )
}
