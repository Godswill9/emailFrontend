import React from 'react'
import Header from '../header'
import './home.css'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate=useNavigate()
  return (
    <div>
        <Header/>
        <div className='homeCont'>
            <div className='inner'>
            <img src="images/emailPic3.jpg"></img>
            <p>Welcome user!🐱‍🏍</p>
          <div className='buttons'>
            <button onClick={()=> navigate('/authenticate')}>Proceed</button>
          </div>
            </div>
        </div>
    </div>
  )
}
