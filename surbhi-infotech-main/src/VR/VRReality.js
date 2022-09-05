import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Footer from "../Home/Component/footer";
import Header from "../Home/Component/Header";
import './VR-reality.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination, EffectCoverflow } from "swiper";
import { NavLink } from "react-router-dom";

const VRReality = () => {
    const [newPerView, setNewPerView] = useState(2);
    const elemRef = useRef(null);
    const [scale, setScale] = useState(1.05);
    const [opacity, setOpacity] = useState(0)
    const [imgDisplay, setImgDisplay] = useState(false);

    useEffect(() => {
        let width = window.innerWidth;
        if (width > 1000) {
            setNewPerView(6.5);
        }
        if (width < 1000) {
            setNewPerView(4);
        }
        if (width < 850) {
            setNewPerView(3);
        }
        if (width < 767) {
            setNewPerView(2);
        }
        if (width < 450) {
            setNewPerView(1);
        }
    }, []);

    useLayoutEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 20) {
                setScale(2.5);
                setOpacity(0)
                setImgDisplay(true)
            }
            if (100 < window.scrollY) {
                setScale(1);
                setOpacity(1)
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const videoRef = useRef();
    const [playing, setPlaying] = useState(false);
    const videoHandler = (control) => {
        if (control === "play") {
            videoRef.current.play();
            setPlaying(true);
        } else if (control === "pause") {
            videoRef.current.pause();
            setPlaying(false);
        }
    };
    const videoRefTwo = useRef();
    const [playingTwo, setPlayingTwo] = useState(false);
    const videoHandlerTwo = (control) => {
        if (control === "play") {
            videoRefTwo.current.play();
            setPlayingTwo(true);
        } else if (control === "pause") {
            videoRefTwo.current.pause();
            setPlayingTwo(false);
        }
    };
    useEffect(() => {

    }, []);


    return (
        <>
            <Header />
            <main>
                {/* <div onWheelCapture={onScroll}>
                    <img
                        src="https://source.unsplash.com/random/300x300?sky"
                        style={{
                            transformOrigin: "0 0",
                            transform: `scale(${pos.scale}) translate(${pos.x}px, ${pos.y}px)`,
                        }}
                    />
                </div> */}
                <section className="vr-reality-section">
                    <div className="vr-inner">
                        <div className="vr-cur-img">
                            <img src="images/Subtractnew.png" className="img-fluid" alt="img" />
                        </div>
                        <div className="virtual-reality-heading" id="virtual-reality-heading">
                            <div className="hediang-position">
                                <h3 id="hediang-position-new">Virtual Reality</h3>
                            </div>
                            <div className="vr-description">
                                <p id="vr-description">The Power of Virtual Reality Tours <span>In Real Estate</span></p>
                            </div>
                        </div>
                        <div className="vr-boxed-main">
                            <h1 class='heading'></h1>
                            <div class="intro" style={{ transition: '0.2s all ease' }}>
                                <img src='images/Group 1000007651 (4).png' className="mac" alt='img' />
                            </div>
                            <div id="mac" class="mac"></div>
                        </div>
                    </div>
                </section>
                <section className="bg-background-slider">
                    <div className="container-new">
                        <div className="bg-back-title">
                            <h3>Benefit of Virtual<br />
                                Reality In Real Estate</h3>
                        </div>

                        <div className="benefit">
                            <div className='benefit-card'>
                                <div className='benefit-section'>
                                    <div className='img-slider-sec'>
                                        {/* <video ref={videoRefTwo}>
                                                    <source src="images/splash2.mp4" type="video/mp4" />
                                                </video> */}
                                        <video className="video-width" src="https://surbhi-infotech.s3.ap-south-1.amazonaws.com/video-temp.mp4" autoplay="" loop="infinity" muted="muted" playsInline="" controlsList="nodownload"></video>
                                        {/* {
                                                    playingTwo ? (
                                                        <img
                                                            onClick={() => videoHandlerTwo("pause")}
                                                            className="controlsIcon--small"
                                                            alt=""
                                                            src="images/pu.png"
                                                        />
                                                    ) : (
                                                        <img
                                                            onClick={() => videoHandlerTwo("play")}
                                                            className="controlsIcon--small"
                                                            alt=""
                                                            src="images/Group 10.png"
                                                        />
                                                    )
                                                } */}
                                        <div className="ben-content">
                                            <h3>Global Reach</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container-main">
                        <div className="vr-devlop">
                            <h3>VR Development States</h3>
                        </div>
                        <div className="vr-states">
                            <div className="vr-one">
                                <div className="border-left-vr"></div>
                                <div className="vrimg-back">
                                    <img src="images/vrdev1.png" className="img-fluid" alt="img" />
                                </div>
                                <div className="border-right-vr"></div>
                                <div className="line-top-bot-one"></div>
                                <div className="line-plan-one"></div>
                                <div className="number-vr">
                                    <span>01</span>
                                </div>
                                <div className="vr-one-discrip">
                                    <p>
                                        95% of home buyers use the Internet to look
                                        for homes
                                    </p>
                                </div>
                            </div>
                            <div className="vr-two">
                                <div className="vrimg-back">
                                    <img src="images/vrdev2.png" className="img-fluid" alt="img" />
                                </div>
                                <div className="border-right-vr"></div>
                                <div className="line-plan-two"></div>
                                <div className="line-top-bot-two"></div>
                                <div className="number-vr-two">
                                    <span>51%</span>
                                </div>
                                <div className="vr-one-discrip-two">
                                    <p>
                                        51% of people buy homes that they found
                                        online, so adding VR to this seems like the
                                        obvious next step
                                    </p>
                                </div>
                            </div>
                            <div className="vr-three">
                                <div className="vrimg-back">
                                    <img src="images/vrdev3.png" className="img-fluid" alt="img" />
                                </div>
                                <div className="border-right-vr"></div>
                                <div className="line-plan-three"></div>
                                <div className="line-top-bot-three"></div>
                                <div className="number-vr-three">
                                    <span>68%</span>
                                </div>
                                <div className="vr-one-discrip-three">
                                    <p>
                                        68% of clients want to see what their
                                        furniture would look like in their new home
                                    </p>
                                </div>
                            </div>
                            <div className="vr-four">
                                <div className="vrimg-back">
                                    <img src="images/vrdev4.png" className="img-fluid" alt="img" />
                                </div>
                                <div className="border-right-vr"></div>
                                <div className="line-plan-four"></div>
                                <div className="line-top-bot-four"></div>
                                <div className="number-vr-four">
                                    <span>71%</span>
                                </div>
                                <div className="vr-one-discrip-four">
                                    <p>
                                        71% of Millennials and Gen Z are positive
                                        towards the use of VR, this is unsurprising as
                                        most Millennials are quick to adapt to new
                                        technologies.
                                    </p>
                                </div>
                            </div>
                            <div className="vr-five">
                                <div className="vrimg-back">
                                    <img src="images/vrdev5.png" className="img-fluid" alt="img" />
                                </div>
                                <div className="border-right-vr"></div>
                                <div className="line-plan-five"></div>
                                <div className="line-top-bot-five"></div>
                                <div className="number-vr-five">
                                    <span>77%</span>
                                </div>
                                <div className="vr-one-discrip-five">
                                    <p>
                                        Already 77% of clients want to do a virtual
                                        tour before doing a ‘real’ visit
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pading-top-bottopm-for-slider">
                    <div className="container-main">
                        <Swiper
                            slidesPerView={newPerView}
                            centeredSlides={true}
                            grabCursor={true}
                            spaceBetween={10}
                            keyboard={{
                                enabled: true
                            }}
                            loop={true}
                            // navigation={true}
                            effect="coverflow"
                            coverflowEffect={{
                                rotate: 20,
                                stretch: 10,
                                depth: -120,
                                modifier: 1,
                                slideShadows: false,
                            }}
                            clickable={true}
                            pagination={false}
                            modules={[Keyboard, Scrollbar, Navigation, Pagination, EffectCoverflow]}

                        >

                            <SwiperSlide>
                                <div className="benefit">
                                    <div className='benefit-card'>
                                        <div className='benefit-section'>
                                            <div className='img-slider-sec'>
                                                <img className="img-fluid h-350" src='images/upslide1.png' alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="benefit">
                                    <div className='benefit-card'>
                                        <div className='benefit-section'>
                                            <div className='img-slider-sec'>
                                                <img className="img-fluid h-350" src='images/upslide2.png' alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="benefit">
                                    <div className='benefit-card'>
                                        <div className='benefit-section'>
                                            <div className='img-slider-sec'>
                                                <img className="img-fluid h-350" src='images/upslide3.png' alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="benefit">
                                    <div className='benefit-card'>
                                        <div className='benefit-section'>
                                            <div className='img-slider-sec'>
                                                <img className="img-fluid h-350" src='images/upslide4.png' alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="benefit">
                                    <div className='benefit-card'>
                                        <div className='benefit-section'>
                                            <div className='img-slider-sec'>
                                                <img className="img-fluid h-350" src='images/upslide5.png' alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="benefit">
                                    <div className='benefit-card'>
                                        <div className='benefit-section'>
                                            <div className='img-slider-sec'>
                                                <img className="img-fluid h-350" src='images/upslide6.png' alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <div className="container-new">
                                <div className="slider-ineer-text">
                                    <div className="slidder-inner-text-title">
                                        <h3>
                                            Why Invest In<br />
                                            Virtual Reality
                                        </h3>
                                        <p>
                                            VR technology in real estate is committed to providing a user-friendly experience that makes virtual tours seem real to prospective buyers.
                                        </p>
                                        <div className="sider-inner-btn">
                                            <NavLink to="/contact-us">
                                                <button>Get a free demo <img src="images/contact-arrow.png" /></button>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Swiper>
                    </div>
                </section>

                <section className="video-plyer">
                    <div className="container-main">
                        <div className="video-view">
                            <div className="">
                                <video ref={videoRef}>
                                    <source src="images/splash2.mp4" type="video/mp4" />
                                </video>
                                {/* <iframe src='images/splash2.mp4'
                                    frameborder='0'
                                    ref={videoRef}
                                    allow='autoplay; encrypted-media'
                                    allowfullscreen
                                    title='video'
                                /> */}
                                {
                                    playing ? (
                                        <img
                                            onClick={() => videoHandler("pause")}
                                            className="controlsIcon--small"
                                            alt=""
                                            src="images/pu.png"
                                        />
                                    ) : (
                                        <img
                                            onClick={() => videoHandler("play")}
                                            className="controlsIcon--small"
                                            alt=""
                                            src="images/Group 10.png"
                                        />
                                    )
                                }
                            </div>
                        </div>
                        <div className="video-row">
                            <div className="video-content">
                                <h3>Future Impact</h3>
                                <p>
                                    The advances in virtual reality are obvious: first-generation headsets have focused on sophisticated head-tracking and display technology to ensure high-resolution, smooth images.
                                </p>
                                <p>
                                    While these features are the foundation of any VR experience, it is expected that the next generation of devices will extend their capabilities to two large domains.
                                </p>
                                <div className="video-new-btn">
                                    <NavLink to="/contact-us">
                                        <button>Get a free demo <img src="images/contact-arrow.png" alt="img" /> </button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="implication-of-vr">
                    <div className="container-new">
                        <div className="implication-title">
                            <h3>Implication of VR In<br />
                                Real Estate </h3>
                        </div>
                    </div>
                    <Swiper
                        slidesPerView={1.2}
                        centeredSlides={true}
                        grabCursor={true}
                        spaceBetween={0}
                        keyboard={{
                            enabled: true
                        }}
                        loop={true}
                        navigation={
                            {
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }
                        }
                        effect="coverflow"
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 10,
                            depth: -120,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        clickable={true}
                        pagination={false}
                        modules={[Keyboard, Scrollbar, Navigation, Pagination, EffectCoverflow]}

                    >

                        <SwiperSlide>
                            <div className="benefit">
                                <div className='benefit-card'>
                                    <div className='benefit-section'>
                                        <div className='img-slider-sec'>
                                            <img className="img-fluid w-100" src='images/Showroom.png' alt="img" />
                                            <svg class="svg">
                                                <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox"><path d="M0,0 L0,0 V0.001 V0.999 V1 L0,1 C0.136,0.931,0.31,0.889,0.5,0.889 C0.69,0.889,0.864,0.931,1,1 L1,1 V0.999 V0.001 V0 L1,0 C0.864,0.069,0.69,0.111,0.5,0.111 C0.31,0.111,0.136,0.069,0,0"></path></clipPath>
                                            </svg>
                                            <div className="slider-img-text">
                                                <h3>Showroom</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="benefit">
                                <div className='benefit-card'>
                                    <div className='benefit-section'>
                                        <div className='img-slider-sec'>
                                            <img className="img-fluid w-100" src='images/Workshop.png' alt="img" />
                                            <div className="slider-img-text">
                                                <h3>Workshop</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="benefit">
                                <div className='benefit-card'>
                                    <div className='benefit-section'>
                                        <div className='img-slider-sec'>
                                            <img className="img-fluid w-100" src='images/Real Estate.png' alt="img" />
                                            <div className="slider-img-text">
                                                <h3>Real Estate</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="benefit">
                                <div className='benefit-card'>
                                    <div className='benefit-section'>
                                        <div className='img-slider-sec'>
                                            <img className="img-fluid w-100" src='images/Hotel.png' alt="img" />
                                            <div className="slider-img-text">
                                                <h3>Hotel</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="benefit">
                                <div className='benefit-card'>
                                    <div className='benefit-section'>
                                        <div className='img-slider-sec'>
                                            <img className="img-fluid w-100" src='images/Office.png' alt="img" />
                                            <div className="slider-img-text">
                                                <h3>Office</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* <SwiperSlide>
                            <div className="benefit">
                                <div className='benefit-card'>
                                    <div className='benefit-section'>
                                        <div className='img-slider-sec'>
                                            <img className="img-fluid w-100" src='images/testsilidnew.png' alt="img" />
                                            <div className="slider-img-text">
                                                <h3>Restaurant</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="benefit">
                                <div className='benefit-card'>
                                    <div className='benefit-section'>
                                        <div className='img-slider-sec'>
                                            <img className="img-fluid w-100" src='images/testsilidnew.png' alt="img" />
                                            <div className="slider-img-text">
                                                <h3>Restaurant</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="benefit">
                                <div className='benefit-card'>
                                    <div className='benefit-section'>
                                        <div className='img-slider-sec'>
                                            <img className="img-fluid w-100" src='images/testsilidnew.png' alt="img" />
                                            <div className="slider-img-text">
                                                <h3>Restaurant</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="benefit">
                                <div className='benefit-card'>
                                    <div className='benefit-section'>
                                        <div className='img-slider-sec'>
                                            <img className="img-fluid w-100" src='images/testsilidnew.png' alt="img" />
                                            <div className="slider-img-text">
                                                <h3>Restaurant</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="benefit">
                                <div className='benefit-card'>
                                    <div className='benefit-section'>
                                        <div className='img-slider-sec'>
                                            <img className="img-fluid w-100" src='images/testsilidnew.png' alt="img" />
                                            <div className="slider-img-text">
                                                <h3>Restaurant</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="benefit">
                                <div className='benefit-card'>
                                    <div className='benefit-section'>
                                        <div className='img-slider-sec'>
                                            <img className="img-fluid w-100" src='images/testsilidnew.png' alt="img" />
                                            <div className="slider-img-text">
                                                <h3>Restaurant</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide> */}
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </Swiper>
                </section>

                <section className="freedemo-bg">
                    <div className="container-new">
                        <div className="free-demo-title">
                            <h3>Start Immersive Journey of<br /> VR With Us</h3>
                            <p>Book a free 30-minute consultation and find out<br /> how we can help your business grow!</p>
                            <div className="free-demo-btn">
                                <div className="two-btn">
                                    <div>
                                        <NavLink to="/contact-us">
                                            <button className="demo-free">Get a free demo <img src="images/contact-arrow.png" alt="img" /></button>
                                        </NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="/contact-us#contact-hear">
                                            <button className="lets-talk">Let’s Talk <img src="images/contact-arrow.png" alt="img" /></button>
                                        </NavLink>
                                    </div>
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

export default VRReality;