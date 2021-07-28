/* eslint-disable react/prop-types */
import React from "react";

const SubmitBtn = ({ btnName }) => (
    <button type="submit" className="btn">
        {btnName}
    </button>
);

export default SubmitBtn;
