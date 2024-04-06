import React from 'react'
import "./Contact.css"
const Contact = () => {
  return (
    <div className='contact-container'>
      <div className="contact-row">
        <div className="contact-col">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497511.23105803586!2d79.879329657281!3d13.04798594700017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1712429015130!5m2!1sen!2sin" style={{border:"none",width:"100%",height:"100%"}}></iframe>
        </div>
        <div className="contact-col">
          <input type="text" placeholder='Enter Your Name' />
          <input type="text" placeholder='Enter Your Email' />
          <input type="text" placeholder='Enter Your Mobile Number' />
          <textarea placeholder='Enter Your Feedback' cols="30" rows="11"></textarea>
        </div>
      </div>
    </div>
  )
}

export default Contact;