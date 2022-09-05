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
                                    Benefits of VR Technology in Real Estate
                                </div>
                                <div className="mt-30">
                                    {/* image chenge */}
                                    <img src="images/5-reasons.png" className="blog-details-img" />
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">
                                        In the coming years, the real estate sector may be the one that is most drastically altered by virtual reality. In fact, data from Goldman Sachs indicates that by 2025, the global market for virtual reality in the real estate sector may generate up to $2.6 billion. This amount is sufficient for real estate companies to recognise the potential of virtual reality in the sector. We'll discover how VR can alter the real estate business in this blog.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Virtual Reality in Real Estate</p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">Virtual Reality and Augmented Reality are becoming more popular in the real estate sector through virtual staging and tours. Virtual Reality tools are only now securing popularity as an effective communication and marketing tool in the real estate industry.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">The real estate sector may be significantly impacted by the increased financial investment in VR and AR technology. Both prospective buyers and developers can gain from the use of virtual tours and virtual staging. </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">In order to keep ahead of the competition, real estate players should consider introducing a virtual reality experience. The real estate and construction sectors benefit most from virtual reality.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Physical plans and drawings are not necessary for the virtual construction site's architectural and technical needs. In a virtual model, you may use VR to modify, scale down, magnify, and view objects from all angles. Even for brokers, using technology can be very advantageous.
                                    </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Benefits of using VR for real estate agents
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">1. Saves Time
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Real estate professionals might find using VR to be a great time saver, especially for properties that are located far away. Utilizing this technology, one can view properties overseas or in isolated, rural areas. Buyers can click on bedrooms, kitchens, baths, and other areas to view them clearly in 3D. VR saves real estate brokers time and money that could be used to organise an open house, attract new clients, or keep hold of devoted patrons!</p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">2. Better online communication</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Due to the fact that customers can comment on any part of the property in VR, online interaction is improved. A consumer might inquire about the insulation or style of flooring, for instance. The agent benefits from your ability to give feedback in real time from the convenience of your workplace!
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">3. Turns imagination into reality</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">A virtual tour can be used to walk potential purchasers through a property and show them what the end product will look like. Then, prior to the commencement of construction or after it is finished, buyers can leave remarks. More effectively than 2D photographs, helping your clients imagine each home fosters emotional ties and increases their engagement.</p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">4. Increases site traffic</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">VR also keeps viewers' attention longer than static graphics or plain text. This will improve website traffic for you. Additionally, VR will make it simpler for prospective purchasers to see themselves residing there. Mortgage calculators, for example, are interactive VR tools that might incentivize a sale.</p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">5. Offers Global Reach</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">It takes a lot of effort to schedule property visits, show clients around the property, and negotiate conditions and prices. However, with VR, it no longer matters where your client lives. Even for buyers who are far away, VR enables you to promote houses. As a result, you may work with more clients and handle more enquiries as a real estate agent while remaining at your desk in comfort.</p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">6. Saves money</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">The cost of purchasing 3D virtual tour equipment could appear high. It is, nonetheless, a worthwhile investment. In addition to setting up houses, you also offer excellent pictures. All it takes is a panoramic camera and simple editing to harness the power of 360-degree videos and computer graphics.</p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Benefits of using VR for sellers and buyers</p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">1. Time saved for buyers</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Organizing property tours isn't always simple. It's possible that not all of the properties you're browsing are in the same area. Although virtual reality may not totally replace in-person property viewings, it might become the buyer's initial round of viewings. You can also view homes on the opposite side of the state, the country, or the globe!</p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">2. No rush</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">You won't feel pressured by the realtor or seller when viewing a home, so take as much time as you like. Additionally, it is simpler to review the property.</p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">3. Tours available 24/7</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Additionally, adopting VR in real estate makes all advertised homes accessible for viewing at any time. Homebuyers may tour properties whenever they choose, day or night, without a real estate agent present, thanks to VR headgear.</p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">4. No need to keep your home pristine</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Agents typically advise extensively cleaning your home to make it as desirable as possible to boost your chances of selling it. It's challenging to maintain a spotless home for numerous days or weeks, though. Even sometimes, visitors will make the sellers leave their house. With VR, you can clean your house once, photograph the location, and then resume your normal activities.</p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">The future of VR</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">VR will soon even be able to mimic flavours and odours. The smell of freshly made cookies in the kitchen during a virtual reality tour of a property may subconsciously influence the buyer's view of this space. Additionally, virtual reality touch (haptic technology) will replicate the sensation of touch. The furniture and wall textures will be palpable to the prospective buyer! In order to make virtual tours nearly equal to actual trips, VR professionals are committed to producing a realistic experience.</p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Conclusion</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">VR will soon be able to imitate tastes and smells. During a virtual reality tour of a property, a possible buyer may smell freshly baked cookies in the kitchen, which will unconsciously influence their view of this room. Furthermore, haptic technology (VR touch) will imitate the sensation of touch in virtual reality. The texture of the walls and furniture will be felt by the potential buyer! VR professionals are dedicated to producing the most realistic experience possible in order to make virtual tours nearly equal to physical ones.</p>
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