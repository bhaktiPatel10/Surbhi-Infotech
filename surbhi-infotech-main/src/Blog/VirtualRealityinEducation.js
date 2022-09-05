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
                                    5 Applications of Virtual Reality in Education
                                </div>
                                <div className="mt-30">
                                    {/* image chenge */}
                                    <img src="images/5-reasons.png" className="blog-details-img" />
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">
                                        A thriving society is built on education, and since the dawn of civilization, the dissemination of information has been a primary goal. People are always looking for ways to make the transfer of knowledge simpler, quicker, and more efficient.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">
                                        In the era of digital gadgets, we have the chance to use technology to improve learning. The evolution of education seems to be moving toward virtual reality (VR), which is the logical next step.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">
                                        We'll demonstrate how virtual reality can change the way educational content is provided in this article.
                                    </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">What makes VR in education beneficial?
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">The usage of virtual reality can improve student engagement and learning. The idea behind virtual reality (VR) education is to create a virtual world, whether it be genuine or made up, and let people not only see it but also engage with it. Your desire to completely comprehend what you're learning increases when you're engaged in it. Processing the information will be easier on the brain.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">Here are just a few characteristics that contribute to virtual reality's effectiveness in teaching.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Applications of Virtual Reality in Education
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">1. Virtual field trips
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">One of the most common uses of VR technology for education is virtual field excursions, and many schools have started using Google Expeditions to take their pupils to remote, sometimes inaccessible, areas of the world.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Teachers can purchase some of the inexpensive cardboard headsets that can be attached to a smartphone in addition to the free Google Expedition programme, which can be downloaded on iOS or Android. Students may actively explore everything from Machu Picchu to outer space or the deep sea with these inexpensive headsets.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">2. Language immersion
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Full immersion, which compels students to listen to and speak the language they are learning 24 hours a day, every day, is one of the finest ways to learn a new language. The next best thing is virtual immersion because the majority of us cannot afford to travel abroad for several weeks or even months at a time. The brain may be fooled by virtual reality simulations, and several new language learning apps that leverage VR are now being developed.
                                    </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">3. Distance learning
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Virtual reality technology has a lot of potential for the field of distance learning, and a new study by Penn State University researchers found that it can enhance online students' learning outcomes.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">At the University of British Columbia Law School, students are taking advantage of virtual reality lectures utilising a VR social tool called VR Chat. Stanford School of Business already offers a diploma programme that is wholly delivered using VR. Students can communicate with professors and other students in virtual online chat rooms provided by the application while wearing a VR headset.
                                    </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">4. Virtual campus visits
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">The way students choose their colleges is changing as a result of technology, and many universities have started offering virtual reality campus tours as a method to communicate with prospective students on a larger scale. Students can experience what it would be like to attend institutions in various towns and countries even if they couldn't visit in person thanks to these virtual campus visits.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Students can tour schools in 360-degree virtual reality tours using images and videos of the campuses and the surrounding area. A virtual reality tour, for instance, allows students to experience what it's like to play in the university's stadium through the University of Michigan Football programme.
                                    </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">5. Philosophical theories
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Virtual reality can be used to bring philosophical beliefs to life. In order to educate students to French philosopher Rene Descartes' dream argument, the Sevenoaks School in the United Kingdom recently began utilising VR headsets in its philosophy classes.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">One of the most important philosophical works ever produced, Meditations on First Philosophy, opens with the assertion that the content of dreams and waking life can be the same. Students can now see firsthand how deep a simulation can feel and how it's possible that life is nothing more than a simulation thanks to the VR headsets.
                                    </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">VR: The new era of Education
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">The future of virtual reality in education is bright, and it will unquestionably alter the world as we know it. The classrooms of the twenty-first century will be technologically sophisticated settings for education, with VR technology considerably enhancing student engagement and learning. A whole new generation of young, intelligent students, prepared to innovate and alter the world, will be inspired by VR experiences.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">However, the next big thing in education will depend less on technology and more on a teacher's initiative to introduce these tools into the classroom. Making knowledge open, affordable, and available to everyone on the earth should be the global goal.
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