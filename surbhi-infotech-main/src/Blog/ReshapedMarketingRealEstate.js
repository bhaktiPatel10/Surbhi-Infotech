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
                                    5 Ways Virtual Reality Has Reshaped Marketing Real Estate
                                </div>
                                <div className="mt-30">
                                    {/* image chenge */}
                                    <img src="images/5-reasons.png" className="blog-details-img" />
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">
                                        With technological improvements, there are numerous ways for firms to improve their marketing tactics today. The real estate business, in particular, may profit from the numerous digital marketing tools that are readily available. Because many real estate organisations still employ traditional marketing approaches, you can quickly get an advantage and stand out from the crowd by updating your digital marketing efforts to appeal to today's buyer generation.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">
                                        Increasing brand awareness, developing a functional website, and maintaining a social media presence are all effective approaches to market your real estate business. However, virtual reality is another digital trend that is growing increasingly popular among marketers and may truly help your firm stand out (VR).
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">
                                        Because real estate is all about showcasing spaces, virtual reality (VR) is an immensely valuable marketing tool because it improves the "walkthrough" experience by making it more comfortable and easier for buyers to picture a room when they can't be there in person. And VR is more than just virtual tours. There are numerous methods for marketers to employ virtual reality to appeal to shoppers and sellers while also improving their overall digital marketing approach.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">How You Can Use VR to Enhance Your Real Estate Marketing and Business
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">VR is no longer just for fun and enjoyment; there are numerous practical applications for it nowadays, particularly in digital marketing. Marketing in any profession, including real estate, is all about appealing to the customer and showcasing your product or service to the best of your ability. With VR, real estate companies can impress both sellers and buyers by allowing them to see a space in ways they never have before.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">VR brings up a whole new marketing channel, helping real estate companies to grow and appeal to a whole new generation of purchasers. Among the most inventive VR uses in real estate today are:
                                    </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">1. Virtual Tours in 3D
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Allowing customers to virtually tour a property from a remote place simplifies the process of marketing and selling a home. Previously, if a potential buyer couldn't visit a house in person, they had to rely on images and blueprint layouts, making the sale more difficult. Buyers can now view and interact with a home as if they were physically present, making the experience much more compelling and tactile.
                                    </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">2. Virtual Production
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Any real estate agent will tell you that staging a home is critical to make it look just perfect for potential buyers. Staging a home or business property, on the other hand, takes time, effort, and money. Because VR is far less labor-intensive, you can quickly stage any property exactly the way you want in little time and at a fraction of the cost.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">3. Visualisation Before Construction
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">If you think selling a house is difficult, try marketing a property that is still under construction. A real estate company may wish to market and sell a property before it is developed in a variety of conditions. However, not everyone has the best imagination, making it difficult to sell unfinished buildings. Thankfully, virtual reality eliminates this problem by allowing buyers to completely see and experience the house before it is completed.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">4. Virtual Instruction Manuals
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Often, the individual who shows a house to potential purchasers is not the real estate agent or business that is marketing and selling it. With virtual reality, you can ensure that whoever is conducting the walkthrough has all of the information they need to completely answer buyer queries. For example, if a buyer wants to know how a home's HVAC system works or how to reach the attic, you can provide virtual instructions and guides to ensure that the agent does not leave the customer's inquiries unanswered.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">5. Online Shopping</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Just as virtual reality allows you to prepare a house, it also allows customers to bring their own goods to better visualise the property. Buyers may shop for items like curtains, decor, and furniture and place them in their virtual home area to see how they would appear, and they can even make purchases straight in the virtual store app.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Marketing, virtual reality, and real estate
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">If you want to appeal to newer and younger generations of purchasers in today's market, you must be adept at digital marketing. Digital marketing is simply essential, and staying up to date on the latest trends, such as virtual reality, will help you stay ahead of the competition and relevant in order to continue to build and expand your brand.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">It's extremely vital to have a mechanism to measure your marketing effectiveness so you can understand where you're performing and where you can improve. Virtual reality is just another method for real estate companies to maximise and measure their production and success. The more digital marketing apps you utilise, the more data you'll have to analyse and optimise your marketing productivity.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Last Thoughts
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">If you want to develop and grow your real estate firm, virtual reality is something you should seriously consider including into your marketing approach. It enables you to reach buyers all around the world, construct attractively arranged houses with ease, and much more. Virtual reality gives up a whole new world of possibilities for any profession, but especially those in real estate.
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