import React, { Component } from 'react';

class Body extends React.Component {
    render() {
        return (
            <main className="page-content">
                <section className="section-top-60 section-bottom-100 section-lg-top-120 section-lg-bottom-250 section-xl-bottom-450 bg-outer-space">
                    <div className="shell">
                        <div className="range range-xs-center">
                            <div className="cell-md-10">
                                <h3 className="title" id="content-title">Login</h3>
                                <hr className="divider-lg offset-top-50" />
                                    <form data-form-output="form-output-global" data-form-type="contact" method="post" action="bat/login.php" class="rd-mailform text-center offset-top-50" novalidate="novalidate">
                                        <div className="range text-left">

                                            <div className="form-group cell-md-6 offset-top-15">
                                                <label for="email" className="form-label rd-input-label focus not-empty auto-fill">Email</label>
                                                <input id="email" type="email" name="email" data-constraints="@Email @Required" className="form-control form-control-has-validation form-control-last-child" /><span class="form-validation"></span>
                                            </div>

                                            <div className="form-group cell-md-6 offset-top-15">
                                                <label for="password" className="form-label rd-input-label auto-fill focus not-empty">Password</label>
                                                <input id="password" type="password" name="password" data-constraints="@Required" className="form-control form-control-has-validation form-control-last-child" /><span class="form-validation"></span>
                                            </div>

                                        </div>

                                        <button type="submit" className="link link-white btn-link offset-top-30">Login</button>

                                    </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default Body;