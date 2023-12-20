import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img from "../Images/TKH.PNG"
import mom from "../Images/Festival/mum.png"
import sithi from "../Images/Festival/sithi.png"
import asar from "../Images/Festival/cc.png"
import guru from "../Images/Festival/guru.png"
import gatha from "../Images/Festival/gatha.png"
import nag from "../Images/Festival/nag.png"
import dad from "../Images/Festival/dad.png"
import bso from "../Images/Festival/bso.png"
import teej from "../Images/Festival/teej.png"
import dashain from "../Images/Festival/dashain.png"
import tihar from "../Images/Festival/tihar.png"
import yomari from "../Images/Festival/yomari.png"
import maghe from "../Images/Festival/maghe.png"
import sara from "../Images/Festival/sara.png"
import holi from "../Images/Festival/holi.png"
import shiva from "../Images/Festival/shiva.png"

function Festival() {
    const featured = [
        {
            id: 1,
            img: mom,
            amount: "Mother Day",
            content: "This festival is also known as Nepali mother’s day celebrated to honor mother for her unconditional love and sacrifice. Generally, this festival falls in Baisakh – first month of Nepali calendar i.e. April of Gregorian calendar.",
        },
        {
            id: 2,
            img: sithi,
            amount: "Sithi Nakha",
            content: "Sithi Nakha is celebrated on 6th day of bright fortnight of Jestha. Sithi Nakha is the mark of beginning of monsoon season by cleaning water sources. People prepare Bara and Chatamari as a tribute to their ancestral god.",
        },
        {
            id: 3,
            img: asar,
            amount: "Dahi Chiura Kahne din",
            content: "A traditional festival of Nepal that falls on the 15 of the Nepali month Ashad is the festival of rice. On the day people eat beaten rice with yoghurt (called Dahi Chiura in Nepali) along with different fruits.",
        },
        {
            id: 4,
            img: guru,
            amount: "Guru Purnima",
            content: "Guru Purnima (Poornima) is dedicated to offering respect to all the spiritual and academic gurus. It is observed on the full moon day (Purnima) in the month of Ashadha (June-July) according to the Hindu Calendar",
        },
        {
            id: 5,
            img: gatha,
            amount: "Gatha Muga Chhare",
            content: "The festival falls on 14th day of dark fortnight of Hindu calendar Shrawan (July) just before the no moon day.  The festival is celebrated with victorious joy and toward off evil spirits and bring peace and prosperity to society.",
        },

        {
            id: 6,
            img: nag,
            amount: "Nag Panchami",
            content: "Naga Panchami is a day of traditional worship of Nag or snakes. he worship is offered on the fifth day of bright half of lunar month of Shrawana (July/August), according to the Hindu calendar.",
        },
        {
            id: 7,
            img: dad,
            amount: "Fathers day",
            content: "Father's Day is celebrated on the no moon day of the lunar dark fortnight in Bhadra, (August/Sept every year). On this Day, sons and daughters visit their fathers with sweets and gifts to celebrate the day.",
        },
        {
            id: 8,
            img: bso,
            amount: "Bisokarma Puja",
            content: "Bisokarma Jayanti is a day of celebration for Bisokarma in factories and industrial areas, a Hindu god, the divine architect. It is generally celebrated every year in September, which is on last day of Bhadra month. ",
        },
        {
            id: 9,
            img: teej,
            amount: "Teej",
            content: "Teej is a celebrated mainly by women during the months of Shrawan. It is primarily dedicated to Parvati and her reunion with Lord Shiva. Women will fast with singing, dancing, enjoyment and prayer rituals on this day.",
        },
        {
            id: 10,
            img: dashain,
            amount: "Dashain",
            content: "Dashain is referred as Bijaya Dashami in Sanskrit. It start from Ghatasthapana (day 1) to Phulpati (day 7) to Maha Asthami (day 8) to Navami (day )9 and Bijaya Dashami (day 10) to Papakunsha Ekadashi to Kojagrat Purnima",
        },
        {
            id: 11,
            img: tihar,
            amount: "Tihar",
            content: "Tihar is also known as Deepawali and Yamapanchak. It consist of Kaag Tihar, Kukur Tihar, Gai Tihar and Lakshmi Puja, Govardhan Puja and Mha Pujaa and Bhai Tika. It is celeberate 5 day",
        },
        {
            id: 12,
            img: yomari,
            amount: "Yomari Punhi",
            content: "Yomari Punhi ifalls on full moon of December. A yomari is a confection of rice flour (from the new harvest) dough shaped like fish and filled with brown cane sugar and sesame seeds, which is then steamed.",
        },
        {
            id: 13,
            img: maghe,
            amount: "Maghe Sankrati",
            content: "Maghe Sankranti is a Nepali festival observed on the first of Magh. Till ko laddu (Brown Sesame seed Fudge), Chakku (Molasys), Ghee (Clarified Butter), Tilauri. Spinich and Yam’s curry is cooked as Maghe Shankranti’s special food.",
        },
        {
            id: 14,
            img: sara,
            amount: "Saraswati Puja",
            content: "It is also known as Basanta Pancham which is celeberate on the fifth day of the bright moon of magh. Goddess Saraswati is worshipped on this day who is goddess of knowledge, language, music, and all arts.",
        },
        {
            id: 15,
            img: shiva,
            amount: "Shivaratri",
            content: "It is celeberated on the 14th day of the dark (waning) falgun or Magha. People remembering Shiva, chanting prayers, fasting, and meditating. It is a notable festival marking to overcome darkness and ignorance in life and the world.",
        },
        {
            id: 16,
            img: holi,
            amount: "Holi",
            content: "Holi is a popular and significant Hindu festival celebrated as the Festival of Colours, Love and Spring. Holi is celebrated at the end of winter, on the last full moon day. It falls on month of falgun.",
        },
    ];
    return (
        <>
            <section className="featured post uk-margin-bottom">
                <div className="uk-container">
                    <div className="wrapper ">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={50}
                            modules={[Navigation, Autoplay]}
                            navigation={true}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                640: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                            className="mySwiper"
                            uk-scrollspy="cls: uk-animation-fade; target: .featured-wrapper; delay: 300; repeat: false"
                        >
                            {featured.map((data) => {
                                return (
                                    <SwiperSlide key={data.id}>
                                        <div className="featured-wrapper card uk-margin-bottom">
                                            <img src={data.img} alt="featured" />
                                            <div className="container wrap">
                                                <div className="amount">
                                                    <span><b>{data.amount}</b></span>
                                                </div>
                                                <div className="content">
                                                    <p>{data.content}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Festival