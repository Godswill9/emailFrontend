import React, { useState } from 'react'
import Header from '../header'
import "./auth.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Auth() {
  const [checked, setChecked]=useState(false)
  const [signupDetails, setSignup]=useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    phone:0
  })
  const [loginDetails, setLogin]=useState({
    email:"",
    password:""
  })
  const handleSignup=(e)=>{
     setSignup((prev)=>({
       ...prev, [e.target.name]:e.target.value
     }))
  }
  const handleLogin=(e)=>{
     setLogin((prev)=>({
       ...prev, [e.target.name]:e.target.value
     }))
  }
  const sendSignup=async(items)=>{
      await axios({
        method:"POST",
        url:"https://email-api1.onrender.com/api/signup",
        data:items,
        withCredentials:true
      })
      .then((res)=>console.log(res))
  }
  const sendLogin=async(items)=>{
      await axios({
        method:"POST",
        url:"https://email-api1.onrender.com/api/login",
        data:items,
        withCredentials:true
      })
      .then((res)=>console.log(res))
  }
    const navigate=useNavigate()
    const [display, setDisplay]=useState("flex")
    const [display2, setDisplay2]=useState("none")
    const [obj, setObj]=useState(true)
    const obj1={
        "backgroundColor":"rgba(255, 255, 255, 0.733)",
        "color":"blue",
        "boxShadow":"0 0 40px white"
    }
    const handleDisplay1=()=>{
        setDisplay("none")
        setDisplay2("flex")
        setObj(false)
    }
    const handleDisplay2=()=>{
        setDisplay("flex")
        setDisplay2("none")
        setObj(true)
    }
    //signup
    const handleSubmit=(e)=>{
      e.preventDefault()
      const obj={...signupDetails}
      console.log(obj)
      sendSignup(signupDetails)
    }
    //login
    const handleSubmit2=(e)=>{
      e.preventDefault()
      const obj={...loginDetails, checked}
      console.log(obj)
      sendLogin(obj)
    }
  return (
    <div>
        <Header/>
        <div className='authCont'>
            <div className="circles">
                {obj? <div style={obj1}>1</div> :<div>1</div>}
                {!obj? <div style={obj1}>2</div>:<div>2</div>}
            </div>
            <div className='authSec'>
            <div className='signup' style={{"display":display}}>
                <span>Signup as a new user</span>
                <form>
                    <div className='sec'>
                      <input type="text" name="firstName" onChange={handleSignup} value={signupDetails.firstName} placeholder='FirstName'></input>
                    </div>
                    <div className='sec'>
                      <input type="text" name="lastName" onChange={handleSignup} value={signupDetails.lastName} placeholder='LastName'></input>
                    </div>
                    <div className='sec'>
                      <input type="text" name="email" onChange={handleSignup} value={signupDetails.email} placeholder='Email'></input>
                    </div>
                    <div className='sec'>
                      <input type="number" name="phone" onChange={handleSignup} value={signupDetails.phone} placeholder='Phone'></input>
                    </div>
                    <div className='sec'>
                      <input type="password" name="password" onChange={handleSignup} value={signupDetails.password} placeholder='Password'></input>
                    </div>
                    <div className='sec'>
                      <input type="password" name="confirmPassword" placeholder='Confirm password'></input>
                    </div>
                    {/* <input onChange={()=>setChecked(!checked)} name="checked" value={checked} type="checkbox" className='check'></input><br></br> */}
                    <button onClick={handleSubmit} className='but'>Signup</button>
                </form>
                <div className='switch'>
                    <span>Already have an account? <button onClick={handleDisplay1} className='but1'>Login</button></span>
                </div>
            </div>
            <div className='Login'style={{"display":display2}}>
                <span>Login to your account</span>
                <form>
                    <div className='sec'>
                      <input type="text" onChange={handleLogin} name="email" value={loginDetails.email} placeholder='Email'></input>
                    </div>
                    <div className='sec'>
                      <input type="password" onChange={handleLogin} name="password" value={loginDetails.password}  placeholder='Password'></input>
                    </div>
                    <input type="checkbox" onChange={handleLogin} name="checked" value={loginDetails.checked} className='check'></input> save<br></br>
                    <button onClick={handleSubmit2} className='but'>Login</button>
                </form>
                <div className='switch'>
                    <span>New user? <button onClick={handleDisplay2} className='but1'>Signup</button></span>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
