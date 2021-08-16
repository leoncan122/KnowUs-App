import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import fetchData from "../../utils/fetchData";
import "./userProfile.css";
import AsideUserInfo from "../../components/asideUserInfo/AsideUserInfo";
import ProfileImage from "../../components/profile-image/ProfileImage";

const userProfile = ({ match }) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const { id } = useParams();
    console.log(id);
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

    return (
        <div className="main-content">
            <div className="info-profile">
                {data && <AsideUserInfo info={data} />}
                {data && <ProfileImage photo={data.photo} />}
                <div className="interacion-btn">
                    <Link to={`${match.url}/question`}>public question</Link>
                    <Link to={`/messages/user/${id}`}>direct message</Link>
                </div>
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
