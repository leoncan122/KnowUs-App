import React from "react";
import GeneralInput from "../units/generalInput/GeneralInput";

export default function EditCity({ city, onChange }) {
    const inputId = "inputEditCity";
    const label = "City";
    const inputType = "text";

    return (
        <div className="edit-city">
            <GeneralInput
                inputValue={city}
                inputId={inputId}
                label={label}
                inputType={inputType}
                onChange={onChange}
            />
        </div>
    );
}
