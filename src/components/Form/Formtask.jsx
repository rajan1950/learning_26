import React from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

export const Formtask = () => {

     const [isSubmited, setisSubmited] = useState(false)
     const [userdata, setuserdata] = useState({})
     
    const { register, handleSubmit, formState: { errors } } = useForm()
    console.log("Errors", errors)

    const submitHandler = (data) => {
        alert("Form Submitted...")
        console.log("Data", data)
        setisSubmited(true)
        setuserdata(data)
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
        },

        idvallidator:{
            required:{
                value:true,
                message:"id is required*"
            },
            min:{
                value:1,
                message:"min id should be 1*"
            },
            max:{
                value:100,
                message:"max id should be 100*"
            }
        },

        nameValidator:{
            required:{
                value:true,
                message:"Name is required*"
            },
            minLength:{
                value:3,
                message:"min 3 char is required"
            },
            maxLength:{
                value:20,
                message:"max 20 char is accepted****"
            }
        },

        emailValidator:{
            required:{
                value:true,
                message:"Email is required*"
            },
            pattern:{
                value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message:"invalid email address*"
            }
        },

        passwordValidator:{
            required:{
                value:true,
                message:"Password is required*"
            },
            minLength:{
                value:6,
                message:"min 6 char is required"
            },
            maxLength:{
                value:20,
                message:"max 20 char is accepted****"
            }
        },

        phoneValidator:{
            required:{
                value:true,
                message:"Phone is required*"
            },
            pattern:{
                value:/^\d{10}$/,
                message:"invalid phone number*"
            }
        },

    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Formtask</h1>

            <form onSubmit={handleSubmit(submitHandler)}>

                <div>
                    <label>Employee Name</label>
                    <input type="text" {...register("name", vallidationschema.nameValidator)}></input>
                    {errors.name && <span style={{ color: "red" }}>{errors.name.message}</span>}

                </div>

                <div>
                    <label>Employee id</label>
                    <input type="text" {...register("id", vallidationschema.idValidator)}></input>
                    {errors.id && <span style={{ color: "red" }}>{errors.id.message}</span>}
                </div>

                <div>
                    <label>Employee Address</label>
                    <input type="text" {...register("address", vallidationschema.addressValidator)}></input>
                    {errors.address && <span style={{ color: "red" }}>{errors.address.message}</span>}
                </div>

                <div>
                    <label>Employee Email</label>
                    <input type="text" {...register("email", vallidationschema.emailValidator)}></input>
                    {errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}
                </div>

                <div>
                    <label>Employee Password</label>
                    <input type="text" {...register("password", vallidationschema.passwordValidator)}></input>
                    {errors.password && <span style={{ color: "red" }}>{errors.password.message}</span>}    
                </div>

                <div>
                    <label>Employee Phone</label>
                    <input type="text" {...register("phone", vallidationschema.phoneValidator)}></input>
                    {errors.phone && <span style={{ color: "red" }}>{errors.phone.message}</span>}
                </div>


                <div>
                    <input type="submit"></input>
                </div>

                {
                    isSubmited  && <div>
                        <h1>OUTPUT</h1>
                        <h2>Name = {userdata.name}</h2>
                        <h2>Id = {userdata.id}</h2>
                        <h2>Address = {userdata.address}</h2>
                        <h2>Email = {userdata.email}</h2>
                        <h2>Password = {userdata.password}</h2>
                        <h2>Phone = {userdata.phone}</h2>
                    </div>
                }
            </form>
        </div>
    )
}
