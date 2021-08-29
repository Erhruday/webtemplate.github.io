import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
function NavBar() {
    const [show, setShow] = useState(false);
    return (
        <>
            <section class="navbar_bg">
                <nav class="navbar navbar-expand-lg navbar-light ">
                    <div class="container">
                        <NavLink class="navbar-brand" to="/">
                            HR
                        </NavLink>
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            onClick={() => setShow(!show)}
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class={`collapse navbar-collapse ${show ? 'show' : ''}`}>
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <NavLink class="nav-link active" aria-current="page" to="/">
                                        Home
                                    </NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink class="nav-link" to="/service">
                                        Services
                                    </NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink class="nav-link" to="/aboutUs">
                                        About
                                    </NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink class="nav-link" to="/contactus">
                                        Contact Us
                                    </NavLink>
                                </li>
                            </ul>

                            <button class="btn btn-outline-success btn_style" type="submit">
                                SignUp
                            </button>
                            <button class="btn btn-outline-success btn_style secound_btn_style" type="submit">
                                LogIn
                            </button>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    );
}

export default NavBar;
