import React from 'react'
import { useParams } from 'react-router-dom'

export const TeamDetail = () => {

    const name = useParams().name;
  return (
    <div style={{ textAlign: "center", color: "red" }}>
        <h1>Playing....{name}</h1>
    </div>
  )
}
