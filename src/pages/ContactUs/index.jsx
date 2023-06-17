import React from "react";
import useNavigation from "../../utils/navigationUtils";
// import Iconify Icons
import { Icon } from '@iconify/react';

// css
import './assets/css/contactus.css'

// import images
import contactUsHeader from './assets/img/contact-us-header.png';
import contactPh from './assets/img/contact-ph.png';

// import components
import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import FancyCard from "../../components/FancyCard";
import ContactInfo from "../../components/ContactInfo";
import FormContainer from "../../components/FormContainer";
import Footer from "../../components/Footer";

const IconifyPhone = () => {
    return (
        < Icon icon="el:phone-alt" />
    )
}
const IconifyEmail = () => {
    return (
        <Icon icon="streamline:mail-send-email-send-email-paper-airplane" />
    )
}

// Contact Us Page | route = /contact_us
const ContactUs = () => {
    // ! keep track of state using helper function to fire exit animations
    const { isPageChanging, handleNavigate } = useNavigation();

    return (
        <>
            <Header backgroundImage={contactUsHeader} isPageChanging={isPageChanging} handleNavigate={handleNavigate} />
            <PageTitle isPageChanging={isPageChanging} whiteText="Contact" greenText="Us" />
            <main>
                {/* id props to override css for about me classes */}
                <section className="row">
                    <FancyCard fancyContainerId="fancy-override" titleColId="title-override" classSelector="contact-container" memberName="Contact Information" memberPhoto={contactPh} photoId="contact-photo" alt="white envelope with a red pencil"
                        contactInfo={
                            <div id="contact-section">
                                <ContactInfo title="Brad Brown | President" emailIcon={<IconifyEmail />} email="brad@j-boocustoms.org" phoneIcon={<IconifyPhone />} phone="xxx-xxx-xxxx" />

                                <ContactInfo title="Betsy Brown | Vice President" emailIcon={<IconifyEmail />} email="betsy@j-boocustoms.org" phoneIcon={<IconifyPhone />} phone="xxx-xxx-xxxx" />

                                <ContactInfo title="Brian Hammontree | Treasurer" emailIcon={<IconifyEmail />} email="treasurer@j-boocustoms.org" />

                                <ContactInfo title="General Inquiry" emailIcon={<IconifyEmail />} email="information@j-boocustoms.org" />
                            </div>
                        }
                    />
                </section>

                <section className="row">
                    <FormContainer
                        greenText="Contact"
                        whiteText="Form"
                        form={
                            <form className="contact-form">

                                <div className="form-row">
                                    <input className="form-input" type="text" placeholder="First Name" />
                                    <input className="form-input" type="text" placeholder="Last Name" />
                                    <input className="form-input" type="email" placeholder="youremail@address.com" />
                                    <input className="form-input" type="tel" placeholder="XXX-XXX-XXXX" />
                                </div>

                                <div className="form-row">
                                    <textarea name="message" placeholder="Write your message here...Messages that are sent using this contact form are forwarded to information@j-boocustoms.org" />
                                </div>

                                <button id="submitBtn" type="submit">SEND</button>
                            </form>
                        }
                    />
                </section>

            </main>
            <Footer />
        </>
    )
};

export default ContactUs;