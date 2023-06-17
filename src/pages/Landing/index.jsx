import { React } from "react";
import useNavigation from "../../utils/navigationUtils";


// import components
import Header from "../../components/Header";
import GalleryPhoto from "../../components/GalleryPhoto";
import CustomVideo from "../../components/CustomVideo";
import PageTitle from "../../components/PageTitle";
import Footer from "../../components/Footer";

// import images
import landingHeader from './assets/img/landing_header.png'
import ph1 from './assets/img/ph-1.png';
import ph2 from './assets/img/ph-2.png';
import ph3 from './assets/img/ph-3.png';
import ph4 from './assets/img/ph-4.png';
import ph5 from './assets/img/ph-5.png';
import ph6 from './assets/img/ph-6.png';

// import video
import phVid from './assets/video/ph-vid.mp4';

// Landing Page | route = /landing
const Landing = () => {
    // ! keep track of state using helper function to fire exit animations
    const { isPageChanging , handleNavigate } = useNavigation();

    return(
        <>
        <Header backgroundImage={landingHeader} handleNavigate={handleNavigate} isPageChanging={isPageChanging}/>
        <PageTitle isPageChanging={isPageChanging} whiteText='"Remembering, Preventing, and Healing:' greenText='Together Against Strep A"'  />
        <main>
            <section className="row">
                <GalleryPhoto isPageChanging={isPageChanging} src={ph1} alt="placeholder image"/>
                <GalleryPhoto isPageChanging={isPageChanging} src={ph2} alt="placeholder image"/>
                <GalleryPhoto isPageChanging={isPageChanging} src={ph3} alt="placeholder image"/>
                <GalleryPhoto isPageChanging={isPageChanging} src={ph4} alt="placeholder image"/>
                <GalleryPhoto isPageChanging={isPageChanging} src={ph5} alt="placeholder image"/>
                <GalleryPhoto isPageChanging={isPageChanging} src={ph6} alt="placeholder image"/>
            </section>

            <section className="row">
                <CustomVideo isPageChanging={isPageChanging} src={phVid}/>
            </section>
        </main>
        <Footer />
        </>
    )
};

export default Landing;