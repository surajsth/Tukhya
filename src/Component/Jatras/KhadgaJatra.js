import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import $ from "jquery";

function KhadgaJatra() {
    const handleClose = () => {
        $(".KhaPopBg").fadeOut(300);
        $(".KhaPop").slideUp(500);
    };
    return (
        <>
            <section className="popup-bg KhaPopBg">
                <div className="popup KhaPop">
                    <div className="popup-head">
                        <h4>Khadga Jatra</h4>

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
                                    This ritual is observed every year on the eleventh day of the waxing moon in the
                                    Nepali month of Asoj as per the lunar calendar. As part of the festival, a sword is
                                    worshipped and covered with bamboo as per the rituals and placed on a wooden
                                    palanquin which is then taken around the town in a procession. The procession
                                    starts from the local Taleju goddess temple and marches to Tallo Lachhi.

                                    Although the exact date when this ritual started is not known,
                                    it is believed to date back to the ancient period. It is on this day every year
                                    that this ancient sword is displayed to the public.
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

export default KhadgaJatra