import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import 'swiper/css/pagination';
import { Navigation, Thumbs, Pagination, Autoplay } from "swiper";
import img from "./home.jpg"
import "./Test.css"
function Test() {
    const [thumbsSwiper, setThumbsSwiper] = useState();
    const PropertyPic = [
        {
            id: 1,
            img: img,
        },
        {
            id: 2,
            img: img,
        },
        {
            id: 3,
            img: img,
        },
        {
            id: 4,
            img: img,
        },
        {
            id: 5,
            img: img,
        },
    ];
    return (
        <>
            <div className="uk-container">
                <div className="row">
                    {/* <div className="col-1"></div> */}
                    <div className='col-7 uk-card uk-card-default imageSlide'>
                        <div className="uk-card uk-card-default slider">
                            <Swiper
                                spaceBetween={10}
                                loop={true}
                                // autoplay={{
                                //   delay: 10000,
                                //   disableOnInteraction: false,
                                // }}
                                pagination={{
                                    dynamicBullets: true,
                                }}

                                modules={[Navigation, Thumbs, Pagination, Autoplay]}
                                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                className="imageHome"
                            >
                                {PropertyPic.map((data) => {
                                    return (
                                        <SwiperSlide key={data.id}>
                                            <div className="uk-card imagelog">
                                                <img src={data.img} alt="image" className="dataImg" />
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>
                    </div>
                    <div className="col-5 uk-card uk-card-default formHo">
                        <div className="uk ">
                            <span className="TextIn" style={{ color: "darkblue" }}>
                                Sign in
                            </span>
                        </div>

                    </div>
                    {/* <div className="col-1"></div> */}
                </div>
            </div>
        </>
    )
}

export default Test