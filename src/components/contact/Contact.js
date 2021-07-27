import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';

export default function Contact({ language }) {
  return (
    <div className="contact__container">
      <h2 className="contact__title">{language === "EN" ? "CONTACT" : "CONTACTO"}</h2> 
      <h3 className="contact__text"> 
        <div>
          <span>{language === "EN" ? "Reach me anytime here " : "contáctame en cualquier momento "}</span>
          <div className="icons">
            <a target="_blank" href="tel:+34697744089"> <MdCall /> </a>  
            <a target="_blank" href="mailto:Yoelnoy@gmail.com"><AiOutlineMail /></a> 
            <a target="_blank" href="https://www.linkedin.com/in/yoelnoy/"> <AiOutlineLinkedin /></a>
          </div>
        </div> 
      </h3>
    </div>
  )
}

  