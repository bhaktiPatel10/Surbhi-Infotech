import React, { useEffect } from "react";
import Helmet from "react-helmet";
import { NavLink } from "react-router-dom";
import Heading from "../Common/Heading";
import Img from "../Common/Img";
import Footer from "../Home/Component/footer";
import Header from "../Home/Component/Header";
import './Services.css'
const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.getElementsByTagName("meta")["title"].content = "Best Web Development Companies in India | Surbhi Infotech- Services ";
        document.getElementsByTagName("meta")["description"].content = "Surbhi Infotech is one of the Best Web Development Companies in India, providing IT services including web development, blockchain development, AR/VR, and AI/ML solutions.";
        document.getElementsByTagName("meta")["url"].content = "https://www.surbhiinfotech.com/services";
    }, []);

    return (
        <>
            {/* <Helmet>
                <meta name="title" content={"Best Web Development Companies in India | Surbhi Infotech- Services "} />
                <meta name="description" content={"Surbhi Infotech is one of the Best Web Development Companies in India, providing IT services including web development, blockchain development, AR/VR, and AI/ML solutions."} />
                <meta name="url" content={"https://www.surbhiinfotech.com/services"} />
            </Helmet> */}
            <Header />
            <div className="main-sec">
                <Heading bg_text="Services" front_text="Services" />
                <section className="services-all-list">
                    <div className="container-new">
                        <div className="services-main-container">
                            <div className="services-container align-center w-100 column-reverse">
                                <div className="mr-72 w-50 relative">
                                    <span className="slide-number slide-number-servies">01</span>
                                    <p className="services-heading">AR, VR</p>
                                    <p className="services-desc">
                                        By combining art and technology, we offer groundbreaking AR (Augmented Reality) and VR (Virtual Reality) services that digitally transform your business.
                                    </p>
                                    <div className="expore-btn">
                                        <NavLink to="/service-details?type=ar-vr" >
                                            <button className="expolre-btn-contant">Explore <Img src="images/contact-arrow.png" className="ml-13" /></button>
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="slide-right w-50">
                                    <Img className="hover-this serces-img" src="images/ar_vr_new.png" />
                                </div>
                            </div>

                            <div className="services-container align-center pt-100 w-100 column">
                                <div className="slide-right w-50">
                                    <Img className="hover-this serces-img" src="images/ai_ml_new.png" />
                                </div>
                                <div className="ml-72 w-50">
                                    <span className="slide-number slide-number-servies new-number">02</span>
                                    <p className="services-heading">Artificial Intelligence, Machine Learning</p>
                                    <p className="services-desc">
                                        We provide innovative AI-/ML-powered solutions using deep expertise in machine learning models, algorithms, and cognitive technologies.
                                    </p>
                                    <div className="expore-btn">
                                        <NavLink to="/service-details?type=ai-ml" >
                                            <button className="expolre-btn-contant">Explore <Img src="images/contact-arrow.png" className="ml-13" /></button>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>

                            <div className="services-container align-center pt-100 w-100 column-reverse">
                                <div className="mr-72 w-50 relative">
                                    <span className="slide-number slide-number-servies ">03</span>
                                    <p className="services-heading">Block Chain Development</p>
                                    <p className="services-desc">
                                        Our blockchain solutions are tailored to specific business use cases via feature integration, system modifications, and implementations.
                                    </p>
                                    <div className="expore-btn">
                                        <NavLink to="/service-details-block-chain" >
                                            <button className="expolre-btn-contant">Explore <Img src="images/contact-arrow.png" className="ml-13" /></button>
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="slide-right w-50">
                                    <Img className="hover-this serces-img" src="images/block_chain_new.png" />
                                </div>
                            </div>
                            <div className="services-container align-center pt-100 w-100 column">
                                <div className="slide-right w-50">
                                    <Img className="hover-this serces-img" src="images/digital_marketing_new.png" />
                                </div>
                                <div className="ml-72 w-50 pl-25 new-mlpl">
                                    <span className="slide-number slide-number-servies new-number">04</span>
                                    <p className="services-heading">Digital Marketing</p>
                                    <p className="services-desc">
                                        We provide innovative Digital Marking solutions using deep expertise in digital learning models, algorithms, and cognitive technologies.
                                    </p>
                                    <div className="expore-btn">
                                        <NavLink to="/service-details?type=digital-marketing" >
                                            <button className="expolre-btn-contant">Explore <Img src="images/contact-arrow.png" className="ml-13" /></button>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="services-container align-center pt-100 w-100 column-reverse">
                                <div className="mr-72 w-50 relative">
                                    <span className="slide-number slide-number-servies ">05</span>
                                    <p className="services-heading">Website Development</p>
                                    <p className="services-desc">
                                        With our impeccable website development services, we help businesses to ensure creating a flexible, scalable and customer-focused channel.
                                    </p>
                                    <div className="expore-btn">
                                        <NavLink to="/service-details?type=website" >
                                            <button className="expolre-btn-contant">Explore <Img src="images/contact-arrow.png" className="ml-13" /></button>
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="slide-right w-50">
                                    <Img className="hover-this serces-img" src="images/website_development.png" />
                                </div>
                            </div>
                            <div className="services-container align-center pt-100 w-100 column">
                                <div className="slide-right w-50">
                                    <Img className="hover-this serces-img" src="images/mobile_app_development.png" />
                                </div>
                                <div className="ml-72 w-50 pl-25 new-mlpl">
                                    <span className="slide-number slide-number-servies new-number">06</span>
                                    <p className="services-heading">Mobile App Development</p>
                                    <p className="services-desc">
                                        We empower your business through full-cycle mobile app development services, tailored to your unique organizational requirements.
                                    </p>
                                    <div className="expore-btn">
                                        <NavLink to="/service-details?type=mobile" >
                                            <button className="expolre-btn-contant">Explore <Img src="images/contact-arrow.png" className="ml-13" /></button>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="services-container align-center pt-100 w-100 column-reverse">
                                <div className="mr-72 w-50 relative">
                                    <span className="slide-number slide-number-servies ">07</span>
                                    <p className="services-heading">UI/UX Design</p>
                                    <p className="services-desc">
                                        Our core competence lies in UI/UX design services. Our creative team of UI/UX designers has been instrumental in elevating the company as a leader in UI/UX designing.
                                    </p>
                                    <div className="expore-btn">
                                        <NavLink to="/service-details?type=ui-ux" >
                                            <button className="expolre-btn-contant">Explore <Img src="images/contact-arrow.png" className="ml-13" /></button>
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="slide-right w-50">
                                    <Img className="hover-this serces-img" src="images/ux_design.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="pt-100">
                <Footer />
            </div>

        </>
    )
}

export default Services;