import React from 'react'

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
    </div>
  )
}
