import React from 'react'

import '../styles/experience.css'

// IMAGES //
import Chars from '../assets/CHARS.png'
import SimpleCRUD from '../assets/SimpleCRUD.png'

const Experience = () => {
  return (
    <div className="experience-container">
        <h1>Experience</h1>
        <div className="logo-container">
        <div className="chars-container">
            <img className="chars-img" src={Chars} alt="Chars" />
            <h1>Camella House Interior Recommendation System</h1>
        </div>
        <div className="crud-container">
            <img className="crud-img" src={SimpleCRUD} alt="Chars" />
            <h1>Simple CRUD</h1>
        </div>
        </div>
    </div>
  )
}

export default Experience