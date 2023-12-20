import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import $ from "jquery";

function History() {
    const handleClose = () => {
        $(".historyPopBg").fadeOut(300);
        $(".historyPop").slideUp(500);
    };
    return (
        <>
            <section className="popup-bg historyPopBg">
                <div className="popup historyPop">
                    <div className="popup-head">
                        <h4>History</h4>

                        <div className="popup-close hamburger-menu">
                            <button onClick={handleClose} className="uk-button bg-close-btn">
                                <AiOutlineClose uk-tooltip="Close" size="1.3rem" color="#fff" />
                            </button>
                        </div>
                    </div>

                    <div className="popup-body">
                        <div className="form-wrapper">
                            <div className="uk-margin-bottom">
                                <p>Tokha is an ancient beautiful city of Kathmandu Valley. It is a history goes back to more than twenty
                                    thausand years old city.  When Nepal was ruled by Lichchavi dynasty. The name Tokha (Tukhya) comes from
                                    two Newari words, “Tu” meaning sugarcane (referring to the production of chaku –a quintessential in Newari
                                    sweets such as yomari –made from raw sugarcane juice), and “khya” means field. The village of Tokha once
                                    had abundance of sugarcane, and with most of the raw materials for this available it became renowned for
                                    its chaku, as well.. </p>
                                <p>
                                    Before the name of this town was Tokha, or Tukhya, it was first known as Jaipur, yet the name changed to Laxmipur
                                    after a priest came into the town and got numerous products from that point. In an eruption of liberality, he
                                    shouted that each house in the town would be honored by Laxmi, the Hindu goddess of riches and success.
                                </p>
                                <p>Tokha is likewise known for its numerous sanctuaries and celebrations. Toward the north, we have the most notable
                                    sanctuary of this zone, chandeswori Temple, which is visited by many, particularly during the celebrations.
                                    The sculpture of Daxa Prajapati likewise holds strict significance in the region. In the south, we have the
                                    Kali and Bhairab Temples, which shield the town from any assaults from that course. This conviction became
                                    animated during antiquated occasions, as the locals felt more secure having a higher force ensure them
                                    not with standing the fighters positioned there.</p>
                                <p>Tokha additionally assumes a significant job in the history books, as it holds a bountiful and prosperous
                                    old foundation. A famous region in the Lichhavi time frame, Tokha once had the main focal prison in the
                                    nation, holding the most scandalous lawbreakers inside its dividers. Extra to that, Tokha has filled a
                                    regulatory need during this period, with spots, for example, Bhootkhel, a huge ground said to be spooky
                                    by apparitions, as a military preparing ground. Presently, this region is frequently visited by families
                                    and gatherings of individuals for picnicking, or is utilized by ranchers to nibble their steers, however
                                    during old occasions, this spot was viewed as a wellspring of tantric profound force. It is said that, in
                                    medieval occasions, Tokha went about as a fortification against the assaults of neighboring lords, for
                                    example, the assault of King Jaya Dev who had assaulted the stronghold to plunder its gold. This is appeared
                                    in the topographical structure of the town itself, particularly in the old living space on the northern
                                    side of Tokha, where the Taleju Temple stands.</p>
                                <p>
                                    Not withstanding the numerous significant political occasions that have happened in Tokha, one of the most
                                    noteworthy ones would be the detainment of Queen Riddhi Laxmi of Parthi Bendri, who was detained by her own
                                    child Bhupalendra after the issue of his dad’s homicide. With regards to verifiable fights, the Tokha court,
                                    which is presently a piece of the Taleju Temple, assumed a significant job in numerous fights that happened
                                    here. As a fortress that has been profoundly looked for, Tokha has seen numerous political debates—from
                                    political overthrows to being a displaced person safe house to those banished—happen over the span of
                                    history.
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

export default History