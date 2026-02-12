import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo5 = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    console.log("Errors", errors)

    const submitHandler = (data) => {
        alert("Form Submitted...")
        console.log("Data", data)
    }

    const vallidationschema = {

        ageValidator:{
            required:{
                value:true,
                message:"Age is Required*"
            },
            min:{
                value:18,
                message:"min age should be 18*"
            },
            max:{
                value:60,
                message:"max age should be 60*"
            }
        },

         addressValidator:{
            required:{
                value:true,
                message:"address is required*"
            },
            minLength:{
                value:5,
                message:"min 5 char is required"
            },
            maxLength:{
                value:20,
                message:"max 20 char is accepted****"
            }
        }



    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>FormDemo5</h1>

            <form onSubmit={handleSubmit(submitHandler)}>

                <div>
                    <label>Name</label>
                    <input type="text" {...register("name", { required: { value: true, message: "Name is required" } })}></input>
                    {errors.name && <span style={{ color: "red" }}>{errors.name.message}</span>}
                </div>

                <div>
                    <label>Age</label>
                    <input type="text" {...register("age", vallidationschema.ageValidator)}></input>
                    {errors.age && <span style={{ color: "red" }}>{errors.age.message}</span>}
                </div>

                <div>
                    <label>Address</label>
                    <input type="text" {...register("address", vallidationschema.addressValidator)}></input>
                    {errors.address && <span style={{ color: "red" }}>{errors.address.message}</span>}
                </div>

                <div>
                    <input type="submit"></input>
                </div>

            </form>
        </div>
    )
}
