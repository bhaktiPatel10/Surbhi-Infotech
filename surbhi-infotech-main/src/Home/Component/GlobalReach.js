import React, { useState } from "react";
import "./GlobalReach.css"
// import Globe from 'react-globe.gl';
import CountUp from 'react-countup';
function GlobalReach() {
    const [activePoint, setActivePoint] = useState("india");
    // const globeEl = useRef();

    // useEffect(() => {
    //     globeEl.current.controls().enableZoom = false;
    // }, []);


    // const arcsData = [
    //     {
    //         startLat: 40.416775,
    //         startLng: -3.703790,
    //         endLat: 21.170240,
    //         endLng: 72.831062,
    //         color: [['white', 'pink', 'green', 'yellow'][Math.round(Math.random() * 3)], ['white', 'pink', 'green', 'yellow'][Math.round(Math.random() * 3)]]
    //     },
    //     {

    //         startLat: 21.170240,
    //         startLng: 72.831062,
    //         endLat: 24.466667,
    //         endLng: 54.366669,
    //         color: [['white', 'pink', 'green', 'yellow'][Math.round(Math.random() * 3)], ['white', 'pink', 'green', 'yellow'][Math.round(Math.random() * 3)]]
    //     },
    //     {

    //         startLat: 41.016621,
    //         startLng: -92.430550,
    //         endLat: 24.466667,
    //         endLng: 54.366669,
    //         color: [['white', 'pink', 'green', 'yellow'][Math.round(Math.random() * 3)], ['white', 'pink', 'green', 'yellow'][Math.round(Math.random() * 3)]]
    //     },
    //     {

    //         startLat: 21.170240,
    //         startLng: 72.831062,
    //         endLat: 21.170240,
    //         endLng: 72.831062,
    //         color: [['white', 'pink', 'green', 'yellow'][Math.round(Math.random() * 3)], ['white', 'pink', 'green', 'yellow'][Math.round(Math.random() * 3)]]
    //     }
    // ]


    // const places = [
    //     {
    //         name: "spain",
    //         lat: 40.463667,
    //         lng: -3.7492199999999998,
    //         size: 0.28,
    //         color: "white"
    //     },
    //     { name: "india", lat: 20.593684, lng: 78.96288, size: 0.16, color: "white" }
    // ];

    return (
        <>
            <div className="slider-section" >
                <div className="global-main" >
                    <div className="global-left">
                        <div className="res-d-flex">
                            <div className="happy-left">
                                <div className="icon-content">
                                    <div className="happy-icon">
                                        <img className="happy-img" src="images/happy.png" />
                                    </div>
                                    <div className="happy-content">
                                        <h1> <CountUp className="ha-cont" end={150} />+</h1>
                                        <h3>Happy Customers</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="happy-right">
                                <div className="icon-content">
                                    <div className="happy-icon">
                                        <img className="happy-img" src="images/Collaborative Brain.png" />
                                    </div>
                                    <div className="happy-content new-dots">
                                        <h1> <CountUp className="ha-cont" end={62} />%</h1>
                                        <h3>Repeat & Referral Business</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="res-d-flex">
                            <div className="happy-left hleft ">
                                <div className="icon-content">
                                    <div className="happy-icon">
                                        <img className="happy-img" src="images/Project Completed.png" />
                                    </div>
                                    <div className="happy-content">
                                        <h1> <CountUp className="ha-cont" end={73} />+</h1>
                                        <h3>Collaborative Brains </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="happy-right new-right-happy">
                                <div className="icon-content">
                                    <div className="happy-icon">
                                        <img className="happy-img" src="images/Global Reach.png" />
                                    </div>
                                    <div className="happy-content ">
                                        <h1> <CountUp className="ha-cont" end={4} />+</h1>
                                        <h3>Our Offices</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="global-right">
                        {/* <Globe
                            globeImageUrl="images/globe-new.svg"
                            onGlobeClick={() => console.log('asdfafa')}
                            onGlobeMouseDown={() => console.log('123')}
                            arcsData={arcsData}
                            arcColor={'color'}
                            arcDashAnimateTime={(d) => Math.random() + 1500}
                            arcDashLength={() => Math.random()}
                            arcDashGap={() => Math.random()}
                            labelsData={places}
                            labelLat={(d) => d.lat}
                            labelLng={(d) => d.lng}
                            labelText={(d) => d.name}
                            labelSize={(d) => 0.5 + d.size}
                            labelDotRadius={(d) => 0.5 + d.size}
                            labelColor={() => "rgba(98, 231, 243, 1)"}
                            labelResolution={2}
                            backgroundColor='#0D0C22'
                            width={1400}
                            height={1900}
                            ref={globeEl}
                        /> */}
                        {/* <img src="images/globe_temp.png" alt="" /> */}

                        {/* <model-viewer id='reveal' poster="images/above-globe-img.png" src="https://surbhiinfotech.s3.ap-south-1.amazonaws.com/earth-icon.glb"  alt="VR Headset" loading="eager" auto-rotate  camera-controls disable-zoom poster-dismissed>
                            </model-viewer> */}
                        <div className="ftr-locations">
                            <div className="mainTabing">
                                <div className="map-img">
                                    <img src="images/Vector (2).png" alt="Uplers" />
                                    <div className="detailTab">
                                        <ul className="map-dots">
                                            <li className={`tabing ${activePoint === "usa" ? 'current' : ''}`} data-tab="loc-1" onMouseEnter={(e) => { setActivePoint("usa"); }}>
                                                <div className="line-four" ></div>
                                            </li>
                                            <li className={`tabing ${activePoint === "dubai" ? 'current' : ''}`} data-tab="loc-2" onMouseEnter={(e) => { setActivePoint("dubai"); }}>
                                                <div className="line-two"></div>
                                            </li>
                                            <li className={`tabing ${activePoint === "india" ? 'current' : ''}`} data-tab="loc-3" onMouseEnter={(e) => { setActivePoint("india"); }}>
                                                <div className="line-three"></div>
                                            </li>
                                            <li className={`tabing ${activePoint === "spain" ? 'current' : ''}`} data-tab="loc-4" onMouseEnter={(e) => { setActivePoint("spain"); }}>
                                                <div className="line"></div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="accMainDiv">
                                    <ul>

                                        <h2 className="resp-accordion minus" role="tab"><span className="resp-arrow"></span>
                                            <div className="line"></div>
                                        </h2>
                                        <li className={`accoContain ${activePoint === "usa" ? 'current in' : ''}`} id="loc-1">
                                            <div className="loc-box">
                                                <h3 className="coutry-name">Canada</h3>
                                                <div className="">
                                                    <h4 className="area">Ontario</h4>
                                                    <div className="address">
                                                        <a target="_blank">Doon Valley  <br /> Dr. Kitchener, Toronto-N2G 4M4</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>


                                        <h2 className="resp-accordion" role="tab"><span className="resp-arrow"></span>
                                            <div className="line"></div>
                                        </h2>
                                        <li className={`accoContain ${activePoint === "dubai" ? 'current in' : ''}`} id="loc-2">
                                            <div className="loc-box">
                                                <h3 className="coutry-name">Spain</h3>
                                                <div className="">
                                                    <h4 className="area">Madrid</h4>
                                                    <div className="address">
                                                        <a target="_blank">Calle Americo, <br /> Castro 7, MD-28050
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <h2 className="resp-accordion" role="tab"><span className="resp-arrow"></span>
                                            <div className="line"></div>
                                        </h2>
                                        <li className={`accoContain ${activePoint === "india" ? 'current in' : ''}`} id="loc-3">
                                            <div className="loc-box">
                                                <h3 className="coutry-name">India</h3>
                                                <div className="">
                                                    <h4 className="area">Gujarat</h4>
                                                    <div className="address">
                                                        <a target="_blank">Soham Arcade, Gaurav Path Road,<br /> Pal, Surat - 395009</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <h2 className="resp-accordion" role="tab"><span className="resp-arrow"></span>
                                            <div className="line"></div>
                                        </h2>
                                        <li className={`accoContain ${activePoint === "spain" ? 'current in' : ''}`} id="loc-4">
                                            <div className="loc-box">
                                                <h3 className="coutry-name">UAE</h3>
                                                <div className="">
                                                    <h4 className="area">Dubai</h4>
                                                    <div className="address">
                                                        <a target="_blank">T Cluster <br /> Jumeirah Lakes Towers</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>



                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GlobalReach;