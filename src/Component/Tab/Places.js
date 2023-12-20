import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img from "../Images/TKH.PNG"
import bhutkhel from "../Images/Place/bhutkhel.png"
import ganesh from "../Images/Place/ganesh.png"
import sankata from "../Images/Place/sankata.png"
import chand from "../Images/Place/chand.png"
import bajra from "../Images/Place/bajra.png"
import sapan from "../Images/Place/sapan.png"

function Places() {
    const featured = [
        {
            id: 1,
            img: bhutkhel,
            amount: "Bhutkhel",
            content: "Bhutkhel Chaur is believed to have been a battleground of demons and gods in earlier days. It has big ground along with the tourism spot with Masan Kali Temple.",
        },
        {
            id: 2,
            img: ganesh,
            amount: "Ganesthan",
            content: "It is the temple of Lord Ganesh. It is one of the god that is taken in chariot during jatra. Nearby temple there are Lord Buddha, Lord Bhim, kumar temple too. ",
        },
        {
            id: 3,
            img: sankata,
            amount: "Sankata Mai",
            content: "Sankata Mai of Tokha is located at the east side from ganesthan. It is one of the durgas avatar that is believe to ward off bad luck and sickness of people.",
        },
        {
            id: 4,
            img: chand,
            amount: "Chandeswori",
            content: "This temple is located at northern part from Ganesthan. Here there is Muskerswor Mahadev, Big Statue of kali mai and other different god and godess with historical myths.",
        },
        {
            id: 5,
            img: bajra,
            amount: "Bajrayogini",
            content: "Bajrayogini is located at top hill of Chandeswori in the middle of shivapuri national park. After the completion of Jatra people came her to celeberate end of jatra successfully.",
        },
        {
            id: 6,
            img: sapan,
            amount: "Sapanathirtha",
            content: "Sapanathirtha is holy temple of Lord Ganesh. During Baisak 1st a huge mela occur here believing that the pond here will cure different kinds of skin disease.",
        },

    ];
    return (
        <>
            <section className="featured post">
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

export default Places