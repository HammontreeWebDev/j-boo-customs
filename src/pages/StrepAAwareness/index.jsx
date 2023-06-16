import React from "react";
import awarenessHeader from './assets/img/awareness-header.png';

// import components
import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";

// Strep A Awareness Page | route = /strep_a_awareness
const StrepAAwareness = () => {

    return(
        <>
        <Header backgroundImage={awarenessHeader} />
        <PageTitle whiteText="Strep A" greenText="Awareness"/>
        <main>
            
        </main>
        </>
    )
};

export default StrepAAwareness;