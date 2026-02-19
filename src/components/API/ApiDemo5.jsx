
import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const ApiDemo5 = () => {

   const { register, handleSubmit, formState: { errors } } = useForm()

   console.log("err :", errors);

   const validationSchema = {
      nameValidator: {
         required: {
            value: true,
            message: 'Name is required'
         }
      },
         emailValidator: {
         required: {
            value: true,
            message: 'Email is required'
         }
      },
      ageValidator: {
         required: {
            value: true,
            message: 'Age is required'
         },
         min: {
            value: 1,
            message: 'Enter age carefully'
         },
         max: {
            value: 100,
            message: 'Enter age carefully'
         },

      },
      passwordValidator: {
         required: {
            value: true,
            message: 'Password is required'
         },
         minLength: {
            value: 4,
            message: 'Password must have at least 4 characters'
         },
         maxLength: {
            value: 15,
            message: 'Password must be 15 characters long'
         }
      },
      
   }

   const submitHandler = async (data) => {
      try {
         const res = await axios.post("https://node5.onrender.com/user/user/", data)
         console.log(res)
         toast.success('Form submitted', { position: 'top-right' })
      } catch (error) {
         console.log(error)
         toast.error('Submit failed', { position: 'top-right' })
      }
   }

   return (
      <div >
         {/* <h1 style={{ textAlign: 'center' }}>ApiDemo5</h1> */}

         <ToastContainer position="top-right" autoClose={2500} />

         <form onSubmit={handleSubmit(submitHandler)} style={{ width: '600px', margin: 'auto', padding: '20px', border: '2.5px solid #989696', borderRadius: '6.9px', marginTop: '40px' }}>

            <h1 style={{ textAlign: 'center', border: '3px solid #989696', padding: '10px', borderRadius: '5px', borderBlock:'1px solid #989696', color: '#333' , fontSize: '30px' }}>Register Form</h1>
            {/* Name */}
            <div className="form-group">
               <label htmlFor="inputName">Name</label>
               <input type="text" className="form-control" id="inputName" placeholder="Enter Name" {...register("name", validationSchema.nameValidator)} />
            </div>

            {/* Email */}
            <div className="form-group">
               <label htmlFor="inputEmail">Email address</label>
               <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" {...register("email", validationSchema.emailValidator)} />
            </div>

            {/* Password  */}
            <div className="form-group">
               <label htmlFor="inputPassword">Password</label>
               <input type="password" className="form-control" id="inputPassword" placeholder="Password" {...register("password", validationSchema.passwordValidator)} />
            </div>

            {/* Age  */}
            <div className="form-group">
               <label htmlFor="inputNumber">Age :</label>
               <input
                  type="number"
                  className="form-control"
                  id="inputNumber"
                  placeholder="Enter Age"
                  {...register("age", validationSchema.ageValidator)}
               />
            </div>

            {/* IsActive */}
            <div className="form-check" style={{ marginTop: '10px' , display: 'flex', alignItems: 'center', }}>  
               <input className="form-check-input" type="checkbox" id="isActiveCheckbox" {...register("isActive")} />
               <label className="form-check-label" htmlFor="isActiveCheckbox">
                  isActive ?
               </label>
            </div>

            {/* Submit */}
            <button type="submit" className="btn btn-primary d-block mx-auto" style={{ margin: 'auto',  width: '120px',height: '50px', padding: '10px', border: '2.5px solid #989696', borderRadius: '6.9px'  , }} >Submit</button>

         </form>
         <div className='text-danger text-center'>
            <div>{errors.name?.message}</div>
            <div>{errors.email?.message}</div>
            <div>{errors.password?.message}</div>
            <div>{errors.age?.message}</div>
            <div>{errors.isActive?.message}</div>
         </div>
      </div>
   )
}

// Backwards-compatible alias (if something imports { Apidemo5 })
export { ApiDemo5 as Apidemo5 }
