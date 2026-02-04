import React from 'react'
import '../assets/image/virat.jpg'
import '../assets/css/content.css'

export default function Contentcomponent() {
    var biodata = {
        name: "Virat",
        age: 38,
        location: "India, Ahmedabad",
        gender: "male",
        isActive: true
    }
    return (
        <div>
            <div className="content">
                <img className='virat' src='/src/assets/image/virat.jpg' alt="Virat Kohli" />
                <div className="info">
                    <h1 className='viru'>Virat Kohli</h1>
                    <h2 className='bio'>
                        An Indian international cricketer and former captain of the India national team.
                        A right-handed top-order batsman, he is regarded as one of the best batsmen in the world.
                    </h2>
                </div>

            </div>
            <div className='text'>
                <h1>My Name : {biodata.name}.</h1>
                <h1>My Last Name  : Kohli.</h1>
                <h1>My Age  : {biodata.age}.</h1>
                <h1>My Location  : {biodata.location}.</h1>
                <h1>My Gender : {biodata.gender}.</h1>
                <h1>My Active Status  : {biodata.isActive ? "Active" : "Inactive"}.</h1>
            </div>
        </div>
    )
}
