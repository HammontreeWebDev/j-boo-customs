import React from "react";

// import components
import Header from "../../components/Header";
import aboutUsHeader from './assets/img/about-us-header.png';
import PageTitle from "../../components/PageTitle";

// About Us Page located at /about_us
const AboutUs = () => {

    return (
        <>
            <Header backgroundImage={aboutUsHeader} />
            <PageTitle whiteText='About' greenText='Us'/>
            <main>
                {/* Who we Are */}
                <section className="row">

                </section>
                
                {/* About Me Cards */}
                <section className="row"></section>

                <section className="row"></section>

                <section className="row"></section>
            </main>
        </>
    )
}

export default AboutUs;