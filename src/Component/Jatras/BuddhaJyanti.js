import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import $ from "jquery";

function BuddhaJyanti() {
    const handleClose = () => {
        $(".BJPopBg").fadeOut(300);
        $(".BJPop").slideUp(500);
    };
    return (
        <>
            <section className="popup-bg BJPopBg">
                <div className="popup BJPop">
                    <div className="popup-head">
                        <h4>Buddha Jyanti</h4>

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
                                    Buddha’s birth anniversary is celebrated every year during May in Nepal. On this
                                    day people swarm in Swayambhunath and Boudhanath to pay homage to Buddha and also visit
                                    Buddha’s birthplace in Lumbini and chant prayers and burn butter lamps. Buddha was born as
                                    Prince Siddhartha Gautam but he abandoned his luxurious life when he realized the misery of
                                    mankind and went in search of enlightenment.
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

export default BuddhaJyanti