import React from "react";
import Heading from "../../Common/Heading";
import Footer from "../../Home/Component/footer";
import Header from "../../Home/Component/Header";
import LetsTalk from "../../Home/Component/letsTalk";
import "./CaseStudyDetails.css"


import { NavLink } from "react-router-dom";

const BlockChain1 = () => {

    return (<>
        <Header />
        <div className="main">
            <Heading bg_text="PHQ" front_text="PHQ" />
            <section className="casestudy-details-container ">
                <div className=" ">
                    <section>
                        <div className="container-new">
                            <div className="about-client-section row">
                                <div className="about-client-left w-50">
                                    <div className="w-50">
                                        <img src="images/Block-chain/block-chain-logo-1.png" className="about-client-right-img" />
                                    </div>
                                    <div className="client-name">
                                        About Client
                                    </div>
                                    {/* <div className="client-stock-name">
                                About Client
                            </div> */}
                                    <div className="client-desc">
                                        PHQ is a web 3.0 statup which provides a seamless plateform for trading POSI, we can use this token in Gaming, Casino, NFT and much more.
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
                                    <img src="images/phq.png" className="about-client-right-img" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="bg-laptop-inner mt-10">
                        <div className="container-new">
                            <div className="our-role-section row">
                                <div className="role-left-section w-50">
                                    <div className="">
                                        <img className="laptop-img" src="images/Block-chain/phq2.png" alt="" />
                                    </div>

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
                                            Our Role in PHQ project was to impliment the high end designing that the industry has never seen in past with the animation so that a visitor get a perfect idea about the services that PHQ is offering and increase the engagement for the same.
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
                                            <div>React Js</div>
                                        </div>
                                        <div className="table-row">
                                            <div className="table-label"> Back End:</div>
                                            <div> -</div>
                                        </div>
                                        <div className="table-row">
                                            <div className="table-label">Resource:</div>
                                            <div>3</div>
                                        </div>
                                        <div className="table-row">
                                            <div className="table-label">Duration:</div>
                                            <div> 15 Days</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-50 pro-specification">
                                    <img className="laptop-img" src="images/Block-chain/phq3.png" alt="" />
                                    {/* <img className="back-round-img" src="images/case-study/round-45.png" alt="" /> */}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="bg-laptop-inner mt-10">
                        <div className="container-new">
                            <div className="our-role-section row">
                                <div className="role-left-section w-50">
                                    <img className="laptop-img" src="images/Block-chain/phq4.png" alt="" />
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
                                            PHQ is a Web 3.0 eco system where every possible transaction can be done. With this system we can use that for Casino, Gaming, NFT, Trading, Exchanging the ownership, Buy and Sell Digital currency, etc.
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

export default BlockChain1;