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
                                    How can Virtual Reality be used to improve Education?
                                </div>
                                <div className="mt-30">
                                    {/* image chenge */}
                                    <img src="images/5-reasons.png" className="blog-details-img" />
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">
                                        Virtual reality has made significant progress in many areas of our daily life. Virtual reality has been mentioned repeatedly over the years as having the potential to play an essential role in how individuals educate and in education as a whole.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">
                                        A few new teaching methods have been added due to technology integration in classrooms over the years, which can assist teachers in giving their pupils a better educational experience. Additionally, virtual reality has been crucial in this. Here are a few ways that virtual reality technology is improving education.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">
                                        The potential for educational technology is tremendous, especially in light of recent developments in niche fields like virtual reality (VR). This article will explore how virtual reality (VR) might enhance education generally and provide examples of the technology per topic area.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">
                                        Virtual reality refers to computer-produced simulations that let users engage with a simulated three-dimensional visual or another sensory world. By enabling students to interact with and experience their teachings in various ways, virtual reality (VR) improves learning. Students are better equipped to understand complex topics since they can see what they are learning rather than just reading about them.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">
                                        Below, we'll give some examples of how virtual reality can be applied in various academic subject areas.
                                    </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">How Virtual Reality can be helpful in Mathematics
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">One of the most crucial subjects we learn as youngsters are mathematics. Math helps us describe the world around us and teaches us how to solve problems. Through improved visualization, virtual reality can aid students in learning some of the more complex math topics.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Division practice in third grade teaches us about dividing things into manageable bits. By physically transferring the baseballs to three distinct buckets, a learner might practice dividing a set of them into three equal halves in a virtual environment.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">When learning the order of operations (PEMDAS) in the fifth grade, students may use virtual reality to manipulate arithmetic symbols and solve problems. Students could see how mistakenly moving a symbol altered the solution.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Learning the likelihood of compound events in seventh grade might be challenging. Students should determine the possibility of rolling a five using a six-sided die. Students could virtually roll a dice 100 times to see how many times they moved a five after learning that the likelihood is approximately 11%.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">How Virtual Reality can be helpful in Science
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Students need critical thinking and problem-solving skills in today's world, which science provides. Many schools cannot afford the roughly $323,000 price tag for a science lab that seats 24 kids. Virtual reality can help with that.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">What occurs when alkali metal is dissolved in water? Or when copper and nitric acid are combined? Is there any risk? Virtual reality allows students to experiment safely with various chemicals in a virtual laboratory setting.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Students who struggle to understand some sciences from a textbook can benefit from using virtual reality to study those subjects. Explore the skeletal system or go on a virtual reality tour of a human cell. Observe how the human heart circulates blood throughout the body. Take on the role of a virtual paleontologist and discover dinosaur bones all around the planet.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">How Virtual Reality can be helpful in Social Studies
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Social studies is the study of how individuals interact with one another. This subject is covered at school and includes the social sciences such as politics, economics, geography, and history.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">As mentioned in our piece on technology in the classroom, students can take a virtual field trip while studying history. They can explore the Giza plateau, see what life was like in ancient China or ancient Greece, and climb the steps of El Castillo at Chichen Itza in Mexico. Through virtual reality, students might discover different civilizations and travel there on the same day.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Virtual reality in geography can place pupils on Mount Everest or at the Mariana Trench. Students can travel along the Nile River in Africa or explore a cave formation in South America. Students immersed in geography have a greater understanding of the climate, landforms, water bodies, and natural resources.
                                    </p>
                                </div>


                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">How Virtual Reality can be helpful in Physical Education
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Virtual reality can assist kids in learning everything from individual sports to nutrition in physical education.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Due to space or equipment restrictions, not all sports can be practised on school grounds; VR can remove some of those obstacles. Students can participate in a virtual match during physical education class to experience the sport of cricket while learning about its rules and tactics. While teachers instruct the students to line up at the free throw line and grade them on their positioning, kids can take a quiz on basketball.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Additionally, instruction on how to correctly use gym equipment could be given to students. Students would learn how to use exercise machines, free weights, and other exercise equipment to develop their bodies by visiting a virtual gym with a digital trainer.
                                    </p>
                                </div>


                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">How Virtual Reality can be helpful in Language Arts
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">While learning to write, pupils may find it challenging to tell stories. By assisting students in visualising concepts, virtual reality can aid in developing several writing styles, including expository, descriptive, persuasive, and narrative.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Expository writing aims to clarify a subject. Students might be asked to write about what they want to be when they grow up and why they think that would be a fantastic job as part of an assignment. Suppose the student desires to become a doctor. In virtual reality, the learner might pretend to be a doctor and role-play treating a patient. The learner might explore the virtual medical facility, view the patient's record, and contribute to the diagnosis. Their understanding of the position would improve thanks to this experience, which would aid students with their essay writing.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">A person, place, or thing is intended to be described in descriptive writing. Writing a descriptive essay about the Biltmore House on the Vanderbilt Estate in Asheville, North Carolina, could be one of your assignments. To improve presentation abilities, you might take this a step further by having the student conduct a historical study on the Biltmore House and give the entire class a virtual reality tour of it. With the aid of a VR headset, the learner may explore the whole 178,000 square feet and get a genuine sense of what it's like to be there.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Conclusion
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">As you can see, VR has a lot of potential to enhance education. These are just a few possible applications for virtual reality and other technologies in education, along with their advantages for students.  We at Surbhi Infotech can develop a VR solution for your school projects. Get in touch with us!
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