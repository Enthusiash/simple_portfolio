import React from 'react'

import '../styles/footer.css'

import Copyright from '../assets/icon/copyright.svg'
import Facebook from '../assets/icon/facebook.svg'
import Instagram from '../assets/icon/instagram.svg'
import Gmail from '../assets/icon/gmail.svg'
import Github from '../assets/icon/github.svg'
import Linkedin from '../assets/icon/linkedin.svg'


const Footer = () => {
  return (
    <div className="footer-container">
        <div className="first-footer">
            <img className="copyright" src={Copyright} alt="" />
            <p>2024, Ashley Otchengco. All rights reserved.</p>
        </div>
        <div className="footer-icons">
            <img src={Facebook} alt="" />
            <img src={Instagram} alt="" />
            <img src={Gmail} alt="" />
            <img src={Github} alt="" />
            <img src={Linkedin} alt="" />
        </div>
    </div>
  )
}

export default Footer