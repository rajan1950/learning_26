import React from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

export const FormDemo7 = () => {

    const {register, handleSubmit, formState: { errors }, watch} = useForm()
    const vallidationschema = {
        passwordValidator: {
            required: {
                value: true,
                message: "Password is Required*"
            },
            minLength: {
                value: 4,
                message: "min 4 char is required"
            },
            maxLength: {
                value: 20,
                message: "max 20 char is accepted****"
            }
        },
        confirmPasswordValidator: {
            required: {
                value: true,
                message: "Confirm Password is Required*"
            },
            validate: value => value === watch('password') || "Passwords do not match"
        }
    }


    return (
        <div style={{textAlign:"center"}}>
            <h1>FORM WATCH DEMO</h1>


            <div>
                <label>PASSWORD:</label>
                <input type="password" {...register("password", vallidationschema.passwordValidator)}></input>
                {errors.password && <p>{errors.password.message}</p>}
            </div>
            <div>
                <label>CONFIRM PASSWORD:</label>
                <input type="password" {...register("confirmPassword", vallidationschema.confirmPasswordValidator)}></input>
                {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
            </div>

            <div>
                <button onClick={handleSubmit((data) => console.log(data))}>SUBMIT</button>
            </div>
        </div>
    )
}
