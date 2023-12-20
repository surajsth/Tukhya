import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import $ from "jquery";

function Education() {
    const handleClose = () => {
        $(".eduPopBg").fadeOut(300);
        $(".eduPop").slideUp(500);
    };
    return (
        <>
            <section className="popup-bg eduPopBg">
                <div className="popup eduPop">
                    <div className="popup-head">
                        <h4>Education</h4>

                        <div className="popup-close hamburger-menu">
                            <button onClick={handleClose} className="uk-button bg-close-btn">
                                <AiOutlineClose uk-tooltip="Close" size="1.3rem" color="#fff" />
                            </button>
                        </div>
                    </div>

                    <div className="popup-body">
                        <div className="form-wrapper">
                            <div className="uk-margin-bottom">
                                <p>Education in tokha is started from saraswati secondary school and present there are more than 10 school
                                    in tokha and its on phase of increasing too. All of these school are providing quality of education.
                                    The current school of tokha are:
                                </p>
                                <li>Saraswoti English Secondary School</li>
                                <li>Oasis Public Academy</li>
                                <li>Amar English Secondary School</li>
                                <li>Bindyabasini Secondary Boarding School</li>
                                <li>Laxmipur English Secondary School</li>
                                <li>Shree Chadeshwori English Boarding School</li>
                                <li>Ganesh English Secondary School</li>
                                <li>Divine School</li>
                                <li>etc..</li>
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

export default Education