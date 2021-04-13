import React from 'react'
import msgImage from '../../assets/images/Whatsapp-Message-01.png'
import './Message.css'
function Message() {
    return (
        <div className="main-container">
        <div className="image-container">
             <img src={msgImage} />
        </div>
        <div className="text-container">
            <h1 className="Msg-heading">Daily affirmation texts 
                on WhatsApp/SMS</h1>
            <p className="Msg-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sapiente facilis, cupiditate dolores nostrum corporis.</p>
            <button className="Msg-button">Start Now</button>

        </div>
            
        </div>
    )
}

export default Message
