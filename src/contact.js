import React from 'react';

class Contact extends React.Component {
    render() {
        return (
            <main className="page-content">
                <section  className="section-top-60 section-bottom-100 section-lg-top-120 section-lg-bottom-250 section-xl-bottom-450 bg-outer-space">
                    <div className="shell">
                        <div className="range range-xs-center">
                            <div className="cell-md-10">
                                <h3 className="title" id="content-title">Contact us</h3>
                                <hr className="divider-lg offset-top-50" />
                                    <form data-form-output="form-output-global" data-form-type="contact" method="post" action="bat/mailform.php" className="rd-mailform text-center offset-top-50">
                                        <div className="range text-left">
                                            <div className="form-group cell-md-6 offset-top-15">
                                                <label for="contact-dealership" className="form-label">Dealership</label>
                                                <input id="contact-dealership" type="text" name="dealership" data-constraints="@Required" className="form-control" />
                                            </div>
                                            <div className="form-group cell-md-6 offset-top-15">
                                                <label for="contact-name" className="form-label">Name</label>
                                                <input id="contact-name" type="text" name="name" data-constraints="@Required" className="form-control" />
                                            </div>
                                            <div className="form-group cell-md-6 offset-top-15">
                                                <label for="contact-email" className="form-label">Email</label>
                                                <input id="contact-email" type="email" name="email" data-constraints="@Email @Required" className="form-control" />
                                            </div>
                                            <div className="form-group cell-md-6 offset-top-15">
                                                <label for="contact-phone" className="form-label">Phone</label>
                                                <input id="contact-phone" type="text" name="phone" data-constraints="@Required @Numeric" className="form-control" />
                                            </div>
                                            <div className="form-group cell-xs-12 offset-top-30">
                                                <label for="contact-message" className="form-label">Message</label>
                                                <textarea id="contact-message" name="message" data-constraints="@Required" className="form-control"></textarea>
                                            </div>
                                        </div>
                                        <button type="submit" className="link link-white btn-link offset-top-30">submit</button>
                                    </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
    );
    }
    }

    export default Contact;