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

const BlockChain3 = () => {

    return (<>
        <Header />
        <div className="main">
            <Heading bg_text="ANFTIZ" front_text="ANFTIZ" />
            <section className="casestudy-details-container">
                <div className=" ">

                    <section>
                        <div className="container-new">
                            <div className="about-client-section row">
                                <div className="about-client-left w-50">
                                    <div className="w-50">
                                        <img src="images/Block-chain/anftiz-logo.png" className="about-client-right-img" />
                                    </div>
                                    <div className="client-name">
                                        About Client
                                    </div>
                                    {/* <div className="client-stock-name">
                                About Client
                            </div> */}
                                    <div className="client-desc">
                                        ANFTZ is a abbrivation of A to Z NFT which is a Market place for NFT where a person can buy or sell an NFT.
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
                                    <img src="images/Block-chain/anftiz1.png" className="about-client-right-img" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="bg-laptop-inner mt-10">
                        <div className="container-new">
                            <div className="our-role-section row">
                                <div className="role-left-section w-50">
                                    <img className="laptop-img" src="images/Block-chain/anftiz2.png" alt="image" />
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
                                            The tem of surbhi innfotech converts the idea of client into a real system where on a real time Digital arts are buying and selling in a Form of NFT, we have to create a different panels as well incuding NFT owner panel, super admin and buer as well.
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
                                            <div>React</div>
                                        </div>
                                        <div className="table-row">
                                            <div className="table-label"> Back End:</div>
                                            <div> -</div>
                                        </div>
                                        <div className="table-row">
                                            <div className="table-label">Resource:</div>
                                            <div>2</div>
                                        </div>
                                        <div className="table-row">
                                            <div className="table-label">Duration:</div>
                                            <div> 5 Months</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-50 pro-specification">
                                    <img className="laptop-img" src="images/Block-chain/anftiz3.png" alt="image" />
                                    {/* <img className="back-round-img" src="images/case-study/round-45.png" alt="image" /> */}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="bg-laptop-inner mt-10">
                        <div className="container-new">
                            <div className="our-role-section row">
                                <div className="role-left-section w-50">
                                    <img className="laptop-img" src="images/Block-chain/anftiz4.png" alt="image" />
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
                                            ANFTZ is an online Marketplace for NFT, from where an individual can buy as well as sell digital art online in real-time in a form of NFT which is based on a Ethereum block chain.</div>
                                    </div>
                                </div>
                            </div>
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

export default BlockChain3;