import React, { useState } from "react";
import Heading from "../../Common/Heading";
import Footer from "../../Home/Component/footer";
import Header from "../../Home/Component/Header";
import LetsTalk from "../../Home/Component/letsTalk";
import "./CaseStudyDetails.css"

import { NavLink } from "react-router-dom";

const CaseStudyDetails = () => {

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
                                    <img src="images/case-study/text.png" alt="image" className="mr-15" />
                                </NavLink>
                                <NavLink to="/">
                                    <img src="images/case-study/insta.png" alt="image" />
                                </NavLink>
                            </div>
                        </div>
                        <div className="about-client-right w-50">
                            <img src="images/case-study/octics.png" className="about-client-right-img" />
                        </div>
                    </div>
                    <div className="our-role-section row">
                        <div className="role-left-section w-50">
                            <img src="images/case-study/our-role.png" alt="image" />
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
                            <img src="images/case-study/project-specification.png" alt="image" />
                        </div>
                    </div>
                    <div className="our-role-section row">
                        <div className="role-left-section w-50">
                            <img src="images/case-study/project-desc.png" alt="image" />
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
                                    Life is too short to wear the same boring clothes every day. So why not make the most of fashion to express your true self? Especially when the costs are exceptionally low!
                                </div>
                                <div className="mt-12">
                                    That's the backstory of Octics, a Surat-based fashion label with a long heritage in the textile business.
                                </div>
                                <div className="mt-12">
                                    They've created their brand online, which is both necessary and inevitable. As a result, they were able to sell well-known brands at affordable pricing all over the world.
                                </div>
                            </div>
                        </div>
                        <div className="project-section-right w-50">
                            <img className="laptop-img" src="images/case-study/laptop-img.png" alt="image" />
                            {/* <img className="back-round-img-six" src="images/case-study/round-45.png" alt="image" /> */}
                        </div>
                    </div>
                    <div className="project-section row">
                        <div className="role-left-section w-50">
                            <img src="images/case-study/laptop-img2.png" alt="image" className="left-image-project" />
                            {/* <img src="images/case-study/round-180.png" alt="image" className="left-image-project-backgroud" /> */}
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
                                    We needed to draw attention to fashion enthusiasts and meet their wants, which can be a time-consuming task. However, because they spend over 24 hours a week online, the focus was on their behaviour.
                                </div>
                                <div className="mt-12">
                                    That means combining the greatest e-commerce design and development principles with a fail-safe marketing plan to give fashionistas a whole new experience.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-section row">
                        <div className="project-section-left w-50">
                            <div className="client-name">
                                Objectives
                            </div>
                            {/* <div className="client-name-storke">
                                Objectives
                            </div> */}
                            <div className="project-desc client-desc">
                                <div>
                                    Our main goal was to spruce up the website and mobile app in a way that accurately reflected the brand's potential.
                                </div>
                                <div className="mt-12">
                                    To take things to the next level and enable the company to service the entire world, a whole new level of online presence was charted.
                                </div>
                            </div>
                        </div>
                        <div className="project-section-right w-50">
                            <img className="laptop-img" src="images/case-study/laptop-img3.png" alt="image" />
                            {/* <img className="back-round-img-two" src="images/case-study/round-minus.png" alt="image" /> */}
                        </div>
                    </div>
                    <div className="project-section row">
                        <div className="role-left-section w-50">
                            <img src="images/case-study/laptop-img4.png" alt="image" className="left-image-project" />
                            {/* <img src="images/case-study/round-45.png" alt="image" className="left-image-project-backgroud-one" /> */}
                        </div>
                        <div className="role-right-section-new  ">
                            <div className="client-name">
                                Finding Clarity in Chaos
                            </div>
                            {/* <div className="client-name-storke-three stock-three-res">
                                Finding Clarity in Chaos
                            </div> */}
                            <div className="role-desc">
                                <div className="">
                                    The strategy and tactics were clearly defined from the start to ensure that there was no disconnect or handoff between what we planned and what we did.
                                </div>
                                <div className="mt-12">
                                    This required regular meetings for us to gain a thorough understanding of the business and to openly discuss the initiatives to be taken. Our executional expertise were then brought into the collaborative strategic processes.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-section row">
                        <div className="project-section-left w-50">
                            <div className="client-name">
                                The Team
                            </div>
                            {/* <div className="client-name-storke">
                                The Team
                            </div> */}
                            <div className="project-desc client-desc">
                                <div>
                                    We managed to ensure consistency and effectiveness across each and every initiative we implemented: back-end developers, front-end developers, designers, marketing specialists, SEO specialists, and product managers.
                                </div>
                            </div>
                        </div>
                        <div className="project-section-right w-50">
                            <img className="laptop-img" src="images/case-study/laptop-img5.png" alt="image" />
                            {/* <img className="back-round-img-six" src="images/case-study/round-45.png" alt="image" /> */}
                        </div>
                    </div>
                </div>
            </section>
            <Heading bg_text="case study" front_text="Discovery & Research" />
            <section className="casestudy-details-container center">
                <div className="container-new">
                    <div className="project-section row">
                        <div className="role-left-section w-50">
                            <img src="images/case-study/laptop-img6.png" alt="image" className="left-image-project" />
                            {/* <img src="images/case-study/round-180.png" alt="image" className="left-image-project-backgroud" /> */}
                        </div>
                        <div className="role-right-section w-50">
                            <div className="client-name">
                                First things first
                            </div>
                            {/* <div className="client-name-storke-three new-storke-name-three">
                                First things first
                            </div> */}
                            <div className="role-desc">
                                <div className="">
                                    We needed to draw attention to fashion enthusiasts and meet their wants, which can be a time-consuming task. However, because they spend over 24 hours a week online, the focus was on their behaviour.
                                </div>
                                <div className="mt-12">
                                    That means combining the greatest e-commerce design and development principles with a fail-safe marketing plan to give fashionistas a whole new experience.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-section row">
                        <div className="project-section-left w-50">
                            <div className="client-name">
                                The Journey
                            </div>
                            {/* <div className="client-name-storke">
                                The Journey
                            </div> */}
                            <div className="project-desc client-desc">
                                <div>
                                    We could focus on the sales funnel now that we knew exactly who the website was speaking to. We've designed a sequence of processes that lead visitors to a purchase decision, from personalised social media campaigns to compelling social media postings.
                                </div>
                                <div className="mt-12">
                                    We could focus on the sales funnel now that we knew exactly who the website was speaking to. We've designed a sequence of processes that lead visitors to a purchase decision, from personalised social media campaigns to compelling social media postings.
                                </div>
                            </div>
                        </div>
                        <div className="project-section-right w-50">
                            <img className="laptop-img" src="images/case-study/laptop-img7.png" alt="image" />
                            {/* <img className="back-round-img-two" src="images/case-study/round-minus.png" alt="image" /> */}
                        </div>
                    </div>
                    <div className="project-section row">
                        <div className="role-left-section w-50">
                            <img src="images/case-study/laptop-img8.png" alt="image" className="left-image-project" />
                            {/* <img src="images/case-study/round-45.png" alt="image" className="left-image-project-backgroud-one" /> */}
                        </div>
                        <div className="role-right-section w-50">
                            <div className="client-name">
                                Information Arhitecture
                            </div>
                            {/* <div className="client-name-storke-three">
                                Information Arhitecture
                            </div> */}
                            <div className="role-desc">
                                <div className="">
                                    The next step was to structure the website and customer relationship management so that each segment was perfect.
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
                                Solution
                            </div> */}
                            <div className="project-desc client-desc">
                                <div>
                                    Octics' online platform wasn't just designed to be visually appealing but also to provide a seamless buying experience. We designed an environment that balances the demands of users and the needs of the company.
                                </div>
                                <div className="mt-12">
                                    This included incorporating a payment gateway that allowed for a smooth checkout process. The admin panel was then customised such that adding products would be simple.
                                </div>
                                <div className="mt-12">
                                    Furthermore, in order to provide a seamless user experience, we built a separate mobile website from the ground up.
                                </div>
                            </div>
                        </div>
                        <div className="project-section-right w-50">
                            <img className="laptop-img" src="images/case-study/laptop-img9.png" alt="image" />
                            {/* <img className="back-round-img-six" src="images/case-study/round-45.png" alt="image" /> */}
                        </div>
                    </div>
                    <div className="project-section row">
                        <div className="role-left-section w-50">
                            <img src="images/case-study/laptop-img10.png" alt="image" className="left-image-project" />
                            {/* <img src="images/case-study/round-180.png" alt="image" className="left-image-project-backgroud" /> */}
                        </div>
                        <div className="role-right-section w-50">
                            <div className="client-name">
                                Error Prevention
                            </div>
                            {/* <div className="client-name-storke-three new-storke-name-three">
                                Error Prevention
                            </div> */}
                            <div className="role-desc">
                                <div className="">
                                    When we applied our solutions, we left no stone untouched. But what if something is missing? That's when we came up with several scenarios for each level of the funnel in order to predict user behaviour and avoid unpleasant situations.
                                </div>
                                <div className="mt-12">
                                    For example, we observed that the photos on mobile websites were slowing down the purchasing process, so we moved to a minimalist version to prevent losing conversions.
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
                                Solution
                            </div> */}
                            <div className="project-desc client-desc">
                                <div>
                                    Octics' online platform wasn't just designed to be visually appealing but also to provide a seamless buying experience. We designed an environment that balances the demands of users and the needs of the company.
                                </div>
                                <div className="mt-12">
                                    This included incorporating a payment gateway that allowed for a smooth checkout process. The admin panel was then customised such that adding products would be simple.
                                </div>
                                <div className="mt-12">
                                    Furthermore, in order to provide a seamless user experience, we built a separate mobile website from the ground up.
                                </div>
                            </div>
                        </div>
                        <div className="project-section-right w-50">
                            <img className="laptop-img" src="images/case-study/laptop-img11.png" alt="image" />
                            {/* <img className="back-round-img-two" src="images/case-study/round-minus.png" alt="image" /> */}
                        </div>
                    </div>
                    <div className="project-section row">
                        <div className="role-left-section w-50">
                            <img src="images/case-study/laptop-img10.png" alt="image" className="left-image-project" />
                            {/* <img src="images/case-study/round-180.png" alt="image" className="left-image-project-backgroud" /> */}
                        </div>
                        <div className="role-right-section w-50">
                            <div className="client-name">
                                Error Prevention
                            </div>
                            {/* <div className="client-name-storke-three new-storke-name-three">
                                Error Prevention
                            </div> */}
                            <div className="role-desc">
                                <div className="">
                                    When we applied our solutions, we left no stone untouched. But what if something is missing? That's when we came up with several scenarios for each level of the funnel in order to predict user behaviour and avoid unpleasant situations.
                                </div>
                                <div className="mt-12">
                                    For example, we observed that the photos on mobile websites were slowing down the purchasing process, so we moved to a minimalist version to prevent losing conversions.
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
                                Solution
                            </div> */}
                            <div className="project-desc client-desc">
                                <div>
                                    Octics' online platform wasn't just designed to be visually appealing but also to provide a seamless buying experience. We designed an environment that balances the demands of users and the needs of the company.
                                </div>
                                <div className="mt-12">
                                    This included incorporating a payment gateway that allowed for a smooth checkout process. The admin panel was then customised such that adding products would be simple.
                                </div>
                                <div className="mt-12">
                                    Furthermore, in order to provide a seamless user experience, we built a separate mobile website from the ground up.
                                </div>
                            </div>
                        </div>
                        <div className="project-section-right w-50">
                            <img className="laptop-img" src="images/case-study/laptop-img11.png" alt="image" />
                            {/* <img className="back-round-img-two" src="images/case-study/round-minus.png" alt="image" /> */}
                        </div>
                    </div>
                    <div className="project-section row">
                        <div className="role-left-section w-50">
                            <img src="images/case-study/laptop-img12.png" alt="image" className="left-image-project" />
                            {/* <img src="images/case-study/round-45.png" alt="image" className="left-image-project-backgroud-one" /> */}
                        </div>
                        <div className="role-right-section w-50">
                            <div className="client-name">
                                Online marketing
                            </div>
                            {/* <div className="client-name-storke-three new-storke-name-three">
                                Online marketing
                            </div> */}
                            <div className="role-desc">
                                <div className="">
                                    When we applied our solutions, we left no stone untouched. But what if something is missing? That's when we came up with several scenarios for each level of the funnel in order to predict user behaviour and avoid unpleasant situations.
                                </div>
                                <div className="mt-12">
                                    For example, we observed that the photos on mobile websites were slowing down the purchasing process, so we moved to a minimalist version to prevent losing conversions.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-section row">
                        <div className="project-section-left w-50">
                            <div className="client-name">
                                Final Thorough
                            </div>
                            {/* <div className="client-name-storke-two new-storke-name-three">
                                Final Thorough
                            </div> */}
                            <div className="project-desc client-desc">
                                <div>
                                    Octics has ranked first on google for some of their top keyboard since we began working together. The number of daily sales has risen dramatically, and it has swiftly became a globle standard for online buying.
                                </div>
                            </div>
                        </div>
                        <div className="project-section-right w-50">
                            <img className="laptop-img" src="images/case-study/laptop-img12.png" alt="image" />
                            {/* <img className="back-round-img-six" src="images/case-study/round-45.png" alt="image" /> */}
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

export default CaseStudyDetails;