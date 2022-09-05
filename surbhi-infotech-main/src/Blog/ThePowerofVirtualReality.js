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
                                    The Power of Virtual Reality in Real Estate: Does VR Invade the Market?
                                </div>
                                <div className="mt-30">
                                    {/* image chenge */}
                                    <img src="images/5-reasons.png" className="blog-details-img" />
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">
                                        Many organisations have now figured out how to employ virtual reality technology for commercial and practical objectives. As a result, real estate businesses are growing by utilising VR technology to create new business prospects.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">
                                        This technology has the potential to completely transform the multibillion-dollar real estate sector. In reality, it will enhance the experience and bring up new opportunities for real estate enthusiasts.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">How to Make a Real Estate Virtual Tour</p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">When the first major VR platforms were released, they were seen as luxury things for the wealthy. More cheap alternatives, such VR the Oculus Rift and HTC Vive, eventually made their way into consumer markets, although they were still viewed primarily as instruments for playing video games or experiencing immersive experiences. Only in the last 5 years or so have businesses begun to reconsider technology and adapt it to their business needs. This trend is not limited to the real estate industry.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">In the coming years, the real estate business may be the largest to be altered by virtual reality. According to Goldman Sachs research, the global market for virtual reality in the real estate industry might be worth $2.6 billion by 2025. This figure is sufficient for real estate companies to recognise the potential of virtual reality in the real estate market. In this article, we'll look at how virtual reality can impact the real estate sector.
                                    </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">How Does Virtual Reality Aid Real Estate Agents?
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">If used correctly, virtual reality will give a lot of benefits to real estate brokers, their companies, and their consumers. Among these advantages are the following:
                                    </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">The realtor visits the house less frequently.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">A realtor must be intimately familiar with a property in order to promote it effectively. As a result, in order to be fully informed, they frequently return to the location to add to their notes and refresh their memory. When a person is juggling a dozen such properties, the travels consume a tremendous amount of time and gasoline. Fortunately, a digital model of the house can cut down on the number of journeys required and allow the specialist to "return" to the property without ever getting in their automobile.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Customers can do window shopping. virtually
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Window shopping is the practise of inspecting things and products for purchase from a distance. A VR simulation can provide the same effect, allowing prospective house buyers to tour and appraise a building from a distance. This is quite convenient for a variety of reasons. For starters, there is no pressure from the agent, and the customer can investigate at their leisure. Second, they do not have to go a considerable distance to receive a tour, which removes the disappointment of investing time and money in a physical visit just to discover that the house is wrong for their purposes. All a customer needs is access to the simulation and the appropriate gear.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Cost savings
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Although constructing a simulation of this type requires some investment, the costs are offset by the savings that can be realised through its use. To begin with, fuel costs are decreased for both agents and prospective customers because they can visit the property remotely, reserving in-person visits for only the most serious clients. Furthermore, estate services are unlikely to need to invest in additional marketing and promotional materials when they can just provide access to this simple resource. Finally, allowing realtors tour access saves them time and allows them to get more done during their workday.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Creating emotional bonds</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Few technologies are as immersive as virtual reality, which can digitally place you in the shoes of a human strolling around a building/home. The realism, recognisable mechanics, and interactive aspects all add to a very immersive experience that can aid in the formation of an emotional connection with a location. If they go inside and fall in love with the woodwork and decorations, they would most likely want to see and feel it in person. This impression is difficult to achieve if you rely entirely on a film, pictures, or other out-of-date advertising materials.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Customization is limitless.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Unlike physical structures, simulated tours and walkthroughs can be easily altered. From the perspective of the realtor, you can tailor the tour to appeal to a specific type of customer. For example, if the consumer is a visual learner, you might want to emphasis on lighting, interior design, zoom features, and detail; or pop-up windows with specific data, statistics, and measurements for people who want to see the figures. You can quickly add elements for the client to personalise, such as adding furniture, changing the layout and colouring of a home, selecting potential interior design products they may wish to buy (vCommerce), and much more.
                                    </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Typical elements you would wish to include in your digital tour
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Freedom of movement
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">People are inquisitive beings who enjoy exploring. Thus, mobility is a feature that will allow customers to fulfil their curiosity and inspect the things that are most important to them. Our VR Hotel software, for example, allows hotel guests, employees, and stakeholders to explore every room and floor of the property. It truly seems like an adventure!
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Customizations to the interior
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Prospective real estate buyers imagine how the place will look when they live/work there as part of the shopping process. You can make this part of the process more easier by offering consumers the ability to personalise interior and outdoor components such as wall colours, decorations, and light levels. Program-Room Ace's Configurator application, which includes an apartment and various menus with alteration possibilities, has similar customization features.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Dimensions of space
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Keeping with the customisation concept, customers prefer to think out how they will arrange their primary furnishings, plants, and other decorations - will there be enough space? Thankfully, features like those in our immersive FurnitARe app allow users to upload 3D models of their accessories and visualise how much space they would take up. This is far more convenient than looking at a floor layout and manually taking measurements.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Characteristics and descriptions
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">While visuals are important in tours, they are not the only thing that clients expect to receive; they also require information. Thus, you can combine point-and-click mechanics into software that will provide customers with pertinent information about the property, such as area, construction materials, pricing, number of bedrooms, utilities, and so on. They won't have to wait for a conversation with a realtor to find out something very significant to them.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Guided tour
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">A guided tour is often conducted at a leisurely pace, with pertinent facts and key features of the home highlighted during the walkthrough. For example, you might utilise this walkthrough animation of a house (made by our team) as a starting point for a simple guided tour. If you want to go above and above, you may even include a virtual assistant who will provide information on the property in voiceover.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Sharing and saving
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Some sales take time, and users frequently consider several options before returning to the one they prefer. This is very widespread in the real estate industry. Thus, you can add save/share capability to your tour to make your offerings stand out and stay in the minds of customers. It could be an app, a video file, or simply a link to a page where they experienced the walkthrough.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">What VR services do we provide for the real estate market?
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Despite the fact that virtual reality is a relatively small sector in the vast world of software development, there are numerous organisations and studios that specialise in this form of development and can assist you with your project. Surbhi Infotech is one among them.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Our extensive expertise producing virtual reality software has given us the ability to produce projects of varying size and class, while our background in construction and real estate makes us uniquely qualified to handle a combination of the two. We created the VR Hotel app, as well as several additional walkthroughs and virtual tours that bring genuine houses and structures to the screen of a headset, computer, or mobile device.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">When you work with Surbhi Infotech, you can anticipate a dynamic, thorough, and immersive experience that will help your company cut expenses, differentiate itself from competitors, and offer a lot of ease to the property selling business.
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