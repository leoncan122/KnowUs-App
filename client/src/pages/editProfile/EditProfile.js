import React, { useState } from "react";
import EditProfession from "../../components/editProfile/EditProfession";
import EditCountry from "../../components/editProfile/EditCountry";
import EditCity from "../../components/editProfile/EditCity";
import fetchData from "../../utils/fetchData";

export default function EditProfile() {
    const [profession, setProfession] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const editData = { profession, country, city };
        // const url = "http://localhost:4000/"; debo completar
        const data = await fetchData(editData, url, "PUT");
        console.log(data);
    };

    return (
        <div className="edit-profile">
            <h3>Modify your profile</h3>
            <form className="edit-profile-form" onSubmit={handleSubmit}>
                <EditProfession
                    profession={profession}
                    onChange={setProfession}
                />
                <EditCountry country={country} onChange={setCountry} />
                <EditCity city={city} onChange={setCity} />

                <button type="submit" className="btn">
                    Submit
                </button>
            </form>
        </div>
    );
}
