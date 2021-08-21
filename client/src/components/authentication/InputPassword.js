/* eslint-disable react/prop-types */
import React from "react";
import GeneralInput from "../units/generalInput/GeneralInput";

export default function InputPassword({ password, onChange }) {
    const inputId = "inputPassword";
    const label = "Password";
    const inputType = "password";

    return (
        <div className="authentication">
            <GeneralInput
                inputValue={password}
                inputId={inputId}
                label={label}
                inputType={inputType}
                onChange={onChange}
                required="true"
            />
        </div>
    );
}
