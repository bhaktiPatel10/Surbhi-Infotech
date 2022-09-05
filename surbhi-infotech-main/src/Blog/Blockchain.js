import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Heading from "../Common/Heading";
import Footer from "../Home/Component/footer";
import Header from "../Home/Component/Header";
import "./blog.css"

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
                                        02
                                    </div>
                                    <div className="blog-month">
                                        Apr 2022
                                    </div>
                                </div>
                            </div>
                            <div className="right-blog-details">
                                <div className="blog-details-title">
                                    How Blockchain Can Help in Data Security
                                </div>
                                <div className="mt-30">
                                    <img src="images/how-blockchain.png" className="blog-details-img" />
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-content">The old way of doing business has been disrupted by computer technology and the internet. New revenue streams continue to emerge, and business models from the past are quickly becoming obsolete. However, these advancements come at a cost: technology presents vulnerabilities in organisations and every person with an internet connection, which hackers exploit.
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Technology, on the other hand, may finally have a solution to the threat posed by cybercriminals. As attackers' tactics develop, security professionals have looked to blockchain as a potential answer.
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">What is blockchain?</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Blockchain is a distributed, decentralised electronic database that can be accessed over a public or private network. Every transaction in a blockchain database is shared among numerous users, each of whom verifies the database's accuracy and prevents the completion of illegal transactions.</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Because blockchain may simplify and eliminate third-party middlemen, it can be a more efficient and cost-effective means to communicate crucial and secret company data or personal information. It also produces an irrefutable digital trail of transactions, allowing you to audit that trail and know exactly what has been going on with your network.</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">In other words, by allowing you to create a verifiable digital record of every financial transaction, procedure, task, contract, and more, blockchain assures that you are making business decisions based on accurate, reliable data.</p>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">What is the purpose of blockchain?
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <div className="mt-15">
                                        <p className="blog-detail-content">Above all, blockchain serves as a tool for business security and accountability. A blockchain can't be controlled by a single entity since blocks of information are saved on and confirmed by various devices across the network. Changing any piece of data would necessitate overriding the entire blockchain network, which is made up of numerous devices and defined regulations. Manipulation of data becomes very impossible. Furthermore, because of the distributed nature of the technology, a blockchain does not have a single point of failure, reducing the likelihood of network disruption. If there is a failure, each device has a complete copy of the blockchain, ensuring that data is never lost.</p>
                                    </div>
                                </div>
                                <div className="mt-30">
                                    <div className="mt-15">
                                        <p className="blog-detail-content">Furthermore, blockchain generates an undeniable, unchangeable record of data that is both secure and private, as well as having been confirmed across the network. This information can assist organisations in adhering to regulatory obligations or industry-specific guidelines, and it can be important if the company is audited or sued.
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-30">
                                    <div className="mt-15">
                                        <p className="blog-detail-content">Blockchain is a framework that allows everyone to be held to the highest level of accountability. There will be no more missing transactions, human or machine errors, or even exchanges that were not done with the parties' consent.</p>
                                    </div>
                                </div>
                                <div className="mt-30">
                                    <div className="mt-15">
                                        <p className="blog-detail-content">To put it another way, blockchain establishes the highest level of data trust. This is useful not only for Bitcoin's blockchain applications, but also for many other types of record-keeping or transaction data, as well as for securing and verifying digital assets.
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">What is blockchain’s role in security?</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">When it comes to minimising security concerns and preventing data leaks and attacks, blockchain can be a game-changer, allowing businesses in a variety of industries to:
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Secure asset custody: Because every transaction is confirmed by many devices on the network, assets that have their security on the blockchain are more secure. Some projects are attempting to expand asset custody beyond digital currency to include land registries, securities, futures, loans, and even art.</li>
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Secure smart edge devices: IoT platforms with connected smart items are vulnerable to a variety of threats, making them difficult to secure and maintain. The hash-based security and verification mechanism used by blockchain can improve authentication and help to alleviate many of the technology's problems.</li>
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Protect identity and personal data: Decentralized identification solutions based on blockchain are being developed to provide people more control over their data. Today, we rely on third companies to keep track of our credit histories and personal health information. Individuals could regain ownership of their personally identifiable data thanks to blockchain technology.</li>
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Secure audit trails: Blockchains are timekeeping technologies that give a verifiable data history, so they can essentially tell you what's going on — and what has gone on — with the data on your network.</li>
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Reduce downtime: The system will continue to function even if certain devices fail or are attacked because the technology has no single point of failure and numerous copies of the blockchain are maintained.</li>
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Increase customer trust: You can guarantee your consumers a higher level of data security with blockchain.</li>
                                    </p>
                                </div>

                                <div className="mt-30">
                                    <p className="blog-detail-sub-heading">Benefits of Blockchain Technology?</p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content">Here's a rundown of the main advantages you may expect from using Blockchain technology into your company:
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>It's an immutable public digital ledger, which means transactions can't be changed once they've been recorded.</li>
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Blockchain is always secure due to the encryption feature.</li>
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Because the ledger is updated automatically, the transactions are completed quickly and transparently.</li>
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>There is no need for an intermediate charge because it is a decentralised system.</li>
                                    </p>
                                </div>
                                <div className="mt-15">
                                    <p className="blog-detail-content"><li>Participants verify and validate the legitimacy of a transaction.</li>
                                    </p>
                                </div>

                                <div className="mt-30">
                                    <div className="blog-detail-sub-heading">
                                        <p>Final words</p>
                                    </div>
                                    <div className="mt-30">
                                        <p className="blog-detail-content">Blockchain technology provides businesses with a secure and private means to keep track of crucial data while also increasing productivity and maybe lowering expenses in the long term. However, it is a sophisticated new technology, and implementing it will be difficult.
                                        </p>
                                    </div>
                                    <div className="mt-15">
                                        <p className="blog-detail-content">Surbhi Infotech is one of India's leading IT firms. For all of your Ecommerce website development needs, contact us immediately.
                                        </p>
                                    </div>
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
                                <div className="date-row">
                                    <span className="blog-date blog-date-hover">28</span>
                                    <span className="blog-month">Apr 2022</span>
                                </div>
                                <div className="related-blog-tilte">
                                    Evolution or Revolution Content Creation
                                </div>
                                <div className="related-blog-description">
                                    Lorem ipsum dolor sit amet phasellus pretium ad iaculis. Sollicitudin habitant penatibus vitae rhoncus neque porta. Litora odio curae nisi dictum torquent rhoncus consectetuer.
                                </div>
                            </div>
                            <div className="related-blog-details right-space">
                                <div className="date-row">
                                    <span className="blog-date  blog-date-hover">02</span>
                                    <span className="blog-month">Apr 2022</span>
                                </div>
                                <div className="related-blog-tilte">
                                    Evolution or Revolution Content Creation
                                </div>
                                <div className="related-blog-description">
                                    Lorem ipsum dolor sit amet phasellus pretium ad iaculis. Sollicitudin habitant penatibus vitae rhoncus neque porta. Litora odio curae nisi dictum torquent rhoncus consectetuer.
                                </div>
                            </div>
                            <div className="related-blog-details right-space">
                                <div className="date-row">
                                    <span className="blog-date  blog-date-hover">02</span>
                                    <span className="blog-month">Apr 2022</span>
                                </div>
                                <div className="related-blog-tilte">
                                    Evolution or Revolution Content Creation
                                </div>
                                <div className="related-blog-description">
                                    Lorem ipsum dolor sit amet phasellus pretium ad iaculis. Sollicitudin habitant penatibus vitae rhoncus neque porta. Litora odio curae nisi dictum torquent rhoncus consectetuer.
                                </div>
                            </div>
                            <div className="related-blog-details">
                                <div className="date-row">
                                    <span className="blog-date  blog-date-hover">02</span>
                                    <span className="blog-month">Apr 2022</span>
                                </div>
                                <div className="related-blog-tilte">
                                    Evolution or Revolution Content Creation
                                </div>
                                <div className="related-blog-description">
                                    Lorem ipsum dolor sit amet phasellus pretium ad iaculis. Sollicitudin habitant penatibus vitae rhoncus neque porta. Litora odio curae nisi dictum torquent rhoncus consectetuer.
                                </div>
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