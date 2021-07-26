import React from 'react'
import './Projects.css'
import text from '../../media/text'

export default function Projects({language}) {
  return (
    <div className="projects__container">
      <h2 className="projects__title">{language === "EN" ? "PROJECTS" : "POYECTOS"}</h2>
      <div className="projects__bottom">
        <div className="projects__left">
          {/* title */}
          <h3>Live Chat App</h3>
          {language === "EN" ? text.projectEnglish : text.projectSpanish}
          <div className="projects__left-button">
            <a href="https://youthful-spence-664ce8.netlify.app/" target="_blank" rel="noreferrer">{language === "EN" ? "See Live" : "Abrir App"}</a>
            <a href="https://github.com/yoelnoy/reactjs-live-chat" target="_blank" rel="noreferrer">{language === "EN" ? "Source Code" : "Ver Codigo"}</a>
          </div>
        </div>
        <div className="projects__right">
        <a href="https://youthful-spence-664ce8.netlify.app/" target="_blank" rel="noreferrer">
          <div className="projects__right-image"></div></a>
        </div>
      </div>
    </div>
  )
}
