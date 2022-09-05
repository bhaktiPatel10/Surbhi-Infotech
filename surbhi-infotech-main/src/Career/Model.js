import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../Common/Loader";
import './Model.css';
const Model = (props) => {
    const [file, setFile] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [category, setCategory] = useState("");
    const [experience, setExperience] = useState("");
    const [url, setUrl] = useState("");
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleValidate = () => {
        let validate = true;
        let errObj = {};
        if (name === "") {
            validate = false;
            errObj['name'] = "Please Enter Name";
        }
        if (email === "") {
            validate = false;
            errObj['email'] = "Please Enter email";
        } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            validate = false;
            errObj['email'] = "Please Enter Valid email";
        }
        if (category === "") {
            validate = false;
            errObj['category'] = "Please Select Category";
        }
        if (experience === "") {
            validate = false;
            errObj['experience'] = "Please Select Experience";
        }
        if (file === "" || file === null || file === undefined) {
            validate = false;
            errObj['file'] = "Please Select CV";
        }
        setError(errObj);
        if (validate) {
            let formData = new FormData();
            formData.append("name", name);
            formData.append("email", email);
            formData.append("category", category);
            formData.append("experience", experience);
            formData.append("fileUpload", url);
            const scriptURL = 'https://script.google.com/macros/s/AKfycbzQ2iy_fGsACMTTYIF6b70t8GpKre1u3a9_Qw41gd7kWiUiJ3sPSnFDacmlqkh0SfoZ2A/exec'
            // const form = document.forms['google-sheet']


            fetch(scriptURL, { method: 'POST', body: formData })
                .then(response => {
                    // alert("Thanks for Contacting us..! We Will Contact You Soon...");
                    navigate('/thank-you');
                    setName("");
                    setEmail("");
                    setCategory("");
                    setExperience("");
                })
                .catch(error => console.error('ftyg!', error.message))

        }
    }

    function guardarArchivo(e) {
        setLoading(true);
        var file = e.target.files[0] //the file
        var reader = new FileReader() //this for convert to Base64 
        reader.readAsDataURL(e.target.files[0]) //start conversion...
        reader.onload = function (e) { //.. once finished..
            var rawLog = reader.result.split(',')[1]; //extract only thee file data part
            var dataSend = { dataReq: { data: rawLog, name: file.name, type: file.type }, fname: "uploadFilesToGoogleDrive" }; //preapre info to send to API
            fetch('https://script.google.com/macros/s/AKfycbzPyJTO5AFwkmKpFUIqPgBgzw2rDVqQxWNRmVWIdQWrc92CNd1BnzPeL1pVHODbsBS0/exec', //your AppsScript URL
                { method: "POST", body: JSON.stringify(dataSend) }) //send to Api
                .then(res => res.json()).then((a) => {
                    setUrl(a.url);
                    setLoading(false);
                    console.log(a) //See response
                }).catch(e => console.log(e)) // Or Error in console
        }
    }

    return (
        <>
            <section className="career-popup">
                <div className="model-container">
                    <div id="myModal" className="modal contact-us-model">
                        <div className="modal-content">
                            {loading ? <><Loader /></> : <>
                                <div className="modal-header">
                                    <span className="close" onClick={props.closeModel}><img src="images/close.png" /></span>
                                    <span className="model-heading">{props?.label}</span>
                                </div>
                                <div className="modal-body">
                                    <div className="model-job-desc">
                                        {/* <p>Lorem ipsum dolor sit amet convallis eget elit pede. Dignissim dolor venenatis integer himenaeos egestas ut at libero sapien praesent fringilla. Ut nibh praesent cursus taciti tempor placerat tristique.</p> */}
                                    </div>
                                    <div>
                                        <div className="model-row">
                                            <div className="w-50 mt-25 mr-40">
                                                <input className="model-input" placeholder="Your Name" value={name} name="name" onChange={(e) => { setName(e.target.value); }} />
                                                {error && error?.name && <div className="error">{error?.name} </div>}
                                            </div>
                                            <div className="w-50 mt-25" >
                                                <input className="model-input" placeholder="Your Email" value={email} name="email" onChange={(e) => { setEmail(e.target.value); }} />
                                                {error && error?.email && <div className="error">{error?.email} </div>}
                                            </div>
                                        </div>
                                        <div className="model-row">
                                            <div className="w-50 mt-25">
                                                <select className='select model-input model-dropdown new-select-one' name="category" value={category} onChange={(e) => { setCategory(e.target.value); }}>
                                                    <option className="custom-option" value="">Select Position</option>
                                                    <option className="custom-option" value="full_stack_devloper">Full Stack Developer</option>
                                                    <option className="custom-option" value="mern_stack_devloper">MERN Stack Developer</option>
                                                    <option className="custom-option" value="wordpress_developer">Wordpress Developer</option>
                                                    <option className="custom-option" value="graphics_developer">Graphics Developer</option>
                                                    <option className="custom-option" value="ui_ux_designer">UI/Ux Designer</option>
                                                    <option className="custom-option" value="angullar_developer">Angular Developer</option>
                                                    <option className="custom-option" value="shopify_developer">Shopify Developer</option>
                                                </select>
                                                {error && error?.category && <div className="error">{error?.category} </div>}
                                            </div>
                                            <div className="w-50  mt-25">
                                                <select className='select model-input model-dropdown mt-20 new-select-two' name="experience" value={experience} onChange={(e) => { setExperience(e.target.value); }}>
                                                    <option className="custom-option" value="">Experience</option>
                                                    <option className="custom-option" value="1">1 Experience</option>
                                                    <option className="custom-option" value="2">2 Experience</option>
                                                    <option className="custom-option" value="3">3 Experience</option>
                                                    <option className="custom-option" value="4">4 Experience</option>
                                                    <option className="custom-option" value="5">5 Experience</option>
                                                </select>
                                                {error && error?.experience && <div className="error">{error?.experience} </div>}
                                            </div>
                                        </div>
                                        <div className="model-row mt-25">
                                            <div className="uploader">
                                                <input id="file-upload" type="file" name="fileUpload" accept="image/*" onChange={(e) => { setFile(e.target.files[0]); guardarArchivo(e); }} />
                                                <label htmlFor="file-upload" id="file-drag">
                                                    <div className="upload-image-btn">
                                                        <img id="file-image" src="images/file.png" alt="Preview" className="hidden" />
                                                        <div id="start">
                                                            <span id="file-upload-btn" className="btn btn-primary mr-0">
                                                                {
                                                                    file?.name ? file?.name : "Upload Your CV"
                                                                }
                                                            </span>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                        {error && error?.file && <div className="error">{error?.file} </div>}
                                        <div className="model-row mt-25 flex-end apply-now">
                                            <button className="btn-apply-now mr-118" type="button" onClick={handleValidate}>Appy Now <img src="images/contact-us-btn-arrow.svg" /></button>
                                        </div>
                                    </div>
                                </div>
                            </>}

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Model;