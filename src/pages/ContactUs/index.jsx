import React from "react";
import contactUsHeader from './assets/img/contact-us-header.png';

// import components
import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";

// Contact Us Page | route = /contact_us
const ContactUs = () => {

    return(
        <>
        <Header backgroundImage={contactUsHeader} />
        <PageTitle whiteText="Contact" greenText="Us"/>
        </>
    )
};

export default ContactUs;