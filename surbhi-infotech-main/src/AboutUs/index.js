import React, { useEffect, useState } from "react";
import Footer from '../Home/Component/footer';
import Header from '../Home/Component/Header';
import Heading from '../Common/Heading';
import './AboutUs.css'
import Testimonials from "../Home/Component/Testimonials";
import LetsTalk from "../Home/Component/letsTalk";
import Helmet from "react-helmet";
import ContactPopup from "../ContactUs/ContactPopup";

const AboutUs = () => {
    const [model, setModel] = useState(false);
    const submitHandler = (e) => {
        e.preventDefault();
        localStorage.setItem("form-submit", "true");
        setModel(false);
    }
    const handleClose = () => {
        setModel(false);
    }
    useEffect(() => {
        window.scrollTo(0, 0);
        document.getElementsByTagName("meta")["title"].content = "About | Surbhi Infotech- Best IT Companies in Surat";
        document.getElementsByTagName("meta")["description"].content = "A global leader and one of the Best IT Companies in Surat, Surbhi Infotech is a perfect blend of expert developers, creative designers, and qualified digital marketers.";
        document.getElementsByTagName("meta")["url"].content = "https://www.surbhiinfotech.com/about-us";
    }, []);
    return (
        <>
            {/* <Helmet>
                <meta name="title" content={"About | Surbhi Infotech- Best IT Companies in Surat"} />
                <meta name="description" content={"A global leader and one of the Best IT Companies in Surat, Surbhi Infotech is a perfect blend of expert developers, creative designers, and qualified digital marketers."} />
                <meta name="url" content={"https://www.surbhiinfotech.com/about-us"} />
            </Helmet> */}
            <Header />
            <div className="main-about">
                <Heading bg_text="About Us" front_text="About Us" />
                <section>
                    <div className="container-new new-cont">
                        <div className="about-main-container">
                            <div className="about-main-laft">
                                <div className="about-right-hedding">
                                    <h2>Hi, We’re <br />  Surbhi Infotech</h2>
                                    <p className="about-p-hedding">
                                        We're always looking for outstanding clients who are enthusiastic about their products and customers.
                                    </p>
                                    <p className="about-p-last" onClick={() => { setModel(true); }} >
                                        Why you’ll trust us <img src="images/arrowdown.png" />
                                    </p>
                                </div>
                            </div>
                            <div className="about-main-right">
                                <div>
                                    <img src="images/hand.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Heading bg_text="Trust Us" front_text="why you’ll trust us" />
                <section>
                    <div className="container-new new-cont">
                        <div className="trst-us-container">
                            <div className="trst-on trst-list-box">
                                <div className="trst-data">
                                    <span>01</span>
                                    <h2>Unique approach</h2>
                                    <p>
                                        We at Surbhi Infotech follow a unique approach to clients, which is to give them efficient and effective technology solutions based on their requirements so that they can achieve the desired results at minimum cost.
                                    </p>
                                </div>
                            </div>
                            <div className="trst-one  trst-list-box">
                                <div className="trst-data">
                                    <span>02</span>
                                    <h2>Our Process</h2>
                                    <p>
                                        Surbhi Infotech follows a seamless process starting from UI/UX designing to delivering the end project based on the client's requirement, with this systematic process we make sure that there will be minimum error and the project runs in a smooth manner without any time delay.
                                    </p>
                                </div>
                            </div>
                            <div className="trst-one trst-list-box">
                                <div className="trst-data">
                                    <span>03</span>
                                    <h2>Technology</h2>
                                    <p>
                                        Surbhi Infotech has a skillful team for every technology, so based on your requirements and project specification we will recommend you the most suitable technology that will be efficient and effective to your business model and will give you the best possible results that you are looking for.

                                    </p>
                                </div>
                            </div>
                            <div className="trst-one  trst-list-box">
                                <div className="trst-data">
                                    <span>04</span>
                                    <h2>Collaboration</h2>
                                    <p>
                                        We in Surbhi Infotech believe in friendly and professional collaboration with our client, we provide them a personal touch to their project, so that the desired goals can be achieved easily.

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <div className="our-founder-container">
                <div className="our-left">
                    <div className="founder-img">
                        <img className="founder-min-img" src="images/Rectangle fae.png" />
                        <img className="founder-img-one" src="images/founder.png" />
                        <img className="founder-overlay" src="images/founder-overlay.png" />
                    </div>
                </div>
                <div className="our-right">
                    <div className="our-founder-hedding">
                        <h1 className="founder-hedding">Our Founder</h1>
                        <h1 className="stock-founder">Our Founder</h1>
                        <p>
                            “I’ve been very lucky, from the beginning. I’ve found that as long as you’re fundamentally good – as long as you’re not being bad to people – people give you a lot of room to be yourself.”
                        </p>
                        <h3><span className="found-width"></span> Kartik Sonani</h3>
                    </div>
                </div>
                <div className="founder-social">
                    <ul>
                        <li><span className="found-width"></span></li>
                        <li><img src="images/mail.png" /></li>
                        <li><img src="images/linkedin.png" /></li>
                    </ul>
                </div>
            </div> */}
                {/* <Heading bg_text="Trust Us" front_text="why you’ll trust us" />
                <div className="stronger-container">
                    <div className="stronger-left">
                        <div className="">
                            <h2>Stronger than a Team, <br /> a Family.</h2>
                            <div className="strong-btn">
                                <button type="button" class="contact-btn strong-new"><span class="submit">Meet the team <img src="images/contact-arrow.png" alt="image" class="arrow" /></span></button>
                            </div>
                        </div>
                    </div>
                    <div className="stronger-right">
                        <div className="strong-img-one">
                            <img className="iner-min-img" src="images/strong-one.png" />
                            <img className="iner-one-img" src="images/strong-two.png" />
                            <img className="iner-even-img" src="images/strong-even.png" />
                            <img className="iner-two-img" src="images/strong-three.png" />
                        </div>
                        <div className="strong-img-two">
                            <img className="iner-three-img" src="images/strong-four.png" />
                            <img className="iner-four-img" src="images/strong-five.png" />
                            <p >
                                Advancement in information technology has enabled every Industry to operate digitally.
                            </p>
                            <img className="iner-five-img" src="images/strong-six.png" />
                        </div>
                        <div className="strong-img-three">
                            <img className="iner-six-img" src="images/strong-seven.png" />
                            <p>
                                Our approach is to gather the key pieces of information such as objectives, scope and functional requirements.
                            </p>
                        </div>
                    </div>
                </div> */}
                {/* <Heading bg_text="OUR TEAM" front_text="meet our team" />
            <div className="team-container">
                <div className="imag-fluid">
                    <img src="images/our-taem-img.png" />
                    <img className="our-team-shadow" src="images/our-team-sadow.png" />
                </div>
            </div> */}

                <section>
                    <div className="container-new new-cont">
                        <div className="logo-container-section">
                            <div className="logo-section-heading">
                                You don't just have our support
                            </div>
                            <div className="our-support-logos-section">
                                <div className="logo-row">
                                    <div className="support-icon-block"><img alt="image" src="images/icon2.png" /></div>
                                    <div className="support-icon-block"><img alt="image" src="images/icon1.png" /></div>
                                    <div className="support-icon-block"><img alt="image" src="images/icon3.png" /></div>
                                    <div className="support-icon-block"><img alt="image" src="images/icon4.png" /></div>
                                    <div className="support-icon-block"><img alt="image" src="images/icon5.png" /></div>

                                    <div className="support-icon-block"><img alt="image" src="images/icon6.png" /></div>
                                    <div className="support-icon-block"><img alt="image" src="images/icon7.png" /></div>
                                    <div className="support-icon-block"><img alt="image" src="images/icon8.png" /></div>
                                    <div className="support-icon-block"><img alt="image" src="images/icon9.png" /></div>
                                    <div className="support-icon-block"><img alt="image" src="images/icon10.png" /></div>

                                    <div className="support-icon-block"><img alt="image" src="images/icon11.png" /></div>
                                    <div className="support-icon-block"><img alt="image" src="images/icon12.png" /></div>
                                    <div className="support-icon-block"><img alt="image" src="images/icon13.png" /></div>
                                    <div className="support-icon-block"><img alt="image" src="images/icon14.png" /></div>
                                    <div className="support-icon-block"><img alt="image" src="images/icon15.png" /></div>

                                    <div className="support-icon-block"><img alt="image" src="images/icon16.png" /></div>
                                    <div className="support-icon-block"><img alt="image" src="images/icon17.png" /></div>
                                    <div className="support-icon-block"><img alt="image" src="images/icon18.png" /></div>
                                    <div className="support-icon-block"><img alt="image" src="images/icon19.png" /></div>
                                    <div className="support-icon-block"><img alt="image" src="images/icon20.png" /></div>

                                    <div className="support-icon-block"><img alt="image" src="images/icon21.png" /></div>
                                    <div className="support-icon-block"><img alt="image" src="images/icon22.png" /></div>
                                    <div className="support-icon-block"><img alt="image" src="images/icon23.png" /></div>
                                    <div className="support-icon-block"><img alt="image" src="images/icon24.png" /></div>
                                    <div className="support-icon-block"><img alt="image" src="images/icon25.png" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Heading bg_text="Testimonials" front_text="What our client says" extraClass="new-width-global" />
                <Testimonials />
                <LetsTalk />
            </div>
            <Footer />
            {model && <ContactPopup handleClose={handleClose} onSubmit={submitHandler} />}
        </>
    )
};

export default AboutUs;
