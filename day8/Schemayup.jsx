import React from 'react'
import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import './Sehma.css'

const Schemayup = () => {
    const Schema=yup.object().shape({
        firstname:yup.string().required("firstname is required"),
        lastname:yup.string().required("lastname is required"),
        email:yup.string().email().required("eamil mustan should required"),
        password:yup.string().min(5).max(10).required(),
        confirmpassword:yup.string().oneOf([yup.ref("password"),null])



    })
    const {register,handleSubmit,formState:{errors}}=useForm({
        resolver:yupResolver(Schema),


    })
    const onSubmit=(data)=>{
        console.log(data)
    }
    

  return (
    <div className='conatiner'>
      
        <div className='title'>Sign in Form</div>
            <div className='inputs'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" name="firstname" placeholder='firstname...'{...register("firstname")}/><br/><br/>
                    <p style={{color:"red"}}>{errors.firstname?.message}</p>
                    <input type="text" name="lastname" placeholder='lasttname...' {...register("lastname")}/><br/><br/>
                    <p style={{color:"red"}}>{errors.lastname?.message}</p>
                    <input type="text" name="email" placeholder='email@gmail.com' {...register("email")}/><br/><br/>
                    <p style={{color:"red"}}>{errors.email?.message}</p>
                    <input type="password" name="password" placeholder='password' {...register("password")}/><br/><br/>
                    <p style={{color:"red"}}>{errors.password?.message}</p>
                    <input type="password" name="confirmpassword" placeholder='confirmpassword' {...register("confirmpassword")}/><br/><br/>
                    <p style={{color:"red"}}>{errors.confirmpassword && "password should not matched"}</p>
                    <input type="submit" name="Submit"></input>

                </form>
            </div>
           

        </div>

        
    
  )
}

export default Schemayup