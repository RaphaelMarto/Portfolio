import React from 'react';
import CV from "../../Assets/Cv.pdf"
import './navbar.css'

const Navbar = () => {
  return (
    <>
    <header className='header'>
        <div className='container-nav'>
            <div className='navlink'>
                <ul className='navbar-main'>
                    <li>
                        <a href='#home'>Home</a>
                    </li>
                    <li>
                        <a href='#about'>About</a>
                    </li>
                    <li>
                        <a href='#portfolio'>Portfolio</a>
                    </li>
                    <li>
                        <a href={CV} target="_blank" rel="noreferrer">CV</a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    </>
  );
};

export default Navbar;
