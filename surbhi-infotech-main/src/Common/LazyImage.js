import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const LazyImage = (props) => {
    return (
        <LazyLoadImage
            alt={props?.alt ? props?.alt : ""}
            height={props?.height ? props?.height : ""}
            src={props?.src ? props?.src : ""} // use normal <img> attributes as props
            width={props?.width ? props?.width : ""}
            className={props?.className ? props?.className : ""}
            effect="blur"
            visibleByDefault={true}
            placeholderSrc="data:image/jpeg;base64,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"
        />
        // <img src={props?.src} alt={props?.alt ? props?.alt : ""} height={props?.height ? props?.height : ""} width={props?.width ? props?.width : ""} className={props?.className ? props?.className : ""} />
    )

};

export default LazyImage;