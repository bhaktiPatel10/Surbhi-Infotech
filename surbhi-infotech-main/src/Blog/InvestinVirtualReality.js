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
                                    Here’s Why You Should Invest in Virtual Reality for Your Real Estate Business
                                </div>
                                <div className="mt-30">
                                    {/* image chenge */}
                                    <img src="images/5-reasons.png" className="blog-details-img" />
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">
                                        A significant portion of most people's investing portfolios has traditionally included real estate. Most of that real estate, if not all of it, has been "real." But the modern real estate investor might also be thinking about something a little less tangible: virtual land. For investors who aren't hesitant to take a bet on cutting-edge technology, building a virtual real estate portfolio may be the next big thing.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">
                                        Unique land with a deed that exists in the virtual realm is known as virtual real estate. This environment can be compared to a video game, but with more social and communal elements. Land in the metaverse, a network of virtual worlds where purchasing virtual property is possible, may be just as valuable as real estate and has even caught the interest of well-known figures like Snoop Dogg and corporations like PricewaterhouseCoopers.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Reasons to Consider VR in Real Estate Industry</p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">After the global epidemic, several companies have already begun to make significant investments in the creation of VR applications. This ground-breaking technology has the potential to greatly assist real estate enterprises. These are a few prominent arguments for considering VR in the real estate sector;
                                    </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">1. Conserve Time and Money
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Both buyers and corporations can save a tonne of time and money by utilising VR in the real estate sector. In actuality, there is no requirement for inspection or demonstration to take place on the property site. Businesses should investigate this benefit further because they can easily offer virtual tours to several clients. Furthermore, a separate equipped version may be displayed to each client.
                                    </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">2. The Ultimate Convenience
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Typically, it takes a buyer a full day to adequately inspect a house. Virtual reality for real estate enables remote property browsing without requiring users to leave their homes. Additionally, when the properties are located in various cities, this convenience is more beneficial. Buyers can conveniently and easily view houses by simply donning a pair of VR goggles.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">3. Extremely Realistic Experience
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">The most immersive experience for consumers is made possible by VR technology and good VR app development. Most importantly, the Unity and Unreal Engine aid VR app developers in producing photorealistic 3D images.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">4. Improvement in Business Representation
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Businesses who are open to utilising the most cutting-edge encounters and technologies are adored by the public. As a result, investing in VR app development services might assist you in developing a trustworthy brand.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">5. Improved Online Communication </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Although traditional real estate experience can be used to conduct internet contact. Virtual reality in the real estate sector, however, can guarantee improved customer and business connection In the immersive reality, users can simply comment or make suggestions about a property's feature.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Why Investing in Virtual Real Estate is a Big Deal
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Real estate VR technology is dedicated to offering a user-friendly experience that gives virtual tours the appearance of reality to potential buyers. By enabling the creation of a virtual world, this technology significantly increases user engagement. By utilising VR technology, architectural and interior design firms may offer clients previously imagined VR experiences.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Make virtual or augmented reality a part of your profession if you're a real estate broker, agent, architect, or interior designer. The advantages are obvious and include time and money savings, more interest in your offer, and quicker sales. For many customers, a personalised experience is crucial, which is why VR and AR in real estate help give.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">According to The Close, 45 percent of real estate brokers claim that "keeping up with technology" is a significant difficulty for their agents. To rectify that, we are here!
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>71% of Millennials and Gen Z are positive towards the use of VR, this is unsurprising as most Millennials are quick to adapt to new technologies. On the other hand, older generations might take a bit more convincing</li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>95% of home buyers use the Internet to look for homes
                                    </li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>51% of people buy homes that they found online, so adding VR to this seems like the obvious next step
                                    </li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Already 77% of clients want to do a virtual tour before doing a ‘real’ visit
                                    </li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Most people looking for a house visit on average between 5 and 7 homes before settling on one. Virtual Reality could really cut down the time wasted viewing properties that people then don’t want to buy
                                    </li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>68% of clients want to see what their furniture would look like in their new home
                                    </li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>44% of clients begin their property search on the internet, realtors must embrace this technology today.
                                    </li></p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Real Estate VR App Development Cost</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">There are so many variables that could affect the final cost of developing a VR application. The construction of the menu, the backend, the tour flow, the relationship to the visual material, and other aspects must all be taken into account. Additionally, it can take two months to construct the VR real estate app from the first concept to the final product. Such VR-ready real estate apps often range in price from $10,000 to $75,000 on average.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Why Hire Surbhi Infotech for Real Estate VR Development?
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Surbhi Infotech is the ideal option if you intend to invest in VR for your real estate company. We offer the most cutting-edge VR development services, which may boost sales and improve client experiences for your real estate company. Our team consists of skilled designers, quality-focused project managers, and VR app developers. When it comes to offering VR app development services, we thrive on going above and beyond.
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