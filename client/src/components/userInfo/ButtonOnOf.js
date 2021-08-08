import React from "react";
import fetchData from "../../utils/fetchData";
import "./ButtonOnOf.css";

const isprofeesional2 = "false";

export default function ButtonOnOf() {
    // const [isOff, isOn] = useState('false')

    async function whenSwitch() {
        const [isprofeesional, setisprofessional] = useState(isprofeesional2);

        setisprofessional(!isprofeesional);

        const url = "http://localhost:4000/home/putProfile";

        const handleData = { userId: "4", on: isprofeesional };

        const data = await fetchData(handleData, url, "PUT");
    }
    return (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label className="switch">
            <input type="checkbox" />
            <span className="slider" />
        </label>
    );
}
