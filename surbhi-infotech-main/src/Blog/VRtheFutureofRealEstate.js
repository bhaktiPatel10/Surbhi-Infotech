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
                                    Is VR the future of real estate?
                                </div>
                                <div className="mt-30">
                                    {/* image chenge */}
                                    <img src="images/5-reasons.png" className="blog-details-img" />
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">
                                        The real estate market is constantly changing. There has never been a better time to innovate and get ahead of the curve, particularly with the introduction of new technologies that can be used in a number of different industries.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">
                                        Drone technology has already changed the real estate market in a variety of ways. Drones have revolutionised real estate, providing overhead views and virtual tours. However, virtual technology is also coming soon.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">
                                        The utilisation of virtual technology makes for a much more immersive experience and may be used to give a stunning, in-depth tour of a house and its grounds. So let's look at VR and see whether it really is the future of real estate if you're in the real estate industry and searching for new methods to edge out your competition.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Virtual Tours in Real Estate</p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">What value would you place on a virtual tour if someone said that a picture is worth a thousand words? According to a National Association of Realtors poll, more than half of potential home buyers find virtual tours to be very helpful in making their decision. However, the advantages don't end there. Virtual tours in all their forms facilitate the work of real estate brokers and agencies and enhance a number of business procedures used in the industry.

                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">It's obvious that developing tours using VR app development services and other well-liked platforms, including the web, is quite popular. Including virtual tours in your property listings could be the spark that ignites a storm in your revenue and business operations if your company is still only using photo listings with no other immersive elements. The information in this article should provide you with everything you need to know about virtual real estate solutions and how to acquire one for yourself.
                                    </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">What is a Virtual Tour in Real Estate?
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Any virtual tour is a recreation of the real thing; as a result, it provides consumers and real estate agents with the opportunity to view a home or property from the outside and the inside, with an accurate depiction of the setting's spatial dimensions. Without the option to physically touch or move the things, it is a fully remote solution that can be accessed from any location and seeks to offer the user the same impressions they would have if they visited the location in person. </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Some people equate virtual tours with a specific type of media (such as an app, film, or VR simulation), but in reality, they can take many different forms while still accomplishing the same objectives. </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Benefits of using VR inr real estate
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">The benefits of using VR can be broadly understood as follows:
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Cost-effectiveness
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Real estate AR/VR reduces significant traditional marketing expenses, like the price of home staging, giving agents and sellers a greater ROI. Additionally, it reduces prospective purchasers' travel costs, particularly for those who are farther away.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Wider geographic/global reach
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Now, potential buyers can virtually tour properties from anywhere in the world. Both buyers and real estate agents can expand their reach beyond local markets with the use of AR/VR.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Enhanced customer experience </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Customers can experience a property in realistic real-life settings thanks to AR/VR technology in real estate. It aids them in developing a strong emotional bond with their future house in addition to aiding them in visualising the property. Additionally, virtual staging enables customers to customise the interiors. The entire procedure raises total client satisfaction.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Saved time resources
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Agents are no longer required to set up appointments or prepare properties for open houses. From the convenience of their home and workplace, they may virtually deal in rural and isolated properties. Buyers can also reduce their trip time and effort.
                                    </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Quicker deal turnouts</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Prospective purchasers can obtain a sense of the property through virtual reality home tours and staging. The process of making decisions is streamlined. Agents observe shorter sale cycles and quicker real estate transactions as a result.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Competitive advantage
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">The integration of cutting-edge technology gives the real estate firm and agent a special point of differentiation. By emphasising one's profile over those of others in the same industry, it gives one a competitive advantage.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Limitations of using VR in real estate
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">It's vital to consider some of the major issues surrounding the adoption of AR and VR in the real estate sector. Let's review some of the main issues.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Resistance to advanced technology
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">The general aversion that many people have to embracing cutting-edge technology is a significant barrier to the adoption of AR/VR. People assume that using advanced technologies is difficult. Because of this, buyers could have reservations about using AR or VR to view properties and instead want to go in person.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Health and sanitation concerns
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Customers might not be in favour of sharing VR headsets with strangers out of concern for contamination. Additionally, some users of VR headsets, particularly older users, may experience nausea or vertigo.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Concerns about data privacy and security
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">The real estate corporation must share with the VR creator all sensitive information and ideas linked to the virtual project as part of the adoption of AR/VR technology. In terms of data security and the privacy of sensitive information pertaining to their workers, tenants, or vendors, this exposes the business to a new wave of possible hazards.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Large capital expenditure
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Real estate AR/VR technology investments require substantial capital outlays. Given modest maintenance requirements and no salvage costs, this investment may ultimately prove to be both cost-effective and lucrative. However, the investment is substantial when seen in the near run. It may be challenging for businesses with tight cash flow to adopt this technological transformation.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Future growth prospects of VR in real estate
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Given that investors are continuously pouring money into real estate-related technology, we may expect to see AR/VR usage grow in the real estate sector (Proptech). AR/VR is the newest big thing, and the real estate industry has already demonstrated that it is open to adopting technology.
                                    </p>
                                </div>

                                <div className="mt-15">
                                    <p className="blog-detail-content">Realtors are now showing greater interest in AR in real estate applications than VR. The reason for this is because smartphones and tablets make AR technology widely available.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">However, dedicated VR headsets are needed for real estate applications, and these are more expensive than standard mobile devices. We may anticipate a greater uptake of VR technology as it becomes more affordable and user-friendly in the real estate industry.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Finally, researchers are aiming to stimulate taste, smell, and touch using VR and AR. It won't be long before a VR tour resembles a real-world property visit.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Conclusion
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">VR can and should have a significant impact on your business going forward, regardless of whether you're a real estate agent for a tiny town or the boss of a large real estate company that develops and markets dozens of properties. The best time to join is now, before your rivals do, as with any great new inventions. Get a head start on the future of real estate by starting to provide VR tours for your property listings.
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