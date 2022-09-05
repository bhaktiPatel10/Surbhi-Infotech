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

const BlockChain2 = () => {

    return (<>
        <Header />
        <div className="main">
            <Heading bg_text="METAZ" front_text="METAZ" />
            <section className="casestudy-details-container">
                <div className=" ">

                    <section>
                        <div className="container-new">
                            <div className="about-client-section row">
                                <div className="about-client-left w-50">
                                    <div className="w-50">
                                        <img src="images/Block-chain/metaz-logo.png" className="about-client-right-img" />
                                    </div>
                                    <div className="client-name">
                                        About Client
                                    </div>
                                    {/* <div className="client-stock-name">
                                About Client
                            </div> */}
                                    <div className="client-desc">
                                        SoftBs is Meta[ZChief ]'s Director and Founder. He has a fantastic vision for NFT, and I hope to work with him again soon.
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
                                    <img src="images/Block-chain/metaz1.png" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="bg-laptop-inner mt-10">
                        <div className="container-new">
                            <div className="our-role-section row">
                                <div className="role-left-section w-50">
                                    <img className="laptop-img" src="images/Block-chain/metaz2.png" alt="" />
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
                                            As a lead designing team our role in the Hang time is  to provide the most efficient and effective user flow that helps the user as well as the convinient to the developers as well, we also have to provide the all individual assests to them in a separate file for the project
                                            .                                </div>

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
                                            <div>React Js</div>
                                        </div>
                                        <div className="table-row">
                                            <div className="table-label">Front End:</div>
                                            <div>Flutter</div>
                                        </div>
                                        <div className="table-row">
                                            <div className="table-label"> Back End:</div>
                                            <div> PHP My Sql</div>
                                        </div>
                                        <div className="table-row">
                                            <div className="table-label">Resource:</div>
                                            <div>2-5</div>
                                        </div>
                                        <div className="table-row">
                                            <div className="table-label">Duration:</div>
                                            <div> 4 Months</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-50 pro-specification">
                                    <img className="laptop-img" src="images/Block-chain/metaz3.png" alt="" />
                                    {/* <img className="back-round-img" src="images/case-study/round-45.png" alt="" /> */}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="bg-laptop-inner mt-10">
                        <div className="container-new">
                            <div className="our-role-section row">
                                <div className="role-left-section w-50">
                                    <img className="laptop-img" src="images/Block-chain/meta4.png" alt="" />
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
                                            Meta[Z] is the world's first NFT trading platform that is both collectible (collectible) and redeemable (exchangeable-physical). It mostly sells footwear, art, music, and other collectibles.
                                        </div>
                                        <div className="mt-12">
                                            The Meta[z] collection is mostly curated with limited edition shoes and goods that match the MZ generation's interests, with a focus on collector items that the MZ generation is enthusiastic about.
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

                                        <div id="testim-content" className="cont">

                                            <div className=" active">
                                                <div className="testi-flex" >
                                                    <div className="images">
                                                        {/* <img src="images/case-study/inglis_3.png" className="img-tesi-responsive" /> */}
                                                    </div>
                                                    <div className="test-sec-new">
                                                        <img className="text-testi-bord" src="images/test-card-bg.png" />
                                                        <div className="new-comment one12">Beautiful work and extremely patient with us on the many edits we requested. Where there was a misunderstanding in our brief to them due to language differences, they fixed up with no problems. Always very polite and took on our feedback well as they always wanted a great outcome for us.
                                                            <h2 className="autor-name"><span className="desh-color">-</span>  Esther Howard</h2>
                                                            <img className="netspace-img" src="images/meta1.png" />
                                                            <img className="quotes-img" src="images/quotes.png" />
                                                        </div>
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

export default BlockChain2;