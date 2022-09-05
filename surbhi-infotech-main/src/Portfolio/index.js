import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Heading from '../Common/Heading';
import Img from '../Common/Img';
import Footer from '../Home/Component/footer';
import Header from '../Home/Component/Header';
import './PortfolioList.css';
import '../Home/Component/RecentWorkNew.css';
import LazyImage from '../Common/LazyImage';
import Helmet from 'react-helmet';
const PortfolioList = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.getElementsByTagName("meta")["title"].content = "Our Portfolio | Surbhi Infotech- Best Web Development Company in USA";
        document.getElementsByTagName("meta")["description"].content = "Surbhi Infotech, one of the Best Web Development Company in USA, strives to provide innovative digital solutions for multi-faceted business requirements.";
        document.getElementsByTagName("meta")["url"].content = "https://www.surbhiinfotech.com/portfolio";
    }, []);
    return (
        <>
            {/* <Helmet>
                <meta name="title" content={"Our Portfolio | Surbhi Infotech- Best Web Development Company in USA "} />
                <meta name="description" content={"Surbhi Infotech, one of the Best Web Development Company in USA, strives to provide innovative digital solutions for multi-faceted business requirements."} />
                <meta name="url" content={"https://www.surbhiinfotech.com/portfolio"} />
            </Helmet> */}
            <Header />
            <main className='main-sec'>
                <Heading bg_text="Portfolio" front_text="Portfolio" />
                <section>
                    <div className='container-new port-list-container recent-slide'>
                        <div className='portfolio-list-container portfolio-ma-bottom'>
                            <div className='card-new-protfolio-row'>
                                <div className='new-protfolio-card mb-8'>
                                    <div className='card-inner-section'>
                                        <div className='img-slider-sec'>
                                            <img src='images/retailsp1.png' />
                                        </div>
                                        <div className='card-slider-content'>
                                            <h3>Retails</h3>
                                            <p>
                                                AR and VR collectively offer a unique shopping experience to your customers that help them make...
                                            </p>
                                            <div className='view-more-btn-slider'>
                                                <NavLink to="/retail-portfolio">
                                                    <button className='vi-btn'>View More <img src='images/arrow-color.png' /></button>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='new-protfolio-card mb-8'>
                                    <div className='card-inner-section'>
                                        <div className='img-slider-sec'>
                                            <img src='images/real-estatep2.png' />
                                        </div>
                                        <div className='card-slider-content'>
                                            <h3>Real Estate</h3>
                                            <p>
                                                The use of virtual reality in real estate means that all listed properties are open around the clock...
                                            </p>
                                            <div className='view-more-btn-slider'>
                                                <NavLink to="/retail-estate">
                                                    <button className='vi-btn'>View More <img src='images/arrow-color.png' /></button>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='new-protfolio-card mb-8'>
                                    <div className='card-inner-section'>
                                        <div className='img-slider-sec'>
                                            <img src='images/fire-safetyp3.png' />
                                        </div>
                                        <div className='card-slider-content'>
                                            <h3>Fire Safety</h3>
                                            <p>
                                                A Fire can occur anywhere, anytime. It can be in the workplace or at homes. Knowing what...
                                            </p>
                                            <div className='view-more-btn-slider'>
                                                <NavLink to="/firesafety">
                                                    <button className='vi-btn'>View More <img src='images/arrow-color.png' /></button>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='new-protfolio-card mb-8'>
                                    <div className='card-inner-section'>
                                        <div className='img-slider-sec'>
                                            <img src='images/gaming-vrp4.png' />
                                        </div>
                                        <div className='card-slider-content'>
                                            <h3>Gaming VR</h3>
                                            <p>
                                                AR and VR collectively offer a unique shopping experience to your customers that help them...
                                            </p>
                                            <div className='view-more-btn-slider'>
                                                <NavLink to="/gamingvr">
                                                    <button className='vi-btn'>View More <img src='images/arrow-color.png' /></button>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='new-protfolio-card mb-8'>
                                    <div className='card-inner-section'>
                                        <div className='img-slider-sec'>
                                            <img src='images/futurep5.png' />
                                        </div>
                                        <div className='card-slider-content'>
                                            <h3>Future Space Visualization</h3>
                                            <p>
                                                Because it can furnish major improvements and can be really effective in fields such as engineering...
                                            </p>
                                            <div className='view-more-btn-slider'>
                                                <NavLink to="/future-space">
                                                    <button className='vi-btn'>View More <img src='images/arrow-color.png' /></button>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='new-protfolio-card mb-8'>
                                    <div className='card-inner-section'>
                                        <div className='img-slider-sec'>
                                            <img src='images/phqp6.png' />
                                        </div>
                                        <div className='card-slider-content'>
                                            <h3>PHQ</h3>
                                            <p>
                                                PHQ is a Web 3.0 eco system where every possible transaction can be done. With this system we can...
                                            </p>
                                            <div className='view-more-btn-slider'>
                                                <NavLink to="/case-study-details-blockchain1">
                                                    <button className='vi-btn'>View More <img src='images/arrow-color.png' /></button>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='new-protfolio-card mb-8'>
                                    <div className='card-inner-section'>
                                        <div className='img-slider-sec'>
                                            <img src='images/metazp7.png' />
                                        </div>
                                        <div className='card-slider-content'>
                                            <h3>Metaz</h3>
                                            <p>
                                                Meta[Z] is the world's first NFT trading platform that is both collectible (collectible) and redeemable...
                                            </p>
                                            <div className='view-more-btn-slider'>
                                                <NavLink to="/case-study-details-blockchain2">
                                                    <button className='vi-btn'>View More <img src='images/arrow-color.png' /></button>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='new-protfolio-card mb-8'>
                                    <div className='card-inner-section'>
                                        <div className='img-slider-sec'>
                                            <img src='images/newaz.png' />
                                        </div>
                                        <div className='card-slider-content'>
                                            <h3>Anftiz</h3>
                                            <p>
                                                ANFTZ is an online Marketplace for NFT, from where an individual can buy as well as sell digital art online...
                                            </p>
                                            <div className='view-more-btn-slider'>
                                                <NavLink to="/case-study-details-blockchain3">
                                                    <button className='vi-btn'>View More <img src='images/arrow-color.png' /></button>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='new-protfolio-card mb-8'>
                                    <div className='card-inner-section'>
                                        <div className='img-slider-sec'>
                                            <img src='images/skoovip9.png' />
                                        </div>
                                        <div className='card-slider-content'>
                                            <h3>Skoovi</h3>
                                            <p>
                                                Skoovi is an online marketplace for people working in the Entertainment industry, especially in Bollywood...
                                            </p>
                                            <div className='view-more-btn-slider'>
                                                <NavLink to="/case-study-details-skooviweb">
                                                    <button className='vi-btn'>View More <img src='images/arrow-color.png' /></button>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='new-protfolio-card mb-8'>
                                    <div className='card-inner-section'>
                                        <div className='img-slider-sec'>
                                            <img src='images/chirpy-webp10.png' />
                                        </div>
                                        <div className='card-slider-content'>
                                            <h3>Chirpy Web</h3>
                                            <p>
                                                Ajinkya's key purpose for coming to us was to solve the user interaction problem that he was seeing...
                                            </p>
                                            <div className='view-more-btn-slider'>
                                                <NavLink to="/case-study-details-chirplyweb">
                                                    <button className='vi-btn'>View More <img src='images/arrow-color.png' /></button>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='new-protfolio-card mb-8'>
                                    <div className='card-inner-section'>
                                        <div className='img-slider-sec'>
                                            <img src='images/agribridgep11.png' />
                                        </div>
                                        <div className='card-slider-content'>
                                            <h3>Agribridge</h3>
                                            <p>
                                                Agribrige is a revolutionary SAAS platform that bridges the gap between farmer and the...
                                            </p>
                                            <div className='view-more-btn-slider'>
                                                <NavLink to="/case-study-details-agribridge">
                                                    <button className='vi-btn'>View More <img src='images/arrow-color.png' /></button>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='new-protfolio-card mb-8'>
                                    <div className='card-inner-section'>
                                        <div className='img-slider-sec'>
                                            <img src='images/Ken 42p12.png' />
                                        </div>
                                        <div className='card-slider-content'>
                                            <h3>Ken 42</h3>
                                            <p>
                                                Ken42 is a one stop SAAS platform that provides all school management administrative activity on...
                                            </p>
                                            <div className='view-more-btn-slider'>
                                                <NavLink to="/case-study-details-ken42">
                                                    <button className='vi-btn'>View More <img src='images/arrow-color.png' /></button>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='new-protfolio-card mb-8'>
                                    <div className='card-inner-section'>
                                        <div className='img-slider-sec'>
                                            <img src='images/Menyos13.png' />
                                        </div>
                                        <div className='card-slider-content'>
                                            <h3>Menyos</h3>
                                            <p>
                                                Menyos is a POS cum a Restaurant management system where a Restaurant owner can invite as ...
                                            </p>
                                            <div className='view-more-btn-slider'>
                                                <NavLink to="/case-study-details-menyosweb">
                                                    <button className='vi-btn'>View More <img src='images/arrow-color.png' /></button>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='new-protfolio-card mb-8'>
                                    <div className='card-inner-section'>
                                        <div className='img-slider-sec'>
                                            <img src='images/Doctormerap14.png' />
                                        </div>
                                        <div className='card-slider-content'>
                                            <h3>Doctormera</h3>
                                            <p>
                                                Mere POS is a restaurant management service a SAAS platform that provides ...
                                            </p>
                                            <div className='view-more-btn-slider'>
                                                <NavLink to="/case-study-details-meresalim">
                                                    <button className='vi-btn'>View More <img src='images/arrow-color.png' /></button>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='new-protfolio-card mb-8'>
                                    <div className='card-inner-section'>
                                        <div className='img-slider-sec'>
                                            <img src='images/Netspacep15.png' />
                                        </div>
                                        <div className='card-slider-content'>
                                            <h3>Netspace</h3>
                                            <p>
                                                Netspace is the finest platform for buying and selling real estate. We may add several properties for...
                                            </p>
                                            <div className='view-more-btn-slider'>
                                                <NavLink to="/case-study-details-netspace-application">
                                                    <button className='vi-btn'>View More <img src='images/arrow-color.png' /></button>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='new-protfolio-card mb-8'>
                                    <div className='card-inner-section'>
                                        <div className='img-slider-sec'>
                                            <img src='images/Skooviep16.png' />
                                        </div>
                                        <div className='card-slider-content'>
                                            <h3>Skoovie</h3>
                                            <p>
                                                Skoovi is an online marketplace for people working in the Entertainment industry, especially in Bollywood, ...
                                            </p>
                                            <div className='view-more-btn-slider'>
                                                <NavLink to="/case-study-details-skooviapp">
                                                    <button className='vi-btn'>View More <img src='images/arrow-color.png' /></button>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='new-protfolio-card mb-8'>
                                    <div className='card-inner-section'>
                                        <div className='img-slider-sec'>
                                            <img src='images/HangTimep17.png' />
                                        </div>
                                        <div className='card-slider-content'>
                                            <h3>Hang Time</h3>
                                            <p>
                                                Hangtime is an event management beta software. A fantastic vision for managing Calendar activities...
                                            </p>
                                            <div className='view-more-btn-slider'>
                                                <NavLink to="/case-study-details-hangtime">
                                                    <button className='vi-btn'>View More <img src='images/arrow-color.png' /></button>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='new-protfolio-card mb-8'>
                                    <div className='card-inner-section'>
                                        <div className='img-slider-sec'>
                                            <img src='images/Habbitp18.png' />
                                        </div>
                                        <div className='card-slider-content'>
                                            <h3>Habbit</h3>
                                            <p>
                                                Habit is an Application with a greater vision, Habit app allows a Parent to build a specific habits to their...
                                            </p>
                                            <div className='view-more-btn-slider'>
                                                <NavLink to="/case-study-details-habbit">
                                                    <button className='vi-btn'>View More <img src='images/arrow-color.png' /></button>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='new-protfolio-card mb-8'>
                                    <div className='card-inner-section'>
                                        <div className='img-slider-sec'>
                                            <img src='images/Yudoop19.png' />
                                        </div>
                                        <div className='card-slider-content'>
                                            <h3>Yudoo</h3>
                                            <p>
                                                As the major requirement from Ms. Bhavika was to make sure that the user experience must not be  ...
                                            </p>
                                            <div className='view-more-btn-slider'>
                                                <NavLink to="/case-study-details-yudoo">
                                                    <button className='vi-btn'>View More <img src='images/arrow-color.png' /></button>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='new-protfolio-card mb-8'>
                                    <div className='card-inner-section'>
                                        <div className='img-slider-sec'>
                                            <img src='images/Menyosp20.png' />
                                        </div>
                                        <div className='card-slider-content'>
                                            <h3>Menyos</h3>
                                            <p>
                                                Menyos is a POS cum a Restaurant management system where a Restaurant owner can invite as...
                                            </p>
                                            <div className='view-more-btn-slider'>
                                                <NavLink to="/case-study-details-menyos">
                                                    <button className='vi-btn'>View More <img src='images/arrow-color.png' /></button>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='new-protfolio-card mb-8'>
                                    <div className='card-inner-section'>
                                        <div className='img-slider-sec'>
                                            <img src='images/Code Beyond21.png' />
                                        </div>
                                        <div className='card-slider-content'>
                                            <h3>Code Beyond</h3>
                                            <p>
                                                A client wants to design a blog website. In this website he used multiple option to find any blog...
                                            </p>
                                            <div className='view-more-btn-slider'>
                                                <NavLink to="/case-study-details-angularblog">
                                                    <button className='vi-btn'>View More <img src='images/arrow-color.png' /></button>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='new-protfolio-card mb-8'>
                                    <div className='card-inner-section'>
                                        <div className='img-slider-sec'>
                                            <img src='images/Murray’s Water Boring22.png' />
                                        </div>
                                        <div className='card-slider-content'>
                                            <h3>Murray’s Water Boring</h3>
                                            <p>
                                                The social website Murrays Water Boring is a company that provides water bore services...
                                            </p>
                                            <div className='view-more-btn-slider'>
                                                <NavLink to="/case-study-details-murrays">
                                                    <button className='vi-btn'>View More <img src='images/arrow-color.png' /></button>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='new-protfolio-card mb-8'>
                                    <div className='card-inner-section'>
                                        <div className='img-slider-sec'>
                                            <img src='images/Inglis Fire & Safety23.png' />
                                        </div>
                                        <div className='card-slider-content'>
                                            <h3>Inglis Fire & Safety</h3>
                                            <p>
                                                The website Inglisfire is for the Australian government's fire safety services. This sort of ...
                                            </p>
                                            <div className='view-more-btn-slider'>
                                                <NavLink to="/case-study-details-inglishfiresafety">
                                                    <button className='vi-btn'>View More <img src='images/arrow-color.png' /></button>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='new-protfolio-card mb-8'>
                                    <div className='card-inner-section'>
                                        <div className='img-slider-sec'>
                                            <img src='images/Netspace24.png' />
                                        </div>
                                        <div className='card-slider-content'>
                                            <h3>Netspace</h3>
                                            <p>
                                                Netspace is the finest platform for buying and selling real estate. We may add several properties for...
                                            </p>
                                            <div className='view-more-btn-slider'>
                                                <NavLink to="/case-study-details-netspace">
                                                    <button className='vi-btn'>View More <img src='images/arrow-color.png' /></button>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>

    )
}

export default PortfolioList;