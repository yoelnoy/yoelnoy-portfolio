import React, { useState, useEffect, useRef } from 'react'
import './Hero.css'

export default function Ones({ setAbouScroll, language, setLanguage, fotterScroll, setFooterScroll}) {

  const [buttonClass, setButtonClass] = useState(false)
  const scrollToTopRef = useRef();

  useEffect(() => {
    if(fotterScroll){
      scrollToTopFunc();
      setFooterScroll(false);
    }
  })

  const scrollToTopFunc = () => {
    scrollToTopRef.current.scrollIntoView({behavior: "smooth"});
  }

  const scrollToAbout = () => {
    setAbouScroll(true)
  }

  const toggleLanguage = () => {
    var select = document.getElementById('language');
    var value = select.options[select.selectedIndex].value;
    if (value === "EN") {
      setLanguage("EN")
    } else {
      setLanguage("ES")
    }
  }

  return (
    <div ref={scrollToTopRef} className="container">
      <div className="content">

        <select onChange={toggleLanguage} className="hero__language" id="language">
          <option value="" selected disabled hidden>{language === "EN" ? "Language" : "Idioma"}</option>
          <option id="EN" value="EN">EN</option>
          <option id="ES" value="ES">ES</option>
        </select>

        {language === "EN"? 
          <h1 className="hero__text-en">
          Hi, my name is
          <span className="content__span">Yoel Noy</span>
          <br />
          A React.js frontend developer
        </h1> :
        <h1 className="hero__text-es">
          Hola, soy
          <span className="content__span">Yoel Noy</span>
          <br />
          Desarrollador frontend - React.js
        </h1>}

        <button 
          onClick={scrollToAbout} 
          className="content__button"
          style={{ fontSize: "2rem"}}>
          {language === "EN" ? "Know more" : "Saber mas"}
        </button>
      </div>
    </div>
    
  )
}


