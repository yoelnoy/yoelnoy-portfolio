import React, { useState, useEffect, useRef } from 'react'
import './About.css'
import text from '../../media/text'
import cv from '../../media/cv.pdf'

export default function About({ aboutScroll, setAbouScroll, language}) {

  const scrollToBottomRef = useRef();

  const scrollToBottomFunc = () => {
    scrollToBottomRef.current.scrollIntoView({behavior: "smooth"});
  }

  useEffect(() => {
    if (aboutScroll === true) {
      scrollToBottomFunc();
      setAbouScroll(false)
    }
  })

  return (
    <div  className="about__container">
        <div ref={scrollToBottomRef} className="about__header">
          <h2 className="about__title">{language === "EN" ? "ABOUT ME" : "CERCA DE MI"}</h2>
        </div>
        <div className="about__lower-container">
          <div className="about__left">
            <div className="about__left-image"></div>
          </div>
          <div className="about__right">
            {language === "EN" ? text.englishText : text.spanishhText}
            <div className="about__right-button">
              <a href={cv} target="_blank" rel="noreferrer">{language === "EN" ? "Resume" : "Curriculum"}</a>
            </div>
          </div>
        </div>
    </div>
  )
}
