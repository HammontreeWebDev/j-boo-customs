import React from "react";
import storyHeader from './assets/img/story-header.png';

// import components
import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";

// Jesse's Story Page | route = /jesses_story
const JessesStory = () => {

    return(
        <>
        <Header backgroundImage={storyHeader} />
        <PageTitle whiteText="Jesse's" greenText="Story" />
        </>
    )
};

export default JessesStory;