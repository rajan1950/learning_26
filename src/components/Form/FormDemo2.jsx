import React from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

export const FormDemo2 = () => {

    const { register, handleSubmit } = useForm()
    const [userData, setuserData] = useState({})
    const [isSubmited, setisSubmited] = useState(false)

    const submitHandler = (data) => {
        console.log(data) //{} object
        setuserData(data)
        setisSubmited(true)
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Form Demo 2</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>FIRST NAME</label>
                    <input type='text' placeholder='enter first name' {...register("firstName")}></input>
                </div>
                <div>
                    <label>LAST NAME</label>
                    <input type='text' placeholder='enter last name' {...register("lastName")}></input>
                </div>
                <div>
                    <label>AGE</label>
                    <input type='text' {...register("age")}></input>
                </div>
                <div>
                    <label>GENDER</label>  <br></br>
                    <input type='text' {...register("gender")}></input>
                </div>
                <div>
                    <label>HOBBIES</label> <br></br>
                    <input type='text' {...register("hobbies")}></input>
                </div>

                <div>
                    <input type='submit'></input>
                </div>
            </form>

            {isSubmited == true && <div>
                <h1>OUTPUT</h1>
                <h1>Name = {userData.firstName} {userData.lastName}</h1>
                <h2>Age = {userData.age}</h2>
                <h2>Gender = {userData.gender}</h2>
                <h2>Hobbies = {userData.hobbies}</h2>
            </div>}

            </div>
    )
}