import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import $ from "jquery";

function Indra() {
    const handleClose = () => {
        $(".IndraPopBg").fadeOut(300);
        $(".IndraPop").slideUp(500);
    };
    return (
        <>
            <section className="popup-bg IndraPopBg">
                <div className="popup IndraPop">
                    <div className="popup-head">
                        <h4>Indra Jatra</h4>

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
                                        Indra Jātrā, also known as Yenyā (Nepal Bhasa: येँयाः), is the biggest religious street festival in Kathmandu, Nepal.
                                        Indra Jātrā is marked by masked dances of deities and demons, displays of sacred images and tableaus in honor of the
                                        deity Indra, the king of heaven.
                                    </p>
                                    <p>
                                        Belief has it that Indra, the rain deity, once traveled to the Kathmandu valley to steal a particular flower for his
                                        mother, Dagini. Since no one knew who he was, Indra was held captive like a regular robber. In Kathmandu's
                                        alleyways and lanes, the elephant looked for his master in vain. Concerned, Indra's mother descended to earth.
                                        The kidnapper was willing to release Indra after being exposed to the general public. Dagini agreed to perform
                                        two tasks in exchange. One is to return people who have passed away in the previous year to paradise. The
                                        second is to spread out enough dew over the course of the winter to guarantee a decent crop. Indra Jatra is
                                        observed in Kathmandu, Nepal, for this reason
                                    </p>
                                    <p>In Tokha different light (diyo) is lighting in different part of Tokha with the belief of showing a way to
                                        Lord Indra to its a way to home. Different child, young, old women came with light material and roam around
                                        the Tokha valley. There are participation of men women singing dancing with different musical instrument. </p>
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

export default Indra