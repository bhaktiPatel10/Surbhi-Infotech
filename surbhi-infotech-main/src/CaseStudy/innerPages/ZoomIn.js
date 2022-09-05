import React, { useState } from "react";
import Heading from "../../Common/Heading";
import Footer from "../../Home/Component/footer";
import Header from "../../Home/Component/Header";
import LetsTalk from "../../Home/Component/letsTalk";
import "./CaseStudyDetails.css"

import { NavLink } from "react-router-dom";

const ZoomIn = () => {


    return (<>
        <Header />
        <div className="main">
            <Heading bg_text="case study" front_text="case study" />
            <section className="casestudy-details-container center">
                <div className="container-new ">

                    <div className="about-client-section row">
                        <div className="about-client-left w-50">
                            <div className="client-name">
                                About Client
                            </div>
                            {/* <div className="client-stock-name">
                                About Client
                            </div> */}
                            <div className="client-desc">
                                They delivered a quality design for the landing website. Team was very much responsive even when there was critical situation in India due to Covid-19. I will continue to work with this team."
                            </div>
                            <div className="social-icon new-social row align-center">
                                <div className="border-line">
                                </div>
                                <NavLink to="/">
                                    <img src="images/case-study/text.png" alt="" className="mr-15" />
                                </NavLink>
                                <NavLink to="/">
                                    <img src="images/case-study/insta.png" alt="" />
                                </NavLink>
                            </div>
                        </div>
                        <div className="about-client-right w-50">
                            <img src="images/case-study/zoomin_1.png" className="about-client-right-img" />
                        </div>
                    </div>
                    <div className="our-role-section row">
                        <div className="role-left-section w-50">
                            <img src="images/case-study/our-role.png" alt="" />
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
                                    Each member of the our department fulfills an important role for the company. Some are responsible for multiple areas of the IT department.
                                </div>
                                <div className="mt-12">
                                    Our solutions are based on deep mathematical and statistical foundations and state-of-the-art techniques, including deep learning, machine .
                                </div>
                            </div>
                        </div>
                    </div>
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
                            <img src="images/case-study/project-specification.png" alt="" />
                        </div>
                    </div>
                    <div className="our-role-section row">
                        <div className="role-left-section w-50">
                            <img src="images/case-study/project-desc.png" alt="" />
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
                                    Each member of the our department fulfills an important role for the company. Some are responsible for multiple areas of the IT department.
                                </div>
                                <div className="mt-12">
                                    Our solutions are based on deep mathematical and statistical foundations and state-of-the-art techniques, including deep learning, machine .
                                </div>
                                <div className="mt-12">
                                    Each member of the our department fulfills an important role for the company. Some are responsible for multiple areas of the IT department.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-section row">
                        <div className="project-section-left w-50">
                            <div className="client-name">
                                The Project
                            </div>
                            {/* <div className="client-name-storke">
                                The Project
                            </div> */}
                            <div className="project-desc client-desc">
                                <div>
                                    Zoomin is India's No.1 Photo Printing, Gifting and Decor website. The aim of brand was to help their users in documenting every big & small moment of their life in a style that suits & defines them.
                                </div>
                                <div className="mt-12">
                                    Through world-class and proprietary print personalization infrastructure & best photo products, Zoomin wanted to deliver millions of customer stories through gorgeously crafted photo products, and we made that happen. Read on to know how we developed this successful web solution.
                                </div>
                            </div>
                        </div>
                        <div className="project-section-right w-50">
                            <img className="laptop-img" src="images/case-study/zoomin_2.png" alt="" />
                            {/* <img className="back-round-img-six" src="images/case-study/round-45.png" alt="" /> */}
                        </div>
                    </div>
                    <div className="project-section row">
                        <div className="role-left-section w-50">
                            <img src="images/case-study/zoomin_3.png" alt="" className="left-image-project" />
                            {/* <img src="images/case-study/round-180.png" alt="" className="back-round-img-six-one" /> */}
                        </div>
                        <div className="role-right-section w-50">
                            <div className="client-name">
                                Problem
                            </div>
                            {/* <div className="client-name-storke-four">
                                Challenge
                            </div> */}
                            <div className="role-desc">
                                <div className="">
                                    The process of customising the photo products was complex and not user-friendly leading customers to postpone or suspend their buying decisions.
                                </div>
                                <div className="competitive-analysis-point-section">
                                    <div className="points-desc">
                                        <img src="images/case-study/points.png" alt="" /><span className="img-left-space">Simplify customization steps</span>
                                    </div>
                                    <div className="points-desc">
                                        <img src="images/case-study/points.png" alt="" /><span className="img-left-space">Visually appealing for the customers</span>
                                    </div>
                                    <div className="points-desc">
                                        <img src="images/case-study/points.png" alt="" /><span className="img-left-space">Manage complex pricing rules </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-section row">
                        <div className="project-section-left w-50">
                            <div className="client-name">
                                Solution
                            </div>
                            {/* <div className="client-name-storke">
                                Objectives
                            </div> */}
                            <div className="project-desc client-desc">
                                <div>
                                    Simplified user flow: We simplified the process by removing needless stages. Customers may follow the customization stages and comprehend business rules by following a natural user flow.
                                </div>
                                <div className="mt-12">
                                    The project flow was created to make purchasing custom items easier. Our modern user interface improved the consumer experience.
                                </div>
                            </div>
                        </div>
                        <div className="project-section-right w-50">
                            <img className="laptop-img" src="images/case-study/zoomin_4.png" alt="" />
                            {/* <img className="back-round-img-two" src="images/case-study/round-180.png" alt="" /> */}
                        </div>
                    </div>
                    <div className="project-section row">
                        <div className="project-section-right w-50">
                            <img className="laptop-img" src="images/case-study/zoomin_5.png" alt="" />
                            {/* <img className="back-round-img-all-new-img" src="images/case-study/round-45.png" alt="" /> */}
                        </div>
                        <div className="project-section-left w-50">
                            <div className="client-name">
                                Project Description
                            </div>
                            {/* <div className="client-name-storke">
                                The Project
                            </div> */}
                            <div className="project-desc client-desc">
                                <div>
                                    To complete the implementation, our UX Team collaborated with the Development Team. We worked together to approach the procedure, which allowed us to address various issues. We aimed the following things,

                                </div>
                                <div className="mt-12">
                                    Allow our users to upload images in real time during the event or to be reminded to evaluate and upload photos later.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <LetsTalk />
        </div>
        <div className="mt-100">
            <Footer />
        </div>
    </>)
}

export default ZoomIn;