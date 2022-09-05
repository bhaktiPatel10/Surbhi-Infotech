import React from "react";
import Heading from "../../Common/Heading";
import Footer from "../../Home/Component/footer";
import Header from "../../Home/Component/Header";
import LetsTalk from "../../Home/Component/letsTalk";
import "./CaseStudyDetails.css"
import "../../Home/Component/Testimonials.css";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";
import { NavLink } from "react-router-dom";

const MereSalim = () => {

    return (<>
        <Header />
        <div className="main">
            <Heading bg_text="DOCTORMERE" front_text="DOCTORMERE" />
            <section className="casestudy-details-container">
                <div className="">

                    <section>
                        <div className="container-new">
                            <div className="about-client-section row">
                                <div className="about-client-left w-50">
                                    <div className="w-50">
                                        <img src="images/case-study/meresalim_1.png" className="about-client-right-img" />
                                    </div>
                                    <div className="client-name">
                                        About Client
                                    </div>
                                    {/* <div className="client-stock-name">
                                About Client
                            </div> */}
                                    <div className="client-desc">
                                        Arik owns a multiple restorent chains in UK and facing a problem of restorent management and overall system in his chains, so he wants to make a system that he can use in his restorent chains as well as sell it to other restorent as well as he has a good contacts in that inndustry domain and sell it easily to the client of that industry
                                    </div>
                                    {/* <div className="social-icon new-social row align-center">
                                <div className="border-line">
                                </div>
                                <NavLink to="/">
                                    <img src="images/case-study/text.png" alt="" className="mr-15" />
                                </NavLink>
                                <NavLink to="/">
                                    <img src="images/case-study/insta.png" alt="" />
                                </NavLink>
                            </div> */}
                                </div>
                                <div className="about-client-right w-50">
                                    <img src="images/case-study/merw1.png" className="about-client-right-img" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="bg-laptop-inner mt-10">
                        <div className="container-new">
                            <div className="our-role-section row">
                                <div className="role-left-section w-50">
                                    <img className="laptop-img" src="images/case-study/merw2.png" alt="" />
                                    {/* <img className="back-round-img" src="images/case-study/round-180.png" alt="" /> */}
                                </div>
                                <div className="role-right-section w-50">
                                    <div className="client-name">
                                        Our Role
                                    </div>
                                    {/* <div className="client-name-storke">
                                Our Role
                            </div> */}
                                    <div className="role-desc">
                                        <div className="">
                                            In Mere POS we've designed 2 panels including User side, manager side as well as Waiter side who will taking the order direct from the customer. Entire design is done in a way that all action can be perfomed in a seamless manner and provides  the best user experience possible
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="bg-right-laptop-inner mt-10">
                        <div className="container-new">
                            <div className="project-specification-section row">
                                <div className="w-50">
                                    <div className="client-name">
                                        Project Specification
                                    </div>
                                    {/* <div className="client-name-storke-two">
                                Project Specification
                            </div> */}
                                    <div className="table">
                                        <div className="table-row">
                                            <div className="table-label">Designing Tool:</div>
                                            <div>Figma</div>
                                        </div>
                                        <div className="table-row">
                                            <div className="table-label">Front End:</div>
                                            <div>-</div>
                                        </div>
                                        <div className="table-row">
                                            <div className="table-label"> Back End:</div>
                                            <div> -</div>
                                        </div>
                                        <div className="table-row">
                                            <div className="table-label">Resource:</div>
                                            <div>1</div>
                                        </div>
                                        <div className="table-row">
                                            <div className="table-label">Duration:</div>
                                            <div> 1 Months</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-50 pro-specification">
                                    <img className="laptop-img" src="images/case-study/merw3.png" alt="" />
                                    {/* <img className="back-round-img-op-ar-new" src="images/case-study/round-45.png" alt="" /> */}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="bg-laptop-inner mt-10">
                        <div className="container-new">
                            <div className="our-role-section row">
                                <div className="role-left-section w-50">
                                    <img className="laptop-img" src="images/case-study/merw4.png" alt="" />
                                    {/* <img className="back-round-img" src="images/case-study/round-180.png" alt="" /> */}
                                </div>
                                <div className="role-right-section w-50">
                                    <div className="client-name">
                                        Project Description
                                    </div>
                                    {/* <div className="client-name-storke-three new-client-three-for-storek">
                                Project Description
                            </div> */}
                                    <div className="role-desc">
                                        <div className="">
                                            Mere POS is a restaurant management service a SAAS platform that provides a service of POS to their customers, in this module Mere POS is providing 2 panels, one is on the counter module for a counter based restaurants and another is with waiter management in case there is waiter available to take the order, the waiter will take the order form the tablet, separate design is being done for the tablet.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <Heading bg_text="Testimonials" front_text="What our client says" />
            <section>
                <div className="container-new ">
                    <section className="new-test">
                        <div className="container">
                            <section id="testim" className="testim">
                                <div className="testim-cover">
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
                                                    <div className=" active">
                                                        <div className="testi-flex" >
                                                            <div className="images">
                                                                <img src="images/case-study/inglis_3.png" className="img-tesi-responsive" />
                                                            </div>
                                                            <div className="test-sec-new">
                                                                <img className="text-testi-bord" src="images/test-card-bg.png" />
                                                                <div className="new-comment one12">They delivered a quality design for the landing website. Team was very much responsive even when there was critical situation in India due to Covid-19. I will continue to work with this team."
                                                                    <h2 className="autor-name"><span className="desh-color">-</span>  Esther Howard</h2>
                                                                    <img className="netspace-img" src="images/case-study/meresalim_5.png" />
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
                                                                <img src="images/case-study/inglis_3.png" className="img-tesi-responsive" />
                                                            </div>
                                                            <div className="test-sec-new">
                                                                <img className="text-testi-bord" src="images/test-card-bg.png" />
                                                                <div className="new-comment one12">They delivered a quality design for the landing website. Team was very much responsive even when there was critical situation in India due to Covid-19. I will continue to work with this team."
                                                                    <h2 className="autor-name"><span className="desh-color">-</span>  Esther Howard</h2>
                                                                    <img className="netspace-img" src="images/case-study/meresalim_5.png" />
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
                                                                <img src="images/case-study/inglis_3.png" className="img-tesi-responsive" />
                                                            </div>
                                                            <div className="test-sec-new">
                                                                <img className="text-testi-bord" src="images/test-card-bg.png" />
                                                                <div className="new-comment one12">They delivered a quality design for the landing website. Team was very much responsive even when there was critical situation in India due to Covid-19. I will continue to work with this team."
                                                                    <h2 className="autor-name"><span className="desh-color">-</span>  Esther Howard</h2>
                                                                    <img className="netspace-img" src="images/case-study/meresalim_5.png" />
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
                                                                <img src="images/case-study/inglis_3.png" className="img-tesi-responsive" />
                                                            </div>
                                                            <div className="test-sec-new">
                                                                <img className="text-testi-bord" src="images/test-card-bg.png" />
                                                                <div className="new-comment one12">They delivered a quality design for the landing website. Team was very much responsive even when there was critical situation in India due to Covid-19. I will continue to work with this team."
                                                                    <h2 className="autor-name"><span className="desh-color">-</span>  Esther Howard</h2>
                                                                    <img className="netspace-img" src="images/case-study/meresalim_5.png" />
                                                                    <img className="quotes-img" src="images/quotes.png" />
                                                                </div>
                                                            </div>
                                                        </div>


                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </section>
                </div>
            </section>
            <div className="lets-task-section-top-space">
                <LetsTalk />
            </div>
        </div>
        <div className="mt-100">
            <Footer />
        </div>
    </>)
}

export default MereSalim;