import React from "react";
import Heading from "../../Common/Heading";
import Footer from "../../Home/Component/footer";
import Header from "../../Home/Component/Header";
import LetsTalk from "../../Home/Component/letsTalk";
import "./CaseStudyDetails.css"

import { NavLink } from "react-router-dom";

const SkooviWeb = () => {

    return (<>
        <Header />
        <div className="main">
            <Heading bg_text="Skoovi" front_text="Skoovi" />
            <section className="casestudy-details-container">
                <div className="case-study-details-container">
                    <section>
                        <div className="container-new">
                            <div className="about-client-section row">
                                <div className="about-client-left w-50">
                                    <div className="w-50">
                                        <img src="images/case-study/skoovi_web_1.png" className="about-client-right-img" />
                                    </div>
                                    <div className="client-name">
                                        About Client
                                    </div>
                                    {/* <div className="client-stock-name">
                                About Client
                            </div> */}
                                    <div className="client-desc">
                                        Nagraj babu is a indian based investore who is always shown his interest in a statup that solve a bigger problem to the communitty in a general, he has invested more than 10 different startups and out of 2 in which we've worked on.

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
                                    <img src="images/case-study/skooviw1.png" className="about-client-right-img" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-laptop-inner mt-10">
                        <div className="container-new">
                            <div className="our-role-section row">
                                <div className="role-left-section w-50">
                                    <img className="laptop-img" src="images/case-study/skooviw2.png" alt="" />
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
                                            In Skoovi we've desinged and develop the mobile application and the super admin panel of the plateform from where a client can manage all of the aspects of the Application including crud operation of the Users, Artist, brands and advertisers etc.

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
                                            <div>ReactJs</div>
                                        </div>
                                        <div className="table-row">
                                            <div className="table-label"> Back End:</div>
                                            <div> Laravel</div>
                                        </div>
                                        <div className="table-row">
                                            <div className="table-label">Resource:</div>
                                            <div>3</div>
                                        </div>
                                        <div className="table-row">
                                            <div className="table-label">Duration:</div>
                                            <div>3 Months</div>
                                        </div>
                                    </div>

                                </div>
                                <div className="w-50 pro-specification">
                                    <img className="laptop-img" src="images/case-study/skooviw3.png" alt="" />
                                    {/* <img className="back-round-img-op-ar-new" src="images/case-study/round-45.png" alt="" /> */}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="bg-laptop-inner mt-10">
                        <div className="container-new">
                            <div className="our-role-section row">
                                <div className="role-left-section w-50">
                                    <img className="laptop-img" src="images/case-study/skooviw4.png" alt="" />
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
                                            Skoovi is an online marketplace for people working in the Entertainment industry, especially in Bollywood, in short, it is a combination of a job portal and a Social media where an artist can show their skills a brand or production house can see their skills and contact them for the work that they are offering and get paid within the platform with basic minimum charges.
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

export default SkooviWeb;