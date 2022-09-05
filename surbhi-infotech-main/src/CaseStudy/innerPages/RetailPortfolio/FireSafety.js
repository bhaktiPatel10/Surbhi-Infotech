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

const FireSafety = () => {
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
                            <img src="images/fire1.png" />
                        </div>
                        <div className="row-rtail">
                            <div className="rtail-right">
                                <div className="rtail-contant">
                                    <h3>A Fire can occur anywhere, anytime.</h3>
                                    <p>A Fire can occur anywhere, anytime. It can be in the workplace or at homes. Knowing what to do and what not to do in such situations are essential skills to learn. It’s difficult, costly, and relatively impossible to replicate life-threatening situations for training using traditional methods alone.</p>
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
                                    <h3>With VR, one can simulate the real-world environment and create multiple fire-fighting scenarios.</h3>
                                    <p>This way the trainees, professionals and employees can learn how to react to different situations. Doing this significantly reduces the cost of creating a new infrastructure solely for training.</p>
                                </div>
                            </div>
                            <div className="custom-product-right">
                                <div className="custom-product-img">
                                    <img src="images/fire2.png" />
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
                                    <img src="images/fire3.png" />
                                </div>
                                {/* <div className="ractangle-ratail-2-img">
                                    <img src="images/Rectangle-retail-2.png" alt="" />

                                </div> */}
                            </div>
                            <div className="custom-product-left">
                                <div className="custom-left-content">
                                    <h3>Fire safety training through VR enables users to get handson experience</h3>
                                    <p>by being in a realistic fire like situation, and learn how to: pull the safety pin on the extinguisher, aim the nozzle at the base, squeeze the level slowly to release the material and sweep it on the fire to extinguish it. Without real-world boundaries, virtual reality is set to redefine fire safety education.</p>
                                </div>
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

export default FireSafety;