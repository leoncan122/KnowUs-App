import React, { useState } from "react";
import fetchData from "../../utils/fetchData";
import "./ButtonOnOf.css";

export default function ButtonOnOf({ userId, state }) {
    const [isProfesional, setIsProfessional] = useState(state);
    function whenSwitch() {
        setIsProfessional(!isProfesional);
        const value = !isProfesional;
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
                checked={isProfesional}
                onChange={whenSwitch}
            />
            <span className="slider" />
        </label>
    );
}
