import React, { useEffect, useState } from "react";
import Heading from "../../../Common/Heading";
import Footer from "../../../Home/Component/footer";
import Header from "../../../Home/Component/Header";
import "./Retail.css"
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination, Autoplay } from "swiper";

const FutureSpace = () => {
    const [perView, setPerView] = useState(3.5);
    useEffect(() => {
        let width = window.innerWidth;
        if (width < 1000) {
            setPerView(3);
        }
        if (width < 800) {
            setPerView(2);
        }

        if (width < 450) {
            setPerView(1);
        }
    });
    return (
        <>
            <Header />
            <main className="main-sec">
                <section className="rtail-bg">
                    <div className="container-new">

                        <div className="rtail-img">
                            <img src="images/fs1.png" />
                        </div>
                        <div className="row-rtail">
                            <div className="rtail-right">
                                <div className="rtail-contant">
                                    <h3>Virtual Reality (VR) is successfully employed for a real huge variety of applications</h3>
                                    <p>Because it can furnish major improvements and can be really effective in fields such as engineering, medicine, design, architecture and construction, education and training, arts, entertainment, business, communication, marketing, military, exploration, and so on.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="custom-bg">
                    <div className="container-new">
                        <div className="row-rtail">
                            <div className="custom-product-left">
                                <div className="custom-left-content">
                                    <h3>Virtual reality has the potential to offer so much more in
                                        the way of innovation and interest when it comes to
                                        experience.</h3>
                                    <p>VR technologies offer both an exciting
                                        opportunity for early design investigation and a
                                        powerful client presentation tool. </p>
                                </div>
                            </div>
                            <div className="custom-product-right">
                                <div className="custom-product-img">
                                    <img src="images/fs2.png" />
                                </div>
                                {/* <div className="new-ratail-ractangel">
                                    <img src="images/Rectangle-retail.png" alt="" />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>


                <section className="">
                    <Heading bg_text="Services" front_text="Related Services" />


                    <div className="container-fluid">
                        <div className="row-swiper-slider">
                            <div className="swiper-slide-left">

                            </div>
                            <div className="swiper-slide-right">
                                <div className="releted-services">
                                    <Swiper
                                        slidesPerView={perView}
                                        centeredSlides={false}
                                        slidesPerGroupSkip={1}
                                        spaceBetween={30}
                                        loop={true}
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
                                            <div className="releted-services-one">
                                                <div className="img-releted">
                                                    <img src="images/releted-services-1.png" />
                                                </div>
                                                <div className="service-releted-content">
                                                    <h3>AI/ML</h3>
                                                    <p>
                                                        A system is said to be artificially intelligent if it does “smart” things, that are typically associated with humans. Conventional computer science consisted of creating algorithms that could solve problems
                                                    </p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="releted-services-one">
                                                <div className="img-releted">
                                                    <img src="images/releted-services-2.png" />
                                                </div>
                                                <div className="service-releted-content">
                                                    <h3>Mixed Reality</h3>
                                                    <p>
                                                        Mixed reality is the result of blending the physical world with the digital world. Mixed reality is the next evolution in human, computer, and environment interaction and unlocks possibilities that
                                                    </p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="releted-services-one">
                                                <div className="img-releted">
                                                    <img src="images/releted-services-3.png" />
                                                </div>
                                                <div className="service-releted-content">
                                                    <h3>Virtual Reality</h3>
                                                    <p>
                                                        Computer technology to create a simulated environment. Unlike traditional user interfaces, VR places the user inside an experience. Instead of viewing a screen in front of them, users are immersed
                                                    </p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="releted-services-one">
                                                <div className="img-releted">
                                                    <img src="images/releted-services-1.png" />
                                                </div>
                                                <div className="service-releted-content">
                                                    <h3>Augmented Reality</h3>
                                                    <p>
                                                        A system is said to be artificially intelligent if it does “smart” things, that are typically associated with humans. Conventional computer science consisted of creating algorithms that could solve problems
                                                    </p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </main>
            <Footer />
        </>
    )
}

export default FutureSpace;