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
                                    Top 5 Augmented Reality Trends for 2022
                                </div>
                                <div className="mt-30">
                                    {/* image chenge */}
                                    <img src="images/5-reasons.png" className="blog-details-img" />
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">
                                        We were all captivated by the notion of console games like Super Mario and The Legend of Zelda decades ago. In 2019, Pokémon GO bridged the gap between fantasy and reality by incorporating the game into our everyday lives.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">
                                        While looking for Pokémon in their neighbourhood, folks had no idea that augmented reality would soon become a part of their lives. Augmented reality is omnipresent, from fashionable Snapchat filters to Google Street View, which provides a life-like picture of a location.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">
                                        This technology has altered how businesses operate as well as our daily lives. However, the whole potential of this powerful technological tool has yet to be realised. In 2022, we will see more augmented reality miracles that will change the commercial world. Some of the top augmented reality trends are both intriguing and beneficial.
                                    </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Metaverse
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">The metaverse, also known as Web 3.0, is widely regarded as the next step in the evolution of the internet. We recently observed Facebook's renaming to Meta, which corresponds with the brand's mission of building a metaverse. This technology is still in its early stages, but it is already generating a lot of interest. Surprisingly, it was Steve Jobs who first mentioned the metaverse when he mentioned a global network of networked computers.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">Metaverse is a game-changing technology that will affect everyone.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">This is because the internet is becoming a regular location for us to get information and services. This AR technology blends augmented, virtual, and mixed reality to create extended reality (XR), which blurs the boundaries between online and offline experiences. The 3D environment created in immersive games is a fantastic illustration of this.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Augmented reality in smartphones
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">According to Oberlo, smartphones are the most widely used gadget, with an estimated 6.4 billion users. We've noticed that each smartphone generation is more advanced than the one before it. There is a constant emphasis on improved display, connectivity, and cameras.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Apple is developing faster-processing phones with high-performance machine learning. These technological breakthroughs will be available in Apple's new A16 Bionic chip, while Google is focusing on improving connectivity with 5G C-Band and WiFi 6E.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">This year will see the release of improved smartphones that will make augmented reality more accessible to the general public.
                                    </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">AR glasses
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Remember Tom Cruise's smart glasses from the Mission Impossible movies? Because of augmented reality technology, such glasses will soon be a part of our everyday lives. Xiaomi has already released a 'independent smart wearable,' which looks like conventional spectacles and uses MicroLED optical waveguide technology. In layman's words, the glasses will enable you to make calls, snap photos, read messages, and even navigate.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Similarly, Microsoft's HoloLens 2, which is not for commercial use, is being utilised for training and surgeries by military and medical experts since it provides an immersive experience via stimulating scenarios. These AR glasses could revolutionise the future of augmented reality in 2022, paving the way for further advances.
                                    </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">In-Store Navigation
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">AR-powered in-store navigation makes it easier for customers to navigate large locations. They can use this technology to not only find specific sections inside the area, but also to make it easy for them to find the things they require. Such applications can recommend an optimal shopping path, display the locations of requested products, and assist clients in finding discounts and offers on the products.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">With AI integration, you may even enhance the shopping experience by assisting your consumers in locating the products they are looking for in your online store. For example, if their search for denim trousers leads them to the aisle, the solutions can direct them to the products that fit their interests.
                                    </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">AR Preview Placement
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">eCommerce may be the most popular way for customers to purchase things. However, unlike traditional retailers, they do not allow users to touch or try on the merchandise. You can see how a particular clothing might look on you, whether a couch would fit in your room, and more. This adds no value to the consumer experience you provide, and will ultimately cost you money.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">These days are now gone, thanks to AR. With amazing apps, AR development businesses are assisting eCommerce brands in reimagining their client experience. Customers can easily determine whether a particular product line meets their needs.
                                    </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">AR Statistics </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>According to Statista, there are more than a billion AR users worldwide. They usually interface with technology through mobile devices, though AR glasses are also used (primarily in an industrial setting).
                                    </li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>According to MarketingDive, just 15% of merchants use augmented reality advancements in their operations. This doesn't sound like much until we consider two things: this 15% includes industry titans like Macy's, IKEA, and Adidas, and 32% more are either going to or are in the midst of implementing it.
                                    </li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>According to Crunchbase, AR startups will raise approximately $1.9 billion in 2021. This is partly due to the anticipated impact of Metaverses (more on that later). Another key factor was the technology's development and penetration into new areas (such as healthcare) as well as enterprise acceptance.
                                    </li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>According to XRToday, AR engagement has increased by 20% since 2020. And conversion rates for AR experiences increased by up to 90%.
                                    </li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>AR advertising revenue is estimated to exceed $2 billion by 2022. Given that augmented reality marketing is a huge trend in and of itself, the total AR ad impact would be even greater.
                                    </li></p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Conclusion </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">The future of augmented reality seems bright. With the expanding popularity of augmented reality, particularly its browser-based application, it will gain significance in the workplace and in everyday life.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Metaverses will take social media to the next level, TikTok-like apps will gain market traction, and augmented reality will be used in physical stores and factories.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Because AR features are already employed practically everywhere, including healthcare and education, technology trends will favour them for the foreseeable future.
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