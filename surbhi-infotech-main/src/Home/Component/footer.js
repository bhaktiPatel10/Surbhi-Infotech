import React, { useLayoutEffect, useState } from "react";
// import Globe from 'react-globe.gl';
import { NavLink } from "react-router-dom";
import "./footer.css"

const Footer = (props) => {

    // useEffect(() => {
    //     globeEl.current.controls().enableZoom = false;
    // }, []);


    function useWindowSize() {
        const [size, setSize] = useState([0, 0]);
        useLayoutEffect(() => {
            function updateSize() {
                setSize([window.innerWidth, window.innerHeight]);
            }
            window.addEventListener('resize', updateSize);
            updateSize();
            return () => window.removeEventListener('resize', updateSize);
        }, []);
        return size;
    }

    const [width, height] = useWindowSize();

    return (
        <footer className="footer-top" >
            <div className="foot-main">
                <div className="fot-one footer-container">
                    <div className="footer-flex" >

                        <div className="one-logo-left">
                            <div className="fo-log">
                                <img src="images/logo-footer.svg" className="foot-logos" />
                            </div>

                            <div className="footer-icons">
                                <a target="_blank" href="https://www.facebook.com/surbhiinfotech">
                                    <img src="images/facebook.png" className="mr-15 social-icon" />
                                </a>
                                <a target="_blank" href="https://twitter.com/surbhi_infotech">
                                    <img src="images/twitter.png" className="mr-15 social-icon" />
                                </a>
                                <a target="_blank" href="https://www.linkedin.com/company/surbhi-infotech/">
                                    <img src="images/linkdin.png" className="mr-15 social-icon" />
                                </a>
                                <a target="_blank" href="https://www.instagram.com/surbhi_infotech/">
                                    <img src="images/instagram.png" className="social-icon" />
                                </a>
                            </div>
                        </div>
                        <div className="two-quick-link">
                            <h3>Quick Links</h3>
                            <div className="footer-menu fo-d-flex">
                                <div className="pb-20">
                                    <img src="images/footmenu.png" /><NavLink to="/"><span className="menu-text">Home</span></NavLink>
                                </div>
                                <div className="pb-20">
                                    <img src="images/footmenu.png" /><NavLink to="/about-us"><span className="menu-text">About Us</span></NavLink>
                                </div>
                                <div className="pb-20">
                                    <img src="images/footmenu.png" /><NavLink to="/services"><span className="menu-text">Services</span></NavLink>
                                </div>
                                <div className="pb-20">
                                    <img src="images/footmenu.png" /><NavLink to="/portfolio"><span className="menu-text">Portfolio</span></NavLink>
                                </div>
                                <div className="pb-20">
                                    <img src="images/footmenu.png" /><NavLink to="/blog"><span className="menu-text">Blog</span></NavLink>
                                </div>
                                <div className="pb-20">
                                    <img src="images/footmenu.png" /><NavLink to="/contact-us"><span className="menu-text">Contact Us</span></NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="two-services">
                            <h3>Services</h3>
                            <div className="footer-menu fo-d-flex">
                                <div className="pb-20" onClick={() => { }}>
                                    <img src="images/footmenu.png" /><NavLink to="/service-details?type=ar-vr"><span className="menu-text">AR, VR</span></NavLink>
                                </div>
                                <div className="pb-20">
                                    <img src="images/footmenu.png" /><NavLink to="/service-details?type=ai-ml"><span className="menu-text">AI, ML</span></NavLink>
                                </div>
                                <div className="pb-20">
                                    <img src="images/footmenu.png" /><NavLink to="/service-details-block-chain"><span className="menu-text">Block Chain</span></NavLink>
                                </div>


                                <div className="pb-20">
                                    <img src="images/footmenu.png" /><NavLink to="/shopify-page"><span className="menu-text">Shopify Development</span></NavLink>
                                </div>
                                <div className="pb-20">
                                    <img src="images/footmenu.png" /><NavLink to="/service-details?type=website"><span className="menu-text">Website</span></NavLink>
                                </div>
                                <div className="pb-20">
                                    <img src="images/footmenu.png" /><NavLink to="/app-development"><span className="menu-text">Mobile App</span></NavLink>
                                </div>
                                <div className="pb-20">
                                    <img src="images/footmenu.png" /><NavLink to="/service-details?type=ui-ux"><span className="menu-text">UI/UX Design</span></NavLink>
                                </div>
                                <div className="pb-20">
                                    <img src="images/footmenu.png" /><NavLink to="/service-details?type=digital-marketing"><span className="menu-text">Digital Marketing</span></NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="right-container-footer">


                        </div>

                    </div>

                </div>
                <div className="footer-text">
                    © 2022 All Rights Reserved Surbhi Infotech Pvt. Ltd.
                </div>
            </div>
            <div className="side-fixed-btn">
                <a target="_blank" href="https://wa.me/+918160703379">
                    <span><img src="images/whatsapp.png" /></span>
                </a>

            </div>
        </footer>
    );
}

export default Footer;