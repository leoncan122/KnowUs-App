/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import fetchData from "../../utils/fetchData";
import "./ButtonOnOf.css";

export default function ButtonOnOf({ userId, state }) {
    const [isProfesional, setIsProfessional] = useState(state);
    async function whenSwitch() {
        setIsProfessional(!isProfesional);
        const value = !isProfesional;
        const url = `${process.env.REACT_APP_API_URL}home/putProfile`;
        const handleData = { userId, on: value };
        fetchData(handleData, url, "PUT");
    }

    let ButtonOnOfInfo = "";
    let ButtonOnOfInfoMovil = "";

    if (isProfesional) {
        ButtonOnOfInfo = `You are already a professional user. Congratulations! If so
        Otherwise you prefer not to answer questions unsubscribe click here`;
    } else {
        ButtonOnOfInfo = `Not a professional user yet? If you want to contribute
        to the community and answer questions, click here and receive requests`;
    }

    if (isProfesional) {
        ButtonOnOfInfoMovil = "You are ready a profesional";
    } else {
        ButtonOnOfInfoMovil = "Become a profesional";
    }
    return (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control

        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <div className="container-profesional-btn">
            <label className="switch">
                <input
                    type="checkbox"
                    checked={isProfesional}
                    onChange={whenSwitch}
                />
                <span className="slider" />
            </label>
            <div className="paragraphs-profesional-container">
                <p className="button-info">{ButtonOnOfInfo}</p>
                <p className="button-info-movil">{ButtonOnOfInfoMovil}</p>
            </div>
        </div>
    );
}
