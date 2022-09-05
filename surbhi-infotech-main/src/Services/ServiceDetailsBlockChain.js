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
import { Keyboard, Scrollbar, Navigation, Pagination, Autoplay } from "swiper";
import OurService from "./OurService";
import AccordianItem from "./AccordianItem";
// import jsonData from '../json/services.json';
import Img from "../Common/Img";
import { NavLink, useNavigate } from "react-router-dom";
import ContactPopup from "../ContactUs/ContactPopup";
import Helmet from "react-helmet";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const ServiceDetailsBlockChain = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.getElementsByTagName("meta")["title"].content = "Blockchain Development Service Provider in Surat- Surbhi Infotech";
        document.getElementsByTagName("meta")["description"].content = "Surbhi Infotech, Blockchain Development Service Provider in Surat, is a reputed Blockchain Development Services Company offering blockchain development services. ";
        document.getElementsByTagName("meta")["url"].content = "https://www.surbhiinfotech.com/service-details-block-chain";
    }, []);
    const [perView, setPerView] = useState(5);
    // const [serviceData, setServiceData] = useState({});
    const [newPerView, setNewPerView] = useState(2);
    useEffect(() => {
        let width = window.innerWidth;
        if (width > 1000) {
            setNewPerView(2.5);
        }
        if (width < 800) {
            setNewPerView(2);
        }
        if (width < 450) {
            setNewPerView(1);
        }
    }, []);
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


    }, []);
    const [showPopup, setShowPopup] = useState(false);
    const [showEmail, setShowEmail] = useState(false);
    useEffect(() => {
        let url = window?.location?.href;
        let slug = url.split('/').pop();
        if (slug === "contact-us") {
            setShowEmail(true);
        }
    }, []);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [company, setCompany] = useState("");
    const [error, setError] = useState({});
    const navigate = useNavigate();

    const [openIndex, setOpenIndex] = useState(2);
    const [servicesCategory, setServicesCategory] = useState([]);
    // const handleCategory = (category, checked) => {
    //     let arr = servicesCategory ? servicesCategory : [];
    //     if (checked === false) {
    //         arr = arr.filter(item => item !== category);
    //         setServicesCategory(arr);
    //     }
    //     if (checked === true) {
    //         arr.push(category);
    //         setServicesCategory(arr);
    //     }
    // }

    const handleChange = (index) => {
        setOpenIndex(index)
    }

    const handleSubmit = () => {
        console.log("dfcx")
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
            {/* <Helmet>
                <meta name="title" content={"Blockchain Development Service Provider in Surat- Surbhi Infotech"} />
                <meta name="description" content={"Surbhi Infotech, Blockchain Development Service Provider in Surat, is a reputed Blockchain Development Services Company offering blockchain development services. "} />
                <meta name="url" content={"https://www.surbhiinfotech.com/service-details-block-chain"} />
            </Helmet> */}
            <Header />
            <main className="main-sec">
                <Heading bg_text="services" front_text="Blockchain Services" />
                <section>
                    <div className="container-new">
                        <div className="">
                            <div className="service-details-row">
                                <div className="service-details-left-container">
                                    <div className="service-details-heading">
                                        Build your blockchain with us
                                    </div>
                                    <div className="service-details-description">
                                        From simple to complex and small to large, we are there to help you with all kinds of blockchain development services that your business needs. We harness the potential of varied Blockchain platforms to deliver innovative enterprise grade blockchain solutions that make a difference.
                                    </div>

                                    {/* <div className="review-sec">
                                        <p className="g-review">100+ Google Review <Img src="images/Group 60069.png" alt="" /></p>
                                        <p className="c-review">50+ Clutch Review <Img src="images/Group 60069.png" /></p>
                                    </div> */}
                                </div>
                                <div className="servi-left">
                                    <Img src="images/service-details/block-chain-1.png" alt="digital" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="service-details-container">
                        <div className="service-details-our-services">
                            <div className="service-details-our-services-left">
                                <div className="service-details-heading">
                                    Our Blockchain Services
                                </div>
                                <div className="service-details-description">
                                    Our experienced and skilled blockchain developers create decentralized blockchain networks that enable the establishment of new business models and provide businesses with increased traceability of data and transactions.
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

                                    <SwiperSlide>
                                        <div className="new-slider-for-service">
                                            <div className='new-slider-card'>
                                                <div className='card-inner-section'>
                                                    <div className='img-slider-sec'>
                                                        <img src='images/phqp6.png' />
                                                    </div>
                                                    <div className='card-slider-content'>
                                                        <h3>PHQ</h3>
                                                        <p>
                                                            PHQ is a web 3.0 statup which provides a seamless plateform for trading POSI, we can use this token in Gaming, Casino, NFT and much more.
                                                        </p>
                                                        <div className='view-more-btn-slider'>
                                                            <NavLink to="/case-study-details-blockchain1">
                                                                <button className='vi-btn'>View More <img src='images/arrow-color.png' /></button>
                                                            </NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="new-slider-for-service">
                                            <div className='new-slider-card'>
                                                <div className='card-inner-section'>
                                                    <div className='img-slider-sec'>
                                                        <img src='images/metazp7.png' />
                                                    </div>
                                                    <div className='card-slider-content'>
                                                        <h3>Metaz</h3>
                                                        <p>
                                                            meta[Z] is the world's first NFT trading platform that is both collectible (collectible) and redeemable (exchangeable-physical). It mostly sells footwear, art, music, and other collectibles.
                                                        </p>
                                                        <div className='view-more-btn-slider'>
                                                            <NavLink to="/case-study-details-blockchain2">
                                                                <button className='vi-btn'>View More <img src='images/arrow-color.png' /></button>
                                                            </NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="new-slider-for-service">
                                            <div className='new-slider-card'>
                                                <div className='card-inner-section'>
                                                    <div className='img-slider-sec'>
                                                        <img src='images/newaz.png' />
                                                    </div>
                                                    <div className='card-slider-content'>
                                                        <h3>Anftiz</h3>
                                                        <p>
                                                            ANFTZ is a online Market place for NFT, from where a individule can  buy as well as sell a digital art online in a real time in a form of NFT which is based on a Etherium block chain.
                                                        </p>
                                                        <div className='view-more-btn-slider'>
                                                            <NavLink to="/case-study-details-blockchain3">
                                                                <button className='vi-btn'>View More <img src='images/arrow-color.png' /></button>
                                                            </NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>

                </section>
                <section>
                    <div className="container-new">
                        <div className="mt-200">
                            <div className="lan-section">
                                <p>
                                    We use the full potential of cutting-edge technologies, like ML and AI, while offering consulting and development services to clients. Our smart solutions and services allow businesses to gain an edge over their competitors in their respective industries.
                                </p>
                                <div className="lan-img">
                                    <Img src="images/block-chain-new.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container-new">
                        <div className="">
                            <div className="ai_ml-row w-100">
                                <div className="blochchain-left-section">
                                    <Img className="alli-img" src="images/service-details/block-chain-6.png" alt="" />

                                </div>
                                <div className="ai_ml-right-section">
                                    <div className="service-details-heading">
                                        Cutting-edge Blockchain App Development Services
                                    </div>
                                    <div className="service-details-description-2">
                                        Are you ready to transform your business process into a highly secure, transparent, and scalable one? We build and deploy cutting-edge blockchain solutions.
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
                <div className="free_instant_row">
                    <div className="free_instant-top-space">
                        <div className="free_instant_row-bg">
                        </div>
                        <div className="free_instant_row_flex">
                            <div className="extraa-free">
                                <Img src="images/service-details/block-chain-7.png" className="sevices-mobile-img" />
                            </div>
                            <div className="free_data_right_section">
                                <div className="service-details-heading">
                                    Free Instant Blockchain Demo
                                </div>
                                <div className="service-details-description-2">
                                    Get in touch with us and give wings to your business
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
                <div className="ai_ml-services">
                    Our Blockchain Development Process
                </div>
                <div className="mt-200">
                    <div className="ser-slider-min">
                        <div className="border-back"></div>
                        <Swiper
                            // direction={"vertical"}
                            slidesPerView={perView}
                            centeredSlides={true}
                            slidesPerGroupSkip={1}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            grabCursor={true}
                            autoplay={true}
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
                            modules={[Keyboard, Scrollbar, Navigation, Pagination, Autoplay]}
                            className="mySwiper"
                        // onSlideChange={index => { setActiveIndex(index.snapIndex) }}
                        >
                            <SwiperSlide>
                                <OurService img="images/service-details/b1.png" img2="images/service-details/b_1.png" heading="Development" content="We leverage APIs for generating key pairs and addresses, performing data authentication, auditing functions alongside data storage and retrieval.  " index={0} activeIndex={openIndex} handleChange={handleChange} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <OurService img="images/service-details/b2.png" img2="images/service-details/b_2.png" heading="Type of blockchain" content="We decide whether a public or a private blockchain would suit your needs better based on the project requirements. " index={1} activeIndex={openIndex} handleChange={handleChange} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <OurService img="images/service-details/b_3.png" img2="images/service-details/b3.png" heading="Identify the niche " content="The niche must offer a credible platform for the creative and relevant application of blockchain technology to derive value.  " index={2} activeIndex={openIndex} handleChange={handleChange} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <OurService img="images/service-details/b4.png" img2="images/service-details/b_4.png" heading="Workflow design " content="After identifying niche, we work on the workflow design which emphasizes the selection between on-chain & off-chain business entities. " index={3} activeIndex={openIndex} handleChange={handleChange} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <OurService img="images/service-details/b5.png" img2="images/service-details/b_5.png" heading="Proof of Concept (PoC)" content="The theoretical buildup is one of the critical blockchain development steps as it communicates the productivity and viability of the product for end-users. " index={4} activeIndex={openIndex} handleChange={handleChange} />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <section>
                    <div className="container-new">
                        <div className="mt-200 accordian-section">
                            <div>
                                <div className="end-to-end-services-heading accordian-heading new-end-end">
                                    FAQ's
                                </div>
                                <div className="accordian">
                                    <div className="accordian-left-section">
                                        <AccordianItem title="​ What is blockchain?" description="Blockchain is a category of software that manages assets and transactions for a network of participants. It distributes a ledger of processed transactions so participants can stay in sync on the state of the assets. Transactions are sequentially grouped and communicated by block. Each block is chained to the previous block, and immutably recorded across the network of participant nodes, using cryptography and a consensus mechanism." isopen={true} key={0} />
                                        <AccordianItem title="What are the major features of Blockchain technology?" description="Blockchain technology is equipped with the following features like: Decentralized system,Increased capacity,Minting,Faster settlements,Immutability,Safe and secure ecosystem" isopen={1 == 0 ? true : false} key={1} />
                                        <AccordianItem title="Can you build a separate blockchain for the businesses?" description="Yes, definitely. As public blockchain is open-source, we will utilize this trait to develop a private blockchain. After doing customization, businesses can use it for storing their confidential data." isopen={2 == 0 ? true : false} key={2} />
                                        <AccordianItem title="What are the business benefits of blockchain integration?" description="" isopen={3 == 0 ? true : false} key={3} />

                                    </div>
                                    <div className="accordian-right-section">
                                        <AccordianItem title="​What are the different types of blockchains?" description="The three major types of blockchains available are listed below:

Public Blockchain: As the name suggests, here no one is in charge, and anyone can read/write/audit the blockchain.

Private Blockchain: As the name suggests, it is the private property of an individual or an organization.

Consortium or Federated Blockchain: Selected members of the Consortium can read/write/audit the blockchain" isopen={true} key={4} />
                                        <AccordianItem title="How long does it take to develop a blockchain?" description="The duration of a blockchain project depends on the application's requirements. Typically, it takes 4-5 weeks to develop a minimum viable product with bare minimum features." isopen={5 == 0 ? true : false} key={5} />
                                        <AccordianItem title="Why is blockchain a trusted approach?" description="The following reasons will help you understand why blockchain is a trusted approach:

Its compatibility with other business applications due to its open-source nature. 
Its transparency level and security are nearly unprecedented.
Improves efficiency and speed.-[ppp]
It is safe and hack-proof.
There is no central authority you need to depend on, and this trustlessness makes Blockchain a trusted technology." isopen={6 == 0 ? true : false} key={6} />
                                        <AccordianItem title="What is a block in a blockchain?" description="The three major types of blockchains available are listed below:

Public Blockchain: As the name suggests, here no one is in charge, and anyone can read/write/audit the blockchain.

Private Blockchain: As the name suggests, it is the private property of an individual or an organization.

Consortium or Federated Blockchain: Selected members of the Consortium can read/write/audit the blockchain" isopen={7 == 0 ? true : false} key={7} />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container-new">
                        <div className="mt-200 free-proposal-section">
                            +-
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
            </main>
            <Footer />
            {
                showPopup &&
                <ContactPopup handleClose={() => { setShowPopup(false); }} />
            }
        </>
    )
}

export default ServiceDetailsBlockChain;