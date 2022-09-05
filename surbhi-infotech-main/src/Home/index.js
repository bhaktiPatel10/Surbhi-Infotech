import React, { useState, useEffect } from "react";
import Heading from "../Common/Heading";
import Blog from "./Component/blog";
import CaseStudy from "./Component/CaseStudy";
import Footer from "./Component/footer";
import GlobalReach from "./Component/GlobalReach";
import Header from "./Component/Header";
import HomeVideo from "./Component/HomeVideo";
import LetsTalk from "./Component/letsTalk";
import Testimonials from "./Component/Testimonials";
import WhatWeOffer from "./Component/WhatWeOffer";
import WeServe from "./Component/WeServe";
import RecentWork from './Component/RecentWork '
import { Helmet } from "react-helmet";
const Home = () => {
    // const [showVideo, setShowVideo] = useState(true);
    // useEffect(() => {
    //     if (localStorage.getItem('status') == 1) {
    //         setShowVideo(false);
    //     }
    //     setTimeout(() => {
    //         setShowVideo(false);
    //         localStorage.setItem('status', 1);
    //     }, 6000);
    // });
    useEffect(() => {
        window.scrollTo(0, 0);
        document.getElementsByTagName("meta")["title"].content = "Surbhi Infotech- Top IT Companies in India | IT Services";
        document.getElementsByTagName("meta")["description"].content = "Surbhi Infotech is a Leading Software Development Company and one of the Top IT companies in India, with a global footprint, providing innovative digital solutions.";
        document.getElementsByTagName("meta")["url"].content = "https://www.surbhiinfotech.com/";
    }, []);
    return (
        <>

            {/* <div className={`video-splash ${showVideo == false && 'd-none'}`}>
                <video autoPlay="autoplay" muted width={"100%"} height={"100%"}>
                    <source src="images/video.mp4" type="video/mp4" />
                </video>
            </div> */}
            {/* <Helmet>
                <meta name="title" content={"Surbhi Infotech- Top IT Companies in India | IT Services"} />
                <meta name="description" content={"Surbhi Infotech is a Leading Software Development Company and one of the Top IT companies in India, with a global footprint, providing innovative digital solutions."} />
                <meta name="url" content={"https://www.surbhiinfotech.com/"} />
            </Helmet> */}
            <Header />
            <HomeVideo />
            <Heading bg_text="Portfolio" front_text="Our Recent Work" />
            <RecentWork />
            <Heading bg_text="Our Services" front_text="What We Offer" />
            <WhatWeOffer />

            <Heading bg_text="We Support" front_text="Industries We Serve" />
            <WeServe />
            {/* <Heading bg_text="Case Study" front_text="Case Study" />
                <CaseStudy /> */}
            <GlobalReach />
            <Heading bg_text="Recent Articles" front_text="Blog" />
            <div className="container-new home-blog-section">
                <section className='container-blog' >
                    <Blog date="15" month_year='June 2022' title="3 Ways Virtual Reality Will Transform ECommerce" decription="The demand for innovative and enhanced shopping experiences has increased in recent years. Customer attitudes around ecommerce have shifted dramatically" url="/virtual-reality" last={true} />
                    <Blog date="10" month_year='June 2022' title="The Future Of Virtual Reality In Business" decription="Virtual Reality (VR) has recently risen to prominence as a result of the release of a slew of low-cost, consumer-friendly VR headsets." url="/future-virtual-reality" />
                    <Blog date="17" month_year='May 2022' title="How Blockchain Can Help In Data Security" decription="The old way of doing business has been disrupted by computer technology and the internet. New revenue streams continue to emerge, and business models from the past are quickly becoming obsolete. " url="/blockchain" last={true} />
                </section>
            </div>

            <div className="home-testimonial-container">
                <Heading bg_text="Testimonials" front_text="What our client says" extraClass="new-width-global" />
                <Testimonials />
            </div>
            <div className="home-lets-container">
                <LetsTalk />
            </div>
            <Footer />
        </>
    )
};



export default Home;