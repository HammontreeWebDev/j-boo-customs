import React from "react";

// import components
import Header from "../../components/Header";
import GalleryPhoto from "../../components/GalleryPhoto";

// import images
import landingHeader from './assets/img/landing_header.png'
import ph1 from './assets/img/ph-1.png';
import ph2 from './assets/img/ph-2.png';
import ph3 from './assets/img/ph-3.png';
import ph4 from './assets/img/ph-4.png';
import ph5 from './assets/img/ph-5.png';
import ph6 from './assets/img/ph-6.png';


// Landing Page | route = /landing
const Landing = () => {

    return(
        <>
        <Header backgroundImage={landingHeader}/>
        <main>
            <section className="row">
                <GalleryPhoto src={ph1} alt="placeholder image"/>
                <GalleryPhoto src={ph2} alt="placeholder image"/>
                <GalleryPhoto src={ph3} alt="placeholder image"/>
                <GalleryPhoto src={ph4} alt="placeholder image"/>
                <GalleryPhoto src={ph5} alt="placeholder image"/>
                <GalleryPhoto src={ph6} alt="placeholder image"/>
            </section>
        </main>
        </>
    )
};

export default Landing;