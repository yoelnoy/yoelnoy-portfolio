import React from 'react'
import './Projects.css'
import projects from '../../media/projectsInfo'


export default function Projects({language}) {
  return (
    <div className="projects__container">

      <h2 className="projects1__title">{language === "EN" ? "PROJECTS" : "POYECTOS"}</h2>
      {projects.map(p => (
        <div className="projects1__project">
          <div className="projects1__left">
            <h3>{p.title}</h3>
            <p className="projects1__desc">{language === "EN" ? p.descriptionEnglish : p.descriptionSpanish}</p>

            <div className="projects1__left-button">
              <a href={p.app} target="_blank" rel="noreferrer">{language === "EN" ? "See Live" : "Abrir App"}</a>
              <a href={p.github} target="_blank" rel="noreferrer">{language === "EN" ? "Source Code" : "Ver Codigo"}</a>
            </div>
            
          </div>
          
          <div className="projects1__right">
            <div className="projects1__right-inner">
              <a href={p.app} target="_blank" rel="noreferrer">
                <img className="projects1__right-image" src={p.img} alt="" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
