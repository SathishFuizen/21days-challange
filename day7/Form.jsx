import React from 'react'
import { useState } from 'react';
import {useForm} from "react-hook-form"
import './Form.css'

const Form = () => {
    const methodsTheming=useForm({
        defaultValues:{},
        mode:"all",
    })
    const [data,setData]=useState();
    const onSubmit=(data)=>{
        setData(JSON.stringify(data));
        console.log(data);
        console.log(methodsTheming.formState.errors);
        // const {errors}=methodsTheming.formState;

    }
    const {errors}=methodsTheming.formState;
    
   


    

   
  return (
    <div className='container'>
        <center>
            {/* <pre>{JSON.stringify(userinfo)}</pre> */}
            <form  autoComplete="off" onSubmit={methodsTheming.handleSubmit(onSubmit)}>
                <p>{JSON.stringify(data)}</p>
                <h1>RegisterForm</h1>
                <label>UserName</label><br/><br/>
                <input  className="demo" type="text" name="username" placeholder='enter username' {...methodsTheming.register('username',{required:"true",pattern:/^[A-Za-z]+$/})}/><br/><br/>
                {errors.username && errors.username.type==="pattern" && <span>username is required mustan should</span>}
                {errors.username && errors.username.type==="required" && <span>username is required</span>}
                <label>Email</label><br/><br/>
                <input  className="demo" type="text" name="email" placeholder='enter eamil'{...methodsTheming.register('email',{required:"true", pattern:/^\S+@\S+$/i})}/><br/><br/>
                {errors.email && errors.email.type==="pattern" && <span>pattern mush an should required</span>}
                {errors.email && errors.email.type==="required" && <span> email is required</span>}
                <label>Password</label><br/><br/>
                <input className="demo"  type="password" name="password" placeholder='enter password' {...methodsTheming.register('password',{required:"true",pattern:/^[0-9,A-Z,a-z\b]+$/,minLength:5,maxLength:10})}/><br/><br/>
                {errors.password && errors.password.type==="required" && <span> password is required</span>}
                {errors.password && errors.password.type==="minLength" && <span> password contais 5 char </span>}
                {errors.password && errors.password.type==="maxLength" && <span> pattern required </span>}
                {errors.password && errors.password.type==="pattern" && <span> pattern required </span>}
                <input className='btn' type="submit" name="submit"/>
                {/* {errors.username && errors.userinfo.type==="required" && ("enter usre name")} */}
                
                
            </form>
        </center>


    </div>
  )
}

export default Form