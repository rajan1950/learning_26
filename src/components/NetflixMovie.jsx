import React from 'react'

export const NetflixMovie = () => {
  return (
    <div style={{textAlign:"center"}}>
        <h1>Netflix Movie</h1>

        <table className='table table-warning' style={{marginLeft:"400px", width:"500px", marginTop:"50px"}}>
            <thead>
                <tr>
                    <th>Movie Name</th>
                </tr>
            </thead>
        </table>
    </div>
  )
}
