import React, { useState, useEffect } from 'react'
import { Link, Image } from 'react-router-dom'
import { Menu, MenuOpen, TramRounded} from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import './navbar.css';
import Scrollspy from 'react-scrollspy'



function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] =useState(TramRounded)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const scrollTo = (element) => {
        document.querySelector(element).scrollIntoView({
          behavior: 'smooth',
        });
      };

    const handleScroll = (event) => scrollTo(event.target.getAttribute('href'));


    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
      }, []);

    window.addEventListener('resize', showButton)


    return (
        <>
                <nav className="navbar">
                    <div className="navbar-container">
                        <Link to="/" className="navbar-logo"
                        onClick={closeMobileMenu}
                        >
                            PD
                        </Link>
                        <div className="menu-icon">
                            <IconButton className="menuBtn" onClick={handleClick}>
                                {click ? <MenuOpen /> : <Menu />}
                            </IconButton>
                        </div>

                        <Scrollspy
                            items={ ['projects', 'about', 'home'] }
                            offset={ -50 }
                            onUpdate={
                            (el) => {
                                console.log(el)
                            }
                            }
                        >
                            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                                <li className="nav-item">
                                    <a href='#home' className='nav-links' onClick={closeMobileMenu}>
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href='#projects' className='nav-links' onClick={closeMobileMenu}>
                                        Projects
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href='#feature-project' className='nav-links' onClick={closeMobileMenu}>
                                        Feature Project
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href='#about' className='nav-links' onClick={closeMobileMenu}>
                                        About
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className='nav-links' href={process.env.PUBLIC_URL + '/Patrick_Dohn_Resume(11-21-2020).pdf'}
                                    onClick={closeMobileMenu}
                                    >
                                    Resume
                                    </a>
                                </li>
                            </ul>
                        </Scrollspy>
                    </div>
                </nav>
        </>
    )
}

export default Navbar
