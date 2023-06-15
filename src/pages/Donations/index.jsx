import React from "react";
import Header from "../../components/Header";
import donationsHeader from './assets/img/donations-header.png';

// Donations Page | route = /donations
const Donations = () => {

    return(
        <Header backgroundImage={donationsHeader} />
    )
};

export default Donations;