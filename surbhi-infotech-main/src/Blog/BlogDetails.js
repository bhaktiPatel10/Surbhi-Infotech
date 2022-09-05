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
                                    10 reasons to choose shopify for your ecommerce store
                                </div>
                                <div className="mt-30">
                                    <img src="images/blog-details.svg" className="blog-details-img" />
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">The emergence of eCommerce has impacted the retail landscape in unanticipated ways. Shopify is a huge name when it comes to the best eCommerce platforms, but have you ever wondered why you've been considering them? When it comes to Ecommerce, Shopify is the first name that leaps to mind for almost everyone, and with good reason.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Why should you use Shopify for your Ecommerce business? Shopify is gradually becoming the world's go-to CMS for Ecommerce, but why should you? This blog will go through our top ten 10 reasons to use Shopify for your eCommerce and whether you should consider putting it at the top of your list and establishing your online store with it.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Shopify may be compared to other Ecommerce platforms, but we can say with certainty that it is preferable.</p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">How Does the Shopify eCommerce Platform Work?</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Shopify is a cloud-based platform with a monthly subscription plan. Those who opt-in have access to the admin panel, which enables them to provide business details, promote their business, including products, and streamline purchase processing. It's quite user-friendly, and anyone with even the most basic technical knowledge can quickly become accustomed to it.</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">It offers a large number of both free and paid templates. All of these templates come with powerful modification capabilities that can be used to match the theme to the store's branding.</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Overall, Shopify might be a great option for anyone who wants to start an Ecommerce company but lacks technical knowledge.</p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">10 reasons to choose Shopify for your Ecommerce store
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <div className="reasons-number">
                                        <p>1. Real Quick Setup</p>
                                    </div>
                                    <div className="mt-15">
                                        <p className="blog-detail-content">Overall, Shopify might be a great option for anyone who wants to start an Ecommerce company but lacks technical knowledge.</p>
                                    </div>
                                </div>
                                <div className="mt-30">
                                    <div className="reasons-number">
                                        <p>2. Ease of use</p>
                                    </div>
                                    <div className="mt-15">
                                        <p className="blog-detail-content">With an easy-to-use and straightforward backend interface, Shopify stands apart from the competition. You'll have a better understanding of sales, orders, and the demographic you're promoting your product to with a complete dashboard. With little to no design or development experience, you may customise colours, graphics, and fonts using their built-in drag-and-drop store builder.</p>
                                    </div>
                                </div>
                                <div className="mt-30">
                                    <div className="reasons-number">
                                        <p>3. Large options for themes</p>
                                    </div>
                                    <div className="mt-15">
                                        <p className="blog-detail-content">The Shopify theme store has thousands of ready-to-use themes with varying styles, designs, functionality, and pricing, allowing you to choose the perfect theme for your business. There are both free and paid solutions, so price should be factored into your decision. Art & photography, clothing & fashion, toys & games, jewellery & accessories, technology, food & drink, health & beauty, and many other enterprises have themes.</p>
                                    </div>
                                </div>
                                <div className="mt-30">
                                    <div className="reasons-number">
                                        <p>4. SEO friendly</p>
                                    </div>
                                    <div className="mt-15">
                                        <p className="blog-detail-content">If you're switching to Shopify, your product URLs will almost certainly change. You'll be relieved to learn that this will have very little impact on your search engine rankings. You'll be able to make page redirects, minimise on-page changes, monitor duplicate content, and maintain page performance if you prepare properly. Many retailers are unaware that re-platforming can help their SEO rankings. This gives you the chance to use high-performing keywords, shorter URL strings, and a directory with fewer degrees of depth.</p>
                                    </div>
                                </div>
                                <div className="mt-30">
                                    <div className="reasons-number">
                                        <p>5. Third-Party Integrations</p>
                                    </div>
                                    <div className="mt-15">
                                        <p className="blog-detail-content">When it comes to attaining different required functional configurations like Subscription, Upsells, Booking, Personalization, and so on using different available options on the App Store, you've never been trapped with Shopify. It also enables us to construct Custom Applications that work exclusively on our shop to satisfy unique needs and specifications.</p>
                                    </div>
                                </div>
                                <div className="mt-30">
                                    <div className="reasons-number">
                                        <p>6. Multiple Language Support</p>
                                    </div>
                                    <div className="mt-15">
                                        <p className="blog-detail-content">With globalisation at its peak, a window to internationalise your brand and offer your product/services around the world is always needed. Shopify takes it to the next level by making many plugins available that allow merchants to convert their stores into multiple languages.</p>
                                    </div>
                                </div>
                                <div className="mt-30">
                                    <div className="blog-detail-sub-heading">
                                        <p>Conclusion</p>
                                    </div>
                                    <div className="mt-30">
                                        <p className="blog-detail-content">Shopify is unquestionably the best option for aspiring eCommerce business entrepreneurs looking for quick, ready-made solutions. However, if you want to focus on aspects like growth, scalability, and more, as well as anticipate a bright future for your company, we recommend custom Shopify website creation. They give you more freedom and allow you to create your website according to your preferences in terms of business, market, client needs, and other factors.</p>
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