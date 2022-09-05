import React from "react";
import Heading from "../../Common/Heading";
import Footer from "../../Home/Component/footer";
import Header from "../../Home/Component/Header";
import LetsTalk from "../../Home/Component/letsTalk";
import "./CaseStudyDetails.css"
import "../../Home/Component/Testimonials.css";
import { NavLink } from "react-router-dom";

const InglishFireSafety = () => {

    return (<>
        <Header />
        <div className="main">
            <Heading bg_text="INGLIS FIRE SAFETY" front_text="INGLIS FIRE & SAFETY" />
            <section className="casestudy-details-container">
                <div className=" ">

                    <section>
                        <div className="container-new">
                            <div className="about-client-section row">
                                <div className="about-client-left w-50">
                                    <div className=" w-50">
                                        <img src="images/case-study/inglis_1.png" className="about-client-right-img" />
                                    </div>
                                    <div className="client-name">
                                        About Client
                                    </div>
                                    {/* <div className="client-stock-name">
                                About Client
                            </div> */}
                                    <div className="client-desc">
                                        Aaron is a director of Digital six, a company based in Australia. Digital Six is inspired by the idea that our clients' success decides our own. Everything we do is geared around increasing sales and income for our clients. Digital was founded on a shared success idea.
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
                                    <img src="images/case-study/inglisfire1.png" className="about-client-right-img" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="bg-laptop-inner mt-10">
                        <div className="container-new">
                            <div className="our-role-section row">
                                <div className="role-left-section w-50">
                                    <img className="laptop-img" src="images/case-study/inglisfire2.png" alt="" />
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
                                            Each member of the our department fulfills an important role for the company. Some are responsible for multiple areas of the IT department.
                                        </div>
                                        <div className="mt-12">
                                            Our solutions are based on deep mathematical and statistical foundations and state-of-the-art techniques, including deep learning, machine .
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
                                            <div>-</div>
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
                                    <img className="laptop-img" src="images/case-study/inglisfire3.png" alt="" />
                                    {/* <img className="back-round-img-six" src="images/case-study/round-45.png" alt="" /> */}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="bg-laptop-inner mt-10">
                        <div className="container-new">
                            <div className="our-role-section row">
                                <div className="role-left-section w-50">
                                    <img className="laptop-img" src="images/case-study/inglisfire4.png" alt="" />
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
                                            The website Inglisfire is for the Australian government's fire safety services. This sort of business website is designed to help individuals in Austria locate fire door safety services.
                                        </div>
                                        <div className="mt-12">
                                            Inglis Fire & Safety has built and maintained a good reputation as trusted Fire Safety advisors in the construction sector for more than a decade.
                                        </div>
                                        <div className="mt-12">
                                            Our salespeople are all QBCC-certified and have a total industry experience of more than 30 years.
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



                                        <div className=" active">
                                            <div className="testi-flex" >
                                                <div className="images">
                                                    <img src="images/case-study/inglis_3.png" className="img-tesi-responsive" />
                                                </div>
                                                <div className="test-sec-new">
                                                    <img className="text-testi-bord" src="images/test-card-bg.png" />
                                                    <div className="new-comment one12">They delivered a quality design for the landing website. Team was very much responsive even when there was critical situation in India due to Covid-19. I will continue to work with this team."
                                                        <h2 className="autor-name"><span className="desh-color">-</span>  Esther Howard</h2>
                                                        <img className="netspace-img" src="images/case-study/inglis_4.png" />
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

export default InglishFireSafety;