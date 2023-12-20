import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import $ from "jquery";

function BisketJatra() {
    const handleClose = () => {
        $(".JatraPopBg").fadeOut(300);
        $(".JatraPop").slideUp(500);
    };
    return (
        <>
            <section className="popup-bg JatraPopBg">
                <div className="popup JatraPop">
                    <div className="popup-head">
                        <h4>Bisket Jatra</h4>

                        <div className="popup-close hamburger-menu">
                            <button onClick={handleClose} className="uk-button bg-close-btn">
                                <AiOutlineClose uk-tooltip="Close" size="1.3rem" color="#fff" />
                            </button>
                        </div>
                    </div>

                    <div className="popup-body">
                        <div className="form-wrapper">
                            <div className="">
                                Bisket Jatra is the biggest jatra among other jatra in Tokha. This jatra is celebrate in new year of Nepal sambat.
                                It is the day of new year where all the people came together to celebrate jatra. Jatra has beeen one of the best moment to celebrate.
                                Tokha have altogether 8 chariot of god and godess namely Chandeshwori, Sapan Binayak, Kuthu Ganesh, choye GaneDya, Masan Kali, Saraswati and
                                Mahadev along with the chariot of living goddess Kumari and living god Ganesh. Chandeshwori chariot belongs to Thalag tol.
                                Kuthu Ganesh belongs to Pithi tole. Sapan Binayak belongs to Yalag Tole. Masan Kali belongs to Thalag, Yalag, Pithi Tole.
                            </div>
                            <hr />
                            {/* <div className="uk-grid uk-grid-small uk-child-width-1-2@m uk-child-width-1-1@s">
                                <span className='uk-margin-bottom'>
                                    <h1>Different Myths</h1>
                                    <p>At that time kirat king attack the valley so, the king of Tokha went to BajraYogni for some suggestion
                                        then devi (bajrayogini) suggest that do whatever Tantrik say. Then king went to Tantrik for help then
                                        Tantrik say that he will transform himself to thousand Tiger and fight with them, after the finish of fight
                                        throw the rice into him so that he can transform into original of him. After this as king got protect to his
                                        kingdom, he sent home to Tantrik with sindoor jatra. Similarly after reaching home wife of Tantrik ask him
                                        about such respect then he began to explain each and every moment. Then his wife want him to transform him into
                                        Ajgar (a snake).</p>

                                </span>
                                <p>He fulfill her wish then after seeing that she got afraid and ran away. Tantrik follow his wife after certain time rice
                                    fall on her and see too got convert into snake. Then after they went to king for help but there were unable and decide
                                    to die. After some time the kingdom got problem of food so king decide to get help of Tantrik. He sent message but didnot
                                    get any reply so he decide to himself. He saw no one at Tantrik home but saw snake foot print he follow and saw death of 
                                    both snake and thought they are Tantrik and his wife and did their last cermony with two big snake at the chaitra month
                                    It is believe that jatra in Tokha start to celebrate during the time peroid of Queen Ganga Maharani. It is said that
                                    this jatra is celeberate due to seperation of haija (Cholera) over the Tokha valley.</p>
                            </div> */}
                            <div className="uk-grid uk-grid-small uk-child-width-1-2@m uk-child-width-1-1@s">


                                <h1 className='content'>Baisakh 1</h1>
                                <span className='uk-margin-bottom'>
                                    On this day a mela occur at Sapan Binayak temple.The lake at Sapan Tirtha is a collection of waters from the
                                    rivers of Dudhmati River, a white water river, and Keshabmati River, which is said to have healing properties
                                    that heal all skin ailments. So every year, people gather to take bath in the waters of Sapan Thirtha. In the same
                                    day panchabali (offering of five animals) ritual at Masan kali. Many devotees take water from bishudwar and sperate
                                    over Chandeshwori and SapanThirta too believing that their wish will be fulfill.
                                </span>
                                <span className='uk-margin-bottom'>
                                    In the morning jatra of SapanThirta, Chandeshwori with Masan Kali is done. Then in a day all 8 chariot are taken to
                                    for the celeberation of Jatra.
                                </span>
                                <h1 className='content'>Baisakh 2</h1>
                                <h1 className='content'>Baisakh 3</h1>
                                <span className='uk-margin-bottom'>
                                    Similarly Jatra start at day time, in this day all 8 chariot are taken out of tokha valley and dip the chariot in pond
                                    and except Saraswati and Mahadev and they are taken for jatra and all other chariot are taken to revolve in Masan Kali temple.
                                    While returning Sapan Binayak chariot are stop by other chariot. After then all of them are taken for jatra celeberation.
                                </span>
                                <span className='uk-margin-bottom'>
                                    This is a last day and people celeberate this day as end of Jatra. In this day all chariot are taken to their home at the
                                    evening and jatra ends here
                                </span>
                                <h1 className='content'>Baisakh 4</h1>
                                <h1 className='content'>Baisakh 5</h1>
                                <span className='uk-margin-bottom'>
                                    This is a day people go to bajrayogini temple and celebrate with their own community having different fest programa like
                                    a picnic along with musical equipment dance with full enjoyment.
                                </span>
                            </div>

                        </div>
                    </div>
                    <div className="popup-footer buttons">
                        {/* <button className="uk-button bg-btn uk-margin-right"
                            onClick={handleAdd}
                        >

                            <Link>Add</Link>
                        </button> */}
                        <button className="uk-button transparent-btn" onClick={handleClose}>
                            <Link>Close</Link>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BisketJatra