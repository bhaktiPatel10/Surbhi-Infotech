import React, { useEffect } from "react";
import './ThankYou.css';
import { useNavigate } from "react-router-dom";
import Footer from "../Home/Component/footer";
import Header from "../Home/Component/Header";
const ThankYou = () => {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Header />
            <div className="content-page-center">
                <div className="">
                    <div className="new-modal-hedding-thank-you">
                        <h3>Thank You For Connecting Us!</h3>
                    </div>
                    <div className="line-in-inline">
                        <div className="only-line">&nbsp;</div>
                    </div>
                    <div className="content-thankyou">
                        <h3>We Will be In Touch With You Shortly.</h3>
                    </div>
                    <div className="line-in-inline">
                        <div className="only-line">&nbsp;</div>
                    </div>
                    <div className="btn-center">
                        <button type="button" onClick={() => { navigate('/'); }} className="explore-more-btn">Explore More</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default ThankYou