import React from "react";
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

    return (
        <>
            <Header backgroundImage={contactUsHeader} />
            <PageTitle whiteText="Contact" greenText="Us" />
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
                    <p>Hello ThereHello ThereHello ThereHello ThereHello ThereHello ThereHello ThereHello ThereHello ThereHello ThereHello ThereHello ThereHello ThereHello ThereHello ThereHello ThereHello ThereHello ThereHello ThereHello ThereHello ThereHello ThereHello ThereHello ThereHello ThereHello ThereHello ThereHello ThereHello ThereHello ThereHello ThereHello ThereHello ThereHello ThereHello ThereHello ThereHello ThereHello There</p>
                </section>

            </main>
        </>
    )
};

export default ContactUs;