import React from "react";
import './assets/css/formcontainer.css';

const FormContainer = (props) => {

    return (
        <div className="form-card">

            <div className="form-title">
                <h2 className="card-title text-center"><span className="green-text">{props.greenText}</span> {props.whiteText}</h2>
            </div>

            <div className="form-card-body">
            {props.form}
            </div>

        </div>
    )
}

export default FormContainer;