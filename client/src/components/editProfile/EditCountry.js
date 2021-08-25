import React from "react";
import GeneralInput from "../units/generalInput/GeneralInput";

export default function EditCountry({ country, onChange }) {
    const inputId = "inputEditCountry";
    const label = "Country";
    const inputType = "text";

    return (
        <div className="edit-country">
            <GeneralInput
                inputValue={country}
                inputId={inputId}
                label={label}
                inputType={inputType}
                onChange={onChange}
            />
        </div>
    );
}
