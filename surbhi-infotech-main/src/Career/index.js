import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import Heading from "../Common/Heading";
import Footer from "../Home/Component/footer";
import Header from "../Home/Component/Header";
import './Career.css';
import Model from "./Model";

const Career = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.getElementsByTagName("meta")["title"].content = "Top 10 IT Companies in Surat | Surbhi Infotech- Careers";
        document.getElementsByTagName("meta")["description"].content = "Be part of rapidly evolving and one of the top 10 IT Companies in Surat. At Surbhi Infotech, we are all about unleashing potential and growth.";
        document.getElementsByTagName("meta")["url"].content = "https://www.surbhiinfotech.com/career";
    }, []);
    const [showModel, setShowModel] = useState(false);
    const [label, setLabel] = useState("");
    const [activeMenu, setActiveMenu] = useState("All Jobs");
    const [allVacancyData, setAllVacancyData] = useState([
        {
            title: "UI/UX Designer",
            location: "Surat, Gujarat",
            experience: "2+ years experience",
            category: "Designer",
        },
        {
            title: "Angular Developer",
            location: "Surat, Gujarat",
            experience: "2+ years experience",
            category: "Developer",
        },
        {
            title: "Shopify Developer",
            location: "Surat, Gujarat",
            experience: "2+ years experience",
            category: "Developer",
        },
        {
            title: "Graphics Developer",
            location: "Surat, Gujarat",
            experience: "2+ years experience",
            category: "Designer",
        },
        // {
        //     title: "UI/UX Designer",
        //     location: "Surat, Gujarat",
        //     experience: "2+ years experience",
        //     category: "Designer",
        // },
        // {
        //     title: "Angular Developer",
        //     location: "Surat, Gujarat",
        //     experience: "2+ years experience",
        //     category: "Developer",
        // },
        // {
        //     title: "Shopify Developer",
        //     location: "Surat, Gujarat",
        //     experience: "2+ years experience",
        //     category: "Developer",
        // },
        // {
        //     title: "Graphics Developer",
        //     location: "Surat, Gujarat",
        //     experience: "2+ years experience",
        //     category: "Designer",
        // }
    ]);
    const [vacancyData, setVacancyData] = useState(allVacancyData);

    useEffect(() => {
        if (activeMenu === "All Jobs") {
            setVacancyData(allVacancyData);
        }
        if (activeMenu === "Designer") {
            let arr = [];
            allVacancyData.map((item => {
                if (item.category === "Designer") {
                    arr.push(item);
                }
            }));
            setVacancyData(arr);
        }
        if (activeMenu === "Developer") {
            let arr = [];
            allVacancyData.map((item => {
                if (item.category === "Developer") {
                    arr.push(item);
                }
            }));
            setVacancyData(arr);
        }
        if (activeMenu === "Marketing") {
            let arr = [];
            allVacancyData.map((item => {
                if (item.category === "Marketing") {
                    arr.push(item);
                }
            }));
            setVacancyData(arr);
        }
        if (activeMenu === "HR") {
            let arr = [];
            allVacancyData.map((item => {
                if (item.category === "HR") {
                    arr.push(item);
                }
            }));
            setVacancyData(arr);
        }
    }, [activeMenu]);

    const closeModel = () => {
        setShowModel(false);
    }

    return (
        <>
            {/* <Helmet>
                <meta name="title" content={"Top 10 IT Companies in Surat | Surbhi Infotech- Careers"} />
                <meta name="description" content={"Be part of rapidly evolving and one of the top 10 IT Companies in Surat. At Surbhi Infotech, we are all about unleashing potential and growth."} />
                <meta name="url" content={"https://www.surbhiinfotech.com/career"} />
            </Helmet> */}
            <Header />
            <div className="banner-section-main">
                <Heading bg_text="Join Us" front_text="careers" />
            </div>
            <div className="career-container">
                <div className="collaborate-row">
                    <div className="left-collaborate">
                        <div className="collaborate-heading">
                            Grow your
                        </div>
                        <div className="collaborate-heading">
                            Career with Surbhi Infotech
                        </div>
                        <div className="collaborate-desc">
                            If you think you have the dedication along with the wit and will to excel in this industry then apply now and get a chance to work and grow with us.

                        </div>
                        <div className="collaborate-btn-row">
                            <button className="open-jobs-btn" type="button" onClick={() => {
                                window.scroll({
                                    top: 1100,
                                    left: 0,
                                    behavior: 'smooth'
                                });
                            }}>Go to open jobs <img src="images/contact-arrow.png" className="arrow" /></button>
                            <div className="send-us-section">
                                <div className="send-us-at">Or Send Us at</div>
                                <div className="send-us-email">hello@surbhiinfotech.com</div>
                            </div>
                        </div>
                    </div>
                    <div className="right-collaborate">
                        <img src="images/carrer-new.png" />
                    </div>
                </div>
                <div className="career-menu" id="career-menu">
                    <span className={`carrer-menu-item carrer-menu-item-side-space ${activeMenu === 'All Jobs' && 'carrer-menu-active'}`} onClick={() => { setActiveMenu("All Jobs"); }}>All Jobs</span>
                    <span className={`carrer-menu-item carrer-menu-item-side-space ${activeMenu === 'Designer' && 'carrer-menu-active'}`} onClick={() => { setActiveMenu("Designer"); }}>Designer</span>
                    <span className={`carrer-menu-item carrer-menu-item-side-space ${activeMenu === 'Marketing' && 'carrer-menu-active'}`} onClick={() => { setActiveMenu("Marketing"); }}>Marketing</span>
                    <span className={`carrer-menu-item carrer-menu-item-side-space ${activeMenu === 'Developer' && 'carrer-menu-active'}`} onClick={() => { setActiveMenu("Developer"); }}>Developer</span>
                    <span className={`carrer-menu-item  ${activeMenu === 'HR' && 'carrer-menu-active'}`} onClick={() => { setActiveMenu("HR"); }}>HR</span>
                </div>
                <div className="job-list">
                    {
                        vacancyData && vacancyData.map((item, index) => (
                            <>
                                <div key={index}>
                                    <div className="job-item">
                                        <div>
                                            <p className="job-title">{item.title}</p>
                                            <div className="job-location">{item.location} <div className="border-divider"></div> {item.experience} </div>
                                        </div>
                                        <div>
                                            <button className="btn-apply-now" onClick={() => { setShowModel(true); setLabel("UI/UX Designer"); }}>Appy Now <img src="images/contact-us-btn-arrow.svg" /></button>
                                        </div>
                                    </div>
                                    {vacancyData.length !== (index + 1) &&
                                        <div className="career-bottom-border" ></div>
                                    }
                                </div>
                            </>
                        ))
                    }
                </div>
                <div className="logo-section-heading">
                    You don't just have our support
                </div>
                <div className="our-support-logos-section">
                    <div className="logo-row career-page-logo-section">
                        <div className="support-icon-block"><img alt="image" src="images/icon1.png" /></div>
                        <div className="support-icon-block"><img alt="image" src="images/icon2.png" /></div>
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
            {showModel && <Model closeModel={closeModel} label={label} />}
            <Footer />
        </>
    )
}

export default Career;