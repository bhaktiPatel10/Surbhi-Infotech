import React, { useEffect, useState } from "react";
import "./Header.css"
import { NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ContactPopup from "../../ContactUs/ContactPopup";
import ThankYouPopup from "../../ContactUs/ThankYouPopup";
import ShopifyPopup from "../../Shopify/ShopifyPopup";
import AppDevelopmentPopup from "../../AppDevelopment/AppDevelopmentPopup";

function Header() {

    const [openSidebar, setOpenSidebar] = useState(false);
    const [currentPage, setCurrentPage] = useState('');
    const [headerClass, setHeaderClass] = useState("");
    const [headerOneClass, setHeaderOneClass] = useState("");
    const [model, setModel] = useState(false);
    const [thankYouModel, setThankYouModel] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(true);
    const [page, setPage] = useState('');


    const submitHandler = (e = null) => {
        e !== null && e.preventDefault();
        localStorage.setItem("form-submit", "true");
        setModel(false);
    }
    const handleClose = () => {
        setModel(false);
    }
    const handleCloseOne = () => {
        setThankYouModel(false);
    }
    // setTimeout(
    //     function () {
    //         setModel(true)
    //     }
    //     , 10000
    // );

    useEffect(() => {
        let url = window.location.href;
        let lastSulg = url.split('/').pop();
        setPage(lastSulg);
    }, [])

    useEffect(() => {
        if (!(localStorage.getItem('temp'))) {
            setTimeout(() => {
                let flag = localStorage.getItem("form-submit");
                if (flag !== "true")
                    setModel(true)
            }, 10000)
        }
    }, [])

    useEffect(() => {
        let flag = localStorage.getItem("form-submit");
        if (flag !== "true") {
            if (!(localStorage.getItem('temp'))) {
                localStorage.setItem('temp', parseInt(2));
            } else {
                localStorage.setItem('temp', (parseInt(localStorage.getItem('temp')) + 1));
            }
            if (localStorage.getItem('temp') == 3) {
                setModel(true);
            }
        }
    }, [window?.location?.href])

    // useEffect(() => {
    //     window.onscroll = function () {
    //         if (window.scrollY > 120) {
    //             setHeaderClass("header-bg")
    //         }
    //         else {
    //             setHeaderClass("header-transparent")
    //         }
    //     };
    // });
    useEffect(() => {
        window.onscroll = function () {
            if (window.scrollY > 120) {
                setHeaderOneClass("heder-top-close")
            }
            else {
                setHeaderOneClass("heder-top-open")
            }
            if (window.scrollY > 120) {
                setHeaderClass("header-bg")
            }
            else {
                setHeaderClass("header-transparent")
            }
        };
    });

    useEffect(() => {
        let url = window.location.href;
        let slug = url.split('/').pop();
        if (slug === "") {
            setCurrentPage("home");
        }
        if (slug === "about-us") {
            setCurrentPage("about-us");
        }
        if (slug === "services") {
            setCurrentPage("services");
        }
        if (slug === "blog") {
            setCurrentPage("blog");
        }
        if (slug === "portfolio") {
            setCurrentPage("portfolio");
        }
        if (slug === "contact-us") {
            setCurrentPage("contact-us");
        }
        if (slug === "career") {
            setCurrentPage("career");
        }
        if (slug === "service-details") {
            setCurrentPage("services");
        }
        if (slug === "case-study") {
            setCurrentPage("case-study");
        }
        if (slug === "shopify") {
            setCurrentPage("blog");
        }
        if (slug === "woocommerce") {
            setCurrentPage("blog");
        }
        if (slug === "ui-ux") {
            setCurrentPage("blog");
        }
        if (slug === "shopify-store") {
            setCurrentPage("blog");
        }
        if (slug === "shopify-magento") {
            setCurrentPage("blog");
        }
        if (slug === "e-commerce") {
            setCurrentPage("blog");
        }
        if (slug === "cross-platform") {
            setCurrentPage("blog");
        }
        if (slug === "hire") {
            setCurrentPage("hire");
        }
        if (slug === "career") {
            setCurrentPage("career");
        }
        if (slug === "case-study-details") {
            setCurrentPage("case-study-details");
        }
    }, []);

    return (
        <>
            {/* <div className="header-top">
                <div className="container-new">
                    <div className="all-line">
                        <div className="contect-us-line">
                            <div className="email-line">
                                <h3><img src="images/new-email.png" />info@surbhiinfotech.com</h3>
                            </div><span>|</span>
                            <div className="phone-line">
                                <h3><img src="images/new-phone.png" />+91 8160703379</h3>
                            </div>
                        </div>
                        <div className="blog-line">
                            <NavLink to="/blog">
                                <div className="blog-bg">
                                    <h3>Blog</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="130" height="40" viewBox="0 0 130 40" fill="none">
                                        <path d="M0 0H130L123.935 3.0327C121.427 4.28627 119.562 6.53455 118.791 9.22976L112.072 32.7472C110.846 37.0402 106.922 40 102.457 40H27.543C23.0782 40 19.1544 37.0402 17.9278 32.7472L11.2085 9.22976C10.4384 6.53455 8.57254 4.28627 6.0654 3.0327L0 0Z" fill="#0D0C22" />
                                    </svg>

                                </div>
                            </NavLink>

                        </div>
                    </div>
                </div>
            </div> */}
            <header className={`header-container heder-top-open ${headerOneClass} `}>


                <div className={`nav-wrapper navbar-container ${headerClass}`}>
                    <div className="header-container-new header-flex" >

                        {
                            openSidebar === false && <>
                                <div className="logo">
                                    <NavLink to="/" className="nav-link hover-this"> <img src="images/logo.svg" alt="logo" className="logo-width" /></NavLink>
                                </div>
                                <div className="navbar-new-all">
                                    <ul className="nav-menu">
                                        <li>Company <img className="img-menu-roted" src="images/dropdwonaroow.png" />
                                            <ul className="dropdown">
                                                <li><NavLink to="/about-us">Who we are</NavLink></li>
                                                <li><NavLink to="/career">Career</NavLink></li>
                                                {/* <li>Events</li> */}
                                            </ul>
                                        </li>
                                        <li>Services <img className="img-menu-roted" src="images/dropdwonaroow.png" />
                                            <ul className="dropdown" >
                                                <li><NavLink to="/service-details?type=ar-vr">AR VR</NavLink></li>
                                                <li><NavLink to="/service-details?type=ai-ml">AI ML</NavLink></li>
                                                <li><NavLink to="/service-details-block-chain">Blockchain Development</NavLink></li>
                                                <li><NavLink to="/service-details?type=website">Web Development</NavLink></li>
                                                <li><NavLink to="/shopify-page">Shopify Development</NavLink></li>
                                                <li><NavLink to="/service-details?type=digital-marketing">Digital Marketing</NavLink></li>
                                                <li><NavLink to="/app-development">Mobile App Development</NavLink></li>
                                                <li><NavLink to="/service-details?type=ui-ux">UI/UX Design</NavLink></li>
                                            </ul>
                                        </li>
                                        <li><NavLink to="/portfolio">Projects</NavLink></li>
                                        <li><NavLink to="/contact-us#contact-hear">Contact Us</NavLink></li>
                                    </ul>
                                    <div className="header-btn" >
                                        <button onClick={() => { setModel(true); }} >Get a Quote</button>
                                    </div>
                                    <div className="new-header-email-phone">
                                        <div className="email-phone">
                                            <div className="email-header">
                                                <a href="mailto:info@surbhiinfotech.com">
                                                    <h3><img src="images/newhedemail.png" /> info@surbhiinfotech.com</h3>
                                                </a>
                                            </div>
                                            <div className="phone-header">
                                                <a href="tel:+91 8160703379">
                                                    <h3><img src="images/newhedphone.png" /> +91 8160703379</h3>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="sidebar-icon">
                                    <img src="images/menu-icon-new.png" alt="" onClick={() => { setOpenSidebar(true); }} />
                                </div>
                            </>
                        }
                    </div>
                </div>

                {openSidebar &&
                    <div className="full-page-container slidebar-animate">
                        <div className="left-sidebar-img">
                            <LazyLoadImage
                                alt='img'
                                src="images/Rectangle 20-compressed.jpg"
                                threshold={100}
                                className="video-width"
                                effect="blur"
                            />
                        </div>
                        <div className="sidebar-right-section">
                            <div className="logo-row-one">
                                <div className="logo-sidebar">
                                    <NavLink to="/" className="nav-link hover-this">
                                        <img src="images/logo.svg" alt="" />
                                    </NavLink>
                                </div>
                                <div className="close-sidebar">
                                    <img src="images/close-new.png" alt="" className="close-icon-header" onClick={() => { setOpenSidebar(false); }} />
                                </div>
                            </div>
                            <div className="menu-section">
                                <div className="menu-left-section">

                                    <li className="menu-item" onClick={(e) => { setOpenDropdown(openDropdown === "services" ? "" : "services") }} > <NavLink to="" className={`nav-link ${currentPage === "home" ? "" : ""}`}>Company <span><img src="images/dropdwonaroow.png" /></span></NavLink>
                                        <ul className={`dropdown ${openDropdown === "services" ? "open-dropdown" : "close-dropdown"}`}>
                                            <li><img src="images/Play Icon.svg" /><NavLink to="/about-us">Who we are</NavLink></li>
                                            <li><img src="images/Play Icon.svg" /><NavLink to="/career">Career</NavLink></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item" onClick={(e) => { setOpenDropdown(openDropdown === "about" ? "" : "about") }}>
                                        <NavLink to="" className={`nav-link ${currentPage === "about-us" ? "" : ""}`}>Services <span><img src="images/dropdwonaroow.png" /></span></NavLink>
                                        <ul className={`dropdown ${openDropdown === "about" ? "open-dropdown" : "close-dropdown"}`}>
                                            <li><img src="images/Play Icon.svg" /><NavLink to="/service-details?type=ar-vr">AR VR</NavLink></li>
                                            <li><img src="images/Play Icon.svg" /><NavLink to="/service-details?type=ai-ml">AI ML</NavLink></li>
                                            <li><img src="images/Play Icon.svg" /><NavLink to="/service-details-block-chain">Blockchain Development</NavLink></li>
                                            <li><img src="images/Play Icon.svg" /><NavLink to="/service-details?type=website">Web Development</NavLink></li>
                                            <li><img src="images/Play Icon.svg" /><NavLink to="/shopify-page">Shopify Development</NavLink></li>
                                            <li><img src="images/Play Icon.svg" /><NavLink to="/service-details?type=digital-marketing">Digital Marketing</NavLink></li>
                                            <li><img src="images/Play Icon.svg" /><NavLink to="/app-development">Mobile App Development</NavLink></li>
                                            <li><img src="images/Play Icon.svg" /><NavLink to="/service-details?type=ui-ux">UI/UX Design</NavLink></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item" onClick={(e) => { setOpenDropdown(openDropdown === "portfolio" ? "" : "portfolio") }}>
                                        <NavLink to="/portfolio" className={`nav-link ${currentPage === "portfolio" ? "active" : ""}`}>Projects </NavLink>
                                    </li>
                                    <li className="menu-item" onClick={(e) => { setOpenDropdown(openDropdown === "contact-us" ? "" : "contact-us") }}>
                                        <NavLink to="/contact-us" className={`nav-link ${currentPage === "contact-us" ? "active" : ""}`}>Contact Us </NavLink>
                                    </li>
                                    <li className="siderbar-btn-new">
                                        <button onClick={() => { setModel(true); }} >Get a Quote</button>
                                    </li>

                                    {/* <div className="menu-item">
                                        <NavLink to="/" className={`nav-link ${currentPage === "home" ? "active" : ""}`}>Home</NavLink>
                                    </div> */}
                                    {/* <div className="menu-item">
                                        <NavLink to="/about-us" className={`nav-link ${currentPage === "about-us" ? "active" : ""}`}>About Us</NavLink>
                                    </div>
                                    <div className="menu-item">
                                        <NavLink to="/services" className={`nav-link ${currentPage === "services" ? "active" : ""}`}>Services</NavLink>
                                    </div>
                                    <div className="menu-item">
                                        <NavLink to="/portfolio" className={`nav-link ${currentPage === "portfolio" ? "active" : ""}`}>Portfolio</NavLink>
                                    </div> */}
                                    {/* <div className="menu-item">
                                        <NavLink to="/hire" className={`nav-link ${currentPage === "hire" ? "active" : ""}`}>hire dedicated team</NavLink>
                                    </div> */}
                                    {/* <div className="menu-item">
                                        <NavLink to="/career" className={`nav-link ${currentPage === "career" ? "active" : ""}`}>Career</NavLink>
                                    </div>
                                    <div className="menu-item">
                                        <NavLink to="/blog" className={`nav-link ${currentPage === "blog" ? "active" : ""}`}>Blog</NavLink>
                                    </div>
                                    <div className="menu-item">
                                        <NavLink to="/contact-us" className={`nav-link ${currentPage === "contact-us" ? "active" : ""}`}>Contact Us</NavLink>
                                    </div> */}
                                </div>
                                {/* <div className="menu-right-section">
                                    <div className="space-bottom">
                                        <a target="_blank" href="https://twitter.com/surbhi_infotech">
                                            <img src="images/twitter.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="space-bottom">
                                        <a href="https://www.facebook.com/surbhiinfotech" target="_blank">
                                            <img src="images/facebook.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="space-bottom">
                                        <a href="https://www.linkedin.com/company/surbhi-infotech/" target="_blank">
                                            <img src="images/linkdin.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="space-bottom">
                                        <a href="https://www.instagram.com/surbhi_infotech/" target="_blank">
                                            <img src="images/instagram.png" alt="" />
                                        </a>
                                    </div>
                                </div> */}
                            </div>
                            {/* <div className="all-rights-section">
                                © 2022 All Rights Reserved Surbhi Infotech Pvt. Ltd.
                            </div> */}
                        </div>
                    </div>
                }
            </header>

            {model && page !== "shopify-page" && page !== "app-development" && <ContactPopup handleClose={handleClose} onSubmit={submitHandler} />}
            {model && page === "shopify-page" && <ShopifyPopup handleClose={handleClose} onSubmit={submitHandler} />}
            {model && page === "app-development" && <AppDevelopmentPopup handleClose={handleClose} onSubmit={submitHandler} />}
            {/* {true && <ShopifyPopup handleClose={handleClose} onSubmit={submitHandler}/>} */}

            {/* {thankYouModel && <ThankYouPopup handleClose={handleCloseOne} onSubmit={submitHandler} />} */}
        </>
    )
}


export default Header;