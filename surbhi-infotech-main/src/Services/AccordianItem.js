import React, { useState } from "react";
import './ServiceDetails.css'
const AccordianItem = (props) => {

    const [showDesc, setShowDesc] = useState(props?.isopen == true ? true : false);
    return (
        <>
            <div className="accordian-row">
                <div className="accordian-row-title border-bottom active-border" onClick={() => { setShowDesc(!showDesc); }}>
                    <div className="accordian-title">
                        {props?.title}
                    </div>
                    <div>
                        {
                            showDesc ?
                                <img src="images/arrow-active.png" alt="" /> :
                                <img src="images/down-arrow.png" alt="" />
                        }

                    </div>
                </div>
                {showDesc && <div className="accordian-description">
                    {props?.description}
                    {
                        props?.ulli && <>
                            <ul className="custom-point">
                                <li className="d-flex-center">
                                    {props?.ulli && <img src='images/check-mark.png' className="mr-2" />}
                                    {props?.ulli}
                                </li>
                                <li className="d-flex-center">
                                    {props?.ulli2 && <img src='images/check-mark.png' className="mr-2" />}
                                    {props?.ulli2}
                                </li>
                                <li className="d-flex-center">
                                    {props?.ulli3 && <img src='images/check-mark.png' className="mr-2" />}
                                    {props?.ulli3}
                                </li>
                                <li className="d-flex-center">
                                    {props?.ulli4 && <img src='images/check-mark.png' className="mr-2" />}
                                    {props?.ulli4}
                                </li>
                                <li className="d-flex-center">
                                    {props?.ulli5 && <img src='images/check-mark.png' className="mr-2" />}
                                    {props?.ulli5}
                                </li>
                                <li className="d-flex-center">
                                    {props?.ulli6 && <img src='images/check-mark.png' className="mr-2" />}
                                    {props?.ulli6}
                                </li>
                                <li className="d-flex-center">
                                    {props?.ulli7 && <img src='images/check-mark.png' className="mr-2" />}
                                    {props?.ulli7}
                                </li>
                                <li className="d-flex-center">
                                    {props?.ulli8 && <img src='images/check-mark.png' className="mr-2" />}
                                    {props?.ulli8}
                                </li>
                            </ul>
                        </>
                    }

                </div>}
            </div>
        </>
    )
}

export default AccordianItem;