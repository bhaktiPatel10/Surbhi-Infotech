import React, { useState } from "react";
import './Heading.css'
function Heading(props) {

    return (
        <>
            <div className="head-cursar">
                <div className={`container ${props?.extraClass && props?.extraClass}`}>
                    <div className="bg-text">
                        {props.bg_text}
                    </div>
                    <div className="recent-work-heading">
                        {props.front_text}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Heading;