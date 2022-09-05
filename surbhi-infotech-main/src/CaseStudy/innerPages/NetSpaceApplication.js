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

const NetSpaceApplication = () => {

    return (<>
        <Header />
        <div className="main">
            <Heading bg_text="NETSPACE" front_text="NETSPACE" />
            <section className="casestudy-details-containe">
                <div className=" ">

                    <section>
                        <div className="container-new">
                            <div className="about-client-section row">
                                <div className="about-client-left w-50">
                                    <div className="w-50">
                                        <img src="images/case-study/netspace_1.png" className="about-client-right-img" />
                                    </div>
                                    <div className="client-name">
                                        About Client
                                    </div>
                                    {/* <div className="client-stock-name">
                                About Client
                            </div> */}
                                    <div className="client-desc">
                                        Madhusudan is an excellent client. He has arrived to get a terrific notion about buying and selling real estate.
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
                                    <img src="images/case-study/nestspaceapp1.png" className="about-client-right-img" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="bg-laptop-inner mt-10">
                        <div className="container-new">
                            <div className="our-role-section row">
                                <div className="role-left-section w-50">
                                    <img className="" src="images/case-study/nestspaceapp2.png" alt="" />
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
                                            In Netspace our role is to desing the Mobile Application first, We have to follow the material design guidelines that is provided by the Google for the futter development so that the development time will be less occupied and saves the cost of the development from the client side
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
                                            <div>-</div>
                                        </div>
                                        <div className="table-row">
                                            <div className="table-label">Resource:</div>
                                            <div>-</div>
                                        </div>
                                        <div className="table-row">
                                            <div className="table-label">Duration:</div>
                                            <div>-</div>
                                        </div>
                                    </div>

                                </div>
                                <div className="w-50 pro-specification">
                                    <img className="" src="images/case-study/nestspaceapp3.png" alt="" />
                                    {/* <img className="back-round-img" src="images/case-study/round-45.png" alt="" /> */}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="bg-laptop-inner mt-10">
                        <div className="container-new">
                            <div className="our-role-section row">
                                <div className="role-left-section w-50">
                                    <img className="" src="images/case-study/nestspaceapp4.png" alt="" />
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
                                            Netspace is the finest platform for buying and selling real estate. We may add several properties for buying and sale on this platform, similar to housing.com. Netspace is a housing.com competitor website.

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
                                        <div id="testim-content">
                                            <div className="testi-flex" >
                                                <div className="images">
                                                    {/* <img src="images/case-study/inglis_3.png" className="img-tesi-responsive" /> */}
                                                </div>
                                                <div className="test-sec-new">
                                                    <img className="text-testi-bord" src="images/test-card-bg.png" />
                                                    <div className="new-comment one12">“I have been associated with Surbhi Infotech on multiple occasions, They are good and delivers designs as per commitment. I'd surely associate with them soon and I'd recommend for them for anyone who are looking for quality work.”
                                                        <h2 className="autor-name"><span className="desh-color">-</span>  Madhusudan</h2>
                                                        <img className="netspace-img" src="images/case-study/netspace_5.png" />
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

export default NetSpaceApplication;