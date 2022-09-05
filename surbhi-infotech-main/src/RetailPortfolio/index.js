import React, { useEffect, useState } from "react";
import Heading from "../Common/Heading";
import Footer from "../Home/Component/footer";
import Header from "../Home/Component/Header";
import "./Retail.css"
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination, Autoplay } from "swiper";

const RatailPortfolio = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [spaceBetweenOne, setSpaceBetweenOne] = useState();
    const [perView, setPerView] = useState(3.5);
    useEffect(() => {
        let width = window.innerWidth;
        if (width < 1000) {
            setPerView(3);
            setSpaceBetweenOne(30)
        }
        if (width < 800) {
            setSpaceBetweenOne(10)
            setPerView(2);
        }

        if (width < 450) {
            setSpaceBetweenOne(5)

            setPerView(1);
        }
    });
    return (
        <>
            <Header />
            <main className="main-sec">
                <section className="rtail-bg">
                    <div className="container-new">
                        <div className="row-rtail">
                            <div className="rtail-left">

                            </div>
                            <div className="rtail-right">
                                <div className="rtail-contant">
                                    <h3>One of the most competitive sectors of the economy is retail.</h3>
                                    <p>AR and VR collectively offer a unique shopping experience to your customers that help them make better decisions while saving their time and keeping them safe by either reducing contact in stores or enabling an immersive experience while shopping from home. </p>
                                </div>
                            </div>
                        </div>
                        <div className="rtail-img">
                            <img src="images/ratil.png" />
                        </div>
                    </div>
                </section>
                <section className="custom-bg">
                    <div className="container-new">
                        <div className="row-rtail">
                            <div className="custom-product-left">
                                <div className="custom-left-content">
                                    <h3>By customising products,</h3>
                                    <p>Customers can see themselves in their purchase. Instead of holding an item, they can get a 360-degree view and tailor it to their exact wants and needs. This experience could never be replicated in a physical store.</p>
                                </div>
                            </div>
                            <div className="custom-product-right">
                                <div className="custom-product-img">
                                    <img src="images/custom-product.png" />
                                </div>
                                <div className="new-ratail-ractangel">
                                    <img src="images/Rectangle-retail.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="virtual-shopping-bg">
                    <div className="container-new">
                        <div className="row-rtail">
                            <div className="virtual-shopping-left">
                                <div className="virtual-left-img">
                                    <img src="images/virtual-img.png" />
                                </div>
                                <div className="ractangle-ratail-2-img">
                                    <img src="images/Rectangle-ratail-2.png" />
                                </div>
                            </div>
                            <div className="virtual-shopping-right">
                                <div className="virtual-shopping-contaent">
                                    <h3>
                                        Creating a virtual shopping experience helps both retailers and consumers.
                                    </h3>
                                    <p>
                                        It can reduce overall operating costs and offer immersive experiences for consumers to try and customise before they buy. Customers will return, not just for a bargain, but for the experience your store offers.
                                    </p>
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
                                        spaceBetween={spaceBetweenOne}
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

export default RatailPortfolio;