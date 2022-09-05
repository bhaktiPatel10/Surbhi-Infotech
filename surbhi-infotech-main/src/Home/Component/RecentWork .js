import React, { useEffect, useState } from 'react'
import './RecentWorkNew.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination, Autoplay } from "swiper";
import { NavLink } from 'react-router-dom';
import LazyImage from '../../Common/LazyImage';

const RecentWork = () => {
    const [perView, setPerView] = useState(3);
    useEffect(() => {
        let width = window.innerWidth;
        if (width < 1000) {
            setPerView(3);
        }
        if (width < 800) {
            setPerView(2);
        }

        if (width < 580) {
            setPerView(1);
        }
    });

    return (
        <>
            <section className='recent-slide'>
                <div className='container-new'>
                    <Swiper
                        slidesPerView={perView}
                        centeredSlides={false}
                        slidesPerGroupSkip={1}
                        spaceBetween={30}
                        grabCursor={true}
                        autoplay={true}
                        keyboard={{
                            enabled: true
                        }}
                        // breakpoints={{
                        //     769: {
                        //         slidesPerView: 1,
                        //         slidesPerGroup: 1
                        //     }
                        // }}
                        navigation={false}
                        pagination={{
                            clickable: true
                        }}
                        modules={[Keyboard, Scrollbar, Navigation, Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className='new-slider-card'>
                                <div className='card-inner-section'>
                                    <div className='img-slider-sec'>
                                        <img src='images/retailsp1.png' />
                                    </div>
                                    <div className='card-slider-content'>
                                        <h3>Retails</h3>
                                        <p>
                                            AR and VR collectively offer a unique shopping experience to your customers that help them...
                                        </p>
                                        <div className='view-more-btn-slider'>
                                            <NavLink to="/retail-portfolio">
                                                <button className='vi-btn'>View More <img src='images/arrow-color.png' /></button>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='new-slider-card'>
                                <div className='card-inner-section'>
                                    <div className='img-slider-sec'>
                                        <img src='images/phqp6.png' />
                                    </div>
                                    <div className='card-slider-content'>
                                        <h3>PHQ</h3>
                                        <p>
                                            PHQ is a Web 3.0 eco system where every possible transaction can be done. With this system we can...
                                        </p>
                                        <div className='view-more-btn-slider'>
                                            <NavLink to="case-study-details-blockchain1">
                                                <button className='vi-btn'>View More <img src='images/arrow-color.png' /></button>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='new-slider-card'>
                                <div className='card-inner-section'>
                                    <div className='img-slider-sec'>
                                        <img src='images/skoovip9.png' />
                                    </div>
                                    <div className='card-slider-content'>
                                        <h3>Skoovi</h3>
                                        <p>
                                            Skoovi is an online marketplace for people working in the Entertainment industry, especially in...
                                        </p>
                                        <div className='view-more-btn-slider'>
                                            <NavLink to="/case-study-details-skooviweb">
                                                <button className='vi-btn'>View More <img src='images/arrow-color.png' /></button>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='new-slider-card'>
                                <div className='card-inner-section'>
                                    <div className='img-slider-sec'>
                                        <img src='images/Netspacep15.png' />
                                    </div>
                                    <div className='card-slider-content'>
                                        <h3>Netspace</h3>
                                        <p>
                                            Netspace is the finest platform for buying and selling real estate. We may add several properties...
                                        </p>
                                        <div className='view-more-btn-slider'>
                                            <NavLink to="/case-study-details-netspace-application">
                                                <button className='vi-btn'>View More <img src='images/arrow-color.png' /></button>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='new-slider-card'>
                                <div className='card-inner-section'>
                                    <div className='img-slider-sec'>
                                        <img src='images/real-estatep2.png' />
                                    </div>
                                    <div className='card-slider-content'>
                                        <h3>Real Estate</h3>
                                        <p>
                                            The use of virtual reality in real estate means that all listed properties are open around the clock...
                                        </p>
                                        <div className='view-more-btn-slider'>
                                            <NavLink to="/retail-estate">
                                                <button className='vi-btn'>View More <img src='images/arrow-color.png' /></button>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='new-slider-card'>
                                <div className='card-inner-section'>
                                    <div className='img-slider-sec'>
                                        <img src='images/Inglis Fire & Safety23.png' />
                                    </div>
                                    <div className='card-slider-content'>
                                        <h3>Inglis Fire & Safety</h3>
                                        <p>
                                            The website Inglisfire is for the Australian government's fire safety services. This sort of ...
                                        </p>
                                        <div className='view-more-btn-slider'>
                                            <NavLink to="/case-study-details-inglishfiresafety">
                                                <button className='vi-btn'>View More <img src='images/arrow-color.png' /></button>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>


                    </Swiper>
                    <div className='View-all-service-btn-wrap'>
                        <NavLink to="/portfolio">
                            <button className='View-all-service-btn' type='button'>View All<img src='images/contact-arrow.png' className='arrow-left-space' alt='' /></button>
                        </NavLink>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RecentWork