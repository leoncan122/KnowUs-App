/* eslint-disable react/prop-types */
import React from "react";
import "./GeneralInput.css";

export default function GeneralInput({
    inputValue,
    inputId,
    label,
    inputType,
    onChange,
    required,
}) {
    function handldeInput(e) {
        e.preventDefault();
        onChange(e.target.value);
    }
    return (
        <div className="general-input">
            <label htmlFor={inputId} className="form-label">
                {label}
            </label>

            <input
                type={inputType}
                className="form-input"
                id={inputId}
                value={inputValue}
                onChange={handldeInput}
                required={required}
            />
        </div>
    );
}
