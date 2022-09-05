import React, { useEffect, useState } from "react";
import * as yup from 'yup';
import "./ShopifyPopup.css";
import ThankYouPopup from "../ContactUs/ThankYouPopup";
import { useNavigate } from "react-router-dom";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const ShopifyPopup = (props) => {
    const { handleClose } = props;
    const navigate = useNavigate();
    const [formData, setformData] = useState({});
    const [thankYouModel, setThankYouModel] = useState(false);
    const [error, setError] = useState({});

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
            const scriptURL = 'https://script.google.com/macros/s/AKfycbxVMQntdXCCNLwqWXDltZk5yFIYZVlQOtZO7Im5QjGwAoC7ZEBy3gEekuln6dY-q3F6Iw/exec'
            // const form = document.forms['google-sheet']


            fetch(scriptURL, { method: 'POST', body: formData })
                .then(response => {
                    // alert("Thanks for Contacting us..! We Will Contact You Soon...");
                    // setThankYouModel(true);

                    props?.onSubmit();
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
            <section className="modal-shopify-popoup">
                <div id="app-root"></div>
                <div id="shopifyPopup" className="modal-container-shopify">


                    <div id="modal-root" className="modal-content-shopify new-width">
                        <div className="">
                            <img className="side-img" src="/images/new-img.png" />
                        </div>
                        <div className="shopify-right-section">
                            <div className="">
                                <div>
                                    <div className="close" onClick={() => handleClose()}><span className="contact-us-close-icon">
                                        <img src="images/popupnewclose.png" /></span></div>
                                    <div className="new-modal-hedding">
                                        <h3>GET A FREE QUOTE</h3>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="new-popup-form-one">
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
                                                    <PhoneInput
                                                        placeholder="Phone" defaultCountry="IN"
                                                        value={formData.phone}
                                                        onChange={(e) => setformData({ ...formData, phone: e })} />
                                                    <span className="error">{error?.phone}</span>
                                                    {/* <span className="popu-one"><img src="images/popupphone.png" /></span>
                                                    <input placeholder="Phone" type={"number"} value={formData.phone}
                                                        onChange={(e) => setformData({ ...formData, phone: e.target.value })} />
                                                    <span className="error">{error?.phone}</span> */}
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
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {thankYouModel && <ThankYouPopup handleClose={handleCloseOne} />}
        </>
    )
}

export default ShopifyPopup;