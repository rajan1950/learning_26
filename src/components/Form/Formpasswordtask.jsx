import React from 'react'
import { useForm } from 'react-hook-form'

export const Formpasswordtask = () => {

    const { register, handleSubmit, formState: { errors }, watch } = useForm({ mode: "onChange" });

    const password = watch("password") || "";


    const submithandler = (data) => {
        console.log(data);
    }


    const vallidationschema = {
        nameValidator: {
            required: {
                value: true,
                message: "Name is Required*"
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
        ageValidator: {
            required: {
                value: true,
                message: "Age is Required*"
            },
            min: {
                value: 18,
                message: "Minimum age is 18"
            },
            max: {
                value: 65,
                message: "Maximum age is 65"
            },

        },
        addressValidator: {
            required: {
                value: true,
                message: "Address is Required*"
            },
            minLength: {
                value: 10,
                message: "Minimum 10 characters required"
            },
            maxLength: {
                value: 100,
                message: "Maximum 100 characters allowed"
            },
        },
        passwordValidator: {
            required: {
                value: true,
                message: "Password is Required*"
            },
            minLength: {
                value: 8,
                message: "Minimum 8 characters required"
            },
            maxLength: {
                value: 50,
                message: "Maximum 50 characters allowed"
            },
        },
        confirmPasswordValidator: {
            required: {
                value: true,
                message: "Confirm Password is Required*"
            },
            validate: (value) => value === watch('password') || "Passwords do not match"
        }

    }

    const capvallidate = /[A-Z]/.test(password);
    const smallvallidate = /[a-z]/.test(password);
    const specialcharvallidate = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const numbervallidate = /[0-9]/.test(password);
    const min8vallidate = password.length >= 8;
   
      
    

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Form Password Task</h1>


            <form onSubmit={handleSubmit(submithandler)} >

                <div>
                    <label>Name:</label>
                    <input type="text" {...register("name", vallidationschema.nameValidator)}></input>
                    {errors.name && <p>{errors.name.message}</p>}
                </div>

                <div>
                    <label>AGE</label>
                    <input type="number" {...register("age", vallidationschema.ageValidator)}></input>
                    {errors.age && <p>{errors.age.message}</p>}
                </div>

                <div>
                    <label>Address:</label>
                    <input type="text" {...register("address", vallidationschema.addressValidator)}></input>
                    {errors.address && <p>{errors.address.message}</p>}
                </div>

                <div>
                    <label>Password:</label>
                    <input type="password" {...register("password", vallidationschema.passwordValidator)}></input>
                    {errors.password && <p>{errors.password.message}</p>}
                </div>

                <div>
                    <label>Confirm Password:</label>
                    <input type="password" {...register("confirmPassword", vallidationschema.confirmPasswordValidator)}></input>
                    {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                </div>

                <div>
                    <br />
                    <h3>-----NOTE----</h3>
                    <br />
                    <p style={{color: capvallidate ? "green" : "red"}}>• At least one uppercase letter</p>
                    <p style={{color: smallvallidate ? "green" : "red"}}>• At least one lowercase letter</p>
                    <p style={{color: numbervallidate ? "green" : "red"}}>• At least one number</p>
                    <p style={{color: specialcharvallidate ? "green" : "red"}}>• At least one special character</p>
                    <p style={{color: min8vallidate ? "green" : "red"}}>• Minimum 8 characters</p>
                </div>

                <button type="submit">Submit</button>
            </form>

    
        </div>
    )
}
