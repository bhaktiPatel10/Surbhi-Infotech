import React, { useEffect, useState } from "react";
import Heading from "../Common/Heading";
import Footer from "../Home/Component/footer";
import Header from "../Home/Component/Header";
import "./ShopifyPage.css"
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination, Autoplay } from "swiper";
import AccordianItem from "../Services/AccordianItem";
import ContactPopup from "../ContactUs/ContactPopup";
import { NavLink, useNavigate } from "react-router-dom";
import ShopifyPopup from "./ShopifyPopup";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const ShopifyPage = () => {
    const [perView, setPerView] = useState(3);
    const [perNewView, setPerNewView] = useState(2);
    const [showDesc, setShowDesc] = useState();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");
    const [requirment, setRequirment] = useState("");
    const [industryType, setIndustryType] = useState("");
    const [category, setCategory] = useState("");
    const [error, setError] = useState({});
    const [company, setCompany] = useState("");
    const [model, setModel] = useState(false);
    const [scroll, setScroll] = useState(false);
    const navigate = useNavigate();

    const handleClose = () => {
        setModel(false);
    }

    const handleSubmit = () => {
        let validate = true;
        let err = {};
        if (name === "") {
            err.name = "Please Enter Name";
            validate = false;
        }
        if (email === "") {
            err.email = "Please Enter Email";
            validate = false;
        } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            err.email = "Please Enter Valid Email";
            validate = false;
        }
        if (phone === "") {
            err.phone = "Please Enter Phone no.";
            validate = false;
        }

        if (requirment === "") {
            err.requirment = "Please Enter Requirment.";
            validate = false;
        }
        // if (company === "") {
        //     err.company = "Please Enter company.";
        //     validate = false;
        // }

        setError(err);
        if (validate) {
            let formData = new FormData();
            formData.append("name", name);
            formData.append("email", email);
            formData.append("phone", phone);
            formData.append("company", company);
            formData.append("requirment", requirment);
            const scriptURL = 'https://script.google.com/macros/s/AKfycbz4jz0QmIms1bCocbiykJz6pC4ETQTpCCwAVVeMabDXfoUHd6iv4WVtXrZeLpot9GdLaw/exec'
            // const form = document.forms['google-sheet']


            fetch(scriptURL, { method: 'POST', body: formData })
                .then(response => {
                    // alert("Thanks for Contacting us..! We Will Contact You Soon...");
                    navigate('/thank-you');
                    setName("");
                    setEmail("");
                    setPhone("");
                    setRequirment("");
                    setCompany("")
                })
                .catch(error => console.error('ftyg!', error.message))

        }
    }
    useEffect(() => {
        let width = window.innerWidth;
        if (width < 1000) {
            setPerView(3);
        }
        if (width < 800) {
            setPerView(2);
        }

        if (width < 580) {
            setPerView(1);
        }
    });
    useEffect(() => {
        let width = window.innerWidth;
        if (width < 1000) {
            setPerNewView(2);
        }
        if (width < 800) {
            setPerNewView(2);
        }

        if (width < 580) {
            setPerNewView(1);
        }
    });

    return (
        <>
            <Header />
            <main className="shopi-top">
                <section className="shopi-banner">
                    <div className="row-shopify">
                        <div className="sopifi-banner-left">
                            <div className="shopi-banner-content">
                                <h3><span>We're Expert Shopify</span><br />  E-commerce <br />Developers</h3>
                                <p>Aesthetically pleasing, feature-rich Shopify storefronts that help create unforgettable shopping experiences for your customers.</p>
                                {/* <div className="banner-shopi-btn" onClick={() => { setModel(true); }}>
                                    <button>Let's Start Developing</button>
                                </div> */}

                                <div className="number-of">
                                    <div className="number-row">
                                        <div className="box-number new-nu-sho">
                                            <div className="content-box">
                                                <h3>150+</h3>
                                                <p>Happy Customers</p>
                                            </div>
                                        </div>
                                        <div className="box-number new-nu-sho">
                                            <div className="content-box">
                                                <h3>73+</h3>
                                                <p>Collaborative Brains</p>
                                            </div>
                                        </div>
                                        <div className="box-number">
                                            <div className="content-box">
                                                <h3>62%</h3>
                                                <p>Repeat Business</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="sopifi-banner-right">
                            {/* <section className="bag-shopi">
                                <div className="bg-banner-inner">
                                    <img src="images/Group 1000007656.png" />
                                </div>
                            </section> */}
                            <div className="new-space-form">
                                <section className="shopi-form">
                                    <div className="shopi-hedding">
                                        <h3>Talk to us</h3>
                                    </div>
                                    <div className="shopi-inpui-form">
                                        <div className="so-input">
                                            <input type="text" placeholder="Full Name *" value={name} name="name" onChange={(e) => { setName(e.target.value); }} />
                                            <span className="error">{error?.name}</span>
                                        </div>
                                        <div className="so-input">
                                            <input type="email" placeholder="Email Address *" value={email} onChange={(e) => { setEmail(e.target.value); }} name="email" />
                                            <span className="error">{error?.email}</span>
                                        </div>
                                        <div className="so-input">
                                            <PhoneInput
                                                placeholder="Phone" defaultCountry="IN"
                                                value={phone}
                                                onChange={(e) => setPhone(e)} />
                                            <span className="error">{error?.phone}</span>
                                            {/* <input type="text" placeholder="Phone Number *" value={phone} onChange={(e) => { setPhone(e.target.value); }} name="phone" />
                                            <span className="error">{error?.phone}</span> */}
                                        </div>
                                        <div className="so-input">
                                            <textarea type="text" placeholder="Your Message" value={requirment} onChange={(e) => { setRequirment(e.target.value); }} ></textarea>
                                            <span className="error">{error?.requirment}</span>
                                        </div>
                                        <div className="shopi-new-form-btn">
                                            <button onClick={() => { handleSubmit(); }}>Get Started <img src="images/contact-arrow.png" /></button>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about-the-trust">
                    <div className="row-trust">
                        <div className="trust-left">
                            <div className="trust-img">
                                <img className="new-img-shopi" src="images/Group 1000007657.png" />
                            </div>
                        </div>
                        <div className="trust-right">
                            <div className="trust-right-content">

                                <h3>
                                    Full-fledged  <span>Shopify E-commerce </span> Development
                                </h3>
                                <p>Businesses of all sizes are making a move from brick & mortar stores to online space with Shopify, since it offers a host of benefits to merchants. Hire our Shopify experts to unlock the true potential of this most sought-after eCommerce platform with:</p>
                                <div className="">
                                    <span className="check-block"><img src="images/check.png" alt="" className="mr-2" /><p> 100% Bug-free Coding</p></span>
                                    <span className="check-block"><img src="images/check.png" alt="" className="mr-2" /><p> Versatile Engagement Models</p></span>
                                    <span className="check-block"><img src="images/check.png" alt="" className="mr-2" /><p> Agile & Adaptive Development</p></span>
                                    <span className="check-block"><img src="images/check.png" alt="" className="mr-2" /><p> 24X7 Technical Support</p></span>
                                </div>
                                <div className="trust-btn" onClick={() => { setModel(true); }}>
                                    <button>Get Started Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="portfolio-one">
                    <Heading bg_text="pORTFOLIO" front_text="PORTFOLIO" />
                    <div className="container-new">
                        <div className="protfolio-row">
                            <div className="card-portfoli-one mb-9 ">
                                <div className="pad-side">
                                    <div className="prot-img">
                                        <img src="images/prot1.png" />
                                    </div>
                                    <div className="prot-content">
                                        <h3>Dissh</h3>
                                        <div className="prot-btn">

                                            <a target="_black" href="https://dissh.com.au/">
                                                <p>View More <img src="images/arrow-2.png" /></p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card-portfoli-one mb-9 ">
                                <div className="pad-side">
                                    <div className="prot-img">
                                        <img src="images/prot2.png" />
                                    </div>
                                    <div className="prot-content">
                                        <h3>Hollywood mirrors</h3>
                                        <div className="prot-btn">
                                            <a target="_black" href="https://www.hollywoodmirrors.co.uk/">
                                                <p>View More <img src="images/arrow-2.png" /></p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-portfoli-one mb-9 ">
                                <div className="pad-side">
                                    <div className="prot-img">
                                        <img src="images/prot3.png" />
                                    </div>
                                    <div className="prot-content">
                                        <h3>Octics</h3>
                                        <div className="prot-btn">
                                            <a target="_black" href="https://octics.com/ ">
                                                <p>View More <img src="images/arrow-2.png" /></p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-portfoli-one mb-9 ">
                                <div className="pad-side">
                                    <div className="prot-img">
                                        <img src="images/prot4.png" />
                                    </div>
                                    <div className="prot-content">
                                        <h3>Justfab</h3>
                                        <div className="prot-btn">
                                            <a target="_black" href="https://www.justfab.com/ ">
                                                <p>View More <img src="images/arrow-2.png" /></p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-portfoli-one mb-9 ">
                                <div className="pad-side">
                                    <div className="prot-img">
                                        <img src="images/prot5.png" />
                                    </div>
                                    <div className="prot-content">
                                        <h3>Proozy</h3>
                                        <div className="prot-btn">
                                            <a target="_black" href="https://www.proozy.com/">
                                                <p>View More <img src="images/arrow-2.png" /></p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-portfoli-one mb-9 ">
                                <div className="pad-side">
                                    <div className="prot-img">
                                        <img src="images/prot6.png" />
                                    </div>
                                    <div className="prot-content">
                                        <h3>Bouguessa</h3>
                                        <div className="prot-btn">
                                            <a target="_black" href="https://bouguessa.com/">
                                                <p>View More <img src="images/arrow-2.png" /></p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="view-more-portfolio">
                            <NavLink to="/portfolio">
                                <button>View More <img src="images/contact-arrow.png" /></button>
                            </NavLink>

                        </div>
                    </div>
                </section>
                {/* <section className="custom-shopify-dev">
                    <div className="relative">
                        <img src="images/developer.png" alt="" className="dev-img" />
                        <div className="dev-content">
                            <div className="dev-content-heading">Custom Shopify Development Services & Solutions</div>
                            <div className="dev-content-desc">Having a decade of experience in building sales-driven Shopify stores, we offer a range of custom Shopify design and development services.</div>
                            <div className="dev-content-desc">Our dedicated Shopify team has an impressive portfolio of globally successful stores. We have the ideal combination of experts with Shopify design, development, and marketing expertise because we are an established Shopify partner.</div>
                            <div >
                                <button onClick={() => { setModel(true); }} type="button" className="req-btn">Request A Quote</button>
                            </div>
                        </div>
                    </div>
                </section> */}
                <section className="shopify-e-commerce-development">
                    <div className="container-new">
                        <div className="e-commerce-development">
                            <div className="e-title">
                                <h3>Explore our range of Shopify<br /> E-commerce Development Services</h3>
                            </div>
                        </div>
                        <div className="e-commerce-row">
                            <div className="e-commerce-card">
                                <div className="e-commerce-img">
                                    <img src="images/Shopify Theme Development.png" />
                                </div>
                                <div className="e-commerce-content">
                                    <h3>Shopify Theme Development</h3>
                                    <p>
                                        No matter how complicated your project requirements are, we can create fully customised themes from scratch that follow best practises for eCommerce and are compatible with all major browsers and a variety of devices.
                                    </p>
                                </div>
                            </div>
                            <div className="e-commerce-card">
                                <div className="e-commerce-img">
                                    <img src="images/Migration to Shopify.png" />
                                </div>
                                <div className="e-commerce-content">
                                    <h3>Migration to Shopify</h3>
                                    <p>
                                        Your current online store created on any of the platforms, such as Magento, Woocommerce, BigCommerce, etc., can be safely and securely transferred to Shopify by our skilled Shopify development team.
                                    </p>
                                </div>
                            </div>
                            <div className="e-commerce-card">
                                <div className="e-commerce-img">
                                    <img src="images/Shopify Integrations.png" />
                                </div>
                                <div className="e-commerce-content">
                                    <h3>Shopify Integrations</h3>
                                    <p>
                                        With the help of our specialised Shopify integration services, our team of specialists in Shopify website development can integrate your store with other platforms and programmes.
                                    </p>
                                </div>
                            </div>
                            <div className="e-commerce-card">
                                <div className="e-commerce-img">
                                    <img src="images/Shopify App Development.png" />
                                </div>
                                <div className="e-commerce-content">
                                    <h3>Shopify App Development</h3>
                                    <p>
                                        Our skilled team of Shopify app developers can create intuitive, feature-rich native apps for both the Android and iOS operating systems.
                                    </p>
                                </div>
                            </div>
                            <div className="e-commerce-card">
                                <div className="e-commerce-img">
                                    <img src="images/Shopify Support & Maintenance.png" />
                                </div>
                                <div className="e-commerce-content">
                                    <h3>Shopify Support & Maintenance</h3>
                                    <p>
                                        We provide our clients with Support and Maintenance services round-the-clock. Our Shopify Support and Maintenance staff makes sure that your online store is always updated with the newest version and bug-free.
                                    </p>
                                </div>
                            </div>
                            <div className="e-commerce-card">
                                <div className="e-commerce-img">
                                    <img src="images/Plug-In & Module Development.png" />
                                </div>
                                <div className="e-commerce-content">
                                    <h3>Plug-In & Module Development</h3>
                                    <p>
                                        To increase the functionality of your online business, our creative Shopify Developer team can create the most cutting-edge extensions and plugins from scratch.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="solutions">
                    <Heading bg_text="Solutions" front_text="Shopify eCommerce Solutions" />
                    <div className="container-new">
                        <div className="soluiton-slider">
                            <Swiper
                                slidesPerView={perView}
                                centeredSlides={true}
                                slidesPerGroupSkip={1}
                                spaceBetween={30}
                                loop={true}
                                grabCursor={true}
                                autoplay={true}
                                navigation={true}
                                keyboard={{
                                    enabled: true
                                }}
                                // breakpoints={{
                                //     769: {
                                //         slidesPerView: 1,
                                //         slidesPerGroup: 1
                                //     }
                                // }}
                                pagination={false}
                                modules={[Keyboard, Scrollbar, Navigation, Pagination, Autoplay]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className="releted-services-one">
                                        <div className="img-releted">
                                            <img src="images/solution1.png" />
                                        </div>
                                        <div className="service-releted-content">
                                            <h3>Development and Customization
                                                of the Shopify Application</h3>
                                            <p>
                                                We offer unrivaled Shopify app development and modification services, including admin app development, Shopify POS development, and Shopify online shop development.
                                            </p>
                                            <div className="btn-solution" onClick={() => { setModel(true); }}>
                                                <p>Get Started Now <img src="images/arrow-2.png" /></p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="releted-services-one">
                                        <div className="img-releted">
                                            <img src="images/solution2.png" />
                                        </div>
                                        <div className="service-releted-content">
                                            <h3>Responsive Shopify Theme Development Services</h3>
                                            <p>
                                                We believe in offering scalable Shopify theme development services that will give your online business a broad appeal. Within your budget, our developers produce gorgeous and highly dynamic eCommerce shop solutions.
                                            </p>
                                            <div className="btn-solution" onClick={() => { setModel(true); }}>
                                                <p>Get Started Now <img src="images/arrow-2.png" /></p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="releted-services-one">
                                        <div className="img-releted">
                                            <img src="images/solution3.png" />
                                        </div>
                                        <div className="service-releted-content">
                                            <h3>Import and Setup functionality for Shopify Products</h3>
                                            <p>
                                                We assist you with setting up the theme, creating product listings, and creating shipping and payment gateways. Our Shopify designers can help you create custom Shopify templates with their...
                                            </p>
                                            <div className="btn-solution" onClick={() => { setModel(true); }}>
                                                <p>Get Started Now <img src="images/arrow-2.png" /></p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="releted-services-one">
                                        <div className="img-releted">
                                            <img src="images/solution4.png" />
                                        </div>
                                        <div className="service-releted-content">
                                            <h3>Shopify Development Services for mobile applications</h3>
                                            <p>
                                                Our Shopify developers offer high-quality mobile app development services which are not only entertaining but also deliver better in a viewer way. For quick and easy navigation, we also create unique mobile shops.
                                            </p>
                                            <div className="btn-solution" onClick={() => { setModel(true); }}>
                                                <p>Get Started Now <img src="images/arrow-2.png" /></p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="releted-services-one">
                                        <div className="img-releted">
                                            <img src="images/solution5.png" />
                                        </div>
                                        <div className="service-releted-content">
                                            <h3>Shopify Integration</h3>
                                            <p>
                                                Integrating numerous programmes to increase the functionality of your ecommerce site is critical. Our programmers are skilled at integrating payment gateways, shopping carts, APIs, as well as other third-party apps with your online store.
                                            </p>
                                            <div className="btn-solution" onClick={() => { setModel(true); }}>
                                                <p>Get Started Now <img src="images/arrow-2.png" /></p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="releted-services-one">
                                        <div className="img-releted">
                                            <img src="images/solution6.png" />
                                        </div>
                                        <div className="service-releted-content">
                                            <h3>Extension development for Shopify </h3>
                                            <p>
                                                The main goal of adding extensions is to make the ecommerce store more functional and feature-rich. We'll add cutting-edge features like store administrations, multi-store integration, and powerful newsletter extensions to your store.
                                            </p>
                                            <div className="btn-solution" onClick={() => { setModel(true); }}>
                                                <p>Get Started Now <img src="images/arrow-2.png" /></p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                            </Swiper>
                        </div>
                    </div>
                </section>
                <section className="pricing-table">
                    <Heading bg_text="Pricing" front_text="Pricing" />
                    <div className="table-reltive">
                        <div className="container-new">
                            <div className="price-table">
                                <table>
                                    <tr>
                                        <th className="st-slide">Plan</th>
                                        <th onMouseEnter={() => setScroll(true)} onMouseLeave={() => setScroll(false)} >Basic</th>
                                        <th onMouseEnter={() => setScroll(true)} onMouseLeave={() => setScroll(false)}>Standard</th>
                                        <th onMouseEnter={() => setScroll(false)} onMouseLeave={() => setScroll(true)}>Advance</th>
                                    </tr>

                                    <tr className="one-two"></tr>
                                    <tbody className="t-body-pricing">
                                        <tr className="one-tr">
                                            <td className="st-slide"><div className="new-pr-div">Price</div></td>
                                            <td>$1000</td>
                                            <td>$1300</td>
                                            <td>$1500</td>
                                        </tr>
                                        <tr className="new-tr-hight"></tr>
                                        <tr className="two-tr">
                                            <td className="st-slide"><div>Home page</div></td>
                                            <td>Yes</td>
                                            <td>Yes</td>
                                            <td>Yes</td>
                                        </tr>
                                        <tr className="two-tr">
                                            <td className="st-slide"><div>Collection page</div></td>
                                            <td>Yes</td>
                                            <td>Yes</td>
                                            <td>Yes</td>
                                        </tr>
                                        <tr className="two-tr">
                                            <td className="st-slide"><div>Product page</div></td>
                                            <td>Yes</td>
                                            <td>Yes</td>
                                            <td>Yes</td>
                                        </tr>
                                        <tr className="two-tr">
                                            <td className="st-slide"><div>Header search</div></td>
                                            <td>Yes</td>
                                            <td>Yes</td>
                                            <td>Yes</td>
                                        </tr>
                                        <tr className="two-tr">
                                            <td className="st-slide"><div> Cart page</div></td>
                                            <td>Yes</td>
                                            <td>Yes</td>
                                            <td>Yes</td>
                                        </tr>

                                        <tr className="two-tr">
                                            <td className="st-slide"><div>Normal page</div></td>
                                            <td>3 Pages</td>
                                            <td>5 Pages</td>
                                            <td>7 Pages</td>
                                        </tr>
                                        <tr className="two-tr">
                                            <td className="st-slide"><div>Collection list page</div></td>
                                            <td>-</td>
                                            <td>Yes</td>
                                            <td>Yes</td>
                                        </tr>
                                        <tr className="two-tr">
                                            <td className="st-slide"><div>Side cart</div></td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>Yes</td>
                                        </tr>
                                        <tr className="two-tr">
                                            <td className="st-slide"><div>Search page</div></td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>Yes</td>
                                        </tr>
                                        <tr className="two-tr">
                                            <td className="st-slide"><div>Article page</div></td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>Yes</td>
                                        </tr>
                                        <tr className="two-tr">
                                            <td className="st-slide"></td>
                                            <td className="center-btn-table">
                                                <div className="table-btn-one" onClick={() => { setModel(true); }}>
                                                    <button>Get Started Now</button>
                                                </div>
                                            </td>
                                            <td className="center-btn-table">
                                                <div className="table-btn-one" onClick={() => { setModel(true); }}>
                                                    <button>Get Started Now</button>
                                                </div>
                                            </td>
                                            <td className="center-btn-table">
                                                <div className="table-btn-one" onClick={() => { setModel(true); }}>
                                                    <button>Get Started Now</button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>

                                </table>


                            </div>
                            {/* <div class="t-arr-right">
                                <svg viewBox="0 0 100 100">
                                    <path d="M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z" class="t-svg-arrow" transform="translate(85,100) rotate(180)">
                                    </path>
                                </svg>
                            </div> */}
                            {
                                scroll ?
                                    <div class="t-arr-left">
                                        <svg viewBox="0 0 100 100">
                                            <path d="M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z" transform="translate(15,0)" class="t-svg-arrow">
                                            </path>
                                        </svg>
                                    </div>
                                    :
                                    <div class="t-arr-right">
                                        <svg viewBox="0 0 100 100">
                                            <path d="M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z" class="t-svg-arrow" transform="translate(85,100) rotate(180)">
                                            </path>
                                        </svg>
                                    </div>

                            }
                        </div>
                    </div>
                </section>
                <section className="frequently">
                    <Heading bg_text="FAQ’S" front_text="Frequently Asked Questions" />
                    <div className="container-new">
                        <div className="accordian">
                            <div className="accordian-left-section">
                                <AccordianItem title="​What is Shopify, and how does it work?" description="Shopify is a comprehensive commerce platform that can assist you in launching, growing, maintaining, and managing your online store. With Shopify, you can sell your products on the web, mobile, social media, online marketplaces, brick-and-mortar stores, and pop-up shops. You can also easily manage products, inventory, payments, and shipping." isopen={true} key={0} />
                                <AccordianItem title="I have my own domain, can I use it for Shopify?" description=" You certainly can. You can connect your existing domain name to Shopify from your store's admin area. If you don't already have one, you can purchase one from Shopify or a third-party supplier." isopen={false} key={1} />
                                <AccordianItem title="​What methods of payment can my customers use?" description="Most Shopify e-commerce sites accept credit card payments, but you can provide additional options such as Cash on Demand. Shopify integrates with various payment processing services, the most popular of which is Paypal, and more are being added all the time." isopen={false} key={2} />
                            </div>
                            <div className="accordian-right-section">
                                <AccordianItem title="What is Shopify Plus?" description="Shopify Plus is a customizable solution for enterprise-level businesses that have outgrown the standard Shopify plan. Shopify Plus features a 24/7 priority customer support team, automation tools, a built-in wholesale channel solution, and advanced customization tools. Shopify Plus is used by over 10,000 brands and artists, including Pepsi, Gymshark, and Kylie Jenner." isopen={3 == 0 ? true : false} key={3} />
                                <AccordianItem title="How to make money on Shopify?" description=" On Shopify, you can sell almost anything, but here are three of the most common ways people make money: "
                                    ulli='Launch a clothing line: Selling clothes online has never been easier (or cheaper), especially with services like Printful that handle manufacturing, printing, and fulfillment for you.'
                                    ulli1='Launch a clothing line: Selling clothes online has never been easier (or cheaper), especially with services like Printful that handle manufacturing, printing, and fulfillment for you.'
                                    ulli2="Dropshipping: This is a business model in which you do not stock or own products but purchase them from a supplier who ships them directly to the consumer. In other words, you're the go-between."
                                    ulli3="Sell digital goods: Shopify isn't just for physical products; you can also sell ebooks, online courses, or life coaching sessions and efficiently process payments through the platform."
                                    isopen={4 == 0 ? true : false} key={4} />
                                <AccordianItem title="​How can I get high conversions on Shopify eCommerce Website?" description="Making your site as user-friendly and convenient as possible is the key to converting visitors into customers (and making sales). By analyzing data from your website, you can gain insight into what works and what doesn't with Shopify. Some tools will assist you in this endeavor." isopen={5 == 0 ? true : false} key={5} />
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <Heading bg_text="Testimonials" front_text="What our client says" />
                    <div className="swiper-testi">
                        <div className="container-new">
                            <div className="soluiton-slider">
                                <Swiper
                                    slidesPerView={perNewView}
                                    centeredSlides={false}
                                    slidesPerGroupSkip={1}
                                    spaceBetween={30}
                                    loop={true}
                                    grabCursor={true}
                                    autoplay={true}
                                    navigation={true}
                                    keyboard={{
                                        enabled: true
                                    }}
                                    // breakpoints={{
                                    //     769: {
                                    //         slidesPerView: 1,
                                    //         slidesPerGroup: 1
                                    //     }
                                    // }}
                                    pagination={false}
                                    modules={[Keyboard, Scrollbar, Navigation, Pagination, Autoplay]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <div className="testi-box-on">
                                            <div className="testi-content">
                                                <div className="testi-profile">
                                                    <img src="images/vinayak2.png" />
                                                    <div className="inner-testi">
                                                        <h3>Vinayak Malhotra</h3>
                                                        {/* <p>Founder of Dissh</p> */}
                                                    </div>
                                                </div>
                                                <div className="main-testi-content">
                                                    <p>
                                                        "Surbhi Infotech is perfect team to work with, I really appreciate the hard work that these team have put through, they communicates very well, understand the requirements very well and always available to assist. Will surely hire this agency again in Future."
                                                    </p>

                                                </div>
                                                <div className="qute-testi ">
                                                    <img src="images/qu.png" />
                                                </div>

                                                {/* <div className="qute-testi-two">
                                                    <img src="images/qut-right.png" />
                                                </div>
                                                <div className="qute-testi-one">
                                                    <img src="images/qut-left.png" />
                                                </div> */}

                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testi-box-on">
                                            <div className="testi-content">
                                                <div className="testi-profile">
                                                    <img src="images/sumit2.png" />
                                                    <div className="inner-testi">
                                                        <h3>Sumit Singhwa</h3>
                                                        {/* <p>Founder of Dissh</p> */}
                                                    </div>
                                                </div>
                                                <div className="main-testi-content">
                                                    <p>
                                                        "Would hirely recommend Surbhi Infotech to anyone looking to build out a Angular related work. Starting with a blank slate, their ideas were original and appropriate for what we were looking for. Thanks Team! We will be in touch when we need updates."
                                                    </p>
                                                </div>
                                                <div className="qute-testi ">
                                                    <img src="images/qu.png" />
                                                </div>
                                                {/* <div className="qute-testi-two">
                                                    <img src="images/qut-right.png" />
                                                </div>
                                                <div className="qute-testi-one">
                                                    <img src="images/qut-left.png" />
                                                </div> */}

                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testi-box-on">
                                            <div className="testi-content">
                                                <div className="testi-profile">
                                                    <img src="images/Adam-2.png" />
                                                    <div className="inner-testi">
                                                        <h3>Adam Sharif</h3>
                                                        {/* <p>Founder of Dissh</p> */}
                                                    </div>
                                                </div>
                                                <div className="main-testi-content">
                                                    <p>
                                                        "This was a really amazing job - was on time and just hit all the elements. Extremely pleased!."
                                                    </p>
                                                </div>
                                                <div className="qute-testi ">
                                                    <img src="images/qu.png" />
                                                </div>
                                                {/* <div className="qute-testi-two">
                                                    <img src="images/qut-right.png" />
                                                </div>
                                                <div className="qute-testi-one">
                                                    <img src="images/qut-left.png" />
                                                </div> */}

                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testi-box-on">
                                            <div className="testi-content">
                                                <div className="testi-profile">
                                                    <img src="images/Mattia-2.png" />
                                                    <div className="inner-testi">
                                                        <h3>Mattia Petracca</h3>
                                                        {/* <p>Founder of Dissh</p> */}
                                                    </div>
                                                </div>
                                                <div className="main-testi-content">
                                                    <p>
                                                        "Surbhi Infotech and team made a fantastic job. Very skilled but most importantly it was a great pleasure to work with these guys. Always available and always kind. They deserves more than 5 stars for sure!!!"
                                                    </p>
                                                </div>
                                                <div className="qute-testi ">
                                                    <img src="images/qu.png" />
                                                </div>

                                                {/* <div className="qute-testi-two">
                                                    <img src="images/qut-right.png" />
                                                </div>
                                                <div className="qute-testi-one">
                                                    <img src="images/qut-left.png" />
                                                </div> */}

                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testi-box-on">
                                            <div className="testi-content">
                                                <div className="testi-profile">
                                                    <img src="images/Irena-2.png" />
                                                    <div className="inner-testi">
                                                        <h3>Irena Begelfor</h3>
                                                        {/* <p>Founder of Dissh</p> */}
                                                    </div>
                                                </div>
                                                <div className="main-testi-content">
                                                    <p>
                                                        "Surbhi Infotech Team is perfect partner if you are looking for outsourcing your website services, a lovely team and always helpful."
                                                    </p>
                                                </div>
                                                <div className="qute-testi ">
                                                    <img src="images/qu.png" />
                                                </div>
                                                {/* <div className="qute-testi-two">
                                                    <img src="images/qut-right.png" />
                                                </div>
                                                <div className="qute-testi-one">
                                                    <img src="images/qut-left.png" />
                                                </div> */}

                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testi-box-on">
                                            <div className="testi-content">
                                                <div className="testi-profile">
                                                    <img src="images/ajinkya-2.png" />
                                                    <div className="inner-testi">
                                                        <h3>Ajinkya Repe</h3>
                                                        {/* <p>Founder of Dissh</p> */}
                                                    </div>
                                                </div>
                                                <div className="main-testi-content">
                                                    <p>
                                                        "It was amazing experience working with Surbhi Infotech. They are highly perfectionist. They clearly understood my requirements as well as completed work on time. Communicated very well, and I definitely work with them soon in future."
                                                    </p>
                                                </div>
                                                <div className="qute-testi ">
                                                    <img src="images/qu.png" />
                                                </div>
                                                {/* <div className="qute-testi-two">
                                                    <img src="images/qut-right.png" />
                                                </div>
                                                <div className="qute-testi-one">
                                                    <img src="images/qut-left.png" />
                                                </div> */}

                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contect-new-us">
                    <Heading bg_text="Contact us" front_text="Contact us" />
                    <div className="container-new">
                        <div className='new-contect-form' >
                            <div id="contact-hear" className='new-form-for-contact'>
                                <div className='form-internal-section'>
                                    <div className='new-form-for-left'>
                                        <div className='input-new'>
                                            <input type="text" placeholder='Name' className='' value={name} name="name" onChange={(e) => { setName(e.target.value); }}></input>
                                            <span className="error">{error?.name}</span>
                                        </div>
                                    </div>
                                    <div className='new-form-for-right'>
                                        <div className='input-new'>
                                            <input type="text" placeholder='Your Email' className='' value={email} onChange={(e) => { setEmail(e.target.value); }} name="email"></input>
                                            <span className="error">{error?.email}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='form-internal-section mt-new-22'>
                                    <div className='new-form-for-left'>
                                        <div className='input-new'>
                                            <PhoneInput
                                                placeholder="Phone" defaultCountry="IN"
                                                value={phone}
                                                onChange={(e) => setPhone(e)} />
                                            <span className="error">{error?.phone}</span>
                                            {/* <input type="text" placeholder='Phone' className='' value={phone} onChange={(e) => { setPhone(e.target.value); }} name="phone"></input>
                                            <span className="error">{error?.phone}</span> */}
                                        </div>
                                    </div>
                                    <div className='new-form-for-right'>
                                        <div className='input-new'>
                                            <input type="text" placeholder='Company/Organization' className='' value={company} onChange={(e) => { setCompany(e.target.value); }} name="company"></input>
                                            {/* <span className="error">{error?.company}</span> */}
                                        </div>
                                    </div>
                                </div>
                                <div className='form-internal-textara mt-new-22'>
                                    <textarea className='' placeholder='Your Message' value={requirment} onChange={(e) => { setRequirment(e.target.value); }} ></textarea>
                                    <span className="error">{error?.requirment}</span>
                                </div>
                                <div className='submit-new-btn-all'>
                                    <button type='button' className='contact-btn mr-0' onClick={() => { handleSubmit(); }}>
                                        <span className='submit'>Submit <img src="images/contact-arrow.png" alt="" className='arrow' /></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            {model && <ContactPopup handleClose={handleClose} />}
            {/* {true && <ShopifyPopup handleClose={handleClose} />} */}
        </>
    )
}

export default ShopifyPage;