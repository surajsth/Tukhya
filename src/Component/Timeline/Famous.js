import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import $ from "jquery";

function Famous() {
    const handleClose = () => {
        $(".famousPopBg").fadeOut(300);
        $(".famousPop").slideUp(500);
    };
    return (
        <>
            <section className="popup-bg famousPopBg">
                <div className="popup famousPop">
                    <div className="popup-head">
                        <h4>Famous</h4>

                        <div className="popup-close hamburger-menu">
                            <button onClick={handleClose} className="uk-button bg-close-btn">
                                <AiOutlineClose uk-tooltip="Close" size="1.3rem" color="#fff" />
                            </button>
                        </div>
                    </div>

                    <div className="popup-body">
                        <div className="form-wrapper">
                            <div className="uk-margin-bottom">
                                <p>Tokha is famed for its various temples and festivities in addition to its excellent Chaku. Tokha is a
                                    historic, cultural, and religiously significant village with many tales woven into its 'gullies.
                                    Tokha is an open museum of artistic houses, temples, sculptures, traditional dances and music.</p>
                                <p>
                                    Tokha is known for its production of chaku, a delicacy made from raw sugarcane juice.Chaku - a sweet
                                    made from hardened molasses, which is cooked with ghee, milk and topped with coconut, dates or nuts.
                                    Chaku is made by boiling the molasses mixture in a large pot, and then pouring it out to cool.
                                    It is used in popular Newri dish "Yomari". It is preferred specially in winter. In maghe shankranti
                                    chaku is one of the main dish served.
                                </p>
                                <p>Tokha is rich in cultural and ethnic diversity. There are lots of tourism places such as Baudeshwor Mahadev,
                                    Jhor waterfall, Mahankal, Sapantirtha, Chandeshwori Temple,  Bhutkhel play ground, Saraswoti, Basundhara Devi,
                                    Manohar tirtha, Mahendrashwor Mahadev, Jor Bhimsen temple, Taleju Temple, five beautiful security gates (These
                                    five securty gates for protect for Tokha old city)  that have religious programmes like local newari cultural
                                    (Ceremony) jatras like Gaijtra, Ropai jatra,  Krishna Jamastami jatra, Bisket Jjtra, and beautiful places, rivers
                                    like   Bishnumati river, Sangle khola (River)  and  others  ponds (kunda) Sapantirtha, Sarswoti, Gahana pokhari,
                                    Ganesh pokhari, Sapantirtha Snan Kunda.</p>
                            </div>
                            <p>There are different kinds of historical dance such as Lakhe Nach, Yal Pyakha etc</p>


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

export default Famous