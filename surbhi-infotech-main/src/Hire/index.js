import React, { useEffect, useState } from "react";
import Heading from "../Common/Heading";
import Footer from "../Home/Component/footer";
import Header from "../Home/Component/Header";
import "./Hire.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";
import { NavLink } from "react-router-dom";

const Hire = () => {
    const [perView, setPerView] = useState(3);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
        let width = window.innerWidth;

        if (width < 1000) {
            setPerView(3);
        }
        if (width < 800) {
            setPerView(2);
        }
        if (width < 650) {
            setPerView(1);
        }
        if (width < 450) {
            setPerView(1);
        }
    }, [])

    const [serviceData, setServiceData] = useState({});
    return (
        <>
            <Header />
            <div className="main-sec">
                <Heading bg_text="hire ream" front_text="hire dedicated team" />
                <section className="new-class-hire">
                    <div className="container-new">
                        <div className="hire-container">
                            <div className="hire-left">
                                <h2 className="hire-h2-font">
                                    Faster Go-To-Market with Our Expert Resource Pool
                                </h2>
                                <p className="hire-p-class">
                                    Hire the best resources for your projects from a leading IT company
                                </p>
                                <div>
                                    <NavLink to="/contact-us" >
                                        <button type='button' className='contact-btn mr-0'>
                                            <span className='submit'>Submit <img src="images/contact-arrow.png" alt="" className='arrow' /></span>
                                        </button>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="hire-right">
                                <div>
                                    <img src="images/hire_bg.png" className="hire-right-img" />
                                </div>
                            </div>
                        </div>
                        <div className="a-cost-container">
                            <div className="a-cost-section">
                                <h1>
                                    A Cost-Effective And Futuristic Engagement Model For Businesses
                                </h1>
                                <p>
                                    We have the best talent pool within the industry. Be it website development, web designing, digital marketing, software development or developing an engaging mobile app, our talented developers work with utmost enthusiasm and concentration on each assigned project.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-mt-200">
                    <Heading bg_text="process" front_text="process" />
                    <div className="container-new">
                        <div className="process-container">
                            <div className="peocess-iner">
                                <h1>01<span className="pro-iner-span">Day</span></h1>
                                <h3>
                                    Share Your Requirements
                                </h3>
                            </div>
                            <div className="peocess-iner">
                                <h1>03<span className="pro-iner-span">Day</span></h1>
                                <h3>
                                    We Shortlist The Most Suitable Talent
                                </h3>
                            </div>
                            <div className="peocess-iner">
                                <h1>05<span className="pro-iner-span">Day</span></h1>
                                <h3>
                                    You conduct the interview
                                </h3>
                            </div>
                            <div className="peocess-iner">
                                <h1>07<span className="pro-iner-span">Day</span></h1>
                                <h3>
                                    Remote onboardingand support
                                </h3>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container-new">
                        <div className="margin-bottom-fot">
                            <div className="a-cost-container">
                                <div className="a-cost-section">
                                    <h1>
                                        Right matchmaking. At the core of everything.
                                    </h1>
                                    <p>
                                        Right matchmaking is at the core of everything that Surbhi Infotech does. Hence we put in a great deal of time and effort in ensuring that the very first shortlisted talent matches your requirements.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container-new">
                        <div className="hire-certified-container">
                            <h1>Hire Certified Specialist & Consultant
                            </h1>
                            <div className="certified-container">

                                <Swiper
                                    slidesPerView={perView}
                                    centeredSlides={false}
                                    grabCursor={true}
                                    spaceBetween={20}
                                    keyboard={{
                                        enabled: true
                                    }}
                                    // breakpoints={{
                                    //     769: {
                                    //         slidesPerView: 1,
                                    //         slidesPerGroup: 1
                                    //     }
                                    // }}
                                    navigation={false}
                                    pagination={{
                                        clickable: true
                                    }}
                                    modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                                >
                                    <SwiperSlide>
                                        <div className="certified-iner">
                                            <div className="certified-img">
                                                <img src="images/flutter.png" />
                                            </div>
                                            <h2>
                                                Flutter Developer
                                            </h2>
                                            <ul>
                                                <li>
                                                    Expertise in developing smooth, feature-rich
                                                    and high performing apps
                                                </li>
                                                <li>
                                                    Develops cross-platform apps within your
                                                    time and budget
                                                </li>
                                                <li>
                                                    Expertise in handling network requests and
                                                    integrating APls

                                                </li>
                                                <li>
                                                    Good knowledge of integrating the payment
                                                    gateway service
                                                </li>
                                            </ul>

                                            <NavLink to="/contact-us" >
                                                <button type='button' className='contact-btn mr-0 new-btn-hire'>
                                                    <span className='submit'>Hire Today <img src="images/contact-arrow.png" alt="" className='arrow' /></span>
                                                </button>
                                            </NavLink>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="certified-iner">
                                            <div className="certified-img">
                                                <img src="images/ios.png" />
                                            </div>
                                            <h2>
                                                iOS Developer
                                            </h2>
                                            <ul>
                                                <li>
                                                    Rich industry experience and specialty in
                                                    iPhone app development
                                                </li>
                                                <li>
                                                    Solid technical experience and understanding
                                                    of user experience
                                                </li>
                                                <li>
                                                    Capabilities to manage the entire iOS life
                                                    cycle right from designing to maintenance
                                                </li>
                                                <li>
                                                    Good knowledge of integrating the payment
                                                    gateway service
                                                </li>
                                            </ul>

                                            <NavLink to="/contact-us" >
                                                <button type='button' className='contact-btn mr-0 new-btn-hire'>
                                                    <span className='submit'>Hire Today <img src="images/contact-arrow.png" alt="" className='arrow' /></span>
                                                </button>
                                            </NavLink>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="certified-iner">
                                            <div className="certified-img">
                                                <img src="images/android.png" />
                                            </div>
                                            <h2>
                                                Android Development
                                            </h2>
                                            <ul>
                                                <li>
                                                    Experienced in crafting alluring and feature-
                                                    rich mobile apps.
                                                </li>
                                                <li>
                                                    Highly proficient to develop flexible and well-
                                                    structured applications
                                                </li>
                                                <li>
                                                    Expertise in wide range of plugins and customization
                                                </li>
                                                <li>
                                                    Proficiency in keeping code clear and elegant
                                                </li>
                                            </ul>
                                            <NavLink to="/contact-us" >
                                                <button type='button' className='contact-btn mr-0 new-btn-hire'>
                                                    <span className='submit'>Hire Today <img src="images/contact-arrow.png" alt="" className='arrow' /></span>
                                                </button>
                                            </NavLink>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="certified-iner">
                                            <div className="certified-img">
                                                <img src="images/android.png" />
                                            </div>
                                            <h2>
                                                Flutter Developer
                                            </h2>
                                            <ul>
                                                <li>
                                                    Expertise in developing smooth, feature-rich
                                                    and high performing apps

                                                </li>
                                                <li>
                                                    Develops cross-platform apps within your
                                                    time and budget
                                                </li>
                                                <li>
                                                    Expertise in handling network requests and
                                                    integrating APls

                                                </li>
                                                <li>
                                                    Good knowledge of integrating the payment
                                                    gateway service
                                                </li>
                                            </ul>

                                            <NavLink to="/contact-us" >
                                                <button type='button' className='contact-btn mr-0 new-btn-hire'>
                                                    <span className='submit'>Hire Today <img src="images/contact-arrow.png" alt="" className='arrow' /></span>
                                                </button>
                                            </NavLink>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="certified-iner">
                                            <div className="certified-img">
                                                <img src="images/android.png" />
                                            </div>
                                            <h2>
                                                Flutter Developer
                                            </h2>
                                            <ul>
                                                <li>
                                                    Expertise in developing smooth, feature-rich
                                                    and high performing apps

                                                </li>
                                                <li>
                                                    Develops cross-platform apps within your
                                                    time and budget
                                                </li>
                                                <li>
                                                    Expertise in handling network requests and
                                                    integrating APls

                                                </li>
                                                <li>
                                                    Good knowledge of integrating the payment
                                                    gateway service
                                                </li>
                                            </ul>
                                            <NavLink to="/contact-us" >
                                                <button type='button' className='contact-btn mr-0 new-btn-hire'>
                                                    <span className='submit'>Hire Today <img src="images/contact-arrow.png" alt="" className='arrow' /></span>
                                                </button>
                                            </NavLink>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>

                        </div>
                    </div>
                </section>
                <section>
                    <div className="container-new">
                        <div className="talk-new-expert">
                            <div className="talk-to-our-expert-container">
                                <div className="talk-expert-left">
                                    <div className="talk-expert-text">
                                        <h1 className="exper-h1-talk">Years of Essence In the Digital Transformation</h1>
                                        <h1 className="stock-expert-talk">Years of Essence In the Digital Transformation</h1>
                                    </div>
                                </div>
                                <div className="talk-expert-right">
                                    <div className="new-talk-expert-section">
                                        <p>
                                            We're always looking for outstanding clients who are enthusiastic about their products and customers.
                                        </p>
                                        <NavLink to="/contact-us" >
                                            <button type='button' className='contact-btn mr-0 new-arrow-set'>
                                                <span className='submit'>Talk to our  Expert<img src="images/contact-arrow.png" alt="" className='arrow' /></span>
                                            </button>
                                        </NavLink>

                                    </div>
                                    <div className="expert-talk-img">
                                        <img className="" src="images/contact-us-arrow.svg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container-new">
                        <div className="hire-dedicated-container">
                            <div className="dedicated-hire">
                                <h2>
                                    Why hire dedicated developers from Surbhi Infotech?
                                </h2>
                            </div>
                            <div className="container-dedicated">
                                <div className="hire-developer">
                                    <h2>No Hidden Charges</h2>
                                    <p>The costs of hiring employees, management and other benefits provided to them, along with infrastructure and system need to sum up to a very large amount. Also, the model itself is very clear and there is no hidden charge like the ones that other models usually have.</p>
                                </div>
                                <div className="hire-developer">
                                    <h2>Own Customized Team</h2>
                                    <p>You can make your own team and customize it as per your necessity and budget. You can make a mix of experienced and young professionals to make sure you don’t overshoot your expenses and at the same time get the skilled and experienced professional on the key position.</p>
                                </div>
                                <div className="hire-developer">
                                    <h2>Proven Development Methodology</h2>
                                    <p>We use the Agile methodology of product development which ensures that the project is completed in the pre-determined budget and within the time allotted for the budget.</p>
                                </div>
                                <div className="hire-developer">
                                    <h2>Improve Profitability</h2>
                                    <p>This will improve the profitability of a business by increasing the productivity of its employees and the accuracy of the system. Both these will help in increasing productivity while keeping the input cost constant. This will greatly improve the productivity of the business.</p>
                                </div>

                                <div className="hire-developer">
                                    <h2>Time Saving</h2>
                                    <p>The whole process of hiring the right professionals and that too for contract basis can take very long. FTE (Full Time Employement) is a quick way to directly start the development of a website, mobile application or software rather than wasting time in these unproductive tasks.</p>
                                </div>
                                <div className="hire-developer">
                                    <h2>Focus On Your Business</h2>
                                    <p>You will get more time to focus on your core business activity and think creatively about new products. This will help your business grow and give you new markets.</p>
                                </div>
                                <div className="hire-developer">
                                    <h2>Maximum effect and speed</h2>
                                    <p>The team members have a deep understanding of business goals. Their dedication to the project helps to achieve the maximum efficiency and high speed of completing the tasks. The customer can ask for a weekly report, so they will see what has already been done, what tasks are in progress and what exactly needs to be improved. This mitigates the risks of future possible overheads.</p>
                                </div>
                                <div className="hire-developer">
                                    <h2>Cost-effective</h2>
                                    <p>Hiring a dedicated development team will save you considerable costs that are typically associated with the more traditional approaches to hiring developers. You pay only for work done without compromising on quality. You won’t have to cover office space hiring, training, onboarding, and other related expenses.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container-new">
                        <div className="logo-container-section all-one-logo">
                            <div className="logo-section-heading">
                                You don't just have our support
                            </div>
                            <div className="our-support-logos-section hire-page-logo-section">
                                <div className="logo-row">
                                    <div><img alt="" src="images/icon1.png" /></div>
                                    <div><img alt="" src="images/icon2.png" /></div>
                                    <div><img alt="" src="images/icon3.png" /></div>
                                    <div><img alt="" src="images/icon4.png" /></div>
                                    <div><img alt="" src="images/icon5.png" /></div>

                                    <div><img alt="" src="images/icon6.png" /></div>
                                    <div><img alt="" src="images/icon7.png" /></div>
                                    <div><img alt="" src="images/icon8.png" /></div>
                                    <div><img alt="" src="images/icon9.png" /></div>
                                    <div><img alt="" src="images/icon10.png" /></div>
                                    <div><img alt="" src="images/icon11.png" /></div>
                                    <div><img alt="" src="images/icon12.png" /></div>
                                    <div><img alt="" src="images/icon13.png" /></div>
                                    <div><img alt="" src="images/icon14.png" /></div>
                                    <div><img alt="" src="images/icon15.png" /></div>
                                    <div><img alt="" src="images/icon16.png" /></div>
                                    <div><img alt="" src="images/icon17.png" /></div>
                                    <div><img alt="" src="images/icon18.png" /></div>
                                    <div><img alt="" src="images/icon19.png" /></div>
                                    <div><img alt="" src="images/icon20.png" /></div>
                                    <div><img alt="" src="images/icon21.png" /></div>
                                    <div><img alt="" src="images/icon22.png" /></div>
                                    <div><img alt="" src="images/icon23.png" /></div>
                                    <div><img alt="" src="images/icon24.png" /></div>
                                    <div><img alt="" src="images/icon25.png" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </>
    )
}

export default Hire;