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
                                    How VR influences customer behaviour for buying real estate properties
                                </div>
                                <div className="mt-30">
                                    {/* image chenge */}
                                    <img src="images/5-reasons.png" className="blog-details-img" />
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">
                                        There have been significant breakthroughs in the realm of virtual reality in recent years, to the point where the VR sector is on the verge of disrupting the real estate industry. Virtual reality has a favourable impact on the real estate business by saving agents and clients time and money.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">
                                        It allows for greater efficiency and production while shortening property cycles and helps brokers in selling properties quickly.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">
                                        That being stated, here are four ways virtual reality could revolutionise the real estate sector. Let's look at an example to see how important Virtual Reality technology is. We have mentioned two scenarios in this article.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">
                                        As an example,
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">
                                        Consider a house transaction in which the agent describes physical characteristics such as area and building material.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">
                                        Consider a virtual house tour complete with all of the facilities and interior decor. before approaching the physical space
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">
                                        Which one appears to be the better option? Isn't it the second one? You've received your response. As a real estate owner, you must attract your target clientele. When it comes to selling a house, the first situation is not enticing. What one sees is what one gets in the real estate business. Buyers are more interested in the interiors and surrounds than in the physical characteristics.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">
                                        The second situation is one in which the buyer is almost certain about the location. The agent completes 80 percent of his or her duties without speaking with the customer. Customers' imaginations are matched by VR technology. Let me quickly go over the benefits of AR VR app development in real estate.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">
                                        Here's how virtual reality is influencing customer behaviour:
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">The Ultimate Convenience
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">Buyers typically need to spend a whole day thoroughly investigating a home. VR for real estate allows users to browse different properties without leaving their homes. Furthermore, this convenience is enhanced when the properties are located in various cities. Buyers can easily examine houses by simply wearing a pair of VR goggles.
                                    </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Extremely Realistic Experience
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">VR technology, combined with good VR app development, allows users to enjoy the most immersive experience imaginable. Above all, Unity and Unreal Engine make it easier for VR software developers to construct photorealistic 3D representations.
                                    </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Tours available 24/7
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Furthermore, employing VR in real estate means that all advertised homes are viewable 24 hours a day, seven days a week. Homebuyers can visit houses at any time of day or night using VR headsets without the presence of a real estate agent.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Enhanced engagement
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Traditionally, the buyer had to go to the site and inspect the building. The deciding factor was a single visit. However, virtual visits provide the consumer with an entirely new experience. One can visit the property "n" as many times as they like from any location at any time. Such technologically advanced visits secure a favourable response from the client.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Benefits You Can Derive
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>A realistic image of the property allows your prospects to picture themselves living there.
                                    </li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>VR tours in real-life settings provide prospects with an engaging and unforgettable experience.
                                    </li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Virtual tours and designs with enhanced colour, layout, scheme, and more reduce the need to physically stage every property, saving time and money. Anytime, anywhere access allows your prospects to view multiple properties remotely at their leisure.
                                    </li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>VR technology provides a captivating, engaging, and futuristic experience.
                                    </li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>With our quick turnaround and expedited options, we can reduce time-to-market.
                                    </li></p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Reach Your Target Audience</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Investing in disruptive technologies like VR is a good business option for real estate industry companies like you in today's era of social distancing and growing online presence.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">So, are you ready to use VR to expand your real estate business and maximise your marketing ROI? Prior to that, you'll need to reach out to your potential clients where they are using integrated digital marketing efforts. That's where we come in.
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