import React from "react";

// import images
import contactUsHeader from './assets/img/contact-us-header.png';
import contactPh from './assets/img/contact-ph.png';

// import components
import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import FancyCard from "../../components/FancyCard";

// Contact Us Page | route = /contact_us
const ContactUs = () => {

    return(
        <>
        <Header backgroundImage={contactUsHeader} />
        <PageTitle whiteText="Contact" greenText="Us"/>
        <main>

            <section className="row">
            <FancyCard memberName="Contact Information" memberPhoto={contactPh} alt="white envelope with a red pencil"/>
            </section>

        </main>
        </>
    )
};

export default ContactUs;