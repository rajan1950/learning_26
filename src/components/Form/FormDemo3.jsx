import React from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

export const FormDemo3 = () => {

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
            <h1>Form Demo 3</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>EMPLOYEE ID</label>
                    <input type='number' placeholder='enter employee ID' {...register("employeeId")}></input>
                </div>
                <div>
                    <label>Employee NAME</label>
                    <input type='text' placeholder='enter employee name' {...register("employeeName")}></input>
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
                    <label>Department</label> <br></br>
                    HR :<input type='checkbox' value="HR" {...register("department")}></input>
                    SALES :<input type='checkbox' value="SALES" {...register("department")}></input>
                    MARKETING :<input type='checkbox' value="MARKETING" {...register("department")}></input>
                </div>

                <div>
                    <input type='submit'></input>
                </div>
            </form>

            {isSubmited == true && <div>
                <h1>OUTPUT</h1>
                <h1>Name = {userData.employeeName}</h1>
                <h2>Employee ID = {userData.employeeId}</h2>
                <h2>Age = {userData.age}</h2>
                <h2>Gender = {userData.gender}</h2>
                <h2>Department = {userData.department}</h2>
            </div>}

            </div>
    )
}