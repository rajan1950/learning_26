import React from 'react'
import { useParams } from 'react-router-dom'

export const Watch = () => {

  const MovieName = useParams().name

  return (
    <div style={{ textAlign: "center" }}>
        <h1>WATCHING....{MovieName}</h1>
    </div>
  )
}
