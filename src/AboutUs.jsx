import React, { useState } from 'react';
import howToUseAPI from './API/howToUseAPI';

function AboutUs() {
    const [state, setstate] = useState(howToUseAPI);
    return (
        <>
            <section className="common-section our-servises">
                <div className="container mb-4">
                    <div className="row">
                        <div className="col-12 col-lg-5 text-center our-service-leftSide-img">
                            <img src="./images/img1.JPG" alt="img" />
                        </div>
                        {/* Right Side Content */}
                        <div className="col-12 col-lg-7 our-service-list">
                            <h1 className="heading"> How to Use</h1>
                            {state.map((element) => {
                                const { id, title, info } = element;
                                return (
                                    <>
                                        <div className="row our-services-info">
                                            <div className="col-1 our-services-number">{id}</div>
                                            <div className="col-11 our-services-data">
                                                <h2>{title}</h2>
                                                <p className="main_para">{info}</p>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}

                            <br />
                            <button className="btn_style secound_btn_style">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2nd Section */}
            <section className="common-section our-servises our-servises-rightside">
                <div className="container mb-4">
                    <div className="row">
                        {/* Right Side Content */}
                        <div className="col-12 col-lg-7 our-service-rightside-content d-flex justify-content-center align-items-start flex-column">
                            <h1 className="heading text-center">
                                <b> Support</b>
                            </h1>
                            {state.map((element) => {
                                const { id, title, info } = element;
                                return (
                                    <>
                                        <div className="row our-services-info">
                                            <div className="col-1 our-services-number">{id}</div>
                                            <div className="col-11 our-services-data">
                                                <h2>{title}</h2>
                                                <p className="main-hero-para">{info}</p>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}

                            <button className="btn_style secound_btn_style">Learn More</button>
                        </div>
                        {/* img Section */}
                        <div className="col-12 col-lg-5 our-service-rightSide-img">
                            <img src="./images/img4.JPG" alt="img" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutUs;
