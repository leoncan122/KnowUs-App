import React from "react";
import GeneralInput from "../units/generalInput/GeneralInput";

export default function EditLinkedinLink({ linkedin, onChange }) {
    const inputId = "inputLinkedinLink";
    const label = "Linkedin";
    const inputType = "text";

    return (
        <div className="edit-likedin">
            <GeneralInput
                inputValue={linkedin}
                inputId={inputId}
                label={label}
                inputType={inputType}
                onChange={onChange}
            />
        </div>
    );
}
