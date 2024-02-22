import React from 'react'

// STYLE //
import '../styles/header.css'

// IMAGES //
import Profile from '../assets/formal_pic.png';

const Header = () => {

  return (
    <div className="header-container">

        <div className="profile-container">
            <img className="profile" src={Profile} alt="Ash" />
        </div>

        <div>
            <h1>Hello!<br />I am Otchengco, Ashley G.</h1>
            <h2>Aspiring Front-End Web Developer</h2>
        </div>

    </div>
  )
}

export default Header