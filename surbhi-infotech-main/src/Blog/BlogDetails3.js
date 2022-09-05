import React, { useEffect } from "react";
import Heading from "../Common/Heading";
import Footer from "../Home/Component/footer";
import Header from "../Home/Component/Header";
import "./blog.css"
import { NavLink } from "react-router-dom";

const BlogDetails3 = () => {
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
                                        04
                                    </div>
                                    <div className="blog-month">
                                        Apr 2022
                                    </div>
                                </div>
                            </div>
                            <div className="right-blog-details">
                                <div className="blog-details-title">
                                    Difference Between User Interface (UI) And User Experience (UX)
                                </div>
                                <div className="mt-30">
                                    <img src="images/blog3.webp" className="blog-details-img" />
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">UI and UX are two of the most confusing terms in online and app development, especially for beginners. Because the terms User Interface (UI) and User Experience (UX) are frequently used interchangeably (as UI/UX), many people believe they relate to the same thing.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Both the user interface and the user experience are two sides of the same coin. Both are connected in the sense that they make up a website, but their qualities are different. This article will break down the distinction between UX and UI and help you understand why it's crucial to know the difference, whether you're a newbie or a product owner who wants to have better dialogues with your designers.
                                    </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">User Interface (UI)</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">The process of improving a user's engagement with a website or application, making it as simple to use and effective as possible, is known as UI (User Interface). The look and design of websites and web apps are the primary emphasis of user interface development.</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Menus, icons, buttons, and pages, as well as all other visual elements, contribute to the user interface of a website. In a nutshell, a UI developer's major purpose is to design a user-friendly interface that meets the user's needs.</p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Features of user interface
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <ul>
                                        <li className="blog-detail-content">Branding and Graphic Development</li>
                                        <li className="blog-detail-content">Customer analysis of the requirements</li>
                                        <li className="blog-detail-content">Efficient look and feel</li>
                                        <li className="blog-detail-content">Responsiveness and Interactivity</li>
                                        <li className="blog-detail-content">Design Research according to the requirement analysis</li>
                                        <li className="blog-detail-content">Interactivity and Animation</li>
                                        <li className="blog-detail-content">User Guides/Storyline</li>
                                        <li className="blog-detail-content">UI Prototyping</li>
                                    </ul>
                                    {/* <p className="blog-detail-content">Branding and Graphic Development</p> */}
                                </div>

                                <div className="mt-30">
                                    <div className="blog-detail-sub-heading">
                                        <p>User Experience (UX)</p>
                                    </div>
                                    <div className="mt-15">
                                        <p className="blog-detail-content">The process of making a website more engaging, interactive, and useful is known as UX (User Experience). In simpler terms, it's the process of enhancing and improving the quality of a user's experience when they visit a website or application.</p>
                                    </div>
                                    <div className="mt-15">
                                        <p className="blog-detail-content">Unlike UI development, UX development focuses on improving the whole feel of the experience rather than the appearance. It mostly focuses on wireframing a website and properly arranging all of its parts and components to produce the user flow.</p>
                                    </div>
                                </div>
                                <div className="mt-30">
                                    <div className="blog-detail-sub-heading">
                                        <p>Features of user experience</p>
                                    </div>
                                    <div className="mt-15">
                                        <ul>
                                            <li className="blog-detail-content">Strategy and context</li>
                                            <li className="blog-detail-content">Wireframing and prototyping</li>
                                            <li className="blog-detail-content">Execution and Analysis</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-30">
                                    <div className="blog-detail-sub-heading">
                                        <p>What is the difference between UI and UX Design</p>
                                    </div>
                                    <div className="mt-15">
                                        <p className="blog-detail-content">UI and UX design are two stages of the design process for a product or service. The end goal is the same for both: to provide a seamless interaction and experience for the user. The two phrases are frequently used interchangeably due to their common end purpose. However, in terms of the end goal, the two serve different purposes: one is for interaction (UI), while the other is for experience (UX).</p>
                                    </div>
                                    <div className="mt-15">
                                        <p className="blog-detail-content">UI design is concerned with the user's interaction with the product, as well as its aesthetics and straightforward functionality, whereas UX design is concerned with determining how the user will feel during the experience. UX design is the initial step of the process, in which the designer maps out the user journey and determines the experience by analysing the user's problems and potential solutions. The second stage is UI design, in which the trip and experience are made feasible by creating an aesthetically beautiful and intuitive interface with visual and interactive features.</p>
                                    </div>
                                </div>
                                <div className="mt-30">
                                    <div className="blog-detail-sub-heading">
                                        <p>Key differences between UX and UI Design</p>
                                    </div>
                                    <div className="mt-15">
                                        <ul>
                                            <li className="blog-detail-content">UI generally focuses on the tools, whereas UX focuses on the interactions to develop designs.</li>
                                            <li className="blog-detail-content">In UI design we research and check what is a product and what to make, whereas in UX design, experts check what to achieve from the design.</li>
                                            <li className="blog-detail-content">Visual elements are required to build the design in UI while in UX, user experience matters regarding the design.</li>
                                            <li className="blog-detail-content">UI works on typography, and UX works on scenarios.</li>
                                            <li className="blog-detail-content">UI works on the interface part, whereas UX works on the strategy.</li>
                                            <li className="blog-detail-content">UI works on branding while UX works on user stories and persons.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-30">
                                    <div className="blog-detail-sub-heading">
                                        <p>Why understanding the difference between UX and UI matters</p>
                                    </div>
                                    <div className="mt-15">
                                        <p className="blog-detail-content">Understanding the differences between UX and UI may help entrepreneurs and product owners make better decisions about where, when, and what type of help they'll need to bring their ideas to life. It may also assist you in identifying holes in your own skill set so that you may concentrate on filling them.</p>
                                    </div>
                                    <div className="mt-15">
                                        <p className="blog-detail-content">Though UX and UI both focus on various areas of the design process, what they have in common is the user. As design skill sets have become more hybridised and design toolkits have been more democratised to make them more useful and accessible to a wider audience, the ability to relate each design decision to a clear intent that satisfies a user's needs has become more important. Understanding your user is the most critical design skill of all, regardless of role.</p>
                                    </div>
                                </div>
                                <div className="mt-30">
                                    <div className="blog-detail-sub-heading">
                                        <p>Conclusion</p>
                                    </div>
                                    <div className="mt-15">
                                        <p className="blog-detail-content">The transfer of a company's vision, brand, research, and material into a visually appealing and easy-to-use digital interface is known as user interface design. UI design is completely digital, and the output is always a visual interface, but UX design can apply to any part of a company in any industry. Both UI and UX are distinct yet complementary practices.</p>
                                    </div>
                                    <div className="mt-15">
                                        <p className="blog-detail-content">It's easy to appreciate why both are vital features in product and web design now that you know the difference between UX and UI and have seen examples of both. The best answer is usually a combination of exceptional UX and UI, but getting both is an iterative process that necessitates ongoing user research and analysis.</p>
                                    </div>
                                    <div className="mt-15">
                                        <p className="blog-detail-content">How do you make your website's UI and UX design work for you? Do you prefer to concentrate on one over the other? Please let us know in the comments section.</p>
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

export default BlogDetails3;