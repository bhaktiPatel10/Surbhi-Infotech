import React from "react";
import './Loader.css'
const Loader = () => {

    return (
        <>
            {/* <video autoPlay="autoplay" muted width={"100%"} height={"100%"}>
                <source src="images/video.mp4" type="video/mp4" />
            </video> */}
            <div className="flexbox">
                <div>
                    <img src="images/Render 2.gif" />
                </div>
            </div>
            {/* <div className="change-screen-container">
                <div className="reviews-block">
                    <div className="review-title">
                        “Their design quality is the best i’ve
                        <div >
                            ever seeen”
                        </div>
                    </div>
                    <div className="review-desc">
                        Emily Cooper - CEO & Founder - Victoria Pvt .Ltd
                    </div>
                    <div className="review-start-row">
                        <div> Clutch 5.0</div>
                        <div>
                            <img src="images/starts.png" alt="" />
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Loader