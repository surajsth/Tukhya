import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import $ from "jquery";
function Gai() {
    const handleClose = () => {
        $(".GaiPopBg").fadeOut(300);
        $(".GaiPop").slideUp(500);
    };
    return (
        <>
            <section className="popup-bg GaiPopBg">
                <div className="popup GaiPop">
                    <div className="popup-head">
                        <h4>Gai Jatra</h4>

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
                                    This festival of cow is celebrated every year in August/September. This is one of
                                    the most popular festivals in Nepal as it has much humor, satire, comedy, mockery and
                                    shades of sadness too at the same time. And on this day satires and jokes on anybody
                                    is legal. As per the tradition, the family who has lost a relative during the past one
                                    year must take part in a procession by sending their family member especially son in cow
                                    like attire and walk through the streets of Tokha led by a cow. Cow is regarded as a Goddess
                                    and it is also the national animal of Nepal. This festival also purges many who have lost their
                                    loved ones as they get to console themselves as to they are not the only ones who have
                                    been bereaved and it also teaches to accept death as a part of life.
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

export default Gai