import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchData from "../../utils/fetchData";
import "./userProfile.css";
import AsideUserInfo from "../../components/asideUserInfo/AsideUserInfo";
import ProfileImage from "../../components/profile-image/ProfileImage";

const userProfile = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const { id } = useParams();

    useEffect(() => {
        const url = `http://localhost:4000/home/user/${id}`;
        async function fetching() {
            const rawData = await fetchData(null, url, "GET");
            if (rawData.error) {
                setError(rawData.error);
            }
            setData(rawData[0]);
        }
        fetching();
    }, []);
    console.log(data);
    return (
        <div className="main-content">
            <div className="info-profile">
                {data && <AsideUserInfo info={data} />}
                {data && <ProfileImage photo={data.photo} />}
                <div>send msg or public ask</div>
            </div>
            <div className="publications" />
            {error && (
                <center>
                    <strong>{error}</strong>
                </center>
            )}
        </div>
    );
};

export default userProfile;
