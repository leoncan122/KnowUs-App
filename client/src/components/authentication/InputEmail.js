/* eslint-disable react/prop-types */
import React from "react";
import GeneralInput from "./units/GeneralInput";

export default function InputEmail({ email, onChange }) {
    const inputId = "inputEmail";
    const label = "Email";
    const inputType = "email";

    return (
        <div>
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
