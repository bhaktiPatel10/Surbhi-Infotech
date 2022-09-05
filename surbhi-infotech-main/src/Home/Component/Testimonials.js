import React, { useState } from "react";
import "./Testimonials.css"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination, Autoplay } from "swiper";
function Testimonials() {

    return (
        <>
            <section className="new-test">
                <div className="container">
                    <section id="testim" className="testim">
                        <div className="testim-cover container-new">
                            <div className="wrap">
                                <span id="right-arrow" className="arrow right fa fa-chevron-right"></span>
                                <span id="left-arrow" className="arrow left fa fa-chevron-left "></span>
                                <ul id="testim-dots" className="dots">
                                    <li className="dot active"></li>
                                    <li className="dot"></li>
                                    <li className="dot"></li>
                                    <li className="dot"></li>
                                    <li className="dot"></li>
                                </ul>
                                <div id="testim-content" className="cont">
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
                                    >
                                        <SwiperSlide>
                                            <div className=" active">
                                                <div className="testi-flex" >
                                                    <div className="images">
                                                        <img src="images/AJINKYA.png" className="img-tesi-responsive" />
                                                    </div>
                                                    <div className="test-sec-new">
                                                        <img className="text-testi-bord" src="images/test-card-bg.png" />
                                                        <div className="new-comment one12"> <span>
                                                            "It was amazing experience working with Surbhi Infotech. They are highly perfectionist. They clearly understood my requirements as well as completed work on time. Communicated very well, and I definitely work with them soon in future."
                                                        </span>
                                                            <h2 className="autor-name"><span className="desh-color">-</span>  Ajinkya Repe</h2>
                                                            {/* <img className="netspace-img" src="images/" /> */}
                                                            <img className="quotes-img" src="images/quotes.png" />
                                                        </div>
                                                    </div>

                                                </div>


                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className=" active">
                                                <div className="testi-flex" >
                                                    <div className="images">
                                                        <img src="images/LRENA.png" className="img-tesi-responsive" />
                                                    </div>

                                                    <div className="test-sec-new">
                                                        <img className="text-testi-bord" src="images/test-card-bg.png" />
                                                        <div className="new-comment one12">
                                                            <span>
                                                                "Surbhi Infotech Team is perfect partner if you are looking for outsourcing your website services, a lovely team and always helpful."
                                                            </span>
                                                            <h2 className="autor-name"> <span className="desh-color">-</span> Irena Begelfor </h2>
                                                            {/* <img className="netspace-img" src="images/" /> */}
                                                            <img className="quotes-img" src="images/quotes.png" />
                                                        </div>
                                                    </div>

                                                </div>


                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className=" active">
                                                <div className="testi-flex" >
                                                    <div className="images">
                                                        <img src="images/MATTIA.png" className="img-tesi-responsive" />
                                                    </div>

                                                    <div className="test-sec-new">
                                                        <img className="text-testi-bord" src="images/test-card-bg.png" />
                                                        <div className="new-comment one12"><span>
                                                            "Surbhi Infotech and team made a fantastic job. Very skilled but most importantly it was a great pleasure to work with these guys. Always available and always kind. They deserves more than 5 stars for sure!!!"</span>
                                                            <h2 className="autor-name"><span className="desh-color">-</span> Mattia Petracca</h2>
                                                            {/* <img className="netspace-img" src="images/" /> */}
                                                            <img className="quotes-img" src="images/quotes.png" />
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className=" active">
                                                <div className="testi-flex" >
                                                    <div className="images">
                                                        <img src="images/ADAM.png" className="img-tesi-responsive" />
                                                    </div>

                                                    <div className="test-sec-new">
                                                        <img className="text-testi-bord" src="images/test-card-bg.png" />
                                                        <div className="new-comment one12">
                                                            <span>
                                                                "This was a really amazing job - was on time and just hit all the elements. Extremely pleased!."
                                                            </span>
                                                            <h2 className="autor-name"><span className="desh-color">-</span> Adam Sharif</h2>
                                                            {/* <img className="netspace-img" src="images/" /> */}
                                                            <img className="quotes-img" src="images/quotes.png" />
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className=" active">
                                                <div className="testi-flex" >
                                                    <div className="images">
                                                        <img src="images/SUMIT.png" className="img-tesi-responsive" />
                                                    </div>


                                                    <div className="test-sec-new">
                                                        <img className="text-testi-bord" src="images/test-card-bg.png" />
                                                        <div className="new-comment one12">
                                                            <span>
                                                                "Would hirely recommend Surbhi Infotech to anyone looking to build out a Angular related work. Starting with a blank slate, their ideas were original and appropriate for what we were looking for. Thanks Team! We will be in touch when we need updates."
                                                            </span>
                                                            <h2 className="autor-name"><span className="desh-color">-</span> Sumit Singhwa</h2>
                                                            {/* <img className="netspace-img" src="images/" /> */}
                                                            <img className="quotes-img" src="images/quotes.png" />
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className=" active">
                                                <div className="testi-flex" >
                                                    <div className="images">
                                                        <img src="images/VINAYAK.png" className="img-tesi-responsive" />
                                                    </div>


                                                    <div className="test-sec-new">
                                                        <img className="text-testi-bord" src="images/test-card-bg.png" />
                                                        <div className="new-comment one12">
                                                            <span>
                                                                "Surbhi Infotech is perfect team to work with, I really appreciate the hard work that these team have put through, they communicates very well, understand the requirements very well and always available to assist. Will surely hire this agency again in Future."
                                                            </span>
                                                            <h2 className="autor-name"><span className="desh-color">-</span>Vinayak Malhotra</h2>
                                                            {/* <img className="netspace-img" src="images/" /> */}
                                                            <img className="quotes-img" src="images/quotes.png" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        {/* <SwiperSlide>
                                            <div className=" active">
                                                <div className="testi-flex" >
                                                    <div className="images">
                                                        <img src="images/aaron.png" className="img-tesi-responsive" />
                                                    </div>
                                                    <div className="test-sec-new">
                                                        <img className="text-testi-bord" src="images/test-card-bg.png" />
                                                        <div className="new-comment one12">
                                                            <span>
                                                                Worked autonomously and delivered high quality work. We gave plenty of flexibility and they are creative ability was impressive
                                                            </span>
                                                            <h2 className="autor-name"><span className="desh-color">-</span> Aaron Erwich</h2>
                                                            <img className="netspace-img" src="images/water boring.png" />
                                                            <img className="quotes-img" src="images/quotes.png" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide> */}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}

export default Testimonials;