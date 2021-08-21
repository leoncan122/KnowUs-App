import React from "react";
import GeneralInput from "../units/generalInput/GeneralInput";

export default function EditGithubLink({ github, onChange }) {
    const inputId = "inputGithubLink";
    const label = "Github";
    const inputType = "text";

    return (
        <div className="edit-github">
            <GeneralInput
                inputValue={github}
                inputId={inputId}
                label={label}
                inputType={inputType}
                onChange={onChange}
            />
        </div>
    );
}
