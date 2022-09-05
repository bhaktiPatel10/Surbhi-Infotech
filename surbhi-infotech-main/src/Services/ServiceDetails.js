import React, { useEffect, useState } from "react";
import './ServiceDetails.css';
import Heading from "../Common/Heading";
import Footer from "../Home/Component/footer";
import Header from "../Home/Component/Header";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper";
import OurService from "./OurService";
import AccordianItem from "./AccordianItem";
import jsonData from '../json/services.json';
import Img from "../Common/Img";
import { NavLink, useNavigate } from "react-router-dom";
import ContactPopup from "../ContactUs/ContactPopup";
import { useSearchParams } from 'react-router-dom'
import "swiper/css/effect-coverflow";
import Helmet from "react-helmet";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
// console.log("jsonData", jsonData);

const ServiceDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        // console.log("sazx", searchParams.get("type"))
        let type = window?.location?.href.split('=')[1];
        if (type === "ar-vr") {
            document.getElementsByTagName("meta")["title"].content = "Virtual Reality Companies in India | AR & VR Development - Surbhi Infotech";
            document.getElementsByTagName("meta")["description"].content = "Surbhi Infotech is AR VR Development Company in Ahmedabad and one of the leading Virtual Reality Companies in India, offering AR & VR solutions for different industries.";
            document.getElementsByTagName("meta")["url"].content = "https://www.surbhiinfotech.com/service-details?type=ar-vr";
        }
        if (type === "ai-ml") {
            document.getElementsByTagName("meta")["title"].content = "AI and ML Companies in India | AI & ML Development- Surbhi Infotech";
            document.getElementsByTagName("meta")["description"].content = "Being one of the best AI and ML Companies in India, we provide innovative AI-/ML-powered solutions using deep expertise in artificial intelligence and machine learning. ";
            document.getElementsByTagName("meta")["url"].content = "https://www.surbhiinfotech.com/service-details?type=ai-ml";
        }
        if (type === "website") {
            document.getElementsByTagName("meta")["title"].content = "Best Web Development Company in New York - Surbhi Infotech";
            document.getElementsByTagName("meta")["description"].content = "The Best Web Development Company in New York, Surbhi Infotech offers a wide range of technologies to deliver the most reliable web development solutions globally.";
            document.getElementsByTagName("meta")["url"].content = "https://www.surbhiinfotech.com/service-details?type=website";
        }
        if (type === "mobile") {
            document.getElementsByTagName("meta")["title"].content = "Top Mobile App Development Company in Surat- Surbhi Infotech";
            document.getElementsByTagName("meta")["description"].content = "Surbhi Infotech is a Top Mobile App Development Company in Surat, known for building customized and result-driven mobile applications for your business.";
            document.getElementsByTagName("meta")["url"].content = "https://www.surbhiinfotech.com/service-details?type=mobile";
        }
        if (type === "ui-ux") {
            document.getElementsByTagName("meta")["title"].content = "UI and UX Development Services in Surat | Surbhi Infotech";
            document.getElementsByTagName("meta")["description"].content = "We at Surbhi infotech, provide the best UI and UX Development Services in Surat by bringing your business ideas to life through intelligent UI & UX design.";
            document.getElementsByTagName("meta")["url"].content = "https://www.surbhiinfotech.com/service-details?type=ui-ux";
        }
        if (type === "digital-marketing") {
            document.getElementsByTagName("meta")["title"].content = "Best Digital Marketing Agency in Surat- Surbhi Infotech";
            document.getElementsByTagName("meta")["description"].content = "With our expertise in digital marketing, we at Surbhi Infotech, Best Digital Marketing Agency in Surat, can help you attract new prospects to your business.";
            document.getElementsByTagName("meta")["url"].content = "https://www.surbhiinfotech.com/service-details?type=digital-marketing";
        }
    }, []);

    const [searchParams, setSearchParams] = useSearchParams();
    searchParams.get("type");
    const [showPopup, setShowPopup] = useState(false);
    const [showEmail, setShowEmail] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        let url = window?.location?.href;
        let slug = url.split('/').pop();
        if (slug === "contact-us") {
            setShowEmail(true);
        }
    }, []);
    const [perView, setPerView] = useState(5);
    const [newPerView, setNewPerView] = useState(2);
    const [serviceData, setServiceData] = useState({});
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [company, setCompany] = useState("");
    const [error, setError] = useState({});
    const [type, setType] = useState(window?.location?.href.split('=')[1]);
    useEffect(() => {
        let width = window.innerWidth;
        if (width > 1000) {
            setNewPerView(2.5);
        }
        if (width < 800) {
            setNewPerView(2);
        }
        if (width < 580) {
            setNewPerView(1);
        }
    }, []);
    console.log("newPerView", newPerView)
    useEffect(() => {
        let width = window.innerWidth;
        if (width < 800) {
            setPerView(2);
        } else if (width < 1000) {
            setPerView(3);
        }
        else if (width < 450) {
            setPerView(1);
        }

        let type = window?.location?.href.split('=')[1];
        console.log('type', type);
        if (type === "ar-vr") {
            setServiceData(jsonData[5]);
        }
        if (type === "ai-ml") {
            setServiceData(jsonData[4]);

        }
        if (type === "block-chain") {
            setServiceData(jsonData[5]);
        }
        if (type === "digital-marketing") {
            setServiceData(jsonData[3]);
        }
        if (type === "website") {
            setServiceData(jsonData[0]);
        }
        if (type === "mobile") {
            setServiceData(jsonData[1]);

        }
        if (type === "ui-ux") {
            setServiceData(jsonData[2]);

        }
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0)
        changePage();
    }, [searchParams.get("type")]);

    const changePage = () => {
        let type = window?.location?.href.split('=')[1];
        console.log('type', type);
        if (type === "ar-vr") {
            setServiceData(jsonData[5]);
        }
        if (type === "ai-ml") {
            setServiceData(jsonData[4]);

        }
        if (type === "block-chain") {
            setServiceData(jsonData[5]);
        }
        if (type === "digital-marketing") {
            setServiceData(jsonData[3]);
        }
        if (type === "website") {
            setServiceData(jsonData[0]);
        }
        if (type === "mobile") {
            setServiceData(jsonData[1]);

        }
        if (type === "ui-ux") {
            setServiceData(jsonData[2]);

        }
    }
    // console.log("esdf", serviceData)

    const [openIndex, setOpenIndex] = useState(2);
    const [openIndexBottom, setOpenIndexBottom] = useState(2);
    const [servicesCategory, setServicesCategory] = useState([]);

    const handleChange = (index) => {
        setOpenIndex(index)
    }

    const handleChangeBottom = (index) => {
        setOpenIndexBottom(index)
    }


    const handleSubmit = () => {
        let validate = true;
        let err = {};
        if (name === "") {
            err.name = "Please Enter Name ";
            validate = false;
        }
        if (email === "") {
            err.email = "Please Enter Email ";
            validate = false;
        }
        if (phone === "") {
            err.phone = "Please Enter Phone ";
            validate = false;
        }
        if (message === "") {
            err.message = "Please Enter Your Requirements ";
            validate = false;
        }
        // if (company === "") {
        //     err.company = "Please Enter Company/Organization ";
        //     validate = false;
        // }
        // if (servicesCategory.length <= 0) {
        //     err.servicesCategory = "Please Select Category ";
        //     validate = false;
        // }
        setError(err);

        if (validate) {
            let formData = new FormData();
            formData.append("name", name);
            formData.append("email", email);
            formData.append("phone", phone);
            formData.append("requirement", message);
            formData.append("company", company);
            // formData.append("requirment", requirment);
            // formData.append("servicesCategory", servicesCategory.toString());
            const scriptURL = 'https://script.google.com/macros/s/AKfycbzXG9pDj4GjIH6_DjGuacy9o25pq2ZdXGMQU-FfQhEqr6VRRR5QcrM-ppkajFrBwzJW3w/exec'
            // const form = document.forms['google-sheet']


            fetch(scriptURL, { method: 'POST', body: formData })
                .then(response => {
                    console.log("res", response);
                    // alert("Thanks for Contacting us..! We Will Contact You Soon...");
                    navigate('/thank-you');
                    setName("");
                    setEmail("");
                    setPhone("");
                    setCompany("");
                    setMessage("");
                    setServicesCategory([]);
                })
                .catch(error => console.error('ftyg!', error.message))
        }

    }

    return (
        <>
            <Header />
            <main className="main-sec">
                <Heading bg_text="services" front_text={serviceData?.title} />
                <section>
                    <div className="container-new">
                        <div className="">
                            <div className="service-details-row">
                                <div className="service-details-left-container">
                                    <div className="service-details-heading">
                                        {serviceData?.section1_heading}
                                    </div>
                                    <div className="service-details-description">
                                        {serviceData?.section1_desc1}
                                    </div>
                                    <div className="service-details-description">
                                        {serviceData?.section1_desc2}
                                    </div>
                                    {/* <div className="review-sec">
                                        <p className="g-review">100+ Google Review <Img src="images/Group 60069.png" alt="" /></p>
                                        <p className="c-review">50+ Clutch Review <Img src="images/Group 60069.png" /></p>
                                    </div> */}
                                </div>
                                <div className="servi-left">
                                    <Img src={serviceData?.section1_img} alt="digital" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {type !== "ai-ml" &&
                        <div className="service-details-container">
                            <div className="service-details-our-services">
                                <div className="service-details-our-services-left">
                                    <div className="service-details-heading">
                                        {serviceData?.section2_heading}
                                    </div>
                                    <div className="service-details-description">
                                        {serviceData?.section2_desc}
                                    </div>
                                    <div className="services-details-btn-top-space">
                                        <NavLink to="/portfolio">
                                            <button className="services-details-btn service-btn-new">View Portfolio  <Img src="images/contact-arrow.png" alt="" className='arrow' /></button>
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="service-details-our-services-right">
                                    <Swiper
                                        slidesPerView={newPerView}
                                        centeredSlides={false}
                                        grabCursor={true}
                                        autoplay={true}
                                        spaceBetween={34}
                                        keyboard={{
                                            enabled: true
                                        }}
                                        navigation={false}
                                        pagination={false}
                                        modules={[Keyboard, Scrollbar, Navigation, Pagination, Autoplay]}
                                    >
                                        {serviceData?.section2_slider && serviceData?.section2_slider.map((item, index) => (
                                            <SwiperSlide key={index}>
                                                <div className="new-slider-for-service">
                                                    <div className='new-slider-card'>
                                                        <div className='card-inner-section'>
                                                            <div className='img-slider-sec'>
                                                                <Img src={item?.front_img} className={`${type === "ar-vr" && ""}`} />
                                                            </div>
                                                            <div className='card-slider-content'>
                                                                <h3>{item?.title}</h3>
                                                                <p>
                                                                    {item?.desc}
                                                                </p>
                                                                <div className='view-more-btn-slider'>
                                                                    <NavLink to={item?.link}>
                                                                        <button className='vi-btn'>View More <img src='images/arrow-color.png' /></button>
                                                                    </NavLink>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <div className="services-card">
                                                    <div className="service-bg">
                                                        <Img src="images/services1.png" />
                                                        <div>
                                                            <p className="bg-services-content">
                                                                {item?.desc}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="service-bg-second">
                                                        <Img src={item?.front_img} className={`${type === "ar-vr" && "img-new"}`} />
                                                    </div>
                                                    <div className="service-details-btn-link services-details-btn-new">
                                                        <NavLink to={item?.link}>
                                                            View <img className="service-details-arrow" src="images/arrow-color.png" alt="" />
                                                        </NavLink>
                                                    </div>
                                                </div> */}
                                            </SwiperSlide>
                                        ))}

                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    }

                </section>
                <section>
                    <div className="container-new">
                        <div className="mt-200 new-mt-200">
                            <div className="lan-section">
                                <p>
                                    We use the full potential of cutting-edge technologies, like ML and AI, while offering consulting and development services to clients. Our smart solutions and services allow businesses to gain an edge over their competitors in their respective industries.
                                </p>
                                <div className="lan-img">
                                    <Img src={serviceData?.section3_img} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container-new">
                        <div className="">
                            <div className="ai_ml-row w-100">
                                <div className="w-50">
                                    {
                                        type === "mobile" ?
                                            <Img className="alli-img" src="images/service-details/mobile-services.png" alt="" />
                                            :
                                            type === "ui-ux" ?
                                                <Img className="alli-img" src="images/service-details/ui-ux.png" alt="" />
                                                :
                                                type === "website" ?
                                                    <Img className="alli-img" src="images/website1.png" alt="" />
                                                    :
                                                    type === "digital-marketing" ?
                                                        <Img className="alli-img" src="images/digital.png" alt="" />
                                                        :

                                                        type === "ar-vr" ?
                                                            <Img className="alli-img" src="images/vrservices.png" alt="" />
                                                            :
                                                            <Img className="alli-img" src="images/Group 60025.png" alt="" />
                                    }

                                </div>
                                <div className="ai_ml-right-section w-50">
                                    <div className="service-details-heading">
                                        {serviceData?.section4_heading}
                                    </div>
                                    <div className="service-details-description-2">
                                        {serviceData?.section4_desc}
                                    </div>
                                    <div className="services-details-btn-top-space">
                                        <NavLink to="/contact-us">
                                            <button className="services-details-btn" >Talk to our expert  <Img src="images/contact-arrow.png" alt="" className='arrow' /></button>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {
                    type !== "ai-ml" && <>
                        <div className="ai_ml-services">
                            {serviceData?.section5_heading}
                        </div>
                        <div className="mt-200 new-mt-200">
                            <div className="ser-slider-min">
                                <div className="border-back"></div>
                                <Swiper
                                    // direction={"vertical"}
                                    slidesPerView={perView}
                                    slidesPerGroupSkip={1}
                                    loop={true}
                                    loopFillGroupWithBlank={true}
                                    // effect={"coverflow"}
                                    grabCursor={true}
                                    autoplay={true}
                                    centeredSlides={true}
                                    // coverflowEffect={{
                                    //     rotate: 50,
                                    //     stretch: 0,
                                    //     depth: 100,
                                    //     modifier: 1,
                                    //     slideShadows: true,
                                    // }}
                                    keyboard={{
                                        enabled: true
                                    }}
                                    // breakpoints={{
                                    //     769: {
                                    //         slidesPerView: 1,
                                    //         slidesPerGroup: 1
                                    //     }
                                    // }}
                                    // scrollbar={true}
                                    navigation={false}
                                    pagination={{
                                        clickable: true
                                    }}
                                    modules={[Keyboard, Scrollbar, Navigation, Pagination, EffectCoverflow, Autoplay]}
                                    className="mySwiper"
                                // onSlideChange={index => { setActiveIndex(index.snapIndex) }}
                                >
                                    {serviceData?.section5_slider && serviceData?.section5_slider.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <OurService img={item?.img} img2={item?.img2} heading={item?.name} content={item?.desc} index={index} activeIndex={openIndex} handleChange={handleChange} />
                                        </SwiperSlide>

                                    ))}

                                </Swiper>
                            </div>
                        </div>
                    </>
                }

                <div className="free_instant_row">
                    <div className="free_instant-top-space">
                        <div className="free_instant_row-bg">
                        </div>
                        <div className="free_instant_row_flex">
                            <div className="extraa-free">
                                <Img src="images/services-mobile.png" className="sevices-mobile-img" />
                            </div>
                            <div className="free_data_right_section">
                                <div className="service-details-heading">
                                    {serviceData?.section6_heading}
                                </div>
                                <div className="service-details-description-2">
                                    {serviceData?.section6_desc}
                                </div>
                                <div className="services-details-btn-top-space">
                                    <NavLink to="/contact-us">
                                        <button className="services-details-btn" >Get a free demo  <Img src="images/contact-arrow.png" alt="" className='arrow' /></button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-200 new-mt-200">

                </div>
                <section>
                    <div className="container-new">
                        <div className="end-to-end-services-heading">
                            {serviceData?.section7_heading}
                        </div>
                        <div className="service-details-description-2 end-to-end-services-desc">
                            {serviceData?.section7_desc}
                        </div>
                        <div className="end-to-end-points-container">
                            <div className="end-ponits-main">
                                <div className="end-to-end-points">
                                    <Img src="images/check.png" className="points-img" />
                                    <div className="point-text">{serviceData?.section7_points && serviceData?.section7_points[0]}</div>
                                </div>
                                <div className="end-to-end-points">
                                    <Img src="images/check.png" className="points-img" />
                                    <div className="point-text">{serviceData?.section7_points && serviceData?.section7_points[1]}</div>
                                </div>
                                <div className="end-to-end-points">
                                    <Img src="images/check.png" className="points-img" />
                                    <div className="point-text">{serviceData?.section7_points && serviceData?.section7_points[2]}</div>
                                </div>
                                <div className="end-to-end-points">
                                    <Img src="images/check.png" className="points-img" />
                                    <div className="point-text">{serviceData?.section7_points && serviceData?.section7_points[3]}</div>
                                </div>

                            </div>
                            <div className="end-to-end-right-section">
                                <div className="end-to-end-points">
                                    <Img src="images/check.png" className="points-img" />
                                    <div className="point-text">{serviceData?.section7_points && serviceData?.section7_points[4]}</div>
                                </div>
                                <div className="end-to-end-points">
                                    <Img src="images/check.png" className="points-img" />
                                    <div className="point-text">{serviceData?.section7_points && serviceData?.section7_points[5]}</div>
                                </div>
                                <div className="end-to-end-points">
                                    <Img src="images/check.png" className="points-img" />
                                    <div className="point-text">{serviceData?.section7_points && serviceData?.section7_points[6]}</div>
                                </div>
                                <div className="end-to-end-points">
                                    <Img src="images/check.png" className="points-img" />
                                    <div className="point-text">{serviceData?.section7_points && serviceData?.section7_points[7]}</div>
                                </div>
                            </div>
                        </div>
                        <div className="services-lets-task-btn">
                            <button className="services-details-btn services-lets-task-btn-width" onClick={() => { setShowPopup(true); }}>Let’s Talk  <Img src="images/contact-arrow.png" alt="" className='arrow' /></button>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container-new">
                        <div className="mt-200 new-mt-200">
                            <div className="methodology-container">
                                <div className="methodology-left">
                                    <h1>
                                        {serviceData?.section8_heading}
                                        {/* Surbhi's Data<br /> Science, AI, ML
                            <br />Agile Methodology */}
                                    </h1>
                                </div>
                                <div className="methodology-right">
                                    <p>
                                        {serviceData?.section8_desc}
                                    </p>
                                    {/* <p>
                            Our solutions are based on deep mathematical and statistical foundations and state-of-the-art techniques, including deep learning, machine learning, neural networks, and natural language processing.
                        </p> */}
                                </div>
                            </div>
                            <div className="methodology-img">
                                <Img src={serviceData?.section9_img} />
                            </div>
                        </div>
                    </div>
                </section>
                <div className="mt-200 new-mt-200">
                    <div className="our-data-services">
                        {serviceData?.section10_heading}
                    </div>
                    <div className="ser-slider-min">
                        <div className="border-back"></div>
                        <Swiper
                            slidesPerView={perView}
                            centeredSlides={true}
                            slidesPerGroupSkip={1}
                            grabCursor={true}
                            autoplay={true}
                            keyboard={{
                                enabled: true
                            }}
                            navigation={false}
                            pagination={{
                                clickable: true
                            }}
                            modules={[Keyboard, Scrollbar, Navigation, Pagination, Autoplay]}
                            className="mySwiper"
                        >
                            {
                                serviceData?.section10_slider && serviceData?.section10_slider.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <OurService svg={item.img} img={item.img} heading={item?.name} heading2="" content={item?.desc} index={index} activeIndex={openIndexBottom} handleChange={handleChangeBottom} />
                                    </SwiperSlide>
                                ))}
                        </Swiper>
                    </div>
                </div>
                <section>
                    <div className="container-new">
                        <div className="mt-200 new-mt-200 accordian-section">
                            <div>
                                <div className="end-to-end-services-heading accordian-heading new-end-end">
                                    {serviceData?.section11_heading}
                                </div>
                                <div className="accordian">
                                    <div className="accordian-left-section">
                                        {serviceData?.section11_accodian && serviceData?.section11_accodian[0] && serviceData?.section11_accodian[0]?.left_section.map((item, index) => (
                                            <AccordianItem title={item?.title} description={item?.desc} isopen={index === 0 ? true : false} key={index} />
                                        ))}
                                    </div>
                                    <div className="accordian-right-section">
                                        {serviceData?.section11_accodian && serviceData?.section11_accodian[1] && serviceData?.section11_accodian[1].right_section && serviceData?.section11_accodian[1]?.right_section.map((item, index) => (
                                            <AccordianItem title={item?.title} description={item?.desc} isopen={index === 0 ? true : false} key={index} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container-new">
                        <div className="mt-200 new-mt-200 free-proposal-section">
                            <div className="free-pro-posal">
                                <div className="end-to-end-services-heading">
                                    Get Your Free Proposal
                                </div>
                                <div className="free-proposal-form">
                                    <div className="form-row">
                                        <div className='mix-row'>
                                            <input className='form-control-input' value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Your Name" />
                                            {error && error?.name && <div className="error">{error?.name} </div>}
                                        </div>
                                        <div className='right-colum-form mix-row'>
                                            <input className='form-control-input' value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Your Email" />
                                            {error && error?.email && <div className="error">{error?.email} </div>}
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className='mix-row'>
                                            <PhoneInput
                                                className='form-control-input'
                                                placeholder="Phone" defaultCountry="IN"
                                                value={phone}
                                                onChange={(e) => setPhone(e)} />
                                            {error && error?.phone && <div className="error">{error?.phone} </div>}
                                            {/* <input className='form-control-input' value={phone} onChange={(e) => { setPhone(e.target.value) }} placeholder="Phone" />
                                            {error && error?.phone && <div className="error">{error?.phone} </div>} */}
                                        </div>
                                        <div className='right-colum-form mix-row'>
                                            <input className='form-control-input' value={company} onChange={(e) => { setCompany(e.target.value); }} placeholder="Company/Organization" />
                                            {/* {error && error?.company && <div className="error">{error?.company} </div>} */}
                                        </div>
                                    </div>
                                    {/* <div className="service-check">
                                        <div>What services can we provide you?</div>
                                    </div> */}
                                    {/* <div className="chk-row">
                                        <div>
                                            <label className="container-checkbox mt-30">
                                                <input type="checkbox" name="checkbox" value="Artificial Intelligence" onChange={(e) => { handleCategory("Artificial Intelligence", e.target.checked); }} />
                                                <span className="checkmark-chk checkbox"></span>
                                                <span className={`radio-label ${servicesCategory && servicesCategory.includes("Artificial Intelligence") && "active-btn"}`}>Artificial Intelligence</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label className="container-checkbox mt-30">
                                                <input type="checkbox" name="checkbox" value="Machine Learning" onChange={(e) => { handleCategory("Machine Learning", e.target.checked); }} />
                                                <span className="checkmark-chk checkbox"></span>
                                                <span className={`radio-label ${servicesCategory && servicesCategory.includes("Machine Learning") && "active-btn"}`}>Machine Learning</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label className="container-checkbox mt-30">
                                                <input type="checkbox" name="checkbox" value="Data Science" onChange={(e) => { handleCategory("Data Science", e.target.checked); }} />
                                                <span className="checkmark-chk checkbox"></span>
                                                <span className={`radio-label ${servicesCategory && servicesCategory.includes("Data Science") && "active-btn"}`}>Data Science</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label className="container-checkbox mt-30">
                                                <input type="checkbox" name="checkbox" value="AR/VR Development" onChange={(e) => { handleCategory("AR/VR Development", e.target.checked); }} />
                                                <span className="checkmark-chk checkbox"></span>
                                                <span className={`radio-label ${servicesCategory && servicesCategory.includes("AR/VR Development") && "active-btn"}`}>AR/VR Development</span>
                                            </label>
                                        </div>
                                    </div> */}
                                    {/* {error && error?.servicesCategory && <div className="error">{error?.servicesCategory} </div>} */}

                                    <div className="your-message">
                                        <textarea className="form-control-input textarea your-message-textarea" row={2} placeholder="Your Message" value={message} onChange={(e) => { setMessage(e.target.value) }}></textarea>
                                        {error && error?.message && <div className="error">{error?.message} </div>}

                                    </div>
                                    <div className='mt-40 flex-end'>
                                        <button className='contact-btn n-btn' type="button" onClick={handleSubmit}>
                                            <span className='submit'>Submit <Img src="images/contact-arrow.png" alt="" className='arrow' /></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {
                    showPopup &&
                    <ContactPopup handleClose={() => { setShowPopup(false); }} />
                }
            </main>

            <Footer />
            {
                showPopup &&
                <ContactPopup handleClose={() => { setShowPopup(false); }} />
            }
        </>
    )
}

export default ServiceDetails;