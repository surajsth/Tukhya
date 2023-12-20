import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'
import { MdOutlineDescription, MdOutlineCastForEducation, MdOutlineFactory } from "react-icons/md"
import { AiOutlineHistory } from "react-icons/ai"
import { PiShootingStarBold } from "react-icons/pi"
import { FaHospitalAlt } from "react-icons/fa"
import { GiForkKnifeSpoon } from "react-icons/gi"
import $ from "jquery"
import Introduction from './Introduction';
import History from './History';
import Famous from './Famous';
import Factory from './Factory';
import Education from './Education';
import Hospital from './Hospital';
import Restaurant from './Restaurant';


function Timeline() {
    const featured = [
        {
            id: 1,
            title: "Introduction",
            icon: <MdOutlineDescription />,
            content: "Tokha is an ancient city of Kathmandu district in Province No. 3 of Nepal. An old town with ... ",
            click: () => {
                $(".introPopBg").fadeIn(300);
                $(".introPop").slideDown(500);
            }
        },

        {
            id: 2,
            title: "History",
            icon: <AiOutlineHistory />,
            content: "Tokha is an ancient beautiful city of Kathmandu Valley. It is a history goes back to more than twenty thausand years old city... ",
            click: () => {
                $(".historyPopBg").fadeIn(300);
                $(".historyPop").slideDown(500);
            }
        },
        {
            id: 3,
            title: "Famous",
            icon: <PiShootingStarBold />,
            content: "Tokha is famed for its various temples and festivities in addition to its excellent Chaku. Tokha is a historic, cultural, and religiously significant village with many tales woven into its 'gullies'... ",
            click: () => {
                $(".famousPopBg").fadeIn(300);
                $(".famousPop").slideDown(500);
            }
        },

        {
            id: 4,
            title: "Education",
            icon: <MdOutlineCastForEducation />,
            content: "Education in tokha is started from saraswati school and present there are more than 10 school in tokha and its on phase of increasing... ",
            click: () => {
                $(".eduPopBg").fadeIn(300);
                $(".eduPop").slideDown(500);
            }
        },
        {
            id: 5,
            title: "Industries",
            icon: <MdOutlineFactory />,
            content: "Tokha has lots of small scaled factories about chaku as it is the central place for the production... ",
            click: () => {
                $(".factPopBg").fadeIn(300);
                $(".factPop").slideDown(500);
            }
        },
        {
            id: 6,
            title: "Hospital",
            icon: <FaHospitalAlt />,
            content: "Tokha have one state hospital named Chandeswori Priority Health Center and one of the biggest hospital ... ",
            click: () => {
                $(".hospitPopBg").fadeIn(300);
                $(".hospitPop").slideDown(500);
            }
        },
        {
            id: 5,
            title: "Restaurant",
            icon: <GiForkKnifeSpoon />,
            content: "Tokha has lots of small scaled factories about chaku as it is the central place for the production... ",
            click: () => {
                $(".hotelPopBg").fadeIn(300);
                $(".hotelPop").slideDown(500);
            }
        },

    ];
    return (
        <>
            <Introduction />
            <History />
            <Famous />
            <Education />
            <Factory />
            <Hospital />
            <Restaurant />
            <VerticalTimeline className='mt-5'>
                <div className="wrapper ">

                    {featured.map((data) => {
                        return (

                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: 'Crimson', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  Crimson' }}
                                date={`${data.title}`}
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={data.icon}
                            >
                                <p>
                                    {data.content}<span onClick={data.click} style={{
                                        cursor: "pointer",
                                    }}>Readmore</span>
                                </p>

                                {/* </div> */}
                            </VerticalTimelineElement>
                        );
                    })}
                </div>
            </VerticalTimeline>
        </>
    )
}

export default Timeline