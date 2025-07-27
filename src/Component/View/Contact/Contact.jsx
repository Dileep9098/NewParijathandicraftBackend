import React from 'react'
import { Link } from 'react-router-dom'
import "./contact.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MetaData from '../Layout/MetaData';
export default function Contact() {
    return (
        <>
                        <MetaData title={"Contact"}/>
        
            <section className="breadcrumb-section set-bg" data-setbg="img/breadcrumb.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb__text">
                                <h2>Contact Us</h2>
                                <div className="breadcrumb__option">
                                    <a href="/">Home</a>
                                    <span>Contact Us</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="contact spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                            <div className="contact__widget">
                                <span className="icon_phone"></span>
                                <h4>Phone</h4>
                                <p>+01-3-8888-6868</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                            <div className="contact__widget">
                                <span className="icon_pin_alt"></span>
                                <h4>Address</h4>
                                <p>60-49 Road 11378 New York</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                            <div className="contact__widget">
                                <span className="icon_clock_alt"></span>
                                <h4>Open time</h4>
                                <p>10:00 am to 23:00 pm</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                            <div className="contact__widget">
                                <span className="icon_mail_alt"></span>
                                <h4>Email</h4>
                                <p>hello@colorlib.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/*       
    
            {/* <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12">

                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-6 col-12">

                    </div>
                </div>
            </div> */}

            <section id="contact" className="contact section">

                <div className="container section-title" data-aos="fade-up">
                    <h2 id='size1'>Contact</h2>

                </div>

                <div className="container" data-aos="fade-up" data-aos-delay="100">

                    <div className="row gy-4">

                        <div className="col-lg-5">

                            <div className="info-wrap">
                                {/* <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                                    <i className="bi bi-geo-alt flex-shrink-0"></i>
                                    <div>
                                        <h3>Current Address</h3>
                                        <p>Sector 15,Noida Uttar Pradesh </p>
                                    </div>
                                </div> */}
                                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                                    <i className="ri-map-pin-fill"></i>
                                    <div>
                                        <h3>Parmanent Address</h3>
                                        <p>Address: SHOP NO-27GF, GDA SHOPPING COMPLEX NYAY KHAND-1, INDIRAPURAM, GHAZIABAD-201014, UTTAR PRADESH
                                        </p>
                                    </div>
                                </div>

                                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                                    <i className="ri-phone-fill"></i>
                                    <div>
                                        <h3>Call Us</h3>
                                        <p>+91 9953567333</p>
                                    </div>
                                </div>

                                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                                    <i className="ri-mail-send-line"></i>
                                    <div>
                                        <h3>Email Us</h3>
                                        <p><Link to="mailto:info@parijathandicraft.com">info@parijathandicraft.com</Link></p>
                                    </div>
                                </div>


                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28348.070657870883!2d77.329476!3d28.612317!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce9f5bc80c859%3A0x46e441c83b8c4222!2sSHOP%20NO-27GF%2C%20GDA%20SHOPPING%20COMPLEX%20NYAY%20KHAND-1%2C%20INDIRAPURAM%2C%20GHAZIABAD-201014%2C%20UTTAR%20PRADESH!5e0!3m2!1sen!2sus!4v1673448000000!5m2!1sen!2sus"

                                    frameBorder="0"
                                    style={{ border: "0", width: "100%", height: "270px" }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>

                                {/* <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d77.391026!3d28.576623!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1ebcf42e3b9%3A0x9b95b5a5f59bbf0d!2sSector%2015%20Naya%20Bans%2C%20Noida%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
                    frameBorder="0"
                    style={{ border: "0", width: "100%", height: "270px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe> */}


                            </div>
                        </div>

                        <div className="col-lg-7">
                            <form className="php-email-form" data-aos="fade-up" data-aos-delay="200" >
                                <div className="row gy-4">


                                    <div className="col-md-6">
                                        <TextField
                                            id="outlined-multiline-flexible"
                                            label="Name"
                                            placeholder="Enter Full Name"
                                            className='w-100'
                                            slotProps={{
                                                inputLabel: {
                                                    shrink: true,
                                                },
                                            }}
                                        />
                                    </div>
                                    <div className="col-md-6 ">
                                        <TextField
                                            id="outlined-number"
                                            label="Number"
                                            type="number"
                                            placeholder='Enter Mobile Number'
                                            slotProps={{
                                                inputLabel: {
                                                    shrink: true,
                                                },
                                            }}
                                            className='w-100'
                                        />
                                    </div>

                                    <div className="col-md-12">
                                        <TextField
                                            id="outlined-multiline-flexible"
                                            label="Email"
                                            type='email'
                                            className='w-100'
                                            placeholder='Email Address'
                                            slotProps={{
                                                inputLabel: {
                                                    shrink: true,
                                                },
                                            }}
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <TextField
                                            id="outlined-multiline-flexible"
                                            label="Subject"
                                            type='text'
                                            className='w-100'
                                            placeholder='Enter Subject here'
                                            slotProps={{
                                                inputLabel: {
                                                    shrink: true,
                                                },
                                            }}
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <TextField
                                            id="outlined-multiline-flexible"
                                            label="Your Message"
                                            type='text'
                                            multiline
                                            className='w-100'
                                            rows={4}
                                            placeholder='Enter your Message'
                                            slotProps={{
                                                inputLabel: {
                                                    shrink: true,
                                                },
                                            }}
                                        />
                                    </div>


                                    <div className="col-md-12 text-center">
                                        <input type="submit" value="Send Message" className='sendmessage' disabled />


                                        {/* 
                                        <div className="error-message"></div>
                                        <div className="sent-message">Your message has been sent. Thank you!</div> */}
                                        {/* {
                            loading ?
                                <input type="submit" value="Send Message" className='sendmessage' disabled />
                                : <>
                                    <input type="submit" value="Send Message" className='sendmessage' />
                                </>
                        } */}
                                        {/* <div className="loderCss mt-4">

                            {loading ?
                                <>
                                    <div className="custom-loader"></div><p>Sending...</p>
                                </>
                                : ""
                            }
                        </div> */}
                                        {/* {successMsg !== null && (
                            <div className="succussMsg1">
                                <div className={`succussMsg ${successMsg ? 'success' : 'error'}`}>
                                    <p className={`${successMsg ?"":'text-danger'}`}>
                                        <i className={`bi ${successMsg ? 'bi-check-circle' : 'bi-x-circle'}`}></i>
                                        {successMsg ? ' Your message has been sent. Thank you!' : '  Something went wrong. Please try again!'}
                                    </p>
                                </div>
                            </div>
                        )} */}

                                    </div>

                                </div>
                            </form>

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}
