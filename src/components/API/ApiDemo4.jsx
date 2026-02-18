import React from 'react'
import axios from 'axios'

export const ApiDemo4 = () => {

  const addUser = async () => {
    const userObj = {
      name: "John Doe",
      age: 30,
      email: "john.doe@example.com",
      password: "password123",
      isActive:true
    }
    try{
      const response = await axios.post("https://node5.onrender.com/user/user/", userObj)
      console.log(response)
      console.log(response.data)
    } catch(error){
      console.log(error)
      alert("Error while adding user")
    }
  }

    return (
      <div style={{textAlign:"center"}}>
        <h1>ApiDemo4</h1>
        <button onClick={addUser} className='btn btn-primary'>Add User</button>
      </div>
    )
  }
