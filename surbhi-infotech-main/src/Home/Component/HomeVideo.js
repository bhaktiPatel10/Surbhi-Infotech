import React, { useState, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../Video.css"

function HomeVideo(props) {
    const videoRef = useRef();
    const [playing, setPlaying] = useState(false);
    const videoHandler = (control) => {
        if (control === "play") {
            videoRef.current.play();
            setPlaying(true);
        } else if (control === "pause") {
            videoRef.current.pause();
            setPlaying(false);
        }
    };


    return (
        <>
            <div className="slider-section home-banner-section">
                {/* <LazyImage src="" alt="" className="video-width" /> */}
                {/* <LazyLoadImage
                    
                    effect="blur"
                /> */}
                <img alt='img'
                    src='images/Rectangle 19-compressed.jpg'
                    threshold={100}
                    className="video-width" />
                {/* <video  autoplay src="https://video.xx.fbcdn.net/v/t66.36240-2/45220936_5762591567124340_800763023552107613_n.mp4?_nc_cat=102&ccb=1-7&_nc_sid=985c63&efg=eyJybHIiOjIwNTgsInJsYSI6MTAyNCwidmVuY29kZV90YWciOiJvZXBfaGQifQ%3D%3D&_nc_ohc=mol51kyqN-IAX_yBQvy&rl=2058&vabr=1372&_nc_ht=video.famd1-1.fna&oh=00_AT_h_PJ7fkowbBuRXqoe4J__XVCSsGePHolIF_Dfoo_sfA&oe=63147410" ></video> */}
                {/* <video className="video-width" src="https://video.xx.fbcdn.net/v/t66.36240-2/45220936_5762591567124340_800763023552107613_n.mp4?_nc_cat=102&ccb=1-7&_nc_sid=985c63&efg=eyJybHIiOjIwNTgsInJsYSI6MTAyNCwidmVuY29kZV90YWciOiJvZXBfaGQifQ%3D%3D&_nc_ohc=mol51kyqN-IAX_yBQvy&rl=2058&vabr=1372&_nc_ht=video.famd1-1.fna&oh=00_AT_h_PJ7fkowbBuRXqoe4J__XVCSsGePHolIF_Dfoo_sfA&oe=63147410" autoplay="" loop="infinity" muted="muted" playsinline="" controlslist="nodownload"></video> */}
                {/* <video className="video-width" src="images/video-temp.mp4" autoplay="" loop="infinity" muted="muted" playsinline="" controlslist="nodownload"></video> */}
                {/* <video playsinline autoplay muted loop className="video-width" >
                    <source src="https://video.xx.fbcdn.net/v/t66.36240-2/45220936_5762591567124340_800763023552107613_n.mp4?_nc_cat=102&ccb=1-7&_nc_sid=985c63&efg=eyJybHIiOjIwNTgsInJsYSI6MTAyNCwidmVuY29kZV90YWciOiJvZXBfaGQifQ%3D%3D&_nc_ohc=mol51kyqN-IAX_yBQvy&rl=2058&vabr=1372&_nc_ht=video.famd1-1.fna&oh=00_AT_h_PJ7fkowbBuRXqoe4J__XVCSsGePHolIF_Dfoo_sfA&oe=63147410" type="video/mp4" />
                </video> */}
                {/* {
                    playing ? (\
                        <img
                            onClick={() => videoHandler("pause")}
                            className="controlsIcon--small"
                            alt=""
                            src="images/pu.png"
                        />
                    ) : (
                        <img
                            onClick={() => videoHandler("play")}
                            className="controlsIcon--small"
                            alt=""
                            src="images/Group 10.png"
                        />
                    )
                } */}
            </div>
        </>
    )
}

export default HomeVideo;