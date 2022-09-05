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
                                        not live
                                    </div>
                                    <div className="blog-month">
                                        Aug 2022
                                    </div>
                                </div>
                            </div>
                            <div className="right-blog-details">
                                <div className="blog-details-title">
                                    5 ways to drive business growth with AI
                                </div>
                                <div className="mt-30">
                                    {/* image chenge */}
                                    <img src="images/5-reasons.png" className="blog-details-img" />
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">
                                        As early as the year 2000, several of today's most innovative businesses were developing online strategies. Unfortunately, not every company immediately followed its lead. Some naysayers incorrectly anticipated that the internet will fail in 1996, causing some businesses to deprioritize anything web-related.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">
                                        That was an expensive mistake today that an infinite number of e-commerce enterprises have opened and are thriving in the last two years, while those who went against the grain in the early days of the internet are still attempting to catch up.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">
                                        Today, the same may be said about Artificial Intelligence (AI). For example, when you purchase online, AI technology detects your patterns and targets adverts to you, recommends products, and provides information to businesses based on your browsing history.
                                    </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">What is AI?
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">Before delving into how AI technologies are affecting the corporate world, it is necessary to define the word. The term "artificial intelligence" refers to any type of computer software that performs human-like functions such as learning, planning, and problem-solving. Calling specific applications "artificial intelligence" is akin to referring to a car as a "vehicle" - it's theoretically right, but it doesn't cover any of the details. We must delve further to determine which sort of AI is prevalent in business.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Top 5 ways to drive business growth with Artificial Intelligence
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Machine learning
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Machine learning is frequently employed in systems that collect massive volumes of data. Smart energy management systems, for example, collect data from sensors attached to various assets. The massive amounts of data are then contextualised by machine-learning algorithms and presented to your company's decision-makers in order for them to better comprehend energy use and maintenance requirements.
                                    </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Cybersecurity
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">According to Husain, artificial intelligence is a crucial ally when it comes to detecting flaws in computer network defences. AI systems, believe it or not, can detect a cyberattack as well as other cyberthreats by watching trends in data intake. When it detects a threat, it can search your data for the source and assist to avoid future threats. That second set of eyes, as meticulous and consistent as AI, will be invaluable in safeguarding your infrastructure.
                                    </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Digital personal assistants
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Artificial intelligence isn't just for providing a more personalised experience for your customers. It can also change how your organisation runs on the inside. AI bots can be utilised as personal assistants to help manage your emails, schedule, and even make advice for process simplification.
                                    </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Internet and data research
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Artificial intelligence analyses massive amounts of data to find patterns in people's search behaviour and give them more relevant information about their situation. Users will enjoy a more personalised experience as they use their devices more and as AI technology advances. This is great news for small businesses because it will make it easier to target a very particular demographic.
                                    </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Customer relationship management </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Customer relationship management (CRM) systems are also altering as a result of artificial intelligence. Salesforce and Zoho, for example, rely heavily on human engagement to be current and correct. When AI is applied to these platforms, a standard CRM system evolves into a self-updating, auto-correcting system that manages your relationships for you.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">AI is the future </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">What applications might artificial intelligence have in the future? It's difficult to predict how technology will evolve, but most experts believe that "commonsense" jobs will become even easier for computers to process. As a result, robots will become incredibly useful in daily life.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Whether pleasant or rough, the future is rapidly approaching, and artificial intelligence will undoubtedly play a role. As this technology advances, the world will witness new companies, multiple commercial applications and consumer uses, job displacement and the creation of wholly new ones. Artificial intelligence, like the Internet of Things, has the potential to drastically alter the economy, but its full impact is unknown.
                                    </p>
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