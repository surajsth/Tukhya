import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import $ from "jquery";

function Hospital() {
    const handleClose = () => {
        $(".hospitPopBg").fadeOut(300);
        $(".hospitPop").slideUp(500);
    };
    return (
        <>
            <section className="popup-bg hospitPopBg">
                <div className="popup hospitPop">
                    <div className="popup-head">
                        <h4>Hospital</h4>

                        <div className="popup-close hamburger-menu">
                            <button onClick={handleClose} className="uk-button bg-close-btn">
                                <AiOutlineClose uk-tooltip="Close" size="1.3rem" color="#fff" />
                            </button>
                        </div>
                    </div>

                    <div className="popup-body">
                        <div className="form-wrapper">
                            <div className="uk-margin-bottom">
                                <p>Tokha have one state hospital named Chandeswori Priority Health Center and one of the biggest hospital
                                    named Grande Hospital. Behind these hospital there are lots of other clinics and lots of pharmacy.
                                </p>
                                <p>
                                    Chandeswori Priority Health Center give services include video x-ray services, healthy eye care service
                                    gynecologist services and dental services. Among them, Video X-ray service every Monday from 8 to 9 am,
                                    Gynecologist service every week. There are other services too such as pregnant check up to birth process.
                                    There are service of normal health checkup to full body checkup too.
                                </p>
                                <p>Grande International Hospital contains almost each and every services like of international.</p>
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

export default Hospital