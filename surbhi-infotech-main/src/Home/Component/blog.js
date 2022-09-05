import React, { useState } from "react";
import "./blog.css"
import BlogDetails from "../../Blog/BlogDetails";
import { NavLink } from "react-router-dom";


const Blog = (props) => {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div className="blog-width-new">
            <NavLink to={props?.url}>
                <div className="slider-section pedding-bottom-blog">
                    <div className="blog-details">
                        <div className="blog-padding">
                            <div className=' d-flex'>
                                <div className='blog-date'>
                                    {props.date}
                                </div>
                                <div className="blog-month">
                                    {props.month_year}
                                </div>
                            </div>
                            <div className='blog-tilte'>
                                {props.title}
                            </div>
                            <div className='blog-description'>
                                {props.decription}
                            </div>
                            {showPopup && <div className="tooltip"><img src="images/Rectangle 65.png" /></div>}
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default Blog;