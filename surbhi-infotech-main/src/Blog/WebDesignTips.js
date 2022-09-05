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
                                    5 Web Design Tips You Can't Ignore in 2022
                                </div>
                                <div className="mt-30">
                                    {/* chnge image */}
                                    <img src="images/5-reasons.png" className="blog-details-img" />
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">On the Internet, web design tips are a dime a dozen. Many people have opinions on what the perfect website looks like. That’s because, to a certain extent, design is subjective. What one person likes, another might find hideous.</p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">At the same time, web design is one of the most important factors for the success of a website. In fact, almost half of people say that the design of a site is their main factor for judging a company’s credibility. As a consequence, it also influences conversions, bounce rate, and more.  </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">Sigh, if only there was a way to find some objective data on how to create successful web design. Wait, there is! And a bunch of it has been compiled in this article. Stay on the page for some web design tips backed by science. Stop relying on your gut feeling and start doing things proven to work. </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">5 Web Design Tips You Can't Ignore</p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">1. Test</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Testing is one of the most important parts of UX design. You can put all of the above principles into practice, but you must ensure that your design is resonating with your audience. </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">While the first step is designing a site that’s built for your target audience, the second step is testing for potential stumbling blocks. Luckily there are multiple types of usability tests you can run: </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>In-person testing with a person from your target audience, where you directly observe the tester and make notes about their experience. </li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Remote testing, which is very similar to in-person testing, except that everything is observed from a computer, usually through screen sharing. </li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>A/B testing, where you experiment with two or more versions of the same page. The goal with A/B testing is to find the version that converts better. Here’s how to A/B test your website.
                                    </li></p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">2. Keep It Simple
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">The best-designed websites are free of unnecessary clutter. Get in the habit of editing your site content to remove unnecessary information, which will ensure that visitors can easily find the solution to their problem. </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">If you need to cover a lot of information on your site, break up the content so that you’re not overwhelming the user with too much at one time. For example, you can break one topic into several sub-topics and then create internal links to each page.
                                    </p>
                                </div>


                                <div className="mt-30">
                                    <div className="blog-detail-sub-heading">
                                        <p>3. Use White Space Generously
                                        </p>
                                    </div>
                                    <div className="mt-15">
                                        <p className="blog-detail-content">White space, also known as negative space, is one of the most important elements in good web design. White space is simply the unused space in your layout. If your website is cluttered and filled to the brim with content, your visitor will feel overwhelmed. They won’t know where to look first, which does not translate to good UX.
                                        </p>
                                    </div>
                                    <div className="mt-15">
                                        <p className="blog-detail-content">Instead, follow these two best practices for white space:

                                        </p>
                                    </div>
                                    <div className="mt-15">
                                        <p className="blog-detail-content"><li>Add white space around text, titles, and images
                                        </li></p>
                                    </div>
                                    <div className="mt-15">
                                        <p className="blog-detail-content"><li>Increase the line space vertically in your text
                                        </li></p>
                                    </div>
                                    <div className="mt-15">
                                        <p className="blog-detail-content">White space means giving your visitors breathing space when they’re on your site. It doesn’t necessarily mean that the space is white, but it’s simply void of distracting content.
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-30">
                                    <div className="blog-detail-sub-heading">
                                        <p>4. Get Rid of Annoyances
                                        </p>
                                    </div>
                                    <div className="mt-15">
                                        <p className="blog-detail-content">Ads, pop-ups, and banners are great for marketing but not so great for UX. These elements are disruptive.
                                        </p>
                                    </div>
                                    <div className="mt-15">
                                        <p className="blog-detail-content">Instead of using distracting elements in your design, consider other ways to communicate the same information to your visitors. For example, if you’re partnering with a brand, opt for sponsored posts instead of blinking ads.
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">5. Be Consistent
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Every page of your website should look like they belong together. Don’t confuse your visitor by switching up the layout for different pages on your site. It may look cool and interesting, but it’s sure to confuse the visitor. They may even wonder if they’ve left the site they were on.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Consistency matters in all aspects of your web design, from layout to font choices to colors to the general mood of your website. Everything should match what you’ve presented on your home page. If it doesn’t, you may lose the trust of your confused visitor. You’ll definitely lower your conversion rate. Visitors detect design inconsistencies on a subconscious level, which will negatively impact their perception of your brand. Ensure consistency with the following elements across the board:
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Colors
                                    </li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Fonts
                                    </li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Button shapes
                                    </li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Layout
                                    </li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Menu navigation
                                    </li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Menu location
                                    </li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Graphic style
                                    </li></p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Final Thoughts</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">UX is all about designing your website around the user’s point of view to provide a delightful user experience. Implement the above tips to provide your visitors with a positive experience of your business.
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