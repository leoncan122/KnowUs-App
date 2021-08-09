import React from "react";
import fetchData from "../../utils/fetchData";
import "./ButtonOnOf.css";

const isprofeesional2 = "false"; // variante hardcoriada esto debe venir desde el fetch que se haga en profile
const userId = 4; // variante hardcoriada esto debe venir desde el fetch que se haga en profile

export default function ButtonOnOf() {
    async function whenSwitch() {
        const [isprofeesional, setisprofessional] = useState(isprofeesional2);

        setisprofessional(!isprofeesional);

        const url = "http://localhost:4000/home/putProfile";

        const handleData = { userId, on: isprofeesional };

        const data = await fetchData(handleData, url, "PUT");
    }
    return (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label className="switch">
            <input type="checkbox" />
            <span className="slider" useState />
        </label>
    );
}
