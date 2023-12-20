import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img from "../Images/TKH.PNG"
import jal from "../Images/NearBy/jal.png"
import baud from "../Images/NearBy/baud.png"
import surya from "../Images/NearBy/surya.png"
import jhanda from "../Images/NearBy/jhanda.png"
import shanti from "../Images/NearBy/shanti.png"
import sangla from "../Images/NearBy/sangla.png"
import tar from "../Images/NearBy/tar.png"
import bal from "../Images/NearBy/bal.png"
import phut from "../Images/NearBy/phut.png"
import man from "../Images/NearBy/man.png"
import dhap from "../Images/NearBy/dhap.png"
import hat from "../Images/NearBy/hat.png"
import budanil from "../Images/NearBy/budanil.png"
import bish from "../Images/NearBy/bish.png"

function Nearby() {
    const featured = [
        {
            id: 1,
            img: jal,
            amount: "Jaleshwor Mahadev",
            content: "Jaleshwor Mahadev is a holy place with the statue of Mahadev. This place is at top of jhor inside the nature with a beautiful waterfall and statues along with beautiful site of kathmandu.",
        },
        {
            id: 2,
            img: baud,
            amount: "Baudeswor",
            content: "It is located at Shivapuri Nagarjun National Park. This place consist of cave with mahadev statue inside and waterfall from top of the cave. This place is famous for waterfall and holy place",
        },
        {
            id: 3,
            img: surya,
            amount: "Surya Chaur",
            content: "It is also located at Shivapuri National Park. This place is famous for picnic spots and night camping as vistor can see beautiful mountain range along with beautiful sunrise.",
        },
        {
            id: 4,
            img: jhanda,
            amount: "Jhanda Park",
            content: "This place is above the hill of shanti dham. This place is famous for the amazing view of whole kathmandu valley along with different hills. There is one of the biggest Nepali Flag.",
        },
        {
            id: 5,
            img: shanti,
            amount: "Shanti Dham",
            content: "Shanti Dham is 25-30 min walk away from Newari Village Sangla. This place is also known as Badrinath Dham as it is made for piligrims who cannot travel Badrinath Dham of India",
        },
        {
            id: 6,
            img: sangla,
            amount: "Sangla",
            content: "Sangla is situated at nort-west part of Tokha. This is small town of Newari community with its own culture, religon, belief. People here celeberate different festivals.",
        },
        {
            id: 7,
            img: tar,
            amount: "Tarkeshwor",
            content: " This temple is inside Shivapuri National Park with temple of Mahadev, 1345 m above the sea level.In Swasthani barta katha, it is said that this is the place where Sati Devi’s right thigh fell.",
        },
        {
            id: 8,
            img: bal,
            amount: "Balkumari",
            content: "This place is near to Sangla. Balkumari temple is said to be one of the avatar of godess durga. It is temple where people of Sangle does jatra according to the Tithi.",
        },
        {
            id: 9,
            img: phut,
            amount: "Phutung",
            content: "Phutung is another Newari place where different festival, culture are celeberated. It is located at west part of Tokha at the Tarkeswor municipality.",
        },
        {
            id: 10,
            img: man,
            amount: "Manamaiju",
            content: "Manamaiju is considered as the goddess of beauty and it is believed that she can cure diseases that affect the face. It is located near to the Phutung.",
        },
        {
            id: 11,
            img: dhap,
            amount: "Dhapasi",
            content: "Dhapasi is located at south part of Tokha. It is also one the place of Newari community. Different festival, culture are their as it is place of Newars.",
        },
        {
            id: 12,
            img: hat,
            amount: "Hatigauda",
            content: "Hatigauda is near to the Dhapasi. In Hatigauda there is less number of Newar but they are preserving culture and tradition with full effort as per the local can.",
        },
        {
            id: 13,
            img: budanil,
            amount: "Budhanilkantha",
            content: "It is also known as the Narayanthan Temple, and can be identified by a large reclining statue of Lord Mahavishnu. It is situated at easern part of Tokha.",
        },
        {
            id: 14,
            img: bish,
            amount: "Bishnudwar",
            content: "Bishnudwar is the origin of the Bishnumati River. It is famous for trekking spot as well as for holy place inside Shivapuri National Park. Both Hindu and Buddhist regard river as sacred",
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

export default Nearby