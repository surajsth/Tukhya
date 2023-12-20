import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import $ from "jquery";

function Factory() {
    const handleClose = () => {
        $(".factPopBg").fadeOut(300);
        $(".factPop").slideUp(500);
    };
    return (
        <>
            <section className="popup-bg factPopBg">
                <div className="popup factPop">
                    <div className="popup-head">
                        <h4>Industries</h4>

                        <div className="popup-close hamburger-menu">
                            <button onClick={handleClose} className="uk-button bg-close-btn">
                                <AiOutlineClose uk-tooltip="Close" size="1.3rem" color="#fff" />
                            </button>
                        </div>
                    </div>

                    <div className="popup-body">
                        <div className="form-wrapper">
                            <div className="uk-margin-bottom">
                                <p></p>
                                <p>
                                    Tokha has lots of small scaled factories about chaku as it is the central place for the production.
                                    The required raw materials are taken from India and Terai region of Nepal. Beside Chaku Tokha is Producing
                                    different products from the agricultural. It is hub of selling Meat of buffalow and chicken too.
                                </p>
                                <p>
                                    In today there are many other factories too increasing day by day such as shoe factory, water factory, Tea
                                    packaging factory etc. The local government is providing training lots of women to make doll, sewing, making
                                    pickle, soap, candle, dhup, etc. This gonna probably increase the economy and standar of locals.
                                </p>
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

export default Factory