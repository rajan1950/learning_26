import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixMovie = () => {

    var movies = [
        { movieID: 1, movieName: 'DHURANDHAR' },
        { movieID: 2, movieName: 'KANTARA' },
        { movieID: 3, movieName: 'KILL' },

    ]
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Netflix Movie</h1>
            <table className='table table-warning' style={{ marginLeft: "400px", width: "500px", marginTop: "50px" }}>
                <thead>
                    <tr>
                        <th>Movie Name</th>
                    </tr>
                </thead>
            </table>
            {
                movies.map((movie) => {
                    return <li>
                        <Link to={`/watch/${movie.movieName}`}>{movie.movieName}</Link>
                    </li>
                })

              
            }

            
        </div>
    )
}
