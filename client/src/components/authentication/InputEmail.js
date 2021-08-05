/* eslint-disable react/prop-types */
import React from "react";
import GeneralInput from "../units/generalInput/GeneralInput";

export default function InputEmail({ email, onChange }) {
    const inputId = "inputEmail";
    const label = "Email";
    const inputType = "email";

    return (
        <div className="authentication">
            <GeneralInput
                inputValue={email}
                inputId={inputId}
                label={label}
                inputType={inputType}
                onChange={onChange}
            />
        </div>
    );
}
