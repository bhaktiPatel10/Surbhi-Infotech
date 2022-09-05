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

const HangTime = () => {

    return (<>
        <Header />
        <div className="main">
            <Heading bg_text="HANGTIME" front_text="HANGTIME" />
            <section className="casestudy-details-container ">
                <div className="">
                    <section>
                        <div className="container-new">
                            <div className="about-client-section row">
                                <div className="about-client-left w-50">
                                    <div className=" w-50">
                                        <img src="images/case-study/hang_time_1.png" className="about-client-right-img" />
                                    </div>
                                    <div className="client-name">
                                        About Client
                                    </div>
                                    {/* <div className="client-stock-name">
                                About Client
                            </div> */}
                                    <div className="client-desc">
                                        Santosh reddy is a founder of a Hang time, a online event booking application that helps users to book any events from a single click on their phone, Santosh have also invested in many projects in a inductry like Health, Hospitality and smart bot systems
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
                                    <img src="images/case-study/hangtimeapp1.png" className="about-client-right-img" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="bg-laptop-inner mt-10">
                        <div className="container-new">
                            <div className="our-role-section row">
                                <div className="role-left-section w-50">
                                    <img className="laptop-img" src="images/case-study/hangtimeapp2.png" alt="" />
                                    {/* <img className="back-round-img-new-left-img" src="images/case-study/round-180.png" alt="" /> */}
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
                                            As a lead designing team our role in the Hang time is  to provide the most efficient and effective user flow that helps the user as well as the convinient to the developers as well, we also have to provide the all individual assests to them in a separate file for the project
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
                                            <div className="table-label">Technology Used:</div>
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
                                            <div>-</div>
                                        </div>
                                        <div className="table-row">
                                            <div className="table-label">Duration:</div>
                                            <div> -</div>
                                        </div>
                                    </div>

                                </div>
                                <div className="w-50 pro-specification">
                                    <img className="laptop-img" src="images/case-study/hangtimeapp3.png" alt="" />
                                    {/* <img className="back-round-img-op-ar-new" src="images/case-study/round-45.png" alt="" /> */}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="bg-laptop-inner mt-10">
                        <div className="container-new">
                            <div className="our-role-section row">
                                <div className="role-left-section w-50">
                                    <img className="laptop-img" src="images/case-study/hangtimeapp4.png" alt="" />
                                    {/* <img className="back-round-img-new-left-img" src="images/case-study/round-180.png" alt="" /> */}
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
                                            Hangtime is an event management beta software. A fantastic vision for managing Calendar activities. This app also served as a reminder for the occasion. We had to include numerous times and manage that occurrence. We also include numerous persons when adding events. We may promote our event on this platform.
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

                                        <div id="testim-content" >

                                            <div className="testi-flex" >
                                                <div className="images">
                                                    {/* <img src="images/case-study/inglis_3.png" className="img-tesi-responsive" /> */}
                                                </div>
                                                <div className="test-sec-new">
                                                    <img className="text-testi-bord" src="images/test-card-bg.png" />
                                                    <div className="new-comment one12">Great value! Good at taking UX input, being collaborative, and turning around high quality screen comps, screen/process flows, logos and animation work very quickly.
                                                        <h2 className="autor-name"><span className="desh-color">-</span>  Santosh Reddy</h2>
                                                        <img className="netspace-img" src="images/case-study/hang_time_5.png" />
                                                        <img className="quotes-img" src="images/quotes.png" />
                                                    </div>
                                                </div>

                                            </div>


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

export default HangTime;