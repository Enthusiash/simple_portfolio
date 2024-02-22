import React from 'react';

import '../styles/navbar.css';

const Navbar = () => {

    return(
        <nav>
            <div className="nav-logo">
            <h1>Logo!</h1>
            </div>
            <div className="nav-links">
            <ul className="navs">
            <a>
            <li>Home</li>
            </a>
            <a>
            <li>Experiences</li>
            </a>
            <a>
            <li>Skills</li>
            </a>
            </ul>
            </div>
            <div className="nav-btn">
            <button>Download CV</button>
            </div>
        </nav>
    )
};

export default Navbar