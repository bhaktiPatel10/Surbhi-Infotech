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
                                    How Virtual Reality Is Expanding Health Care
                                </div>
                                <div className="mt-30">
                                    {/* image chenge */}
                                    <img src="images/5-reasons.png" className="blog-details-img" />
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">
                                        Virtual reality (VR) has been sweeping the globe over the last few years, and this trend is only growing in popularity. The world we live in is changing quickly, and so are the ways that various industries are run. Although VR has completely changed the video game industry, it is no longer only applicable to that industry. Various businesses are creating innovative procedures and techniques to employ the newest technologies to enhance their procedures.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">
                                        Countless applications of virtual reality are already being used in the healthcare sector, and there have been numerous discourses and debates about their utilisation. Applications like robotic surgery, healthcare equipment, etc. are gradually gaining acceptance from the public and are now more likely to be used by different healthcare organisations. Virtual reality and its uses in healthcare have been discussed in this article.
                                    </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">The New Digital Era of Virtual Reality in Healthcare
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">In this emerging digital space, virtual reality (VR) has emerged as a promising market for health and science research. The speed at which VR is developing technology may appear remarkable right now. Most people associate virtual reality (VR) with gaming and entertainment technology, but when used well, it is revolutionising the healthcare sector. VR has a lot of potential to improve human health today.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Applications of Virtual Reality in Healthcare
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">One of the industries using virtual reality the most is healthcare, which includes, among other things, robotic surgery, phobia therapy, surgery simulation, and skill training. Numerous healthcare organisations all around the world have begun implementing VR into their daily operations after realising its advantages. The use of VR in numerous industries has increased with the introduction of the Oculus Rift and HTC Vive. Here is a list of some of the most significant uses of virtual reality in medicine:
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Medical Education
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Medical education and training have long made use of VR simulation technologies. To create the greatest learning programmes for doctors and students, major VR-based companies are creating products that integrate 360-degree video and 3D interactive information. With the aid of this technology, they may practise intricate, life-saving techniques without risk, develop their skills, and receive usability feedback as they go. Virtual reality is now gaining ground in the nursing field.
                                    </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">In Diagnostics
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">VR is being used as a potent diagnostic tool that enables doctors and medical professionals to make precise diagnoses. This technique is used in conjunction with others, such as MRI/CT scans, and because no intrusive procedures are required, the patient has a pain-free experience.
                                    </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Mental Illness Treatment
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">One of the common methods for treating various forms of mental illness is exposure therapy. Due of its low cost, flexibility, and low-risk nature, virtual reality is gradually altering the way exposure therapy is administered to mentally ill patients. VR also aids in the treatment of anxiety and panic attacks by presenting fresh techniques to keep the body quiet and relaxed.
                                    </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Pain Management
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Medical professionals have long employed cognitive diversion techniques to manage various sorts of pain. By offering a variety of interactive games, VR gives traditional tactics of distraction a new face. These games have a tonne of interactive features and are played in a virtual setting. While some applications offer therapeutic virtual reality for burn victims, there are other remarkably advanced techniques that make limb pain treatment effective. VR also offers a drug-free pain treatment alternative that can be employed in clinical care settings or separately.
                                    </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">In Surgery
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Virtual reality in surgery has been around for a while and has become extremely popular among medical professionals. A robotic surgical tool is used for the procedure, while the human surgeon controls the robotic tool. By using this approach, the time and danger of surgical complications are reduced. In tele-surgery, when the surgeon operates on the patient from a different location, virtual reality is important. The force feedback feature aids the surgeon in determining how much pressure to apply during a delicate procedure, such as dental, etc.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">The Future of VR in Healthcare
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">The popularity of virtual reality is increasing, and this trend will likely continue soon. By the end of 2017, there will likely be more than 2 million non-Google VR devices in use, and by the end of 2020, there will likely be an astounding 37 million. The VR business is still in its early phases, and future growth is expected to be positive.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">VR is being used more and more in the healthcare industry for teaching, diagnosis, and other purposes. With more advanced technologies and quicker Internet connections, this trend should only continue to improve. By the year 2020, the VR market is projected to reach a staggering $30 billion, with over 135 million VR headsets expected to be in daily use by the year 2025.
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