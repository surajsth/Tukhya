import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import $ from "jquery";

function Introduction() {
    const handleClose = () => {
        $(".introPopBg").fadeOut(300);
        $(".introPop").slideUp(500);
    };
    return (
        <>
            <section className="popup-bg introPopBg">
                <div className="popup introPop">
                    <div className="popup-head">
                        <h4>Introduction</h4>

                        <div className="popup-close hamburger-menu">
                            <button onClick={handleClose} className="uk-button bg-close-btn">
                                <AiOutlineClose uk-tooltip="Close" size="1.3rem" color="#fff" />
                            </button>
                        </div>
                    </div>

                    <div className="popup-body">
                        <div className="form-wrapper">
                            <div className="uk-margin-bottom">
                                <p>Tokha is an ancient city of Kathmandu district in Province No. 3 of Nepal. An old town with
                                    numerous stories wrapped inside its gallies, Tokha holds authentic, social, and strict
                                    essentialness. Tokha is basically sourrounded by Budhanilkantha in East, Dhapasi and Hatigauda
                                    in South, Sangla, Phutung and Manamaiju from west and shivapuri National park from North.</p>
                                <p>
                                    Tokha has more than hundred of gallies holding different stories. This place is inhabitate of Newars.
                                    Here you can see lots of old monuments architecture and culture being protected. It has its own history.
                                    Most of People here speaks Newari as their language to communicate with each other. Most of people here
                                    are hindus behind hindu number of buddhist, christans and others used to live here.
                                </p>
                                <p>Tokha is rich in cultural and ethnic diversity. The main sources of livelihood of Tokha communities are
                                    agriculture and live stock, and other small scale trade and businesses. There are lots of tourism places
                                    such as Baudeshwor Mahadev, Jhor waterfall, Mahankal, Sapantirtha, Chandeshwori Temple,  Bhutkhel play ground,
                                    Saraswoti, Basundhara Devi,  Manohar tirtha, Mahendrashwor Mahadev, Jor Bhimsen temple, Taleju Temple,
                                    five beautiful security gates (These five securty gates for protect for Tokha old city)  that have religious
                                    programmes like local newari cultural (Ceremony) jatras like Gaijtra, Ropai jatra,  Krishna Jamastami jatra,
                                    Bisket Jjtra, and beautiful places, rivers like   Bishnumati river, Sangle khola (River)  and  others  ponds
                                    (kunda) Sapantirtha, Sarswoti, Gahana pokhari, Ganesh pokhari, Sapantirtha Snan Kunda.</p>
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

export default Introduction