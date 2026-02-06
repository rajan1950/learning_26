import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixSports = () => {

    var team = [
        { teamID: 1, teamName: 'RCB' },
        { teamID: 2, teamName: 'CSK' },
        { teamID: 3, teamName: 'MI' },
        { teamID: 4, teamName: 'GT' },
        { teamID: 5, teamName: 'KKR' },
        { teamID: 6, teamName: 'RR' },
        { teamID: 7, teamName: 'SRH' },
        { teamID: 8, teamName: 'DC' },
        { teamID: 9, teamName: 'PBKS' },
        { teamID: 10, teamName: 'LSG' },
    ]
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Netflix Sports</h1>

      <h1 className='table table-warning'>IPL TEAMS</h1>

      <table className='table table-warning' style={{ marginLeft: "400px", width: "500px", marginTop: "50px" }}>
        <thead>
          <tr>
            <th>Team ID</th> 
            <th>Team Name</th>
          </tr>
        </thead>
        <tbody>
          {
            team.map((t) => {
              return <tr key={t.teamID}>
                <td>{t.teamID}</td>
                <td>
                <Link to={`/teamsdetails/${t.teamName}`}>
                {t.teamName}
                </Link>
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}
