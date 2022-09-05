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
                                    The Possibilities of Virtual Reality in Fashion
                                </div>
                                <div className="mt-30">
                                    {/* image chenge */}
                                    <img src="images/5-reasons.png" className="blog-details-img" />
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">
                                        Brand awareness, client satisfaction, and sales process effectiveness. Retail companies are looking for fresh, cutting-edge solutions to improve these characteristics and stay ahead of the curve as technology continues to permeate the e-commerce industry. Retailers are attempting to improve the usability, friendliness, and satisfaction of their online shopping experiences by combining immersive technologies like Augmented Reality (AR) and Virtual Reality (VR) with their already-existing e-commerce businesses. These innovations are revolutionising the e-commerce sector and altering how corporations operate.
                                    </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Virtual Reality in Fashion
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">The global pandemic has sped up the ecommerce industry's fast growth, which has been ongoing for about ten years. Simply said, the enormous growth is partly attributable to quicker internet connections and improved logistics that enable next-day delivery guarantees.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">E-commerce is not flawless, though; in fact, close to 70% of online buyers still cancel their orders. All e-commerce companies are constantly looking for new technology, marketing strategies, and operational methods that will assist them lower that number. One of the cutting-edge technologies that ecommerce companies intend to leverage to support future growth and increase visitor to customer conversion is virtual reality (VR).
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">How retail brands use VR
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">The automotive sector is a pioneer in the use of virtual reality technologies. When you walk into a car showroom, you won't be able to see every model of every automobile manufacturer. Buyers can look at whatever model they choose in the VR environment, alter it, walk about it, and get into the driver's seat.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Audi, for example, has been testing a new VR system with Oculus Rift. This technology allows customers to choose the ideal configuration of the Audi they want and observe the vehicle from the inside out.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Furthermore, virtual reality allows customers to see future products. Toyota, for example, used virtual reality to advertise their new automobile. Although the real version of the car does not yet exist, everyone may imagine what it would be like to own one.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">VR is also used in the restaurant industry. For example, TGI Friday's, a well-known restaurant chain in the United Kingdom, provided a fun virtual reality experience for their customers.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">How ecommerce leverages VR
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Without a question, VR is making inroads into ecommerce because marketers recognise the immense power and promise of this captivating experience. According to an ecommerce/retail-specific survey, an astounding 66 percent of buyers are interested in purchasing things using VR.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">It is said that seeing is believing. This leads to the following conclusion: putting on clothes seals the deal. The reason for this is because customers have a strong desire to try before they buy. Customers are more likely to make additional purchases if online retailers give them with this exciting prospect.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Let's look at how popular ecommerce platforms offer VR experiences to their customers.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">You must be familiar with eBay. They opened the world's first virtual reality department store. eBay collaborated with Myer, an Australian retailer, to produce it. For the time being, users can view over 12,500 products, 100 of which are 3D.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Furthermore, price, inventory levels, and product data are updated in real time in this store. Artificial intelligence learns about users by presenting relevant items to them and remembering personal preferences.
                                    </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">VR benefits for ecommerce
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">1. Because of the rich and engaging experience, buyers may want to make more purchases than they expected.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">2. VR apps track customer behaviour. You can use this information to better your sales process in the future.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">3. VR technology saves money on the costs of opening a physical store.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">4. Customers do not have to stand in line to test anything. This process is faster and easier using VR.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">5. Some apps are compatible with both smartphones and tablets. As a result, there is no need to offer consumers with costly specialised gear. Some of them rely solely on the camera. One example is the Ikea AR app.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">6. When compared to internet buying, users have more options. It is easy to find the best thing after virtually trying it on. As a result, a company may reduce returns while increasing customer satisfaction.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">7. Retailers eliminate insecure and costly shipping of goods from producers. They no longer have to wait for delivery with VR. They can select the virtual product display, examine the item closely, and make a selection.
                                    </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">VR is the future
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">VR technology is always evolving. The price begins to fall as inexpensive VR glasses and headsets get smaller and more accessible.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">The VR sector is anticipated to produce $2.2 billion in 2018. Because of its accessibility, mobile VR is also exploding.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Google has sold over 10 million Cardboard headsets since 2014, and it is predicted that between 2 million and 3.5 million Daydream devices were sold in 2017. Meanwhile, according to analysts, Samsung is on track to sell up to 6.7 million Gear VR headsets this year.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Finally, I'd want to cite the CEO of YouVisit, a video content developer for Carnival and other firms. "We see [VR] as a very natural progression from text to photographs to movies to virtual tours to virtual reality." The fact that the virtual experiences are interactive is what distinguishes them. That involvement leads to immersion, which leads to conversion."
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">As a result, virtual reality is an excellent approach to boost conversion rates, delight customers, and outperform competitors.
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