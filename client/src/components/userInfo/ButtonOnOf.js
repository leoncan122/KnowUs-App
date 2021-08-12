// funciona en http://localhost:3000/pbutton

import React, { useState } from "react";
import fetchData from "../../utils/fetchData";
import "./ButtonOnOf.css";

// const userId = 4;
export default function ButtonOnOf({ userId, state }) {
    // async function fetching() {
    //     const url2 = `http://localhost:4000/home/user/${userId}`;
    //     const rawData = await fetchData(false, url2, "GET");
    //     // const data = rawData[0].is_profesional;

    //     // console.log(data, "dentro de fetching");
    // }
    // fetching();

    const [isProfesional, setIsProfessional] = useState(state);
    function whenSwitch() {
        setIsProfessional(!isProfesional);
        const value = !isProfesional;
        console.log(userId);
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
