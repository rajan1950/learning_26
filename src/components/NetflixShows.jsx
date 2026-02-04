import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixShows = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Netflix Shows</h1>

      <table className='table table-warning' style={{ marginLeft: "400px", width: "500px", marginTop: "50px" }}>
        <thead>
          <tr>
            <th>Show Name</th>
          </tr>
        </thead>
      </table>

      <ul>
        <li>
          <Link to="/watch/moneyhiest">MONEY HIEST</Link>
        </li>
        <li>
          <Link to="/watch/breakingbad">BREACKING BAD</Link>
        </li>
        <li>
          <Link to="/watch/strangerthings">STRANGER THINGS</Link>
        </li>
      </ul>

      
    </div>
  )
}
