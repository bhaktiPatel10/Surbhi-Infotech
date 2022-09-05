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
                                    Top 5 Benefits of Virtual Reality in Fashion
                                </div>
                                <div className="mt-30">
                                    {/* image chenge */}
                                    <img src="images/5-reasons.png" className="blog-details-img" />
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">
                                        The fashion sector is a highly competitive, but also highly promising, niche that will influence people' purchasing habits. While the ability to try on garments and inspect product quality were the key competitive advantages of brick-and-mortar retailers ten years ago, contemporary e-commerce technology allows buyers to do so online. In this regard, digital experience has become critical for all businesses in the industry. More and more worldwide firms are going online to give their customers a better experience.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">
                                        If you're still debating whether to enter the ecommerce space, we recommend looking at the numbers to determine your chances of success. All of the statistics and facts plainly reveal that Amazon maintains its lead in online sales in the United States, with 44$. Furthermore, according to Inviqa, Millennials and Gen Z are the ecommerce giant's primary target audience, with more than 54 percent of young people preferring Amazon over any other online retailer.
                                    </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Benefits of VR in fashion
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">#1 Convenience
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">With convenience and efficiency becoming increasingly important in e-commerce, The convenience that VR and AR bring to customers and businesses is a significant impact on e-commerce. Furthermore, it dramatically reduces the time spent browsing for products and completing payments, allowing more people to do a variety of chores in less time. People used to go to real stores to try out and experience items. AR and VR, on the other hand, are radically shifting this dynamic, allowing retailers to:
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Create virtual showrooms and allow clients to examine products without having to visit a physical store from the comfort of their own homes.
                                    </li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Provide virtual landscapes of projects so that buyers can firsthand experience all of the features and possibilities.
                                    </li></p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">#2 Awareness
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Getting items to market is crucial for any company. However, selling things is just as crucial as engaging clients in new sorts of marketing or advertising strategies. Several e-commerce behemoths and tiny entrepreneurs are engaging customers through virtual experiences.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Retailers may use AR and VR to create new marketing initiatives that catch customer attention and affect attitudes and behaviour.
                                    </li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Increase brand recognition by giving clients the opportunity to virtually experience the benefits of such traits.
                                    </li></p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">#3 Cost Savings
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">AR and VR are capable of reducing client costs in addition to saving time and providing convenience. With the capacity to picture any product of their choice, the phrase "test before you buy" has never been more applicable. Customers may now know if their purchases are the correct match for what they need even before they buy it, rather than learning it after they've purchased the thing, thanks to AR and VR.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Customers may stand in their living room, put on an AR headset, flip through a catalogue, and make more educated purchasing selections using AR and VR.
                                    </li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Instead than going to retail establishments and browsing through product descriptions and dimensions, they can see what they want in the space they want it to be.
                                    </li></p>
                                </div>


                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">#4 Real Life Simulation
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">One of the most significant advantages that AR and VR provide to the e-commerce industry is the capacity to create an immersive experience that can simulate real life. Although VR and AR have long been recognised for their advancements in gaming, when used to virtual stores, the same technology may provide customers with extremely immersive experiences.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Using AR and VR: Customers can not only shop for things online using real-life interfaces, but they can also try them out virtually.
                                    </li></p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Retailers may overcome physical barriers and provide access to all product features, attracting more customers into the sales funnel and increasing conversions.
                                    </li></p>
                                </div>


                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">#5 Maximise Sales
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Immersion, engagement, and influence are just a few of the reasons why AR and VR are becoming e-commerce buzzwords. Forward-thinking enterprises and some of the world's largest e-commerce behemoths are using the power of virtual reality to create incredible experiences and gain a competitive advantage.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">According to a recent study, customers are more likely to buy from brands that use immersive technologies to market themselves. AR and VR can allow customers to explore virtual showrooms, touch, feel, and experience products, and give them a compelling reason to visit your online store – completely transforming the shopping experience. Whether you provide a 360-degree video catalogue or simply an engaging digital experience, AR and VR will allow shoppers to immerse themselves deeper into the e-commerce experience, allowing for rapid growth and quicker sales.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Shop online with VR in the future
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">The VR takeover is only possible if the majority of people hold a VR mobile device that allows them to access the virtual worlds that are now being produced. The fact that there are already 171 million VR users worldwide, with a market worth $209.2 billion by 2022, shows that it won't be long before many households have at least one VR mobile device.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">At the moment, if you want to use virtual reality, you must first download a game or app from an online VR shop such as Steam and ensure that it is compatible with the VR headset you own.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">However, as technology advances, VR experiences will be available directly via web browsers. Websites will be able to connect to VR devices automatically, allowing visitors to transition from ordinary web pages to virtual reality environments on demand. This will make it far more accessible and lower the barrier to entry, possibly to the point where your grandparents can easily connect into the matrix.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">This advancement transforms VR from a product to a service. What VR can offer as a service is what makes it such a valuable tool for online shops looking to increase sales and improve the shopping experience of their customers.
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