import React, { Component } from 'react';

class Signup extends React.Component {
    render() {
        return (
                <main className="page-content">
                <section  className="section-top-60 section-bottom-100 section-lg-top-120 section-lg-bottom-120 section-xl-bottom-250 bg-outer-space">
                    <div className="shell">
                        <div className="range range-xs-center">
                            <div className="cell-md-10" id="signup_div">
                                <h3 className="title" id="content-title">Registration</h3>
                                <hr className="divider-lg offset-top-50" />
                                <form data-form-output="form-output-global" data-form-type="signup" method="post" action="bat/signup.php" className="rd-mailform text-center offset-top-50">
                                    <div className="range text-left">
                                        <div className="form-group cell-md-12 offset-top-15">
                                            <p className="register_labels">Login Credentials</p>
                                        </div>
                                        <div className="form-group cell-md-6 offset-top-15">
                                            <label for="email" className="form-label">Email</label>
                                            <input id="email" type="email" name="email" data-constraints="@Email @Required" className="form-control" />
                                        </div>
                                        <div className="form-group cell-md-6 offset-top-15">
                                            <label for="password" className="form-label">Password</label>
                                            <input id="password" type="password" name="password" data-constraints="@Required" className="form-control" />
                                        </div>
                                        <div className="form-group cell-md-12 offset-top-15">
                                            <p className="register_labels">Dealership Information</p>
                                        </div>
                                        <div className="form-group cell-md-6 offset-top-15">
                                            <label for="dealership" className="form-label">Dealership</label>
                                            <input id="dealership" type="text" name="dealership" data-constraints="@Required" className="form-control" />
                                        </div>
                                        <div className="form-group cell-md-6 offset-top-15">
                                            <label for="firstname" className="form-label">First Name</label>
                                            <input id="firstname" type="text" name="firstname" data-constraints="@Required" className="form-control" />
                                        </div>
                                        <div className="form-group cell-md-6 offset-top-15">
                                            <label for="lastname" className="form-label">Last Name</label>
                                            <input id="lastname" type="text" name="lastname" data-constraints="@Required" className="form-control" />
                                        </div>
                                        <div className="form-group cell-md-6 offset-top-15">
                                            <label for="phone" className="form-label">Phone</label>
                                            <input id="phone" type="text" name="phone" data-constraints="@Required @Numeric" className="form-control" />
                                        </div>
                                        <div className="form-group cell-md-6 offset-top-15">
                                            <select id="country" name="country" className="form-control">
                                                <option value="US">USA</option>
                                                <option value="CA">Canada</option>
                                                <option value="MX">Mexico</option>
                                            </select>
                                        </div>
                                        <div className="form-group cell-md-6 offset-top-15">
                                            <label for="address" className="form-label">Address</label>
                                            <input id="address" type="text" name="address" data-constraints="@Required" className="form-control" />
                                        </div>
                                        <div className="form-group cell-md-6 offset-top-15">
                                            <label for="city" className="form-label">City</label>
                                            <input id="city" type="text" name="city" data-constraints="@Required" className="form-control" />
                                        </div>
                                        <div className="form-group cell-md-6 offset-top-15" id="state_div">
                                        </div>
                                        <div className="form-group cell-md-6 offset-top-15" id="zip_div">
                                            <label for="zip_code" className="form-label">Zip Code</label>
                                            <input id="zip_code" type="text" name="zip_code" data-constraints="@Required" className="form-control" />
                                        </div>
                                    </div>
                                    <button type="submit" className="link link-white btn-link offset-top-30">Signup</button>
                                </form>
                            </div>
                            <div id="signup_success" >
                                <h4 className="title" id="content-title" >Email Confirmation Sent</h4>
                                <hr className="divider-lg offset-top-50" />
                                <p className="cell-md-3" id="success_msg">Email Confirmation has been sent to your email address</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default Signup;