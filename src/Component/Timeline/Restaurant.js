import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import $ from "jquery";

function Restaurant() {
    const handleClose = () => {
        $(".hotelPopBg").fadeOut(300);
        $(".hotelPop").slideUp(500);
    };
    return (
        <>
            <section className="popup-bg hotelPopBg">
                <div className="popup hotelPop">
                    <div className="popup-head">
                        <h4>Restaurant</h4>

                        <div className="popup-close hamburger-menu">
                            <button onClick={handleClose} className="uk-button bg-close-btn">
                                <AiOutlineClose uk-tooltip="Close" size="1.3rem" color="#fff" />
                            </button>
                        </div>
                    </div>

                    <div className="popup-body">
                        <div className="form-wrapper">
                            <div className="uk-margin-bottom">
                                <p>
                                    Newari cuisine has a long historical and cultural significance in Nepal. Newari
                                    cuisine is a traditional style of cooking that originated in the Nepal Valley and
                                    is particularly popular among the Newar people, who are indigenous to the region.
                                    One of the most popular dishes includes Yomari, which is a type of dumpling filled
                                    with a mixture of sesame seeds and molasses, and Chatamari, which is topped with a
                                    variety of meats, vegetables, and eggs. Some of the famous cusine are:
                                </p>
                                <li>Samay Baji</li>
                                <li>Yomari</li>
                                <li>Lakhamari</li>
                                <li>Bara</li>
                                <li>Panchkol (Chhyalcha)</li>
                                <li>Ta:kha (Nyakhuna)</li>
                                <li>Chatamari</li>
                                <li>Wa: (Wo)</li>
                                <li>Chhwela</li>
                                <li>Kachila</li>
                                <li>Sapu Mhicha</li>
                                <li>etc. There are many more other too.</li>
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

export default Restaurant