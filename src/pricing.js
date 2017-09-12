import React from 'react';

class Pricing extends React.Component {
    render() {
        return (
            <main className="page-content">
                <section  className="section-top-60 section-bottom-100 section-lg-top-120 section-lg-bottom-250 section-xl-bottom-450 bg-outer-space">
                    <div className="shell">
                        <div className="range range-xs-center">
                            <div className="cell-md-10">
                                <h3 className="title" id="content-title">Pricing</h3>
                                <hr className="divider-lg offset-top-50" />
                                    <p id="price_title">Limited offer $149.95/month for the first 100 dealerships.</p>
                                    <div className="cell-sm-3" id="price_section">
                                        <div id="price_section1">
                                            <p id="price_section1_head1">Professional Edition</p>
                                            <p id="price_section1_head2">Full Version</p>
                                        </div>
                                        <div id="price_section2">
                                            <p id="price_section2_head1">
                                                <i>$</i>199<i>.99</i>
                                            </p>
                                            <p id="price_section2_head2">Monthly</p>
                                        </div>
                                        <p className="price_labels">Capture VINs and QR codes</p>
                                        <p className="price_labels">Full NADA, AutoCheck values</p>
                                        <p className="price_labels">Secure data storage in the cloud</p>
                                        <div id="price_footer">
                                            <p id="price_footer_label">Limited offer $149.95/month for the first 100 dealerships.</p>
                                            <p id="signup_div">
                                                <a href="signup.php" id="signup_link">Sign Up</a>
                                            </p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
    );
    }
    }

    export default Pricing;