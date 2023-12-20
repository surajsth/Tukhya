import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import bisket from "../Images/Jatra/BJ.PNG"
import buddha from "../Images/Jatra/bd.PNG"
import gi from "../Images/Jatra/gai.png"
import rp from "../Images/Jatra/ropai.PNG"
import kj from "../Images/Jatra/kj.PNG"
import ij from "../Images/Jatra/ij.PNG"
import kha from "../Images/Jatra/kha.PNG"
import { Link, NavLink } from "react-router-dom";
import "../css/All.css"
import $ from "jquery"
import BisketJatra from '../Jatras/BisketJatra';
import BuddhaJyanti from '../Jatras/BuddhaJyanti';
import Gai from '../Jatras/Gai';
import Ropai from '../Jatras/Ropai';
import Indra from '../Jatras/Indra';
import KhadgaJatra from '../Jatras/KhadgaJatra';
import Krishna from '../Jatras/Krishna';

function Jatra() {

    const featured = [
        {
            id: 1,
            img: bisket,
            amount: "Bisket Jatra",
            content: "Bisket Jatra is celebrated by the residents of Tokha starts from Baisakh 1 to 4...",
            click: () => {
                // console.log("first")
                $(".JatraPopBg").fadeIn(300);
                $(".JatraPop").slideDown(500);
            }
        },
        {
            id: 2,
            img: buddha,
            amount: "Buddha Jyanti",
            content: "Buddha’s birth anniversary is celebrated every year during May in Nepal...",
            click: () => {
                $(".BJPopBg").fadeIn(300);
                $(".BJPop").slideDown(500);
            }
        },
        {
            id: 3,
            img: gi,
            amount: "Gai Jatra",
            content: "Gai Jatra also known as Cow Festival celebrated every year in August/September..",
            click: () => {
                $(".GaiPopBg").fadeIn(300);
                $(".GaiPop").slideDown(500);
            }
        },
        {
            id: 4,
            img: rp,
            amount: "Ropai Jatra",
            content: "Ropai Jatra is called Sinajya Jatra celebrated in different ways in different places",
            click: () => {
                $(".RopaiPopBg").fadeIn(300);
                $(".RopaiPop").slideDown(500);
            }
        },
        {
            id: 5,
            img: kj,
            amount: "Shree Krishna Janmasthami",
            content: "The birth anniversary of Sri Krishna, believed to be the 8th incarnation of Vishnu...",
            click: () => {
                $(".KrishnaPopBg").fadeIn(300);
                $(".KrishnaPop").slideDown(500);
            }
        },
        {
            id: 6,
            img: ij,
            amount: "Indra Jatra",
            content: "This festival named after Indra - the God of Rain and also the King of Heaven is celebrated...",
            click: () => {
                $(".IndraPopBg").fadeIn(300);
                $(".IndraPop").slideDown(500);
            }
        },
        {
            id: 7,
            img: kha,
            amount: "Kha Jatra",
            content: "This ritual is observed every year on eleventh day of the waxing moon in Nepali month... ",
            click: () => {
                $(".KhaPopBg").fadeIn(300);
                $(".KhaPop").slideDown(500);
            }
        },

    ];
    return (
        <>
            <BisketJatra />
            <BuddhaJyanti />
            <Gai />
            <Ropai />
            <Krishna />
            <Indra />
            <KhadgaJatra />
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

                                            <img src={data.img} alt="featured" style={{
                                                maxWidth: "100%",
                                                width: "100%",
                                                maxHeight: "50%",
                                                height: "100%"
                                            }} />

                                            <div className="container wrap">
                                                <div className="amount">
                                                    <span className='uk-text-bold' >{data.amount}</span>
                                                </div>
                                                <div className="content">
                                                    <p>{data.content}</p>
                                                </div>
                                                <div className="link">
                                                    <button onClick={data.click} className='btn btn-outline-secondary'>Readmore</button>
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

export default Jatra