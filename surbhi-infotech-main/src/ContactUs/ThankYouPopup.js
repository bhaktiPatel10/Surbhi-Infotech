import React from "react";
import "./ContactPopup.css";
const ThankYouPopup = (props) => {
    const { handleClose } = props;

    return (
        <>
            <section className="modal-contact-popoup-one">
                <div id="app-root"></div>
                <div id="contactPopup" className="modal-container">
                    <div id="modal-root" className="modal-content new-width">
                        <div className="">
                            <div className="">
                                <div>
                                    <div className="img-new-class">
                                        <img src="images/Rectangle 5416.png" />
                                    </div>
                                    <div className="close" onClick={() => handleClose()}><span className="contact-us-close-icon">
                                        <img src="images/popupnewclose.png" /></span></div>
                                    <div className="new-modal-hedding">
                                        <h3>Thank You For
                                            Countacting Us!</h3>

                                    </div>
                                    <div className="line-in-inline">
                                        <div className="only-line">&nbsp;</div>
                                    </div>
                                    <div className="content-thankyou">
                                        <h3>We Will be In Touch With You Shortly.</h3>
                                        <div className="new-conrtent-iner">
                                            <div className="email-phone-row">
                                                <div className="email-left-row">
                                                    <div className="back-back-thack">
                                                        <h3><img src="images/contmail.png" />info@surbhiinfotech.com</h3>
                                                    </div>

                                                </div>
                                                <div className="phone-left-row">
                                                    <div className="back-back-thack">
                                                        <h3><img src="images/contphone.png" />+91 8160703379</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ThankYouPopup;