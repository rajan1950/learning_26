import axios from 'axios'
import React, { useState } from 'react'
import { set } from 'react-hook-form'


export const ApiDemo1 = () => {

  const [message, setmessage] = useState("")
  const [users, setusers] = useState([])
  

  const getUsers = async () => {


    const response = await axios.get("https://node5.onrender.com/user/user/")
    console.log(response)
    console.log(response.data)
    console.log(response.data.message)
    setmessage(response.data.message)
    console.log(response.data.data)
    setusers(response.data.data)

  }


  return (
    <div style={{ textAlign: "center" }}>
      <h1>ApiDemo1</h1>
      <button onClick={getUsers}>Get </button>
      <p>Message : {message}</p>
      {
        users.map((user) => {
          return <li key={user._id}>{user.name}</li>
        })
      }

      <table className='table-danger table'>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Age</th>
          <th>isActive</th>
          <th>__v</th>
        </thead>
        <tbody>
          {
            users.map((user) => {
              return <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.age}</td>
                <td>{user.isActive ? "Active" : "Inactive"}</td>
                <td>{user.__v}</td>
              </tr>
            })
          }
        </tbody>
      </table>

     
    </div>
  )
}
