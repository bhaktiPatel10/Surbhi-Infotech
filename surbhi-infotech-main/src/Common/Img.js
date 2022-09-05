import React from 'react';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';
const Img = (props) => {
    return (
        // <LazyLoadImage
        //     alt={props?.alt ? props?.alt : ""}
        //     height={props?.height ? props?.height : ""}
        //     src={props?.src ? props?.src : ""} // use normal <img> attributes as props
        //     width={props?.width ? props?.width : ""}
        //     className={props?.className ? props?.className : ""}
        //     effect="blur"
        //     visibleByDefault={true}
        // />
        <img src={props?.src} alt={props?.alt ? props?.alt : ""} height={props?.height ? props?.height : ""} width={props?.width ? props?.width : ""} className={props?.className ? props?.className : ""} />
    )

};

export default Img;