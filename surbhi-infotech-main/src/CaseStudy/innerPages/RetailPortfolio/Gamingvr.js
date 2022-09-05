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

const Gamingvr = () => {
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
                            <img src="images/gaming1.png" />
                        </div>
                        <div className="row-rtail">

                            <div className="rtail-right">
                                <div className="rtail-contant">
                                    <h3>Cricket is one of the most beloved sports in India and holds a special value in our lives.</h3>
                                    <p>Over the years, the technologies that brought cricket to us all, have made breakthrough advancements, and the demand for sports content by broadcasting organisations has undergone a major redefinition.</p>
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
                                    <h3>VR Cricket is one of our branded games and comes with a standard set of features that include</h3>
                                    <p>in-game leaderboard, the ability to capture and export of player data, modify what data you would like to capture, and add your own logos and branding into the game. </p>
                                </div>
                            </div>
                            <div className="custom-product-right">
                                <div className="custom-product-img">
                                    <img src="images/gaming2.png" />
                                </div>
                                {/* <div className="new-ratail-ractangel">
                                    <img src="images/Rectangle-retail.png" alt="" />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="custom-bg-one">
                    <div className="container-new">
                        <div className="row-rtail">
                            <div className="custom-product-right">
                                <div className="custom-product-img">
                                    <img src="images/gaming3.png" />
                                </div>
                                {/* <div className="ractangle-ratail-2-img">
                                    <img src="images/Rectangle-retail-2.png" alt="" />

                                </div> */}
                            </div>
                            <div className="custom-product-left">
                                <div className="custom-left-content">
                                    <h3>Just like the real game, you are standing on the cricket pitch in the
                                        centre of a stadium, </h3>
                                    <p>Just like the real game, you are standing on the cricket pitch in the
                                        centre of a stadium, the stands are filled with thousands of cheering
                                        fans screaming for action. You look down and you are holding a
                                        cricket bat, running towards you from the other end of the pitch you
                                        can see a bowler, and as they are coming closer you can tell they
                                        have one thing on their mind, and that is to bowl you out.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="releted-services-section">
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

export default Gamingvr;