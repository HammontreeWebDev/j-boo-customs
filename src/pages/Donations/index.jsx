import React from "react";
import donationsHeader from './assets/img/donations-header.png';

// import components
import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";

// Donations Page | route = /donations
const Donations = () => {

    return(
        <>
        <Header backgroundImage={donationsHeader} />
        <PageTitle whiteText="Donate" greenText="Now"/>
        </>
    )
};

export default Donations;