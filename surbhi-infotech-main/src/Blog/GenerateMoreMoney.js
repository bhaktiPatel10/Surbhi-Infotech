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
                                    3 Ways to Generate More Money From Your Website
                                </div>
                                <div className="mt-30">
                                    {/* image chenge */}
                                    <img src="images/5-reasons.png" className="blog-details-img" />
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">
                                        So your business has recently launched a new or improved website. Your family and colleagues know all about it but what can you do to actively promote it to potential clients and customers and help drive more traffic to it?
                                    </p>
                                    <p className="blog-detail-content">
                                        In this guide to more website traffic, we’ve compiled a list of 10 ways you can market your website, so you can reap the rewards of consistent traffic and begin converting those visitors into customers and clients.
                                    </p>
                                    <p className="blog-detail-content">
                                        Ensure you don’t overlook any part of the customer journey. Every element of your eCommerce website should be perfect, from your arrival page to the checkout.
                                        Take a look at these simple and valuable ways to improve your eCommerce website and drive more traffic.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">1. Affiliate links</p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">Becoming an affiliate for your favourite products or services (relevant to your business) is a great way to increase revenue while building a trusting relationship with your audience. Not only are you gaining a commission for every purchase that came from your referral but by recommending products that will help your audience get results, you are also increasing your credibility.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">One of the best ways to promote these affiliate products is by offering a "Toolkit" or "Resource" page on your website. However, it’s extremely important to be genuine and disclose that you are offering affiliate links. People appreciate honesty and if your recommendations help them, they will likely come back and support you in the future.
                                    </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">2. Sequenced opt-ins
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">If you are offering something of value in exchange for your web visitors’ email addresses, are you clear on your end goal?
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">While regularly blogging or publishing content for those subscribers is a great way to add value, try to plan out a sequence that can lead to promoting your product or service at the end of it. This could be in the form of a challenge (i.e., a 21-day challenge to help improve something or gain a result for your audience) or even a three-part video series, as used by many entrepreneurs such as Jeff Walker and David Siteman Garland.
                                    </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">3. Hold workshops</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">It can take people some time to build trust with your business. Rather than simply listing how people can work with you on your website (or purchase your products), why not try giving value first to establish your credibility?
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Great ways of doing this can be in the form of webinars and online workshops relating to your business. Some tools that you can use to easily create this include WebinarJam, Easy Webinar and WebinarAlly.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">4. Stop focusing on numbers</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">While the concept of building 1,000 true fans is not new, it couldn’t be more relevant today. We can often get sidetracked with the number of people who are following us, but, as Kevin Kelly’s article explains, quality will always beat quantity. The key is focusing on building relationships with your audience and constantly giving value no matter what you do. These true fans will then effortlessly want to start sharing your work and supporting your business.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Final thoughts</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">With these easy and simple ways, you can improve your eCommerce website and ensure you thrive in the business world. Making your website easy to use and adding multiple payment options can help you attract more customers. Good luck!</p>
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