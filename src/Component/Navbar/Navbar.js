import React, { useState } from 'react'
import './Navbar.css'
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"
import { Link } from 'react-router-dom'

function Navbar() {
    const [clicked, setClicked] = useState(false)
    const handleClicked = () => {
        setClicked(!clicked)
    }

    const handleShow = () => {
        setClicked(clicked)
    }
    return (
        <>
            <nav className='' uk-sticky="top:300; animation: uk-animation-slide-top;">
                <span className='Logo'> <b>
                    <Link to="/" className='Logo'>Tukhya</Link></b></span>
                <div>
                    <ul className={`navbar ${clicked ? "navbar-show" : "navbar-hide"}`}>
                        {/* className={clicked ? "#navbar active"
                        : "#navbar"} */}
                        <li><Link to="/" className='Link'>Emergency 100</Link></li>
                        <li><Link to="/" className='Link'>Fire 101</Link></li>
                        <li><Link to="/" className='Link'>Ambulance 102</Link></li>
                    </ul>
                </div>
                <div id="mobile" onClick={handleClicked}>
                    {clicked ? <AiOutlineClose color='white' size="2rem" style={{ cursor: "pointer" }} />
                        : <GiHamburgerMenu color='white' size="2rem" style={{ cursor: "pointer" }} onClick={handleShow} />
                    }



                </div>
            </nav>
        </>
    )
}

export default Navbar