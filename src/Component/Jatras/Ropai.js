import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import $ from "jquery";

function Ropai() {
    const handleClose = () => {
        $(".RopaiPopBg").fadeOut(300);
        $(".RopaiPop").slideUp(500);
    };
    return (
        <>
            <section className="popup-bg RopaiPopBg">
                <div className="popup RopaiPop">
                    <div className="popup-head">
                        <h4>Ropai Jatra</h4>

                        <div className="popup-close hamburger-menu">
                            <button onClick={handleClose} className="uk-button bg-close-btn">
                                <AiOutlineClose uk-tooltip="Close" size="1.3rem" color="#fff" />
                            </button>
                        </div>
                    </div>

                    <div className="popup-body">
                        <div className="form-wrapper">

                            <div className="uk-grid uk-grid-small uk-child-width-1-1@m uk-child-width-1-1@s">
                                <span className='uk-margin-bottom'>
                                    <p>
                                        Ropai Jatra is known as “Sina Jya Jatra” in Nepal Bhasa. The celebration procession
                                        of this Jatra starts on the day of Bhadra Krishna Pakchya Dwitiya Tithi (date) every
                                        year and lasts for a week. year and lasts for a week.  In many places, it is customary
                                        to celebrate Ropai Jatra on the day after Gaijatra.


                                    </p>
                                </span>

                            </div>

                        </div>
                    </div>
                    <div className="popup-footer buttons">

                        <button className="uk-button transparent-btn" onClick={handleClose}>
                            <Link>Close</Link>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Ropai