import React, { useState } from "react";
import fetchData from "../../utils/fetchData";
import "./ButtonOnOf.css";

const professionalBolean = false; // variante hardcoriada esto debe venir desde el fetch que se haga en profile
const userId = 4; // variante hardcoriada esto debe venir desde el fetch que se haga en profile

export default function ButtonOnOf() {
    const [isProfeesional, setIsProfessional] = useState(professionalBolean);
    async function whenSwitch() {
        setIsProfessional(!isProfeesional);
        const value = !isProfeesional;
        const url = "http://localhost:4000/home/putProfile";
        const handleData = { userId, on: value };
        fetchData(handleData, url, "PUT");
    }
    return (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control

        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label className="switch">
            <input
                type="checkbox"
                checked={isProfeesional}
                onChange={whenSwitch}
            />
            <span className="slider" />
        </label>
    );
}
