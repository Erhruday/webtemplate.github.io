import React from 'react';

function Contact() {
    return (
        <>
            <section className="contactus-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row">
                                <div className="contact-leftside col-lg-5 col-12">
                                    <h1 className="main-heading">Contact With Me..</h1>
                                    <p className="main_para"> Lorem, ipsum dolor sit amet consectetur.Maxime explicabo ullam voluptatibus</p>
                                    <figure>
                                        <img src="./images/smallImg.jpg" alt="img" className="img-fluid" />
                                    </figure>
                                </div>
                                {/* Right Side Contact Form */}
                                <div className="contact-rightside col-12 col-lg-7">
                                    <form>
                                        <div className="row">
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="text" placeholder="First Name" className="form-control" />
                                            </div>
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input
                                                    type="text"
                                                    placeholder="Last Name"
                                                    className="
                                                    form-control"
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="text" placeholder="Phone Number" className="form-control" />
                                            </div>
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input
                                                    type="text"
                                                    placeholder="Email ID"
                                                    className="
                                                    form-control"
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 contact-input-field">
                                                <input type="text" placeholder="Address" className="form-control" autoComplete="false" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 ">
                                                <input type="text" placeholder="Message" className="form-control" />
                                            </div>
                                        </div>
                                        <div class="form-check form-checkbox-style">
                                            <input class="form-check-input" type="checkbox" value="" />
                                            <label class="form-check-label" className="main_para" for="flexCheckDefault">
                                                I have read and agree to the Privacy Policy.
                                            </label>
                                        </div>
                                        <button type="submit" className="btn btn_style w-100">
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
