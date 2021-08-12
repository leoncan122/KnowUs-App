import React from "react";
import GeneralInput from "../units/generalInput/GeneralInput";

export default function EditProfession({ profession, onChange }) {
    const inputId = "inputEditProfession";
    const label = "Profession";
    const inputType = "text";

    return (
        <div className="edit-profession">
            <GeneralInput
                inputValue={profession}
                inputId={inputId}
                label={label}
                inputType={inputType}
                onChange={onChange}
            />
        </div>
    );
}
