import React from 'react'
import './Contact.css'

export default function Contact({ language }) {
  return (
    <div className="contact__container">
      <h2 className="contact__title">{language === "EN" ? "CONTACT" : "CONTACTO"}</h2>
      <h3 className="contact__text"> 
        <div>
          <span>{language === "EN" ? "Reach me at " : "Llámame "} +34 697 744 089 | </span>
          <a target="_blank" href="mailto:Yoelnoy@gmail.com">Yoelnoy@gmail.com </a> 

            | 
          
          <a target="_blank" href="https://www.linkedin.com/in/yoelnoy/"> LinkedIn</a>
        </div> 
      </h3>
    </div>
  )
}
