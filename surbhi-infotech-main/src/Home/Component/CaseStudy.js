import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";
import "./CaseStudy.css"

function CaseStudy() {

    return (
        <>
            <section className="case-study-section" >
                <div className="container-new">
                    <Swiper
                        slidesPerView={1}
                        centeredSlides={false}
                        slidesPerGroupSkip={1}
                        grabCursor={true}
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
                        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="main-case-study">
                                <div className="case-left">
                                    <div className="case-img">
                                        <img src="images/casestudy.png" alt="" />
                                    </div>

                                </div>
                                <div className="case-img-two">
                                    <img src="images/casebg.png" alt="" />
                                </div>
                                <div className="case-right">
                                    <div className="case-text-new new-case-text-res">
                                        <p>Website UI/UX Design <span className="line-width"></span> <span className="line-width2 ">India </span></p>
                                        <h1>Deliver Near-To-Real Immersive Experiences</h1>
                                        <h1 className="stock-case">Deliver Near-To-Real Immersive Experiences</h1>
                                        <div className="conta-btn-one">
                                            <div className="contact-us-btn2">
                                                <span className="contact-us-btn-text">
                                                    View All Case Studies
                                                    <img src="images/contact-us-btn-arrow.svg" height={10} className="contact-us-arrow" alt="" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="main-case-study">
                                <div className="case-left">
                                    <div className="case-img">
                                        <img src="images/casestudy.png" alt="" />
                                    </div>

                                </div>
                                <div className="case-img-two">
                                    <img src="images/casebg.png" alt="" />
                                </div>
                                <div className="case-right">
                                    <div className="case-text-new">
                                        <p>Website UI/UX Design <span className="line-width"></span> <span className="line-width2 ">India </span></p>
                                        <h1>Deliver Near-To-Real Immersive Experiences</h1>
                                        <h1 className="stock-case">Deliver Near-To-Real Immersive Experiences</h1>
                                        <div className="conta-btn-one">
                                            <div className="contact-us-btn2">
                                                <span className="contact-us-btn-text">
                                                    View All Case Studies
                                                    <img src="images/contact-us-btn-arrow.svg" height={10} className="contact-us-arrow" alt="" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="main-case-study">
                                <div className="case-left">
                                    <div className="case-img">
                                        <img src="images/casestudy.png" alt="" />
                                    </div>

                                </div>
                                <div className="case-img-two">
                                    <img src="images/casebg.png" alt="" />
                                </div>
                                <div className="case-right">
                                    <div className="case-text-new">
                                        <p>Website UI/UX Design <span className="line-width"></span> <span className="line-width2 ">India </span></p>
                                        <h1>Deliver Near-To-Real Immersive Experiences</h1>
                                        <h1 className="stock-case">Deliver Near-To-Real Immersive Experiences</h1>
                                        <div className="conta-btn-one">
                                            <div className="contact-us-btn2">
                                                <span className="contact-us-btn-text">
                                                    View All Case Studies
                                                    <img src="images/contact-us-btn-arrow.svg" height={10} className="contact-us-arrow" alt="" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default CaseStudy;