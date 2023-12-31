import React from "react";
import useNavigation from "../../utils/navigationUtils";

import storyHeader from './assets/img/story-header.png';

// import components
import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import Jesse from "../../components/Jesse";
import Footer from "../../components/Footer";

// import images
import jessePhImg from './assets/img/jesse-placeholder.png'

// Jesse's Story Page | route = /jesses_story
const JessesStory = () => {
    // ! keep track of state using helper function to fire exit animations
    const { isPageChanging, handleNavigate } = useNavigation();

    return (
        <>
            <Header backgroundImage={storyHeader} isPageChanging={isPageChanging} handleNavigate={handleNavigate} />
            <PageTitle isPageChanging={isPageChanging} whiteText="Jesse's" greenText="Story" />
            <main>
                <section className="row">
                    <Jesse isPageChanging={isPageChanging} whiteTitle="Jesse Brown -" blueTitle='"J-Boo"' src={jessePhImg} alt="placeholder image for jesse"
                        text={
                            <>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                <br></br>
                                <br></br>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </>
                        } />
                </section>
            </main>
            <Footer />
        </>
    )
};

export default JessesStory;