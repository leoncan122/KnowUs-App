/* eslint-disable react/prop-types */
import React from "react";
import GeneralInput from "../units/GeneralInput";

export default function InputPassword({ password, onChange }) {
    const inputId = "inputPassword";
    const label = "Password";
    const inputType = "password";

    return (
        <div>
            <GeneralInput
                inputValue={password}
                inputId={inputId}
                label={label}
                inputType={inputType}
                onChange={onChange}
            />
        </div>
    );
}
