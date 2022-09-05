import React, { useEffect } from 'react';
import './CaseStudy.css';
// import '../Home/Component/CaseStudy/CaseStudy.css';
import Footer from '../Home/Component/footer';
import Header from '../Home/Component/Header';
import Heading from '../Common/Heading';
// import '../Home/Component/CaseStudy.css';


const CaseStudy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Header />
            <Heading bg_text="Case Study" front_text="Case Study" />
            <div className='casestudy-container'>
                <div className='center-casestudy'>
                    <div>
                        <div className="main-case-study">
                            <div className="case-left">
                                <div className="case-img casestudy-left-img">
                                    <img src="images/case1.png" />
                                </div>
                            </div>
                            <div className="case-img-two">
                                <img src="images/casebg.png" />
                            </div>
                            <div className="case-right">
                                <div className="case-text">
                                    <p>Website UI/UX Design <span className="line-width"></span> <span className="line-width2 ">India </span></p>
                                    <h1>Octics <br />Buy your looks</h1>
                                    <h1 className="stock-caseone">Octics <br />Buy your looks</h1>
                                </div>
                            </div>
                        </div>
                        <div className="main-case-study">
                            <div className="case-right custom-case-right">
                                <div className="case-text">
                                    <p className='new-p-case-text'>Website UI/UX Design <span className="line-width"></span> <span className="line-width2 ">India </span></p>
                                    <h1 className='cu-case-mr'>Octics AR <br /> Buy your looks</h1>
                                    <h1 className="stock-casethree cu-case-mr ">Octics AR <br /> Buy your looks</h1>
                                </div>
                            </div>
                            <div className="case-left casestudy-custom-left">
                                <img src="images/casebg.png" />
                            </div>
                            <div className="case-img-two">
                                <div className="case-img casestudy-left-img casestudy-custom-left">
                                    <img src="images/case2.png" />
                                </div>
                            </div>
                        </div>
                        <div className="main-case-study">
                            <div className="case-left">
                                <div className="case-img casestudy-left-img">
                                    <img src="images/case3.png" />
                                </div>
                            </div>
                            <div className="case-img-two">
                                <img src="images/casebg.png" />
                            </div>
                            <div className="case-right">
                                <div className="case-text">
                                    <p>Website UI/UX Design <span className="line-width"></span> <span className="line-width2 ">India </span></p>
                                    <h1>POS <br />Web Application</h1>
                                    <h1 className="stock-caseone ">POS <br />Web Application</h1>
                                </div>
                            </div>
                        </div>
                        <div className="main-case-study">
                            <div className="case-right custom-case-right">
                                <div className="case-text">
                                    <p>Website UI/UX Design <span className="line-width"></span> <span className="line-width2 ">India </span></p>
                                    <h1>ChirplyWeb</h1>
                                    <h1 className="stock-casetwo ">ChirplyWeb</h1>
                                </div>
                            </div>
                            <div className="case-left casestudy-custom-left">
                                <img src="images/casebg.png" />
                            </div>
                            <div className="case-img-two">
                                <div className="case-img casestudy-left-img casestudy-custom-left">
                                    <img src="images/case1.png" />
                                </div>
                            </div>
                        </div>
                        <div className="main-case-study">
                            <div className="case-left">
                                <div className="case-img casestudy-left-img">
                                    <img src="images/case3.png" />
                                </div>
                            </div>
                            <div className="case-img-two">
                                <img src="images/casebg.png" />
                            </div>
                            <div className="case-right">
                                <div className="case-text">
                                    <p>Website UI/UX Design <span className="line-width"></span> <span className="line-width2 ">India </span></p>
                                    <h1>Zoomin</h1>
                                    <h1 className="stock-casefour ">Zoomin</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
};

export default CaseStudy;