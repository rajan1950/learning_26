import React from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

export const FormDemo6 = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const submitHandler = (data) => {
        alert("Form Submitted...")
        console.log("Data", data)
    }

    const vallidationschema = {

        nameValidator: {
            required: {
                value: true,
                message: "Name is Required*"
            },
            minLength: {
                value: 5,
                message: "min 5 char is required"
            },
            maxLength: {
                value: 20,
                message: "max 20 char is accepted****"
            }
        },
        contactValidator: {
            required: {
                value: true,
                message: "Contact is Required*"
            },
            minLength: {
                value: 10,
                message: "min 10 Number is required"
            },
            maxLength: {
                value: 10,
                message: "max 10 Number is accepted****"
            },
            pattern: {
                value: /^[6-9]{1}[0-9]{9}$/,
                message: "Only numbers are allowed*"
            }
        },
        promoCodeValidator: {
            required: {
                value: true,
                message: "Promo Code is Required*"
            },
            minLength: {
                value: 5,
                message: "min 5 char is required"
            },
            maxLength: {
                value: 10,
                message: "max 10 char is accepted****"
            },
            vallidate: (param) => {
                // console.log("param", param)
                return params == "2026" || "invalid promo code*"
            }
        },
        hobbiesValidator: {
            required: {
                value: true,
                message: "Hobby required*"
            },
            validate: (params) => {
                return params.length >= 1 && params.length <= 5 || "max 5 hobbies can be selected****"
            },
        }




    }


    return (
        <div style={{ textAlign: "center" }} >
            <h1>FormDemo6</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>Name</label>
                    <input type="text" {...register("name", vallidationschema.nameValidator)}></input>
                    {errors.name?.message}
                </div>

                <div>
                    <label>Contact</label>
                    <input type="text" {...register("contact", vallidationschema.contactValidator)}></input>
                    {errors.contact?.message}
                </div>

                <div>
                    <label>PROMO CODE</label>
                    <input type="text" {...register("promoCode", vallidationschema.promoCodeValidator)}></input>
                    {errors.promoCode?.message}
                </div>

                <div>
                    <label>HOBBIES</label>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        border: "1px solid black",
                        width: "200px",
                        margin: "auto",
                        padding: "10px"
                    }}>
                        <div>CRICKET: <input type="checkbox" value="cricket" {...register("hobbies", vallidationschema.hobbiesValidator)}></input></div>
                        <div>FOOTBALL: <input type="checkbox" value="football" {...register("hobbies")}></input></div>
                        <div>HOCKEY: <input type="checkbox" value="hockey" {...register("hobbies")}></input></div>
                        <div>SCROLLING: <input type="checkbox" value="scrolling" {...register("hobbies")}></input></div>
                        <div>READING: <input type="checkbox" value="reading" {...register("hobbies")}></input></div>
                        <div>GAMING: <input type="checkbox" value="gaming" {...register("hobbies")}></input></div>
                        <div>DANCING: <input type="checkbox" value="dancing" {...register("hobbies")}></input></div>
                        <div>TRAVELLING: <input type="checkbox" value="travelling" {...register("hobbies")}></input></div>
                        <div>HACKING: <input type="checkbox" value="hacking" {...register("hobbies")}></input></div>
                        <div>SWIMMING: <input type="checkbox" value="swimming" {...register("hobbies")}></input></div>
                    </div>
                    {errors.hobbies?.message}
                </div>

                <div>
                    <input type="submit"></input>
                </div>
            </form>
        </div >
    )

}
