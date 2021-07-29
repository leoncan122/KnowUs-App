/* eslint-disable react/prop-types */
import React from "react";
import GeneralInput from "../units/GeneralInput";

export default function InputUsername({ username, onChange }) {
    const inputId = "inputUsername";
    const label = "Username";
    const inputType = "text";

    return (
        <div>
            <GeneralInput
                inputValue={username}
                inputId={inputId}
                label={label}
                inputType={inputType}
                onChange={onChange}
            />
        </div>
    );
}
