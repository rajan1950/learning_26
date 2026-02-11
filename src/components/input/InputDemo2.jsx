import React from 'react'
import { useState } from 'react'
import { set } from 'react-hook-form'

export const InputDemo2 = () => {

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")
    const [country, setCountry] = useState("")
    const [issubmitted, setIsSubmitted] = useState(false)
    const nameHandler = (event) => {
        setName(event.target.value)
 

    }
    const ageHandler = (event) => {
        setAge(event.target.value)
      

    }
    
    const genderHandler = (event) => {
        setGender(event.target.value)
     
    }

  return (
    <div style={{ textAlign: "center" }}>
        <h1>InputDemo2</h1>
        <div>
            <label>Name</label>
            <input type="text" onChange={(event) => nameHandler(event)}></input>
           
        </div>
        <div>
            <label>AGE</label>
            <input type="text" onChange={(event) => ageHandler(event)}></input>
           
        </div>
        <div>
            <label>GENDER</label> <br />
            MALE : <input type="radio" name="gender" value="male" onChange={(event)=>genderHandler(event)}></input> <br />
            FEMALE : <input type="radio" name="gender" value="female" onChange={(event)=>genderHandler(event)}></input> <br />
            OTHER : <input type="radio" name="gender" value="other" onChange={(event)=>genderHandler(event)}></input>  <br /> <br />

            <div>
                <label>COUNTRY</label>
                <select onChange={(event) => {setCountry(event.target.value)}}>
                    <option value="india">INDIA</option>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                    <option value="australia">AUSTRALIA</option>
                </select>

                <br />

                submit : <input type="submit" onClick={() => setIsSubmitted(true)}></input>
                
            </div>
        </div>
        {
            issubmitted == true && <div> OUTPUT :
                {
                    name && <h2>NAME : {name}</h2>
                }
                {
                    age && <h2>AGE : {age}</h2>
                }
                {
                    gender && <h2>GENDER : {gender}</h2>
                }
                {
                    country && <h2>COUNTRY : {country}</h2>
                }
                
                
                
            </div>
        }
    </div>
  )
}
