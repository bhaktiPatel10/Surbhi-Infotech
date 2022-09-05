import React, { useState } from "react";
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

const AngularBlog = () => {

    return (<>
        <Header />
        <div className="main">
            <Heading bg_text="code beyond" front_text="code beyond" />
            <section className="casestudy-details-container ">
                <div className="">

                    <section>
                        <div className="container-new">
                            <div className="about-client-section row">
                                <div className="about-client-left w-50">
                                    <div className="w-50">
                                        <img src="images/case-study/angular_1.png" className="about-client-right-img" />
                                    </div>
                                    <div className="client-name">
                                        About Client
                                    </div>
                                    {/* <div className="client-stock-name">
                                About Client
                            </div> */}
                                    <div className="client-desc">
                                        Nenad is a Senior Software Engineer with such a vision for building a blog website. On Stack Overflow, he became ranked in the top 1500 programmers in the world in 2021, and he is also an Official MongoDB Certified Developer.
                                    </div>
                                    {/* <div className="social-icon new-social row align-center">
                                <div className="border-line">
                                </div>
                                <NavLink to="/">
                                    <img src="images/case-study/text.png" alt="image" className="mr-15" />
                                </NavLink>
                                <NavLink to="/">
                                    <img src="images/case-study/insta.png" alt="image" />
                                </NavLink>
                            </div> */}
                                </div>
                                <div className="about-client-right w-50">
                                    <img src="images/case-study/codebeweb1.png" className="about-client-right-img" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="bg-laptop-inner mt-10">
                        <div className="container-new">
                            <div className="our-role-section row">
                                <div className="role-left-section w-50">
                                    <img className="laptop-img" src="images/case-study/codebeweb2.png" alt="image" />
                                    {/* <img className="back-round-img" src="images/case-study/round-180.png" alt="image" /> */}
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
                                            Our Role in Angualr Blog is to make sure that we've enngaage more number of readers once they came to the page so that SEO can be increased for the site, and we also have to make sure that we are following the materiaal design guidelines from the Angular define by the Google.
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
                                            <div>Angluar</div>
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
                                            <div> 15 Days</div>
                                        </div>
                                    </div>

                                </div>
                                <div className="w-50 pro-specification">
                                    <img className="laptop-img" src="images/case-study/codebeweb3.png" alt="image" />
                                    {/* <img className="back-round-img-six" src="images/case-study/round-45.png" alt="image" /> */}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="bg-laptop-inner mt-10">
                        <div className="container-new">
                            <div className="our-role-section row">
                                <div className="role-left-section w-50">
                                    <img className="laptop-img" src="images/case-study/codebeweb4.png" alt="image" />
                                    {/* <img className="back-round-img" src="images/case-study/round-180.png" alt="image" /> */}
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
                                            A client wants to design a blog website. In this website he used multiple option to find any blog. Every blog hase Author and diffrent tab and category view. Every user has the ability to establish a blog, and the platform provides a dashboard.
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

                                        <div className=" ">
                                            <div className="testi-flex" >
                                                <div className="images">
                                                    <img src="images/case-study/angular_5.png" className="img-tesi-responsive" />
                                                </div>
                                                <div className="test-sec-new">
                                                    <img className="text-testi-bord" src="images/test-card-bg.png" />
                                                    <div className="new-comment one12">"We already worked before and I definitely recommend everyone to hire Surbhi Infotech. They are a great designer and I really like what they delivered each time. All recommendations!"
                                                        <h2 className="autor-name"><span className="desh-color">-</span>  Nenad Milosavljevic</h2>
                                                        <img className="netspace-img" src="images/case-study/angular_6.png" />
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

export default AngularBlog;