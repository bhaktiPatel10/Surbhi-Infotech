import React, { useState } from "react";
import Heading from "../../Common/Heading";
import Footer from "../../Home/Component/footer";
import Header from "../../Home/Component/Header";
import LetsTalk from "../../Home/Component/letsTalk";
import "./CaseStudyDetails.css"

import { NavLink } from "react-router-dom";

const PosWebApplication = () => {


    return (<>
        <Header />
        <div className="main">
            <Heading bg_text="Plate & Fork" front_text="Plate & Fork" />
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
                            <img src="images/case-study/pos_1.png" className="about-client-right-img" />
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
                                    When it comes to managing a hotel or restaurant, a great deal of knowledge and hard work is required. Several issues must be addressed simultaneously. There was a huge need for a web app that could handle everything.
                                </div>
                                <div className="mt-12">
                                    As a result, we created a multi-faceted restaurant management app that would benefit both restaurant owners and guests.
                                </div>
                            </div>
                        </div>
                        <div className="project-section-right w-50">
                            <img className="laptop-img" src="images/case-study/pos_2.png" alt="" />
                            {/* <img className="back-round-img-op-ar" src="images/case-study/round-180.png" alt="" /> */}
                        </div>
                    </div>
                    <div className="project-section row">
                        <div className="role-left-section w-50">
                            <img src="images/case-study/pos_3.png" alt="" className="left-image-project" />
                            {/* <img src="images/case-study/round-45.png" alt="" className="back-round-img-op-ar-new" /> */}
                        </div>
                        <div className="role-right-section w-50">
                            <div className="client-name">
                                Challenge
                            </div>
                            {/* <div className="client-name-storke-four">
                                Challenge
                            </div> */}
                            <div className="role-desc">
                                <div className="">
                                    The only and most pressing issue was constructing a multi-faceted software like this, which is divided into two halves. Furthermore, these subparts catered to separate functionalities. It's simple to create two separate apps, but combining them into one was a massive undertaking.
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
                                    We examined all of the complications involved in developing this app and devised the necessary answers. This app also helped restaurant operators manage their inventory.
                                </div>
                                <div className="mt-12">
                                    They can handle inventory, orders, sales, stock, and stock changes on a daily basis. They can also look at their general statistics and data.
                                </div>
                            </div>
                        </div>
                        <div className="project-section-right w-50">
                            <img className="laptop-img" src="images/case-study/pos_4.png" alt="" />
                            {/* <img className="back-round-img-op-ar" src="images/case-study/round-180.png" alt="" /> */}
                        </div>
                    </div>
                </div>
            </section>
            <Heading bg_text="application" front_text="Customer’s  app" />
            <section className="casestudy-details-container center">
                <div className="container-new ">

                    <div className="project-section row">
                        <div className="role-left-section w-50">
                            <img src="images/case-study/pos_5.png" alt="" className="left-image-project" />
                            {/* <img src="images/case-study/round-180.png" alt="" className="back-round-img-op-ar" /> */}
                        </div>
                        <div className="role-right-section w-50">
                            <div className="client-name">
                                Avail offers
                            </div>
                            {/* <div className="client-name-storke-four">
                                Challenge
                            </div> */}
                            <div className="role-desc">
                                <div className="">
                                    Customers can view the restaurant's various special offerings. These deals can be in the form of discounts or freebies.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-section row">
                        <div className="project-section-left w-50">
                            <div className="client-name">
                                QR Code Scanning
                            </div>
                            {/* <div className="client-name-storke">
                                Objectives
                            </div> */}
                            <div className="project-desc client-desc">
                                <div>
                                    By scanning QR code, customers can browse the menu, order in advance and get notified when their order is ready in the restaurant.
                                </div>
                            </div>
                        </div>
                        <div className="project-section-right w-50">
                            <img className="laptop-img" src="images/case-study/pos_6.png" alt="" />
                            {/* <img className="left-image-project-backgroud-three-four" src="images/case-study/round-45.png" alt="" /> */}
                        </div>
                    </div>
                    <div className="project-section row">
                        <div className="role-left-section w-50">
                            <img src="images/case-study/pos_7.png" alt="" className="left-image-project" />
                            {/* <img src="images/case-study/round-45.png" alt="" className="back-round-img-op-ar-new" /> */}
                        </div>
                        <div className="role-right-section w-50">
                            <div className="client-name">
                                E-menu
                            </div>
                            {/* <div className="client-name-storke-four">
                                Challenge
                            </div> */}
                            <div className="role-desc">
                                <div className="">
                                    It helps customers to view the menu and other offers in an electronic form. The user can see the menu in a tab or phone and order in advance.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-section row">
                        <div className="project-section-left w-50">
                            <div className="client-name">
                                Notification & Alert
                            </div>
                            {/* <div className="client-name-storke">
                                Objectives
                            </div> */}
                            <div className="project-desc client-desc">
                                <div>
                                    This app sends the restaurant/chef notification whenever a customer places an order. Similarly, waiters also receive information about the advanced and real-time orders.
                                </div>
                            </div>
                        </div>
                        <div className="project-section-right w-50">
                            <img className="laptop-img" src="images/case-study/pos_8.png" alt="" />
                            {/* <img className="back-round-img-op-ar" src="images/case-study/round-180.png" alt="" /> */}
                        </div>
                    </div>
                    <div className="project-section row">
                        <div className="role-left-section w-50">
                            <img src="images/case-study/pos_9.png" alt="" className="left-image-project" />
                            {/* <img src="images/case-study/round-180.png" alt="" className="back-round-img-op-ar" /> */}
                        </div>
                        <div className="role-right-section w-50">
                            <div className="client-name">
                                Comprehen-sive Analysis
                            </div>
                            {/* <div className="client-name-storke-four">
                                Challenge
                            </div> */}
                            <div className="role-desc">
                                <div className="">
                                    This web app can view the number of items, quantities and orders from each table and waiter in detail. It helps the restaurants to manage and allocate their resources wisely.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-section row">
                        <div className="project-section-left w-50">
                            <div className="client-name">
                                Benefits delivered
                            </div>
                            {/* <div className="client-name-storke">
                                Objectives
                            </div> */}
                            <div className="project-desc client-desc">
                                <div>
                                    Reduced time-to-market; A quicker certification process has resulted in a shorter time-to-market and thus higher profitability.
                                </div>
                                <div className="mt-12">
                                    Simplification of the procedure to make changes; Through this Web application, the client's management may monitor and regulate business operations.Improved crew productivity; thereby driving more revenue.
                                </div>
                            </div>
                        </div>
                        <div className="project-section-right w-50">
                            <img className="laptop-img" src="images/case-study/pos_10.png" alt="" />
                            {/* <img className="left-image-project-backgroud-three-four" src="images/case-study/round-45.png" alt="" /> */}
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

export default PosWebApplication;