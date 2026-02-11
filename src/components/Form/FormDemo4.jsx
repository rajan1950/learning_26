import React from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

export const FormDemo4 = () => {

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
            <h1>Form Demo 4</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>Student Name</label>
                    <input type='text' placeholder='enter student name' {...register("studentName")}></input>
                </div>
                <div>
                    <label>Student ID</label>
                    <input type='text' placeholder='enter student ID' {...register("studentId")}></input>
                </div>
                <div>
                    <label>AGE</label>
                    <input type='text' {...register("age")}></input>
                </div>
                <div>
                    <label>GENDER</label>  <br></br>
                      MALE:<input type='radio' value="male" {...register("gender")}></input>
                     FEMALE:<input type='radio' value="female" {...register("gender")}></input>
                </div>
                <div>
                    <label>Student STD</label> <br></br>
                    FIRST YEAR :<input type='checkbox' value="first year" {...register("department")}></input>
                    SECOND YEAR :<input type='checkbox' value="second year" {...register("department")}></input>
                    THIRD YEAR :<input type='checkbox' value="third year" {...register("department")}></input>
                    FOURTH YEAR :<input type='checkbox' value="fourth year" {...register("department")}></input>
                </div>

                <div>
                    <label>HOBBIES</label> <br></br>
                    CRICKET :<input type='checkbox' value="cricket" {...register("hobbies")}></input>
                    TRAVEL :<input type='checkbox' value="travel" {...register("hobbies")}></input>
                    SCCROLLING :<input type='checkbox' value="scrolling" {...register("hobbies")}></input>
                </div>

                <div>
                    <input type='submit'></input>
                </div>
            </form>

            {isSubmited == true && <div>
                <h1>OUTPUT</h1>
                <h1>Name = {userData.studentName}</h1>
                <h2>Student ID = {userData.studentId}</h2>
                <h2>Age = {userData.age}</h2>
                <h2>Gender = {userData.gender}</h2>
                <h2>Student STD = {userData.department}</h2>
                <h2>Hobbies = {userData.hobbies}</h2>
            </div>}

            </div>
    )
}