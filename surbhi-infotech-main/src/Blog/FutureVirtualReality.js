import React, { useEffect } from "react";
import Heading from "../Common/Heading";
import Footer from "../Home/Component/footer";
import Header from "../Home/Component/Header";
import "./blog.css"
import { NavLink } from "react-router-dom";

const BlogDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <section>
                <Header />
                <article>
                    <div className="blog-details-container container-new">
                        <div className="blog-flex">
                            <div>
                                <div className='date-container d-flex ne-da-container'>
                                    <div className='blog-date'>
                                        02
                                    </div>
                                    <div className="blog-month">
                                        Apr 2022
                                    </div>
                                </div>
                            </div>
                            <div className="right-blog-details">
                                <div className="blog-details-title">
                                    The Future of Virtual Reality in Business
                                </div>
                                <div className="mt-30">
                                    <img src="images/the-future.png" className="blog-details-img" />
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">Virtual Reality (VR) has recently risen to prominence as a result of the release of a slew of low-cost, consumer-friendly VR headsets. The advancement of immersive technologies such as Augmented Reality (AR) and Mixed Reality (MR), as well as the scope of Extended Reality (XR), which blends real and virtual surroundings with human and machine interactions, has pushed VR even further forward. This has prompted companies to utilise VR technologies in order to boost their success and growth.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">VR in different industries</p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Education and Training</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Companies are implementing AR/VR systems for employee training. By 2025, VR-based education is predicted to be a $700 million market, making it the fourth largest sector for virtual reality investment. Why is this strategy superior to traditional classroom/e-learning?
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Gaming</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Gran Turismo Sport is a racing computer game that uses virtual reality to simulate real-world driving. They invited racer Alex Brundle to sample the game's VR version and compare the sensation to real-life racing as part of their promotional campaign. He agreed that the dynamic camera and 360-degree vision allowed him to look around and feel as if he were in a car driving on a racetrack. Is it, however, possible to train as a racer utilising a virtual reality racing simulator? Alex Brundle thinks so, because the simulator can help him become a better racer. The simulation includes muscle effort and emotional involvement, both of which are important variables in VR training success. Another advantage of the simulation is that it might help you get a better understanding of the circuit and feel more confident when it comes to a real race.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Healthcare</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">The AR/VR segment of the healthcare market is predicted to reach $4.9 billion by 2023, according to MarketsandMarkets, with a 36.6 percent annual growth rate. Education is the most obvious application of AR/VR in healthcare. Doctors must be well-versed in the anatomy and physiology of the human body, as well as be able to execute a variety of medical procedures of varying degrees of difficulty. The AR/VR equipment and software show a 3D image of a human body in real time, allowing trainees to safely execute the invasions.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">It's a means for surgeons to plan their operations and reduce the chances of unexpected outcomes. The technology can be used to visualise the area of medical intrusion, display real-time digital information on a patient's body, improve the accuracy of the surgery, and make further recovery easier.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Pharmacy</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Making a 3D depiction of how a medicine operates inside the body is achievable with AR. This could be valuable for patient education and pharmaceutical company research that are safe. Virtual reality can also be used to complement traditional medication. The experiment found that combining VR with a standard painkiller reduced pain more effectively than either medicine alone. It's unclear how it worked, but researchers believe the VR environment diverted the patients' attention away from the painful manipulation, restricting the brain's ability to perceive pain.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Manufacturing </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">AR/VR technology has advanced to the point where it can be employed in business and manufacturing, with a potential economic impact of $359.4 billion. According to the Annual Manufacturing Report, 94% of manufacturers are adapting their companies to new technology, while 43% are having difficulty achieving digital transformation. Let's have a look at how AR/VR can change the industrial industry.
                                    </p>
                                </div>


                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Benefits of VR in business
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Companies can improve several elements of their job by implementing full-dive virtual reality technology. Although virtual reality (VR) is not widely used now, it is not a new technology. This is its advantage: solutions are maturing, flaws are being addressed, and software and hardware are no longer as expensive as they once were.</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">The goal of any firm is to offer a product of the highest possible quality while lowering the original cost. Let's have a look at how virtual reality can be used in the workplace.</p>
                                </div>
                                <div className="mt-30">
                                    <div className="reasons-number">
                                        <p>Improved training and reduced risks</p>
                                    </div>
                                    <div className="mt-15">
                                        <p className="blog-detail-content">Simulating actual working environments can help organisations train their personnel. When working with high-risk tasks (working with the human body, complicated equipment, or in a military setting), AR/VR training is the only effective and safe approach to train.</p>
                                    </div>
                                </div>
                                <div className="mt-30">
                                    <div className="reasons-number">
                                        <p>Optimization of product development </p>
                                    </div>
                                    <div className="mt-15">
                                        <p className="blog-detail-content">Before implementing actual prototypes, design and development teams can test several hypotheses while working on any project. This will aid enterprises in lowering costs and shortening time to market. In the automotive industry, for example, the time between design and physical modelling can be decreased from weeks to days.</p>
                                    </div>
                                </div>
                                <div className="mt-30">
                                    <div className="reasons-number">
                                        <p>Enhanced working communication</p>
                                    </div>
                                    <div className="mt-15">
                                        <p className="blog-detail-content">Companies can use virtual reality to bring together team members from various places in a shared virtual world. This will incorporate all of the advantages of both office and remote collaboration, such as real-time communication and reduced travel time and costs.</p>
                                    </div>
                                </div>
                                <div className="mt-30">
                                    <div className="reasons-number">
                                        <p>Routine optimization</p>
                                    </div>
                                    <div className="mt-15">
                                        <p className="blog-detail-content">Companies in the logistics and warehouse industries are already using AR glasses to allow their staff to instantaneously see information about cargos without having to look it up in a database.</p>
                                    </div>
                                </div>
                                <div className="mt-30">
                                    <div className="reasons-number">
                                        <p>Creating a new customer experience</p>
                                    </div>
                                    <div className="mt-15">
                                        <p className="blog-detail-content">The key to establishing customer loyalty and growing the business is to engage them and provide them live impressions. The retail, hospitality, and automotive industries are just beginning to investigate the potential of AR/VR technologies, while gaming and entertainment are already making use of them. In addition to the advantages listed above, AR/VR technology will aid in the development of a solid reputation as a forward-thinking and inventive organisation.</p>
                                    </div>
                                </div>

                                <div className="mt-30">
                                    <div className="blog-detail-sub-heading">
                                        <p>Wrapping Up</p>
                                    </div>
                                    <div className="mt-30">
                                        <p className="blog-detail-content">The future of virtual reality in business appears bright, since technology is allowing architects, engineers, and other professionals to rethink how they plan, build, develop, promote, and manage their goods. According to reports, approximately 80% of the major tech businesses have already invested in VR, and the trend is expected to continue in the near future. More businesses will be striving to make the most of digital technology in 2022 and beyond, as the costs of VR equipment are also being controlled.
                                        </p>
                                    </div>
                                    <div className="mt-15">
                                        <p className="blog-detail-content">Surbhi Infotech is one of India's leading IT firms. For all of your Ecommerce website development needs, contact us immediately.
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-50 bt-1"></div>
                                <div className="new-flex-blog-contact space-between">
                                    <div className="contact-us-for-next-section">
                                        <div className="contact-us-for-next-section-text">
                                            Contact Us For Your Next Project
                                        </div>
                                        <div className="mt-40">
                                            <div className="d-flex">
                                                <img src="images/text.svg" className="mr-15" />
                                                <p className="contact-email">info@surbhiinfotech.com</p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="d-flex">
                                                <img src="images/call.svg" className="mr-15" />
                                                <p className="contact-us-text">+91 8160703379</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" mt-30">
                                        <NavLink to="/contact-us">
                                            <button className='contact-btn mr-0'>
                                                <span className='submit'>Contact Us <img src="images/contact-arrow.png" alt="image" className='arrow' /></span>
                                            </button>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Heading bg_text="BLOG" front_text="OTHER BLOGS" />
                        <div className="related-blog-container">
                            <div className="related-blog-details right-space">
                                <NavLink to="/blockchain">
                                    <div className="date-row">
                                        <span className="blog-date blog-date-hover">28</span>
                                        <span className="blog-month">Apr 2022</span>
                                    </div>
                                    <div className="related-blog-tilte">
                                        How Blockchain Can Help In Data Security
                                    </div>
                                    <div className="related-blog-description">
                                        The old way of doing business has been disrupted by computer technology and the internet. New revenue streams continue to emerge, and business models from the past are quickly becoming obsolete.
                                    </div>
                                </NavLink>
                            </div>
                            <div className="related-blog-details right-space">
                                <NavLink to="/future-virtual-reality">
                                    <div className="date-row">
                                        <span className="blog-date  blog-date-hover">02</span>
                                        <span className="blog-month">Apr 2022</span>
                                    </div>
                                    <div className="related-blog-tilte">
                                        The Future Of Virtual Reality In Business
                                    </div>
                                    <div className="related-blog-description">
                                        Virtual Reality (VR) has recently risen to prominence as a result of the release of a slew of low-cost, consumer-friendly VR headsets.
                                    </div>
                                </NavLink>
                            </div>
                            <div className="related-blog-details right-space">
                                <NavLink to="/e-commerce">
                                    <div className="date-row">
                                        <span className="blog-date  blog-date-hover">02</span>
                                        <span className="blog-month">Apr 2022</span>
                                    </div>
                                    <div className="related-blog-tilte">
                                        Benefits of Shopify for eCommerce Startups
                                    </div>
                                    <div className="related-blog-description">
                                        E-commerce has completely transformed the economic landscape, with sellers displaying their wares online rather than in physical locations. As a result, there is a need to create e-commerce businesses that are aesthetically pleasing while also being functional.
                                    </div>
                                </NavLink>
                            </div>
                            <div className="related-blog-details">
                                <NavLink to="/entrepreneurs">
                                    <div className="date-row">
                                        <span className="blog-date  blog-date-hover">02</span>
                                        <span className="blog-month">Apr 2022</span>
                                    </div>
                                    <div className="related-blog-tilte">
                                        How Entrepreneurs Can Use AI To Boost Their Business
                                    </div>
                                    <div className="related-blog-description">
                                        According to a Gartner survey, AI is used by 37% of businesses (Artificial Intelligence).
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </article>
                <diV className="footer-blog-details">
                    <Footer />
                </diV>
            </section>
        </>
    )
}

export default BlogDetails;