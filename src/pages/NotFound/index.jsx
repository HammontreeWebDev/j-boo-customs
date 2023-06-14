import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {

    const navigate = useNavigate();

    function goBack() {
        navigate('/')
    }

    return(
        <>
        <h1>I love easter eggs too. Unfortunately, this isn't an easter egg.
            Somehow you made it to a page that doesn't exist.
        </h1>
        <button id="egg" onClick={goBack}>Go Back Now</button>
        </>
    )
};

export default NotFound;