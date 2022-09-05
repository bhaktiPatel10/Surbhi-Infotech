import React, { useEffect, useState } from "react";
import Footer from "../Home/Component/footer";
import Header from "../Home/Component/Header";
import Heading from "../Common/Heading";
import "./AppDevelopment.css"
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination, Autoplay } from "swiper";
import AccordianItem from "../Services/AccordianItem";
import { NavLink, useNavigate } from "react-router-dom";
import ContactPopup from "../ContactUs/ContactPopup";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const AppDevelopment = () => {
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
            <main className="app-development">
                <section className="shopi-banner">
                    <div className="row-shopify">
                        <div className="sopifi-banner-left">
                            <div className="shopi-banner-content">
                                <h3>The Journey of<br /> a Successfull
                                    <span> App Begins Here!</span></h3>
                                <p>From concept to application development, we cover the entire business mobile app development cycle, no matter how diverse or complex your needs are. </p>
                                {/* <div className="banner-btn-row">
                                    <div className="banner-shopi-btn" onClick={() => { setModel(true); }}>
                                        <button >Build an app with us </button>
                                    </div>
                                    <div className="view-project-btn">
                                        <NavLink to="/portfolio">
                                            <p>View Our Projects <img src="images/arrow-2.png" /></p>
                                        </NavLink>
                                    </div>
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
                                    <img src="images/mobil-app.png" />
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
                                <img src="images/app-left.png" />
                            </div>
                        </div>
                        <div className="trust-right">
                            <div className="trust-right-content">
                                <h3>
                                    Maximize <span>business ROI</span>
                                    with our mobile app development services
                                </h3>
                                <p>We are a web and mobile app development company focused on building quality software products.  Our mobile app developers have the expertise to deliver strategically designed and creatively crafted mobile applications to take your business to the next level.</p>
                                <p>
                                    We empower your business through full-cycle mobile app development services, tailored to your unique organizational requirements.
                                </p>
                                <div className="trust-btn" onClick={() => { setModel(true); }}>
                                    <button>Kick Start Your Project</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="portfolio-one">
                    <Heading bg_text="pORTFOLIO" front_text="pORTFOLIO" />
                    <div className="container-new">
                        <div className="protfolio-row">
                            <div className="card-portfoli-one mb-9 ">
                                <div className="pad-side">
                                    <div className="prot-img">
                                        <img src="images/Plate & Forknew.png" />
                                    </div>
                                    <div className="prot-content">
                                        <h3>Plate & Fork</h3>
                                        <div className="prot-btn">
                                            <p>View More <img src="images/arrow-2.png" /></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-portfoli-one mb-9 ">
                                <div className="pad-side">
                                    <div className="prot-img">
                                        <img src="images/Netspacenew.png" />
                                    </div>
                                    <div className="prot-content">
                                        <h3>Netspac</h3>
                                        <div className="prot-btn">
                                            <NavLink to="/case-study-details-netspace-application">
                                                <p>View More <img src="images/arrow-2.png" /></p>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-portfoli-one mb-9 ">
                                <div className="pad-side">
                                    <div className="prot-img">
                                        <img src="images/Emotion Trackernew.png" />
                                    </div>
                                    <div className="prot-content">
                                        <h3>Emotion Tracker</h3>
                                        <div className="prot-btn">
                                            <p>View More <img src="images/arrow-2.png" /></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-portfoli-one mb-9">
                                <div className="pad-side">
                                    <div className="prot-img">
                                        <img src="images/Menyosnew.png" />
                                    </div>
                                    <div className="prot-content">
                                        <h3>Menyos</h3>
                                        <div className="prot-btn">
                                            <NavLink to="/case-study-details-menyos">
                                                <p>View More <img src="images/arrow-2.png" /></p>
                                            </NavLink>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-portfoli-one mb-9 ">
                                <div className="pad-side">
                                    <div className="prot-img">
                                        <img src="images/U lossnew.png" />
                                    </div>
                                    <div className="prot-content">
                                        <h3>U loss</h3>
                                        <div className="prot-btn">
                                            <p>View More <img src="images/arrow-2.png" /></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-portfoli-one mb-9 ">
                                <div className="pad-side">
                                    <div className="prot-img">
                                        <img src="images/Yudoonew.png" />
                                    </div>
                                    <div className="prot-content">
                                        <h3>Yudoo</h3>
                                        <div className="prot-btn">
                                            <NavLink to="/case-study-details-yudoo">
                                                <p>View More <img src="images/arrow-2.png" /></p>
                                            </NavLink>
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
                <section className="solutions">
                    <Heading bg_text="Technologies" front_text="Top Technologies We Use In Development" />
                    <div className="container-new">
                        <div className="soluiton-slider">
                            <div className="solution-row">
                                <div className="one-solution  ml-20">
                                    <div className="new-padding-soliution">
                                        <div className="releted-services-one">
                                            <div className="img-releted">
                                                <img src="images/Flutter App Development.png" />
                                            </div>
                                            <div className="service-releted-content">
                                                <h3>Flutter App Development</h3>
                                                <p>
                                                    We offer scalable, quicker-to-develop apps and a great native experience to the users globally with our best-in-class flutter app development services.
                                                </p>
                                                <div className="btn-solution" onClick={() => { setModel(true); }}>
                                                    <p>Get Started Now <img src="images/arrow-2.png" /></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="one-solution ml-30">
                                    <div className="new-padding-soliution">
                                        <div className="releted-services-one">
                                            <div className="img-releted">
                                                <img src="images/Android App devvelopemt.png" />
                                            </div>
                                            <div className="service-releted-content">
                                                <h3>Android App devvelopemt</h3>
                                                <p>
                                                    We have proven expertise in Android apps development that ensures value-added services to your mobile operations.
                                                </p>
                                                <div className="btn-solution" onClick={() => { setModel(true); }}>
                                                    <p>Get Started Now <img src="images/arrow-2.png" /></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="one-solution">
                                    <div className="new-padding-soliution">
                                        <div className="releted-services-one">
                                            <div className="img-releted">
                                                <img src="images/iOS App Development.png" />
                                            </div>
                                            <div className="service-releted-content">
                                                <h3>iOS App Development</h3>
                                                <p>
                                                    We develop next-gen iOS apps that are quality tested for perfection with future-forward iOS application development services.
                                                </p>
                                                <div className="btn-solution" onClick={() => { setModel(true); }}>
                                                    <p>Get Started Now <img src="images/arrow-2.png" /></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="frequently">
                    <Heading bg_text="FAQ’S" front_text="Frequently Asked Questions" />
                    <div className="container-new">
                        <div className="accordian">
                            <div className="accordian-left-section">
                                <AccordianItem title="​ How do you help us make a successful app?" description="We help us make a successful mobile app by following the below stages; " ulli="Analyze your app idea " ulli2="Understand your business " ulli3="Overview of market scenario  " ulli4="Analyze feasibility of your app   " ulli5="Plan architecture    " ulli6="Design intuitive UI/UX     " ulli7="App programming      " ulli8=" App testing to fix bugs and ensure its smooth functionality    " isopen={true} key={0} />
                                <AccordianItem title="​ What is the average duration of the app development process?" description="On an average, it takes at least 3 weeks to create an enterprise-level app. Generally, the duration of the process depends on the complexity of the app and the features that you want in the app." isopen={false} key={1} />
                                <AccordianItem title="​How many types of apps do you develop? " description="We develop a wide variety of apps ranging from store, shopping, travel, finance, social networking, utilities, entertainment, productivity, medical, education, weather, business, to gaming and children's apps." isopen={false} key={2} />
                            </div>
                            <div className="accordian-right-section">
                                <AccordianItem title="​ Can you develop a website along with my app?" description="Yes, we are highly-skilled in developing web applications along with the mobile application." isopen={3 == 0 ? true : false} key={3} />
                                <AccordianItem title="​ Is my mobile app concept safe?" description="We sign a confidentiality agreement with our clients who are concerned about protecting their app ideas, to give them surety that their ideas and project details are fully safe with us." isopen={4 == 0 ? true : false} key={4} />
                                <AccordianItem title="​ Do you provide maintenance services?" description="At Surbhi Infotech, we provide full-cycle solutions. From conceptualization to post-sale support and maintenance, we will stay with you at every stage and ensure that your app is bug-free and stays so in the future." isopen={5 == 0 ? true : false} key={5} />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="testi-monial">
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
        </>
    )
}

export default AppDevelopment;