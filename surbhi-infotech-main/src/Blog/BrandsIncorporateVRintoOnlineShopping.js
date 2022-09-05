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
                                    How Can Brands Incorporate VR into Online Shopping
                                </div>
                                <div className="mt-30">
                                    {/* image chenge */}
                                    <img src="images/5-reasons.png" className="blog-details-img" />
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">
                                        Augmented reality (AR) and Virtual reality (VR) have come a long way from being immature technologies to creating a massive impact completely. With over 8.9 million AR/VR headsets sold in 2019 and AR enabled smartphones, it can be seen that consumers are acknowledging these technologies. These groundbreaking technologies are also referred together as Extended reality (XR) due to the similar nature of use and functionality.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">
                                        Retail is one of the most competitive fields of the economy. It is common knowledge that no matter how niche your market might be – you have to fight for the place under the sun, you have to persuade customers. That makes retail businesses particularly interested in finding new and more elaborate ways of engaging customers and establishing new brands.
                                    </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Creating virtual encounters
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">VR can help overcome the hassle factor of shopping. Here’s one example: according to a McKinsey study, the average car buyer today visits 1.6 auto dealerships, down from five dealerships 10 years ago. Many call the experience boring, confrontational and bureaucratic, according to The Economist. But given how complicated cars are becoming, customers also want a knowledgeable person to talk them through all the features like entertainment systems, navigation services and automated parking.On the other hand due to the global pandemic situation, consumers wouldn’t prefer visiting multiple showrooms or interacting and coming into contact with many people.VR can bridge consumers’ seeming conflict between the desire for personal service and unwillingness to visit a store by enabling experiences virtually. For a car purchase, this might mean exploring the cockpit or taking a virtual test drive.
                                    </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">V-commerce
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">As consumers are now more comfortable shopping online instead of visiting physical stores, you should focus on making your e-commerce channel more powerful and experience driven.The potential for using virtual reality in online retailing is obvious: it allows retailers to create much more immersive and engaging experiences that mimic those of physical retail stores, as well as adding enhancement not possible in the real world.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">In-store VR
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">VR can be used to make the in-store experience much more compelling and interesting for the customer, and add real, tangible benefits for the retailer. As the design of retail spaces becomes much more intelligent, focusing on maximising footfall in the right places at the right times, VR can have a measurable impact on key metrics.Because it’s still a relatively novel technology, having a VR installation in-store can drive footfall by creating a buzz around a particular part of the shop. In turn, this can lead to increased dwell times – and if the plan for the VR area is well thought out, this can mean additional sales for key items and more browsing of important product categories.Toms shoes company chain is one nice example of VR for retail. The company follows a One-for-One giving model, in which it gives a pair of free shoes to a child in a developing country for every pair purchased by a customer. To bring that to life, Toms developed a 360-degree Virtual Giving Trip campaign to give customers the opportunity to experience first-hand the impact of their purchase.
                                    </p>
                                </div>


                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Facilitate employee trainings
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Training employees is a complicated process. This exercise can prove costly if the employee makes some mistakes during the training process resulting in a financial loss for the employer. The use of VR can minimize the risk involved in the training procedure. Using Virtual Reality technology, employees can be trained by simulating real-life environments and situations.Walmart adopted VR to help identify employees for management positions. Wearing Oculus Go VR headsets, associates are immersed in real-life situations, such as calming an angry customer or taking new employees on a store tour to test their decision-making, leadership capabilities, and soft skills in challenging situations.
                                    </p>
                                </div>


                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Conclusion
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Retailers that already have AR and VR capabilities in place are better prepared to adapt to the changing customer behaviour. AR and VR collectively offer a unique shopping experience to your customers that helps them make better decisions while saving their time and keeping them safe by either reducing contact in stores or enabling an immersive experience while shopping from home.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">That’s why it’s a good time to think about how you can use AR and VR in your online and physical stores. Customers will return, not just for a bargain, but for the experience your store offers.
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