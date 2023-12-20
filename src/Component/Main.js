import React from 'react'
import "./Main.css"
import { Typewriter } from 'react-simple-typewriter'
function Main() {
    return (
        <>
            <div className="main">
                <div className="uk-container">
                    <div className="contet">
                        <div className='word'>
                            The Northern <br />
                            <span className='word-1'>KingDom of</span> <br />
                            <span className='word-2'>Kathmandu
                                {' '}</span>
                            <span style={{ color: '#fff', fontWeight: 'bold', textShadow: "5px 0px 2px  #FFB6C1" }}>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['Tokha', 'Tukhya']}
                                    loop
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={100}
                                    deleteSpeed={100}
                                    delaySpeed={1000}
                                />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="overlay"></div>
            </div>
        </>
    )
}

export default Main