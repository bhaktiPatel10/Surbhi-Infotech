import React, { useEffect, useState } from "react";
import * as yup from 'yup';
import "./ContactPopup.css";
import ThankYouPopup from "./ThankYouPopup";
import { useNavigate } from "react-router-dom";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
const ContactPopup = (props) => {
    const { handleClose } = props;
    const navigate = useNavigate();
    const [formData, setformData] = useState({});
    const [thankYouModel, setThankYouModel] = useState(false);
    const [error, setError] = useState({});
    const [value, setValue] = useState()

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    let formSchema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
        requirment: yup.string().required(),
        phone: yup.string().matches(phoneRegExp, 'Phone number is not valid')
    });
    const handleCloseOne = () => {
        setThankYouModel(false);
        handleClose();
    }
    const handleSubmit = (e) => {
        e && e.preventDefault();
        const { name, email, phone, requirment } = formData;
        let validate = true;
        let err = {};
        // formSchema.validate(formData).then(data => {
        //     console.log(data);
        // }).catch(err => {
        //     validate = false;
        // })

        // console.log("name", name)
        // console.log("email", email)
        // console.log("phone", phone)
        // console.log("requirment", requirment)
        if (!name) {
            err.name = "Please Enter Name";
            validate = false;
        }
        if (!email) {
            err.email = "Please Enter Email";
            validate = false;
        } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            err.email = "Please Enter Valid Email";
            validate = false;
        }
        if (!phone) {
            err.phone = "Please Enter Phone no.";
            validate = false;
        }
        // if (country === "") {
        //     err.country = "Please Enter Country.";
        //     validate = false;
        // }
        if (!requirment) {
            err.requirment = "Please Enter Requirment.";
            validate = false;
        }
        // if (category === "") {
        //     err.category = "Please Select Category.";
        //     validate = false;
        // }
        setError(err);
        if (validate) {
            let formData = new FormData();
            formData.append("name", name);
            formData.append("email", email);
            formData.append("phone", phone);
            //formData.append("country", country);
            formData.append("requirment", requirment);
            //formData.append("category", category);
            const scriptURL = 'https://script.google.com/macros/s/AKfycbzPtIYGQCyP3N1ksl8A2AJxteebwYdLQ7yQM4xwaZsu9lHaZj6Mu8y_j9wkEUmdwXNxaQ/exec'
            // const form = document.forms['google-sheet']


            fetch(scriptURL, { method: 'POST', body: formData })
                .then(response => {
                    // alert("Thanks for Contacting us..! We Will Contact You Soon...");
                    // setThankYouModel(true);
                    navigate('/thank-you');
                    setformData({})
                    // handleClose()
                })
                .catch(error => console.error('ftyg!', error.message))

        }
    }
    useEffect(() => {
        document.getElementById('app-root').style.filter = 'blur(5px)'
    }, [])
    return (
        <>
            <section className="modal-contact-popoup">
                <div id="app-root"></div>
                <div id="contactPopup" className="modal-container">


                    <div id="modal-root" className="modal-content new-width">
                        <div className="">
                            <div className="">
                                <div>
                                    <div className="img-new-class">
                                        <img src="images/popupbg.png" />
                                    </div>
                                    <div className="close" onClick={() => handleClose()}><span className="contact-us-close-icon">
                                        <img src="images/popupnewclose.png" /></span></div>
                                    <div className="new-modal-hedding">
                                        <h3>GET A FREE QUOTE</h3>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="new-popup-form">
                                            <div className="input-line">
                                                <div className="input-in">
                                                    <span className="popu-one"><img src="images/popupuser.png" /></span>
                                                    <input type="text" placeholder="Your Name" value={formData.name}
                                                        onChange={(e) => setformData({ ...formData, name: e.target.value })} />
                                                    <span className="error">{error?.name}</span>
                                                </div>
                                            </div>
                                            <div className="input-line">
                                                <div className="input-in">
                                                    <span className="popu-one"><img src="images/popup email.png" /></span>
                                                    <input type="email" placeholder="Your Email" value={formData.email}
                                                        onChange={(e) => setformData({ ...formData, email: e.target.value })} />
                                                </div>

                                                <span className="error">{error?.email}</span>
                                            </div>
                                            <div className="input-line">
                                                <div className="input-in">
                                                    {/* <ConfigProvider locale={en}>
                                                        <CountryPhoneInput />
                                                    </ConfigProvider> */}
                                                    <PhoneInput
                                                        placeholder="Phone" defaultCountry="IN"
                                                        value={formData.phone}
                                                        onChange={(e) => setformData({ ...formData, phone: e })} />
                                                    <span className="error">{error?.phone}</span>

                                                    {/* <span className="popu-one"><img src="images/popupphone.png" /></span> */}
                                                    {/* <input placeholder="Phone" type={"number"} value={formData.phone}
                                                        onChange={(e) => setformData({ ...formData, phone: e.target.value })} /> */}

                                                </div>
                                            </div>
                                            <div className="input-line">
                                                <div className="input-in">
                                                    <span className="popu-one"><img src="images/popupmessage.png" /></span>
                                                    <textarea contenteditable="true" type="text" placeholder="Message" value={formData.requirment}
                                                        onChange={(e) => setformData({ ...formData, requirment: e.target.value })} />
                                                    <span className="error">{error?.requirment}</span>
                                                </div>
                                            </div>
                                            <div className="popup-submit-btn" onClick={() => { handleSubmit(); }}>
                                                <button>Submit <img src="images/contact-arrow.png" /></button>
                                            </div>

                                        </div>
                                    </form>
                                    {/* <div className="contact-model-heading">
                                        We’d love to hear from you
                                    </div> */}
                                    {/* <div className="contact-model-desc">
                                        Show you more of our work! Just fill out the form and one of us will get back to you as soon as we can.
                                    </div> */}
                                    {/* <form action="">
                                    </form> */}
                                    {/* <div className="contact-us-form-card">
                                        <div>
                                            <input className="form-control-contact" placeholder="Your Name" value={name} onChange={(e) => { setName(e.target.value); }} />
                                            <span className="error">{error?.name}</span>
                                        </div>
                                        <div>
                                            <input className="form-control-contact" placeholder="Your Email" value={email} onChange={(e) => { setEmail(e.target.value); }} />
                                            <span className="error">{error?.email}</span>
                                        </div> */}
                                    {/* <div className="form-row">
                                            <div>
                                                <input className="form-control-contact input-phone" placeholder="Phone" type={"number"} value={phone} onChange={(e) => { setPhone(e.target.value); }} />
                                                <span className="error">{error?.phone}</span>
                                            </div>
                                            <div> */}
                                    {/* <select className="form-select form-control-contact input-phone new-alart" value={country} onChange={(e) => { setCountry(e.target.value); }}>
                                                    <option className="custom-option" value="">Country</option>
                                                    <option className="custom-option" value="India">India</option>
                                                    <option className="custom-option" value="Spain">Spain</option>
                                                </select> */}
                                    {/* <input className="form-control-contact" placeholder="Country" value={country} onChange={(e) => { setCountry(e.target.value); }} />
                                                <div className="error">{error?.country}</div>
                                            </div>
                                        </div> */}


                                    {/* <div>
                        <select className="new-select form-control-contact" value={industryType} onChange={(e) => { setIndustryType(e.target.value); }}>
                            <option value="">Select Industry Type</option>
                            <option value="India">India</option>
                        </select>
                    </div>
                    <div className="error">{error?.industryType}</div> */}

                                    {/* <div>
                                            <select className="new-select form-control-contact " value={category} onChange={(e) => { setCategory(e.target.value); }}>
                                                <option className="custom-option" value="">Select Category</option>
                                                <option className="custom-option" value="UI/UX Designing">UI/UX Designing</option>
                                                <option className="custom-option" value="Application Development">Application Development</option>
                                                <option className="custom-option" value="Web Development">Web Development</option>
                                                <option className="custom-option" value="Software and ERP Services">Software and ERP Services</option>
                                                <option className="custom-option" value="Digital Marketing Services">Digital Marketing Services</option>
                                                <option className="custom-option" value="Data Science, AI, ML Services">Data Science, AI, ML Services</option>
                                                <option className="custom-option" value="Block Chain">Block Chain</option>
                                                <option className="custom-option" value="AR VR">AR VR</option>
                                            </select>
                                        </div>
                                        <div className="error">{error?.category}</div>
                                        <div>
                                            <textarea className="form-textarea" placeholder="Describe Requirment" value={requirment} onChange={(e) => { setRequirment(e.target.value); }} />
                                            <span className="error">{error?.requirment}</span>
                                        </div>
                                        <div className="flex-end">
                                            <button type='button' className='contact-btn mr-0' onClick={() => { handleSubmit(); }}>
                                                <span className='submit'>Submit <img src="images/contact-arrow.png" alt="" className='arrow' /></span>
                                            </button>
                                        </div> */}
                                    {/* </div>
                                    <div className="mar-top-2002">dsvgxdfsgdsgds </div>
                                </div> */}
                                </div>
                                {/* <div className="w-50 contact-popup">
                                    <img src="images/contact-us-popup.png" alt="" className="" />
                                </div> */}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* {console.log("thankYouModel", thankYouModel)} */}
            {thankYouModel && <ThankYouPopup handleClose={handleCloseOne} />}
            {/* {true && <ThankYouPopup handleClose={handleCloseOne} />} */}
        </>
    )
}

export default ContactPopup;