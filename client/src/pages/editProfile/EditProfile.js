import React, { useState } from "react";
import EditProfession from "../../components/editProfile/EditProfession";
import EditCountry from "../../components/editProfile/EditCountry";
import EditCity from "../../components/editProfile/EditCity";
import fetchData from "../../utils/fetchData";
import "./EditProfile.css";
import EditGithubLink from "../../components/editProfile/EditGithubLink";
import EditLinkedinLink from "../../components/editProfile/EditLinkedinLink";

export default function EditProfile() {
    const [profession, setProfession] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [profileMessage, setProfileMessage] = useState("");
    const [github, setGithub] = useState("");
    const [linkedin, setLinkedin] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const editData = { profession, country, city, github, linkedin };
        const url = "http://localhost:4000/profile/edit";
        const data = await fetchData(editData, url, "PUT");
        setProfileMessage(data.message);
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
                <EditGithubLink github={github} onChange={setGithub} />
                <EditLinkedinLink linkedin={linkedin} onChange={setLinkedin} />

                <button type="submit" className="btn">
                    Submit
                </button>
            </form>
            <h2>{profileMessage}</h2>
        </div>
    );
}
