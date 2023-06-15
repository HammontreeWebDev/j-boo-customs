import React from "react";

// import components
import Header from "../../components/Header";
import aboutUsHeader from './assets/img/about-us-header.png';
import PageTitle from "../../components/PageTitle";
import ContentCard from "../../components/ContentCard";
import FancyCard from "../../components/FancyCard";

// About Us Page located at /about_us
const AboutUs = () => {

    return (
        <>
            <Header backgroundImage={aboutUsHeader} />
            <PageTitle whiteText='About' greenText='Us'/>
            <main>
                {/* Who we Are */}
                <section className="row">
                    <ContentCard greenText="Who" whiteText="We Are" bodyText={
                        <>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </>
                    } />
                </section>
                
                {/* About Me Cards */}
                <section className="row">
                    <FancyCard />
                </section>

                {/* <section className="row">

                </section>

                <section className="row">

                </section> */}
            </main>
        </>
    )
}

export default AboutUs;