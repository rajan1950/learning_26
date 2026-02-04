import React from 'react'

export const Mapdemo4 = () => {

    var cities = [
        { id: 1, name: 'New York', country: 'USA', population: 8419600, AQI: 45 },
        { id: 2, name: 'Los Angeles', country: 'USA', population: 3980400, AQI: 60 },
        { id: 3, name: 'Chicago', country: 'USA', population: 2716000, AQI: 55 },
        { id: 4, name: 'Houston', country: 'USA', population: 2328000, AQI: 70 },
    ]

    return (

        <div style={{ textAlign: 'center' }}>
            <h1>Mapdemo4</h1>
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>City Name</th>
                        <th>Country</th>
                        <th>Population</th>
                        <th>AQI</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cities.map((city) => {
                            return <tr>
                                <td>{city.id}</td>
                                <td>{city.name}</td>
                                <td>{city.country}</td>
                                <td>{city.population}</td>
                                <td>{city.AQI}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
