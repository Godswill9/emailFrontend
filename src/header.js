import React, { useEffect, useRef, useState } from 'react'
import './header.css'

export default function Header() {
  const [width, setWidth]=useState("0")
  const [visibility, setvisibility]=useState("hidden")
  const [display2, setDisplay2]=useState("none")
  const [display3, setDisplay3]=useState("none")
const handleBar=()=>{
  if(width==="70%" || visibility==="visible"){
    setvisibility("hidden")
    setWidth("0")
  }
  else if(width==="0" || visibility==="hidden"){
    setWidth("70%")
    setvisibility("visible")
  }
}
const handleDropDown2=()=>{
  if(display2==="none"){
   setDisplay2("block")
  }
  else if(display2==="block"){
   setDisplay2("none")
  }
}
const close=()=>{
  setvisibility("hidden")
    setWidth("0")
}
  return (
    <div>
        <div className='headerCont'>
          <a href='/'>
          <div className='logo'>
                <img src="images/emailPic2.png" alt="webLogo"></img> 
                <span>SendEmails</span>
            </div>
          </a>
            <div className='compView '> 
            <div className='links'>
                <div><a href="/"><span>Home</span></a></div>
                <div><a href="/authenticate"><span>Account</span></a></div>
                <div><a href="/sendMails"><span>Send Emails</span></a></div>
                {/* <div><a href="#"><span>Road Map</span></a></div>
                <div><a href="#"><span>About us</span></a></div> */}
            </div> 
            {/* <button>Logout</button> */}
            </div>
            <div className='mobileView'>
              {visibility=="hidden"? <i className='bars' onClick={handleBar} style={{"fontSize":"25px","fontWeight":"10px","marginRight":"1em","color":"rgb(209, 204, 204)"}} class="fa fa-bars" aria-hidden="true"></i>:<i className='bars' onClick={handleBar} style={{"fontSize":"25px","fontWeight":"10px","marginRight":"1em","color":"rgb(209, 204, 204)"}} class="fa fa-times" aria-hidden="true"></i>}
            <div className='contentDiv' style={{"width":width, "visibility":visibility}}>
            <a href="/"><div onClick={close}><span>Home</span></div></a>
            <a href="/authenticate"><div onClick={close}><span>Account</span></div></a>
            <a href="/sendMails"><div onClick={close}><span>Send Emails</span></div></a>
            {/* <a href="#"><div onClick={close}><span>Road Map</span></div></a>
            <a href="#"><div onClick={close}><span>About us</span></div></a> */}
            <button className='mobileBuy' onClick={close}>Logout</button>
              </div>
                </div>
        </div>
    </div>
  )
}
