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
                                        not Live
                                    </div>
                                    <div className="blog-month">
                                        Aug 2022
                                    </div>
                                </div>
                            </div>
                            <div className="right-blog-details">
                                <div className="blog-details-title">
                                    Here's Exactly What You Need to Do to Launch a Mobile App
                                </div>
                                <div className="mt-30">
                                    {/* chnge image */}
                                    <img src="images/5-reasons.png" className="blog-details-img" />
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">Consumers downloaded nearly 200 billion apps to their devices in the last year. We think it's reasonable to assume that new fascinating apps are generating a lot of interest among consumers. This isn't to say that you can just throw together a mobile app in a few weeks and hope for the best–launching an app takes time and knowledge of industry trends.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">Let's go over the stages of an app's life cycle and look at a step-by-step method to creating a successful mobile app, from research to launch.

                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Beta Test</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Beta testing your software is a vital step before releasing it in today's competitive industry. The primary purpose of beta testing is to gain real-world experience regarding how well your software will work when used by real people. TestFlight, Test Fairy, and HockeyApp are three prominent platforms for IOS and Android testing.  </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Pre-Launch Landing Page</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">It's never too early to start spreading the word about your new mobile app and establishing a fan base. What are the top three pre-launch landing page best practises?  </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Create a clean, basic landing page that highlights your app's screenshots, features, and release date.</li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Users should be encouraged to sign up for product launch notifications.</li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Allow fans to suggest your app to others via social media sharing options.</li></p>
                                </div>

                                <div className="mt-30">
                                    <div className="blog-detail-sub-heading">
                                        <p>Social Media</p>
                                    </div>
                                    <div className="mt-15">
                                        <p className="blog-detail-content">When it comes to driving organic growth and engagement for your new mobile product, social media is a great place to start.</p>
                                    </div>
                                    <div className="mt-15">
                                        <p className="blog-detail-content"><li>Create official Facebook, Twitter, Google+, Instagram, and Tumblr pages for your business.</li></p>
                                    </div>
                                    <div className="mt-15">
                                        <p className="blog-detail-content"><li>Launch your official social media channels one month before to your app's launch to generate brand awareness and provide information about your app.
                                        </li></p>
                                    </div>
                                    <div className="mt-15">
                                        <p className="blog-detail-content"><li>Prior to and throughout the launch of your mobile app, generate buzz by tweeting and posting to Facebook on a weekly basis.
                                        </li></p>
                                    </div>
                                </div>
                                <div className="mt-30">
                                    <div className="blog-detail-sub-heading">
                                        <p>Press Kit</p>
                                    </div>
                                    <div className="mt-15">
                                        <p className="blog-detail-content">The creation of a press kit to market your mobile app is critical for its launch. If bloggers and journalists express interest in your app, send them a zip file with the following information as soon as possible.</p>
                                    </div>
                                    <div className="mt-15">
                                        <p className="blog-detail-content"><li>Press release</li></p>
                                    </div>
                                    <div className="mt-15">
                                        <p className="blog-detail-content"><li>Store icon and screenshots
                                        </li></p>
                                    </div>
                                    <div className="mt-15">
                                        <p className="blog-detail-content"><li>Video demo trailer
                                        </li></p>
                                    </div>
                                    <div className="mt-15">
                                        <p className="blog-detail-content"><li>App description
                                        </li></p>
                                    </div>
                                    <div className="mt-15">
                                        <p className="blog-detail-content"><li>Previous Reviews
                                        </li></p>
                                    </div>
                                    <div className="mt-15">
                                        <p className="blog-detail-content"><li>Company information
                                        </li></p>
                                    </div>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Research the Market</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">You must devote time to pre-development and pre-launch efforts before you begin developing your mobile app. The more time you spend researching and troubleshooting, the smoother the rest of your journey will be.  </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">The greatest place to start is to learn about your surroundings and how you can tailor your app to fit in. Despite the fact that demand grows in lockstep with the number of users, each specialty has a slew of competitors vying for their attention. That's why it's critical to understand your target market, how your competitors are positioning themselves, and what pain points you can address.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Define Clear Goals and KPIs</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">It will become clearer where your app's strengths are as you gather information about your buyer profile and the market. Based on that, you should determine what constitutes success - is it more necessary to have a large number of users, or are you more interested in certain target people? Are in-app purchases going to be included?
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Prototype Testing</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">As soon as possible, you should begin testing your prototype. Having an in-house QA engineer examine your software throughout the development process is a fantastic solution. When your prototype is complete, you should present it to your test audience for feedback.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">When you get your app in front of a test audience sooner rather than later, you can save a significant amount of money that would otherwise be spent fixing something that has already been built.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Final notes</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">It may appear to be a lot to take in at first, but if you devote enough time to each step of the process, you'll realise that a good idea can stand the test of time and become a success if you put up enough work. Begin by learning about your market and jotting down the specifics of your target demographic. After that, you should start making preliminary preparations and laying the groundwork.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">After that, you should conduct user research and thoroughly test your app. You can then move on to build more detailed plans based on the information you've gathered. Keep track of all the changes you've made and the final input you've received from beta testing before moving on to the next step. You'll soon be ready to launch after deciding on your communication strategy and utilising all accessible channels. Remember that once your app is released, it is not the time to stop working on it. Continue to listen to your users, test, update, and build an audience for your future launches.
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