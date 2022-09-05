import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination, Autoplay } from "swiper";
import "./WhatWeOffer.css"
import { LazyLoadImage } from "react-lazy-load-image-component";
import LazyImage from "../../Common/LazyImage";
import { NavLink } from "react-router-dom";
const WhatWeOffer = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const data = [{
        title: "Augmented And Virtual Reality",
        description: "By combining art and technology, we offer groundbreaking AR (Augmented Reality) and VR (Virtual Reality) services that digitally transform your business.",
        image: "images/ar_vr_new.png",
        link: "/service-details?type=ar-vr"
    },
    {
        title: "Block Chain Development",
        description: "Our blockchain solutions are tailored to specific business use cases via feature integration, system modifications, and implementations.",
        image: "images/block_chain_new.png",
        link: "/service-details-block-chain"
    },
    {
        title: "Artificial  Intelligence",
        description: "We provide innovative AI-/ML-powered solutions using deep expertise in machine learning models, algorithms, and cognitive technologies.",
        image: "images/ai_small.png",
        link: "/service-details?type=ai-ml"
    },
    {
        title: "Website Development",
        description: "With our impeccable website development services, we help businesses to ensure creating a flexible, scalable and customer-focused channel.",
        image: "images/website_development.png",
        link: "/service-details?type=website"
    },
    {
        title: "Mobile Development",
        description: "We empower your business through full-cycle mobile app development services, tailored to your unique organizational requirements.",
        image: "images/mobile_app_development.png",
        link: "/service-details?type=mobile"
    },
    {
        title: "Digital Marketing",
        description: "We provide innovative Digital Marking solutions using deep expertise in digital learning models, algorithms, and cognitive technologies.",
        image: "images/digital_marketing_new.png",
        link: "/service-details?type=digital-marketing"
    },
    {
        title: "UI/UX Design",
        description: "Our core competence lies in UI/UX design services. Our creative team of UI/UX designers has been instrumental in elevating the company as a leader in UI/UX designing.",
        image: "images/ux_design.png",
        link: "/service-details?type=ui-ux"
    }];


    return (
        <>
            <section className="slider-section new-slider-sec home-weoffer-section">
                <div className="container-new">
                    <Swiper
                        slidesPerView={1}
                        centeredSlides={false}
                        slidesPerGroupSkip={1}
                        grabCursor={true}
                        autoplay={true}
                        keyboard={{
                            enabled: true
                        }}
                        breakpoints={{
                            769: {
                                slidesPerView: 1,
                                slidesPerGroup: 1
                            }
                        }}
                        navigation={false}
                        pagination={{
                            clickable: true
                        }}
                        modules={[Keyboard, Scrollbar, Navigation, Pagination, Autoplay]}
                        className="mySwiper"
                        onSlideChange={index => { setActiveIndex(index.snapIndex) }}
                    >
                        {data && data.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="slide-container nav">
                                    <div className="slide-left hover-this">
                                        <div className="slide-content">
                                            <span className="slide-number">0{index + 1}</span>
                                            <h1 className={`${index !== activeIndex && "stock-class-one"}`}>{item.title}</h1>
                                            <p>
                                                {item.description}
                                            </p>
                                            <div>
                                                <NavLink to={item.link}>
                                                    <button type="button" className="home-service-btn">View More <img src="/images/contact-arrow.png" alt="" /></button>

                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide-right">
                                        <div><LazyImage className={`img-slide-width hover-this hover-pixl fade ${index === 0 && 'human-img-mobile-small'}`} src={item.image} /></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    );
}

export default WhatWeOffer;