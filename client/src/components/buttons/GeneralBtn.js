/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const GeneralBtn = ({ btnName, btnType, path }) => (
    <Link to={path}>
        <button type={btnType} className="btn">
            {btnName}
        </button>
    </Link>
);

export default GeneralBtn;
