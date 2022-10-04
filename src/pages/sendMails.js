import React, { useState } from 'react'
import Header from '../header'
import './sendMails.css'
import axios from "axios"

export default function SendMails() {
    const[namee, setNamee]=useState("Dayo")
    const [recieversEmail, setRecievers]=useState([])
    const[display1, setDisplay1]=useState("none")
    const[display2, setDisplay2]=useState("none")
    const[display5, setDisplay5]=useState("none")
    const[display6, setDisplay6]=useState("none")
    const[display7, setDisplay7]=useState("none")
    const newMessage={"background-color": "rgba(255, 0, 0, 0.767)"}
    const [sendMessage, setmessage]=useState({
        email:"",
        subject:"",
        message:""
      })
    const handleSendMessage=(e)=>{
        setmessage((prev)=>({
            ...prev, [e.target.name]:e.target.value
        }))
    }
    const handleRecievers=(e)=>{
        setRecievers(e.target.value)
    }
    const sendMessageApi=async(obj)=>{
        await axios({
            url:"https://email-api1.onrender.com/api/sendMail",
            method:"POST",
            data:obj,
            withCredentials:true
        })
    }
    const handleSendMessageClick=(e)=>{
          e.preventDefault()
          const details={...sendMessage, recieversEmail:recieversEmail}
        //   console.log(details)
        sendMessageApi(details)
    }

  const handleNewActivity=()=>{
    if(display1==="none"){
        setDisplay1("flex")
    }else{
        return
    }
  }
  const handleParentDetails2=()=>{
    if(display2==="none") {
        setDisplay2("block")
        setDisplay5("none")
        setDisplay7("none")
    }else{
        return
    }
  }
  const handleParentDetails5=()=>{
    if(display5==="none") {
        setDisplay5("block")
        setDisplay2("none")
        setDisplay7("none")
    }else{
        return
    }
  }
  const handleParentDetails7=()=>{
    if(display7==="none") {
        setDisplay7("block")
        setDisplay2("none")
        setDisplay5("none")
    }else{
        return
    }
  }
  
  const showPopup=()=>{
    if(display6==="none") {
        setDisplay6("flex")
    }else{
        return
    }
  }
  const closePopup=()=>{
    if(display6==="flex") {
        setDisplay6("none")
    }else{
        return
    }
  }

  return (
    <div>
        <Header/>
        <div className='sendMailCont'>
            <div className='sendMailInner'>
            <h2>Hello {namee} 😃🚀</h2>
             <button onClick={handleNewActivity}>Click</button> <span className="contd">to start a new activity🚀</span>
             <div className='mailOptions' style={{"display":display1}}>
                <button onClick={handleParentDetails2}><i class="fa fa-inbox" aria-hidden="true"></i></button>
                {/* <button onClick={handleParentDetails5}><i class="fa fa-reply" aria-hidden="true"></i></button> */}
                <button onClick={handleParentDetails7}><i class="fa fa-history" aria-hidden="true"></i></button>
             </div>
             <div className='sendMails' style={{"display":display2}}>
                <h3>Send Mails <i class="fa fa-inbox" aria-hidden="true"></i></h3>
                {/* <div className='one'>
                    <div><span>Send to a user?</span><button onClick={showForm1}>Continue</button></div>
                    <div><span>Send to multiple users?</span><button onClick={showForm2}>Continue</button></div>
                </div> */}
                <div className='two'>
                    <div className='multipleUsers'>
                    <form>
                        {/* <div className='sec'>
                        <input type="email" name='email' value={sendMessage.email} onChange={handleSendMessage} placeholder='Enter your email' required></input>
                        </div> */}
                        <div className='sec'>
                            <input type="text" name='subject' value={sendMessage.subject} onChange={handleSendMessage} placeholder='Subject (optional)*'></input>
                            </div>
                        <div className='sec'>
                        <input type="text" name='recieversEmail' value={recieversEmail} onChange={handleRecievers} placeholder="Enter recipients' emails" required></input>
                        </div>
                        <div className='sec'>
                        <textarea name='message' value={sendMessage.message} onChange={handleSendMessage} placeholder='Enter your broadcast message'></textarea>
                        </div>
                        <button onClick={handleSendMessageClick}>Send</button>
                        </form>
                    </div>
                </div>
             </div>
             <div className='replyMails'style={{"display":display5}}>
                <div className='head'>
                    <h3>Inbox ⛷</h3>
                    <div className='notification'>
                        <span>100</span>
                     <i class="fa fa-inbox" aria-hidden="true"></i>
                    </div>
                </div>
                <div className='contents'>
                    <div className='indiv' style={newMessage}>
                        {/* <div className='oone'> */}
                        <span>6:32pm</span>
                       <div className='namee'>Bola</div>
                       <span className='littleMessage'>Hello, I just recieved your mail, and ...</span>
                        {/* </div> */}
                       <div className='moreOptions'>
                        <button onClick={showPopup}>View</button>
                        <button>Mark as read</button>
                       </div>
                    </div>
                    <div className='indiv'>
                       <span>6:32pm</span>
                       <div className='namee'>Gyakie</div>
                       <span className='littleMessage'>Hello, I just recieved your mail, and ...</span>
                       <div className='moreOptions'>
                        <button onClick={showPopup}>View</button>
                        <button>Mark as read</button>
                       </div>
                    </div>
                    <div className='indiv' style={newMessage}>
                       <span>6:32pm</span>
                       <div className='namee'>Akin</div>
                       <span className='littleMessage'>Hello, I just recieved your mail, and ...</span>
                        <div className='moreOptions'>
                        <button onClick={showPopup}>View</button>
                        <button>Mark as read</button>
                       </div>
                    </div>
                    <div className='indiv' style={newMessage}>
                       <span>6:32pm</span>
                       <div className='namee'>Blessed</div>
                       <span className='littleMessage'>Hello, I just recieved your mail, and ...</span>
                        <div className='moreOptions'>
                        <button onClick={showPopup}>View</button>
                        <button>Mark as read</button>
                       </div>
                    </div>
                </div>
                <div className='replyPopup' style={{"display":display6}}>
                  <i onClick={closePopup} class="fa fa-times" aria-hidden="true"></i>
                    <div  className='inne'>
                        <div className='readEmail'>
                        Hello, I just recieved your mail, and I see that this is a very good opportunity. I 
                        currently don't have enough cash on me, but im inerested in working with you.Is there a way you can 
                        bring down the price.
                        </div>
                        <div className='moreActions'>
                            <span>Reply⛷</span>
                            <input type="text"></input>
                            <button>Send</button>
                        </div>
                    </div>
                </div>
             </div>
             <div className='HistorySection' style={{"display":display7}}>
                <div className='head'>
                    <h3>History ⛷</h3>
                    <div className='notification'>
                        <span>100</span>
                     <i class="fa fa-history" aria-hidden="true"></i>
                    </div>
                </div>
                <div className='sentSection'>
                    <div className='detIndiv'>
                        <span>Messagee</span>
                        <i class="fa fa-check" aria-hidden="true"></i>
                    </div>
                    <div className='detIndiv'>
                        <span>Messagee</span>
                        <i class="fa fa-check" aria-hidden="true"></i>
                    </div>
                    <div className='detIndiv'>
                        <span>Messagee</span>
                        <i class="fa fa-check" aria-hidden="true"></i>
                    </div>
                    <div className='detIndiv'>
                        <span>Messagee</span>
                        <i class="fa fa-check" aria-hidden="true"></i>
                    </div>
                    <div className='detIndiv'>
                        <span>Messagee</span>
                        <i class="fa fa-check" aria-hidden="true"></i>
                    </div>
                    <div className='detIndiv'>
                        <span>Messagee bfgbh gnbldsk hnbgujfdhlgf hsnbsadfbn jfj fdflkj h
                            dfhgil hs dfhg kdfjg
                        </span>
                        <i class="fa fa-check" aria-hidden="true"></i>
                    </div>
                </div>
             </div>
            </div>
        </div>
    </div>
  )
}
