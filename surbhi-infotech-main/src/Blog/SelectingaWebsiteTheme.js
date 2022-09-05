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
                                    5 Things to Consider When Selecting a Website Theme
                                </div>
                                <div className="mt-30">
                                    {/* chnge image */}
                                    <img src="images/5-reasons.png" className="blog-details-img" />
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">Powering more than 30% of all websites — and showing no signs of slowing down — WordPress is an incredibly popular piece of software that helps countless entrepreneurs, bloggers, and designers create websites for their businesses, brands, and personal networks.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">With so many different ways to use the platform, the most difficult part of creating a WordPress site is often the very first step: choosing which of the tens of thousands of themes you want to use to drive your site’s design.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Evaluate Your Blog or Business</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Before you can start designing and working on your website, you need to figure out your goals for it. Knowing your business's vision and needs will help you create a site that matches! If you've never done branding exercises, we have a few linked below and you can start by asking yourself these questions:</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>What’s the purpose of your site?</li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>What sales funnels will be important for your site?</li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>What is your content focused on? Images, blog posts, discussions, a shop, etc.
                                    </li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>How will your brand fit into your site? Isn't it simple, bold, or really colourful? How does your target audience like to interact with you?
                                    </li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">After taking a look at these and writing out what’s important for your site to have and how it will be used by your readers or customers, you can start figuring out the layout and how you want it structured to match your audience's interactions.  </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">5 things to consider when selecting a website theme
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">#1 Clean Design
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">According to research published by Blue Corona, 48% of people determine the credibility of a business by its website design.It is clear that simpler designs are always better. Providing cleaner UI urges the user to easily navigate through the website and explore much more than a cluttered one. </p>
                                </div>


                                <div className="mt-30">
                                    <div className="blog-detail-sub-heading">
                                        <p>#2 Features </p>
                                    </div>
                                    <div className="mt-15">
                                        <p className="blog-detail-content">When just starting off you might not be aware of all the features which could make your website productive along with making it aesthetically appealing.Extra features including newsletter subscription, calendar and social media handles can add up to the utility of your website.If you are confused just make a list of basic features that you think are most essential to your business and update the list according to time and requirement.</p>
                                    </div>
                                </div>
                                <div className="mt-30">
                                    <div className="blog-detail-sub-heading">
                                        <p>#3 Cross browser compatibility </p>
                                    </div>
                                    <div className="mt-15">
                                        <p className="blog-detail-content">Make sure the theme you are thinking about, appears well across different browsers.The theme may look awesome on your current browser, but it may not perform well on others.As your users use various devices, they also have different browser preferences.</p>
                                    </div>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">#4 Price </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">When setting up a website, costs can quickly add up. Website development, Domain, hosting and then templates can prove to be a costly affair, hence choosing the right template in the suitable price bracket becomes even more important.Number of features and ease of editing can be considered while calculating monetary value of any theme.</p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">#5 Responsive</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Due to the array of devices present in the market the number of users accessing websites from phones and tablets has increased many times, hence selecting a responsive template makes your website accessible from any device.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">How to select the best website theme?</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Selecting the best website theme is not difficult if you take care of a few factors and do some homework beforehand. The process to buy a website theme can be summed up as below:</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Start with the objective and purpose of the website.</li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Depending on the objective, pick between free and premium website themes.</li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Consider functionalities, customization support, available plugins, extensions, and other factors we shared above.
                                    </li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Whether you go for free or a premium website theme, buy it from a trusted website theme provider.
                                    </li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Read client testimonials and ratings before you buy a theme from a particular vendor. When you buy a website theme from a trusted provider, you can rest assured of its security and any technical issues that might crawl up in the future.</p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Final notes</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Creating a website to reflect your brand can be really fun but it's also important to remember those key aspects that will help your audience connect with you. If you're ready to take your content to the next level be sure to download our free workbook to help guide you in your search for the perfect theme.  And be sure to check out our shop of themes and other resources for your blog and business, we might have just what you're looking for.</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">What's important to you when choosing a theme for your new site or rebrand? Did you recently switch to a brand new theme and are loving it? Tell us more in the comments below!</p>
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