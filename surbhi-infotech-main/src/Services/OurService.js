import React, { useEffect } from "react";
import './ServiceDetails.css';

const OurService = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    // const [onSliderChange, setOnSliderChange] = useState(false);
    return (
        <div className="service-slider" >
            <div className={`active-new-services`}>
                <div className="logo-service ">
                    <img className="img-service-logo" src={props?.img} alt="" />
                    {/* {
                        props.svg
                    } */}
                </div>
                <div className="log-descri-ser">
                    <h2>{props?.heading}</h2>
                    <h2>{props?.heading2}</h2>

                </div>
            </div>


        </div>
    )
}

export default OurService;
