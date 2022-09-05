import React from "react";
import Heading from "../../Common/Heading";
import Footer from "../../Home/Component/footer";
import Header from "../../Home/Component/Header";
import LetsTalk from "../../Home/Component/letsTalk";
import "./CaseStudyDetails.css"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";
import { NavLink } from "react-router-dom";

const AgriBridge = () => {

    return (<>
        <Header />
        <div className="main">
            <Heading bg_text="AGRIBRIDGE" front_text="AGRIBRIDGE" />
            <section className="casestudy-details-container">
                <div className="case-study-details-container">

                    <section>
                        <div className="container-new">
                            <div className="about-client-section row">
                                <div className="about-client-left w-50">
                                    <div className=" w-50">
                                        <img src="images/case-study/agribridge_1.png" className="about-client-right-img" />
                                    </div>
                                    <div className="client-name">
                                        About Client
                                    </div>
                                    {/* <div className="client-stock-name">
                                About Client
                            </div> */}
                                    <div className="client-desc">
                                        Agribridge is a SAAS platform backed by the Funding from the Indian based Virtual Capital Firmed name Riverbridge Ventures of which Adarsh and VIIkram are the key faces of the same including many others, Adarsh and team have been part of many startups  and workinn on multiple ventures to bring the best value to their users
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
                                    <img src="images/case-study/agribridge1.png" className="about-client-right-img" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="bg-laptop-inner mt-10">
                        <div className="container-new">
                            <div className="our-role-section row">
                                <div className="role-left-section w-50">
                                    <img className="laptop-img" src="images/case-study/agribridge2.png" alt="image" />
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
                                            Agribridge is a unique project with unique requirement in a very specific nich, they do have a Web Application, Mobile Application and Corporate Promotional Website to het the leads, all of the designing work are done by the proofessionals of Surbhi Infotech starting from the scratch, as  they are the team with a VIsion we have to make sure that we've employed one of the best talent from the team to this project.
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
                                            <div>HTML/CSS</div>
                                        </div>
                                        <div className="table-row">
                                            <div className="table-label"> Back End:</div>
                                            <div> Laravel</div>
                                        </div>
                                        <div className="table-row">
                                            <div className="table-label">Resource:</div>
                                            <div>2</div>
                                        </div>
                                        <div className="table-row">
                                            <div className="table-label">Duration:</div>
                                            <div> 7 Months</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-50 pro-specification">
                                    <img className="laptop-img" src="images/case-study/agribridge3.png" alt="image" />
                                    {/* <img className="back-round-img-op-ar-new" src="images/case-study/round-45.png" alt="image" /> */}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="bg-laptop-inner mt-10">
                        <div className="container-new">
                            <div className="our-role-section row">
                                <div className="role-left-section w-50">
                                    <img className="laptop-img" src="images/case-study/agribridge4.png" alt="image" />
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
                                            Agribrige is a revolutionary SAAS platform that bridges the gap between farmer and the corporates who are depended on the outputs generated by the farmers, it is a data driven platform where a corporate can see the real-time data about the crops that farmers are growing and estimate the future planning and forecast the demand and supply for their product based on the same.
                                        </div>
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

export default AgriBridge;