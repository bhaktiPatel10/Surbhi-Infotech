import React, { useEffect, useState } from 'react';
import Footer from '../Home/Component/footer';
import Header from '../Home/Component/Header';
import './ContactUs.css';
import '../Blog/blog.css'
import '../Home/Component/letsTalk.css'
import ContactPopup from './ContactPopup';
import LetsTalk from '../Home/Component/letsTalk';
import Heading from '../Common/Heading';
import Helmet from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
const ContactUs = () => {

    useEffect(() => {
        let url = window.location.href;
        let slug = url.split('#');
        if (slug.length > 1) {
            if (window.screen.width <= 1920) {
                window.scrollTo(0, 1800);
            }
            if (window.screen.width >= 1600) {
                window.scrollTo(0, 1700);
            }
            if (window.screen.width >= 1366) {
                window.scrollTo(0, 1650);
            }
            if (window.screen.width >= 1120) {
                window.scrollTo(0, 1600);
            }
            if (window.screen.width >= 980) {
                window.scrollTo(0, 1600);
            }
            if (window.screen.width >= 767) {
                window.scrollTo(0, 1500);
            }
            if (window.screen.width >= 580) {
                window.scrollTo(0, 2700);
            }
            if (window.screen.width >= 450) {
                window.scrollTo(0, 2400);
            }
            if (window.screen.width >= 360) {
                window.scrollTo(0, 2100);
            }
            if (window.screen.width >= 320) {
                window.scrollTo(0, 2050);
            }
        }
    }, [])

    useEffect(() => {
        // window.scrollTo(0, 0);
        document.getElementsByTagName("meta")["title"].content = "Web Design Company USA | Contact- Surbhi Infotech";
        document.getElementsByTagName("meta")["description"].content = "Are you looking for top-notch web design services? Look no further, Surbhi Infotech is the best Web Design Company USA, providing the best we design services. ";
        document.getElementsByTagName("meta")["url"].content = "https://www.surbhiinfotech.com/contact-us";
    }, []);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");
    const [requirment, setRequirment] = useState("");
    const [industryType, setIndustryType] = useState("");
    const [category, setCategory] = useState("");
    const [error, setError] = useState({});
    const [company, setCompany] = useState("");
    const [model, setModel] = useState(false);
    const navigate = useNavigate();

    const handleClose = () => {
        setModel(false);
    }

    const handleSubmit = () => {
        let validate = true;
        let err = {};
        if (name === "") {
            err.name = "Please Enter Name";
            validate = false;
        }
        if (email === "") {
            err.email = "Please Enter Email";
            validate = false;
        } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            err.email = "Please Enter Valid Email";
            validate = false;
        }
        if (phone === "") {
            err.phone = "Please Enter Phone no.";
            validate = false;
        }

        if (requirment === "") {
            err.requirment = "Please Enter Requirment.";
            validate = false;
        }
        // if (company === "") {
        //     err.company = "Please Enter company.";
        //     validate = false;
        // }

        setError(err);
        if (validate) {
            let formData = new FormData();
            formData.append("name", name);
            formData.append("email", email);
            formData.append("phone", phone);
            formData.append("company", company);
            formData.append("requirment", requirment);
            const scriptURL = 'https://script.google.com/macros/s/AKfycbz4jz0QmIms1bCocbiykJz6pC4ETQTpCCwAVVeMabDXfoUHd6iv4WVtXrZeLpot9GdLaw/exec'
            // const form = document.forms['google-sheet']


            fetch(scriptURL, { method: 'POST', body: formData })
                .then(response => {
                    // alert("Thanks for Contacting us..! We Will Contact You Soon...");
                    setName("");
                    setEmail("");
                    navigate('/thank-you');
                    setPhone("");
                    setRequirment("");
                    setCompany("")
                })
                .catch(error => console.error('ftyg!', error.message))

        }
    }
    return (
        <>
            {/* <Helmet>
                <meta name="title" content={"Web Design Company USA | Contact- Surbhi Infotech"} />
                <meta name="description" content={"Are you looking for top-notch web design services? Look no further, Surbhi Infotech is the best Web Design Company USA, providing the best we design services. "} />
                <meta name="url" content={"https://www.surbhiinfotech.com/contact-us"} />
            </Helmet> */}
            <Header />
            <section className='main-sec for-contect-only'>
                <div className='container-new'>

                    <Heading bg_text="Contact" front_text="Contact us" />
                    <section className='contact-main-section'>
                        <div className='contect-main-left'>
                            <div className='left-contect-content'>
                                <h3>New<br />
                                    Business</h3>
                                <div className='new-mail'>
                                    <p><span><img src='images/contmail.png' ></img></span>info@surbhiinfotech.com</p>
                                </div>
                            </div>
                        </div>
                        <div className='contect-main-right'>
                            <div className='right-contect-content'>
                                <h3>Career  <br />
                                    Inquiries</h3>
                                <div className='new-mail'>
                                    <p><span><img src='images/contmail.png' ></img></span>career@surbhiinfotech.com </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='location-section'>
                        <div className='location-row'>
                            <div className='location-row-left'>
                                <div className='location-img'>
                                    <img className='' src='images/canada.png' />
                                </div>
                                <div className='location-address'>
                                    <div className='location-titale'>
                                        <h3>Canada <span>Ontario</span></h3>
                                        <p>Doon Valley  Dr. Kitchener, Toronto-N2G 4M4</p>
                                    </div>
                                    <div className='location-number'>
                                        <div className='loacation-mail'>
                                            <p><img src='images/contmail.png' /><span>digital@surbhiinfotech.com</span> </p>

                                        </div>
                                        <div className='location-phone'>
                                            <p><img src='images/contphone.png' /><span>+1  4162557435</span> </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='location-row-right mt-new-5-new'>
                                <div className='location-img'>
                                    <img className='' src='images/spain.png' />
                                </div>
                                <div className='location-address'>
                                    <div className='location-titale'>
                                        <h3>Spain<span> Madrid</span></h3>
                                        <p>Calle Americo,Castro 7, MD-28050</p>
                                    </div>
                                    <div className='location-number'>
                                        <div className='loacation-mail'>
                                            <p><img src='images/contmail.png' /><span>spain@surbhiinfotech.com</span> </p>

                                        </div>
                                        {/* <div className='location-phone'>
                                            <p><img src='images/contphone.png' /><span>+1  4162557435</span> </p>
                                        </div> */}
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='location-row mt-new-5'>
                            <div className='location-row-left'>
                                <div className='location-img'>
                                    <img className='' src='images/uae.png' />
                                </div>
                                <div className='location-address'>
                                    <div className='location-titale'>
                                        <h3>UAE <span>Dubai</span></h3>
                                        <p>T Cluster Jumeirah Lakes Towers</p>
                                    </div>
                                    <div className='location-number'>
                                        <div className='loacation-mail'>
                                            <p><img src='images/contmail.png' /><span>digital@surbhiinfotech.com</span> </p>

                                        </div>
                                        {/* <div className='location-phone'>
                                            <p><img src='images/contphone.png' /><span>+1  4162557435</span> </p>
                                        </div> */}
                                    </div>

                                </div>
                            </div>
                            <div className='location-row-right mt-new-5-new'>
                                <div className='location-img'>
                                    <img className='' src='images/india.png' />
                                </div>
                                <div className='location-address'>
                                    <div className='location-titale'>
                                        <h3>India <span>Gujarat</span></h3>
                                        <p>Soham Arcade, Gaurav Path Road Pal, Surat - 395009</p>
                                    </div>
                                    <div className='location-number'>
                                        <div className='loacation-mail'>
                                            <p><img src='images/contmail.png' /><span>info@surbhiinfotech.com</span> </p>

                                        </div>
                                        <div className='location-phone'>
                                            <p><img src='images/contphone.png' /><span>+91 8160703379</span> </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='new-contect-form' id="contact-hear" >
                        <div className='lets-tolk-section-tital'>
                            <h3>Let’s Talk</h3>
                        </div>
                        <div className='new-form-for-contact'>
                            {/* <a name="conxtact-hear" /> */}
                            <div className='form-internal-section'>
                                <div className='new-form-for-left'>
                                    <div className='input-new'>
                                        <input type="text" placeholder='Name' className='' value={name} name="name" onChange={(e) => { setName(e.target.value); }}></input>
                                        <span className="error">{error?.name}</span>
                                    </div>
                                </div>
                                <div className='new-form-for-right'>
                                    <div className='input-new'>
                                        <input type="text" placeholder='Your Email' className='' value={email} onChange={(e) => { setEmail(e.target.value); }} name="email"></input>
                                        <span className="error">{error?.email}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='form-internal-section mt-new-22'>
                                <div className='new-form-for-left'>
                                    <div className='input-new'>
                                        <PhoneInput
                                            placeholder="Phone" defaultCountry="IN"
                                            value={phone}
                                            onChange={(e) => setPhone(e)} />
                                        <span className="error">{error?.phone}</span>
                                        {/* <input type="text" placeholder='Phone' className='' value={phone} onChange={(e) => { setPhone(e.target.value); }} name="phone"></input>
                                        <span className="error">{error?.phone}</span> */}
                                    </div>
                                </div>
                                <div className='new-form-for-right'>
                                    <div className='input-new'>
                                        <input type="text" placeholder='Company/Organization' className='' value={company} onChange={(e) => { setCompany(e.target.value); }} name="company"></input>
                                        {/* <span className="error">{error?.company}</span> */}
                                    </div>
                                </div>
                            </div>
                            <div className='form-internal-textara mt-new-22'>
                                <textarea className='' placeholder='Your Message' value={requirment} onChange={(e) => { setRequirment(e.target.value); }} ></textarea>
                                <span className="error">{error?.requirment}</span>
                            </div>
                            <div className='submit-new-btn-all'>
                                <button type='button' className='contact-btn mr-0' onClick={() => { handleSubmit(); }}>
                                    <span className='submit'>Submit <img src="images/contact-arrow.png" alt="" className='arrow' /></span>
                                </button>
                            </div>
                        </div>
                    </section>


                </div>
            </section>
            <Footer />

            {model && <ContactPopup handleClose={handleClose} />}
        </>
    )
}

export default ContactUs;