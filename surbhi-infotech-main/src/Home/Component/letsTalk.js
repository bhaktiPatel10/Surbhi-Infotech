import React, { useEffect, useState } from "react";
import ContactPopup from "../../ContactUs/ContactPopup";
import { NavLink } from 'react-router-dom';
import "./letsTalk.css"
const LetsTalk = () => {

    const [showPopup, setShowPopup] = useState(false);
    const [showEmail, setShowEmail] = useState(false);

    useEffect(() => {
        let url = window?.location?.href;
        let slug = url.split('/').pop();
        if (slug === "contact-us") {
            setShowEmail(true);
        }
    }, []);

    return (

        <section className="new-test">
            <div className="container-new new-cont">
                <div className="lets-talk-container ">
                    <div className="left-container new-left-con">
                        <div className="let-class">
                            Let's
                        </div>
                        <h2 className="text-stroke"> Let's</h2>
                        <div className=" text-talk">
                            Talk
                        </div>
                        <h2 className="text-stroke2"> Talk</h2>
                    </div>
                    <div className="right-container">
                        <div>
                            <div className="talk-description">
                                We're always looking for outstanding clients who are enthusiastic about their products and customers.
                            </div>
                            {
                                showEmail && <>
                                    <div>
                                        <div className="d-flex mt-30 ped-left">
                                            <img src="images/text.svg" className="mr-15" />
                                            <p className="contact-us-text">info@surbhiinfotech.com</p>
                                        </div>
                                        <div className="d-flex mt-30 ped-left">
                                            <img src="images/call.svg" className="mr-15" />
                                            <p className="contact-us-text">+91 8160703379</p>
                                        </div>
                                    </div>
                                </>
                            }
                            <div className="contact-us-btn">
                                <NavLink to="/contact-us" >
                                    <div className="contact-us-btn-text">
                                        Contact Us
                                        <img src="images/contact-us-btn-arrow.svg" height={10} className="contact-us-arrow" />
                                    </div>
                                </NavLink>

                            </div>
                        </div>
                        {/* <div className="contact-us-image">
                            <img src="images/contact-us-arrow.svg" className="contact-img" height={506} width={500} />
                        </div> */}
                    </div>
                </div>

            </div>
            {
                showPopup &&
                <ContactPopup handleClose={() => { setShowPopup(false); }} />
            }
        </section>
    )
}

export default LetsTalk;