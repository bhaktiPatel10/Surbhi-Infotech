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
                                    5 Proven Ways to Increase Website Traffic
                                </div>
                                <div className="mt-30">
                                    {/* image chenge */}
                                    <img src="images/5-reasons.png" className="blog-details-img" />
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">
                                        Do you want to learn how to increase traffic to your website? You don't have to be a marketing expert to advertise your website, and it's simple to increase traffic with tried-and-true marketing strategies.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">
                                        This post will teach you how to improve brand awareness and deliver big traffic to your small company website like a pro marketer.
                                    </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Why Do We Need to Increase Website Traffic?
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">What is your main goal for your website? You started it with the purpose of driving a large number of people there. You have the same goal in mind whenever you publish content, post links, or opt to advertise: to increase website traffic.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">Why is this so important? Can't you just do what you're doing and let the visitors in? Is it necessary for you to impose yourself on them?
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">Marketing, on the other hand, was never designed to be humble. You need traffic to your website, regardless of the type. It goes without saying that your return on investment is determined by the number of visitors you convert into paying customers or the volume of ad space you sell. In any case, you should be thinking about how to increase visitors to your website.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">5 Proven Ways to Increase Website Traffic
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Now that you know how to track site visitors let’s dive into the best ways to encourage more people to visit.
                                    </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">1. Develop an audience persona
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">First and foremost, a digital marketing strategy that assists you in defining your target demographic. Your target audience is a group of people that are interested in your website. They are the people most likely to be interested in your product or service, thus they should be targeted.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Creating a buyer persona based on your target demographic is the greatest approach to understand them and learn what they want.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">By answering the following questions, you can quickly form an image of your ideal audience:
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Who is your target market for your product?
                                    </li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>What issues do they have that you can help them with?
                                    </li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>What kind of stuff do they want?
                                    </li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>How would they seek answers to their questions?
                                    </li></p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">2. Look into Trending Keywords
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Another strategy to boost site traffic is to conduct keyword research relating to your business. Keywords assist you in identifying the words and phrases that people use to find content via search engines.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Some firms make educated guesses about what users are looking for. However, because no one is searching for the terms you've selected, you're unlikely to show high on the search results page.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Keyword research can have the following advantages:
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Find out what search phrases your target audience is using.
                                    </li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Discover original content ideas for popular search phrases.
                                    </li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Better content will enable you to outperform your competitors.
                                    </li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Create useful content to increase visitors to your website.
                                    </li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Long-tail keywords should be researched to improve organic search traffic from Google and other search engines. These are usually three or four keyword phrases that are particularly unique to what you're selling.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">3. Create an Organic Traffic Blog
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">After you've completed your keyword research, you may create a blog to help drive additional traffic to your website. A blog is a constantly updated collection of various forms of content intended to inform and educate readers.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Even better, bloggers have discovered that publishing blog entries is a terrific method to acquire free traffic to their website. Remember the keywords we listed earlier? Writing blog entries about keywords relevant to your business can help you increase organic traffic to your website.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Organic traffic refers to visitors who arrive at your website from unpaid search results. This means they're coming to your site without you spending to advertise it to them, resulting in organic traffic.
                                    </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">4. Consistently publish content</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">After you've established your blog, you must develop the habit of consistently producing content. Regularly publishing updates keeps your site current, which indicates how high up Google and other search engines rank you.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Furthermore, frequent material keeps you at the forefront of your target audience's minds. It also helps you stay current online, where information is always changing.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Consider making an editorial calendar to help you stay on track with your posting schedule.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">For developing a simple content calendar, free platforms like Asana and Trello are great. Then, distribute your content over several weeks and plan blog entries ahead of time so you don't forget to push publish.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">5. Make That Content Useful</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Remember to write quality content while creating your content schedule. The majority of consumers are looking for high-quality material that informs and educates them about their difficulties.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">The best approach to accomplish this is to create "pillar articles." These are extensive blog entries with as much helpful material as possible centred on a powerful keyword.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">They're also the most crucial articles on your website because they have the potential to drive massive quantities of organic traffic and potential consumers.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Here are some things to keep in mind when creating high-quality pillar content:
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>It can be any form of content, such as how-tos, tutorials, roundups, listicles, or reviews.
                                    </li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Pillar articles are longer and more extensive than normal blog posts.
                                    </li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>This content should be evergreen and not time-sensitive. And you should keep them up to date with new information if you want to rank higher in search results.
                                    </li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Adhere to Technical SEO Best Practices.
                                    </li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>The process of optimising your website for Google's crawlers is known as technical SEO. It is critical in driving traffic to your website.
                                    </li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Google will not rank your site if it cannot find, index, or crawl it. Period. Technical SEO is concerned with the infrastructure of your website rather than its content. The following are some excellent practises to follow:
                                    </li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Optimize the URL structure, robots.txt file, and 404 pages on your website.
                                    </li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Make use of logical, clear, and simple navigation.
                                    </li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Set up an SSL certificate.
                                    </li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Include a sitemap in XML format.
                                    </li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Make use of 301 redirects.
                                    </li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Make sure your website is mobile-friendly.
                                    </li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Images should be compressed and optimised for faster loading times.
                                    </li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Make certain that your website loads swiftly.
                                    </li></p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Are You Prepared for Increased Website Traffic?</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">The list above is by no means extensive, but it should get you started. Test a handful and see how they affect the quantity of traffic you receive.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">If you see an increase, keep employing that strategy. Try a few more and evaluate the results. Begin cautiously and make careful to measure and track your progress.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Increase the effectiveness of the most successful techniques while discontinuing those that are unproductive. Use the methods above to drive more visitors to your website without paying for it.
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