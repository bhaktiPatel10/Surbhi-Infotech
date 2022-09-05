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
                                    5 Reasons Your Business Needs a Mobile App
                                </div>
                                <div className="mt-30">
                                    {/* image chenge */}
                                    <img src="images/5-reasons.png" className="blog-details-img" />
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">
                                        Consumers' and businesses' daily lives are heavily influenced by mobile apps. Almost everyone uses their phone during the day, albeit not frequently enough for some of us. The majority of this time is spent using different apps. A company moves to the next level when it can provide a mobile app that encapsulates all of the essential services they provide in a neat, user-friendly package. The question of "Should we obtain a mobile app?" is less relevant in 2017 than "When should we get a mobile app?" Here are five reasons to consider developing a mobile app for your company if it doesn't already have one or if it's subpar.
                                    </p>
                                    <p className="blog-detail-content">
                                        Are you still debating whether to build a mobile application? In this article, we have presented a list of essential benefits that a mobile app may provide for your organisation.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">1. Sales growth</p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">This is a brand-new avenue you can use to boost business revenues. It can be quite a considerable increase depending on how huge the audience is.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Push notifications for promotions, discounts, and bonuses can encourage customers to make purchases from you. All of the people who have downloaded your app can be contacted personally. With the aid of geolocation technologies offline, a business may, for instance, deliver a special offer to clients who are close to their store or office.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Making mobile payments is another benefit of apps, and they are becoming more and more popular. Because the same items can be purchased using a smartphone while sipping coffee at home, people no longer want to spend time shopping.
                                    </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">2. Audience building
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">No matter where in the world your clients are, you can build relationships with them. Since the app is already downloaded to their device, they don't need to remember your website's URL or use a search engine like they would if you had a website instead. Depending on the capabilities, it may even be possible to utilise it offline.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Your information space is entered by every new user who downloads your mobile app. In order to boost the number of installations, it is necessary to employ a variety of strategies. For instance, you may provide incentives like bonuses and discounts.</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">The "site & mobile app" combo benefits the business in two ways. Thanks to search engines, the business's website draws in clients. When a visitor joins the smartphone programme through the website, the business focuses on more specialised work with him.
                                    </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">3. Marketing and communication channels</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Through a variety of marketing initiatives, mobile apps can be utilised to successfully draw attention to the business. By doing this, you increase your prospective consumer base and build solid ties with them.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Launching your own app is, in fact, an advertising move because it enables you to leverage other marketing methods. You may, for instance, distribute press releases or post news on pertinent websites.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">The potential for user feedback in this situation is particularly useful. You can, for instance, conduct surveys, polls, allow users to flag problems, and more.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">4. Business processes optimization</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">In addition to monitoring and managing any operations, transferring files and data, and compiling certain statistics, you can develop an app for the team interactions of the employees. Numerous company tasks can be organised and automated with the help of mobile apps.</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">It's a fairly typical practice to create items that are only intended for use within the corporation. For instance, by doing this, you may guarantee constant communication between staff members, wherever they may be located.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">5. Customer loyalty growth</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">The firm gains a potent weapon to boost customer loyalty by enabling customers to reserve a table, order food, or pay for their order using the app on their smartphone. Share beneficial promotions, discounts, or bonuses with customers by integrating loyalty programmes into the mobile app.</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">By providing push notifications about fresh deals and discounts, you may fully utilise the personalisation capabilities. You can grant app users access to exclusive discounts and perks only available to those who have downloaded the app.</p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Let’s sum up</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Almost any organisation can profit greatly from mobile business apps. I hope the points in this article will help you decide if you still aren't sure whether you need a mobile app.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">The most important thing to keep in mind is that any tool or product must address a specific problem and advance the business. In light of this, it is essential to design the project and build a list of essential features for a future app.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Any firm should strive for growth, keep up with the latest technological developments, and react to innovations that can increase its efficiency. Developing a mobile app can help you accomplish these objectives in a productive way.
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