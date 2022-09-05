import React, { useEffect } from "react";
import Heading from "../Common/Heading";
import Blog from "../Home/Component/blog";
import Footer from "../Home/Component/footer";
import Header from "../Home/Component/Header";
import './blog.css';
import '../Common/Loader.css'
import Helmet from "react-helmet";
const BlogList = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.getElementsByTagName("meta")["title"].content = "Blog | Surbhi Infotech- Best Web Application Development Company";
        document.getElementsByTagName("meta")["description"].content = "Best Web Application Development Company. Follow the Surbhi Infotech Blog to find out about the latest digital innovations, insights and tech trends from the digital experts.";
        document.getElementsByTagName("meta")["url"].content = "https://www.surbhiinfotech.com/blog";
    }, []);
    return (
        <>
            {/* <Helmet>
                <meta name="title" content={"Blog | Surbhi Infotech- Best Web Application Development Company"} />
                <meta name="description" content={"Best Web Application Development Company. Follow the Surbhi Infotech Blog to find out about the latest digital innovations, insights and tech trends from the digital experts."} />
                <meta name="url" content={"https://www.surbhiinfotech.com/blog"} />
            </Helmet> */}
            <Header />
            <section className="main-sec-one">
                <div className="container-new">
                    <div className="blog-animate-container">

                        <Heading bg_text="Blog" front_text="Blog" />
                        <div className="blog-container" >
                            <div className="blog-row">
                                <div className="blog-width">
                                    <Blog date="24" month_year='Aug 2022' title="5 Reasons Machine Learning Is the Future of Marketing" decription='When you heard the words "artificial intelligence" a few decades ago, the first thing that came to mind was probably the rise of the robots and the Terminator with a sawed-off shotgun.' url="/5-reason-machine-learning" last={true} />
                                </div>
                                <div className="blog-width">
                                    <Blog date="15" month_year='June 2022' title="3 Ways Virtual Reality Will Transform ECommerce" decription="The demand for innovative and enhanced shopping experiences has increased in recent years. Customer attitudes around ecommerce have shifted dramatically" url="/virtual-reality" last={true} />
                                </div>
                                <div className="blog-width">
                                    <Blog date="10" month_year='June 2022' title="The Future Of Virtual Reality In Business" decription="Virtual Reality (VR) has recently risen to prominence as a result of the release of a slew of low-cost, consumer-friendly VR headsets." url="/future-virtual-reality" last={true} />
                                </div>
                                <div className="blog-width">
                                    <Blog date="17" month_year='May 2022' title="How Blockchain Can Help In Data Security" decription="The old way of doing business has been disrupted by computer technology and the internet. New revenue streams continue to emerge, and business models from the past are quickly becoming obsolete." url="/blockchain" last={true} />
                                </div>
                                <div className="blog-width">
                                    <Blog date="28" month_year='Apr 2022' title="Shopify VS WooCommerce: Which one is better for your business?" decription="It's never been easier to shop online, and it's even easier to set up your own online business. There are plenty of eCommerce platforms available to assist you in getting your business online, ranging from full website builders for novices to DIY solutions for the tech-savvy." url="/woocommerce" last={true} />
                                </div>
                                <div className="blog-width">
                                    <Blog date="28" month_year='Apr 2022' title="Shopify VS Magento: Why Shopify is better than Magento" decription="Having trouble deciding between Magento and Shopify as the best eCommerce platform? You're not alone, to be sure. On the internet, there is a lot of discussion about Magento vs Shopify. " url="/shopify-magento" last={true} />
                                </div>
                                <div className="blog-width">
                                    <Blog date="23" month_year='Apr 2022' title="Difference Between User Interface (UI) And User Experience (UX)" decription="UI and UX are two of the most confusing terms in online and app development, especially for beginners. Because the terms User Interface (UI) and User Experience (UX) are frequently used interchangeably (as UI/UX), many people believe they relate to the same thing." last={true} url="/ui-ux" />
                                </div>
                                <div className="blog-width">
                                    <Blog date="23" month_year='Apr 2022' title="Benefits of Shopify for eCommerce Startups" decription="E-commerce has completely transformed the economic landscape, with sellers displaying their wares online rather than in physical locations. As a result, there is a need to create e-commerce businesses that are aesthetically pleasing while also being functional." last={true} url="/e-commerce" />
                                </div>
                                <div className="blog-width">
                                    <Blog date="04" month_year='Apr 2022' title="10 Reasons To Choose Shopify for Your Ecommerce Store." decription="The emergence of eCommerce has impacted the retail landscape in unanticipated ways. Shopify is a huge name when it comes to the best eCommerce platforms, but have you ever wondered why you've been considering them? When it comes to Ecommerce, Shopify is the first name that leaps to mind for almost everyone, and with good reason." url="/shopify" last={true} />
                                </div>
                                <div className="blog-width">
                                    <Blog date="02" month_year='Apr 2022' title="Cross-Platform vs. Native Mobile App Development – Which one is better?" decription="From the perspective of the user, the mobile app should provide a solution to the specific problem while also providing a pleasant user experience. The creators desire to meet their business objectives and create a profit" url="/cross-platform" last={true} />
                                </div>
                                <div className="blog-width">
                                    <Blog date="02" month_year='Apr 2022' title="Un Ultimate Guide To Turn Your Shopify Store Into An App" decription="A mobile phone is used by more than 5 billion individuals, or more than 63 percent of the world's population. Customers are increasingly communicating with brands via mobile devices while on the road." url="/shopify-store" last={true} />
                                </div>


                                <div className="blog-width">
                                    <Blog date="01" month_year='Jan 2022' title="How Entrepreneurs Can Use AI To Boost Their Business" decription="According to a Gartner survey, AI is used by 37% of businesses (Artificial Intelligence)." url="/entrepreneurs" last={true} />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
};

export default BlogList;