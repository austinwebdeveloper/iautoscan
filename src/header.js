import React, {Component} from 'react';

class Header extends React.Component {
    render() {
        return (<header className="page-head main-page">
    <div className="rd-navbar-wrap rd-navbar-default" >
        <nav data-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fixed" data-md-layout="rd-navbar-fullwidth" data-md-device-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-static" data-lg-device-layout="rd-navbar-static" data-stick-up-clone="false" data-md-stick-up-offset="100px" data-lg-stick-up-offset="100px" data-auto-height="true" className="rd-navbar rd-navbar-original rd-navbar-static">
            <div className="rd-navbar-inner">
                <div className="rd-navbar-nav-wrap-outer">
                    <div className="rd-navbar-panel">
                        <button data-rd-navbar-toggle=".rd-navbar-nav-wrap" className="rd-navbar-toggle toggle-original"><span></span></button>
                        <a href="index.html" className="rd-navbar-brand">
                            <div className="brand-name"><span> i</span><span className="text-primary">autoscan</span></div></a>
                    </div>
                </div>
                <div className="rd-navbar-nav-wrap toggle-original-elements">
                    <ul className="rd-navbar-nav">
                        <li className="home_link menulinks">
                            <a href="/">Home</a>
                        </li>
                        <li className="pricing_link menulinks"><a href="/Pricing">Pricing</a>
                        </li>
                        <li className="contact_link menulinks"><a href="/Contact">Contact</a>
                        </li>
                        <li className="signup_link menulinks"><a href="/signup">SignUp</a>
                        </li>
                        <li className="login_link menulinks active"><a href="/login">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</header>

        );
    }
}

export default Header;