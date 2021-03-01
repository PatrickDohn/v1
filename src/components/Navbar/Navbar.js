import React, { useState } from 'react'
import { Menu, MenuOpen } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import './navbar.css';
import Scrollspy from 'react-scrollspy'



function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return (
        <>
                <nav className="navbar">
                    <div className="navbar-container">
                        <a href='#home' className="navbar-logo"
                        onClick={closeMobileMenu}
                        >

                        </a>
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
                                    <a href='#feature-project' className='nav-links' onClick={closeMobileMenu}>
                                        Featured Project
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href='#projects' className='nav-links' onClick={closeMobileMenu}>
                                        Other Projects
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href='#about' className='nav-links' onClick={closeMobileMenu}>
                                        About
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className='nav-links' href={process.env.PUBLIC_URL + '/PatrickDohn-Resume.pdf'}
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
