import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import $ from "jquery";

function Krishna() {
    const handleClose = () => {
        $(".KrishnaPopBg").fadeOut(300);
        $(".KrishnaPop").slideUp(500);
    };
    return (
        <>
            <section className="popup-bg KrishnaPopBg">
                <div className="popup KrishnaPop">
                    <div className="popup-head">
                        <h4>Krishna Jatra</h4>

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
                                        Krishna Janmashtami is celebrated on Asthami tithi, the eighth day of the dark half or
                                        Krishna Paksha of the month of Bhadra in the Nepali calendar of Bikram Sambat. Shri Krishna
                                        Janmashtami, The birth of Lord Krishna took place at the end of the Dwapar era at midnight on
                                        the eighth day of Bhadra Krishna Pakchya in the city jail of Mathura. He was born as the eighth fetus from his
                                        parents imprisoned immediately after their marriage. Lord Krishna was the God-Guru of the universe, he
                                        incarnated as the child of mother Devaki and father Basudeva to eradicate sin and give eternal education to
                                        society. At that time, with the rise in injustice, tyranny, bribery, and falsehood, as well as the destruction of
                                        religion was taking place, God, the ruler of this world, came to Devaki’s womb with a normal human nature,
                                        after consulting with the gods, thinking that he should incarnate as Lord Krishna.
                                    </p>

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

export default Krishna