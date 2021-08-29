import React from 'react';

function Header() {
    return (
        <>
            <header>
                <section className="container main-hero-container">
                    <div className="row">
                        <div className="col-12 col-lg-6 header-left-side  d-flex justify-content-center flex-column align-items-start">
                            <h1 className="display-2">
                                Hi, Mr. Hruday
                                <br /> Ranjan.{' '}
                            </h1>
                            <p className="main_para">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, dolorem.Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Tenetur, dolorem.
                            </p>
                            <h3>Lorem ipsum dolor sit amet,</h3>
                            <div className="input-group mt-3">
                                <input type="email" className="rounded-pill w-75 me-3 form-control-text p-2" placeholder="Enter Year Email" />
                                <div className="input-group-btn">
                                    Search
                                    <i class="fas fa-search" style={{ marginLeft: '1rem' }}></i>
                                </div>
                            </div>
                        </div>
                        {/* Main Header Right Side */}
                        <div className="col-12 col-md-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
                            <img src="./images/img2.png" alt="Main Img" className="img-fluid" />
                            <img src="./images/img3.jpeg" alt="2nd Img" className="img-fluid main-hero-img2" />
                        </div>
                    </div>
                </section>
            </header>
        </>
    );
}

export default Header;
