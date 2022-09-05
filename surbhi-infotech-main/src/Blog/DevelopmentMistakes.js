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
                                    7 Development Mistakes That Can Destroy Your Mobile App
                                </div>
                                <div className="mt-30">
                                    {/* image chenge */}
                                    <img src="images/5-reasons.png" className="blog-details-img" />
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">
                                        One of the most crucial stages for both ideas and entrepreneurs to take shape into something bigger and better is the mobile application development cycle. Each phase in the process builds the groundwork for the idea's success, and little blips in the process can sometimes lead to major issues. Everything is still possible to overcome in mobile app development, just as it is in life. Avoiding setbacks, on the other hand, necessitates moving forward. And avoiding these blunders can help you get there:
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">#1 Underestimating the total cost</p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">You can't have a dream about a rocket ship one day and then start building it the next. Especially when you already know it will cost a lot of money. Prior to beginning the construction process, a detailed solution of all the resources required to produce that rocket ship is required.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Furthermore, resources include not only money but also time, materials, space, overheads, a marketing or operations team, and so on. Each of these factors translates into a capital investment, and all of them must be considered prior to the start of the application development project. </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">If you want to avoid making a significant mobile app development blunder, think about training, hiring, and overheads even before you start with an MVP for one platform. Remember, knowing how much does app development cost is critical. Only then will you be able to precisely define your MVP. </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">#2 Not identifying the need
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">The most common and major blunder made before embarking on IOS or Android app development is failing to conduct a requirement analysis before to beginning the app development process. It's like offering ham to vegetarians — It's not going to be eaten. </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">It's not the greatest way to go if you have a brilliant app idea and decide to invest without first conducting market research. Whenever a big investment is required, it is preferable to proceed slowly.</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">It is vital to do market research and surveys to determine what features people require in the app if one is required. That would confirm your concept and provide you assurance that you will have a sizable user base.
                                    </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">#3 No or Lack of Research About Target Audience</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">When you're trying to get your software ready for the App Stores, it's easy to lose sight of your target market. However, app shops have millions of programmes, and if your app does not appeal to your target audience, they will simply remove it and hunt for a better option in the app store. </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">As a result, it's critical that you conduct thorough research on your prospects before beginning the app design and development process. Consider using youthful colour schemes and imagery if you're targeting children. Focus on larger text sizes and simplifying the UX for an older target group to help with speedier navigation.</p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">#4 App Not having visual clues to help users</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Rather than plain words, a visual always aids comprehension. As a result, incorporating visual hints into your application becomes even more important. Visual indications, on the other hand, do not always work and are not always perfect.</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Individual user perceptions influence whether visual signals appear desperate or not. In this case, the developer must be extra cautious in establishing an overall appearance that meets everyone's expectations.</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">As a result, let's have a look at a few design principles that may be useful in resolving this issue:</p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">#5 Not developing for different platforms</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">This is an outright no-no.</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">If your intended client base uses a range of mobile devices, developing an app for many platforms is a "must." If you don't do so, you risk drastically limiting your opportunities.</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">This does not, however, imply that you should create apps for every platform imaginable, including iOS, Android, Windows, and Blackberry. Consider numerous considerations including development expenses, the app's target market, the monetization strategy, and technical characteristics when making platform-related decisions.</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">When designing for different platforms, be sure to follow the platform's conventions.</p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">#6 Going Live without Testing</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Finally, you've created an app that can run on a variety of platforms and has its own distinct feature. However, before your app can be released to the public, you must beta test it with a limited group of trusted people who are not app developers and who have your target audience's preferences.</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">All of this feedback will help you gain a better understanding of your app's potential for improvement. The success of your app is heavily reliant on testing.</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Make sure you build a thorough mobile app testing approach that covers all aspects of your app.</p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">#7 Annoying Users with Push Notifications to Rate the App</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Positive app store reviews lead to potential consumers' greater trust in the app. One of the key reasons why app developers want users to rate their apps is to encourage them to do so. However, this does not imply that you should bombard your app users with push notifications asking them to rate your app. If app users are forced to disconnect from their job in order to rate the app, they will become frustrated. This tactic could backfire, leading to a poor review of your app.</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Requests to rate the app should arrive at the appropriate time, such as after a few days of installation and use, or when the user has completed the task on your app and is about to close it.</p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Takeaways</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">The mobile sector is expanding at a breakneck speed. When your app is released, it will be up against 2 million other apps in the App Store. In this burgeoning app economy, Darwin's notion of "survival of the fittest" holds true. If you get your app produced incorrectly, you risk losing thousands of dollars that could have been made easily with well-crafted software. You may increase the retention rate of your app and ensure its success in App Stores by avoiding the seven deadly traps described above.</p>
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