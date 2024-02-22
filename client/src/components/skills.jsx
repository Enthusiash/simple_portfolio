import React from 'react'

import '../styles/skills.css'

import Figma from '../assets/icon/figma.svg'
import Html from '../assets/icon/html.svg'
import Css from '../assets/icon/css.svg'
import Javascript from '../assets/icon/javascript.svg'
import Iconreact from '../assets/icon/react.svg'
import Node from '../assets/icon/node.svg'
import MaterialUI from '../assets/icon/mui.svg'
import Tailwind from '../assets/icon/tailwind.svg'
import Php from '../assets/icon/php.svg'
import Mysql from '../assets/icon/mysql.svg'
import MongoDb from '../assets/icon/mongodb.svg'


const Skills = () => {
  return (
    <div className="skills-container">
        <h1>Skills</h1>
        <p>“The learned ability to act with determined results with good execution often within a given amount of time, energy and effort.”</p>
        <div className="skillset">
            <h1>Front-End Web Development</h1>
            <h1>Quality Assurance Tester</h1>
            <h1>Technical Support</h1>
        </div>
        <div className="svg-icons">
            <img src={Figma} alt="" />
            <img src={Html} alt="" />
            <img src={Css} alt="" />
            <img src={Javascript} alt="" />
            <img src={Iconreact} alt="" />
            <img src={Node} alt="" />
            <img src={MaterialUI} alt="" />
            <img src={Tailwind} alt="" />
            <img src={Php} alt="" />
            <img src={Mysql} alt="" />
            <img src={MongoDb} alt="" />
        </div>
    </div>
  )
}

export default Skills