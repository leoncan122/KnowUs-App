import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import AsideUserInfo from "../../components/asideUserInfo/AsideUserInfo";
import ProfileImage from "../../components/profile-image/ProfileImage";
import fetchData from "../../utils/fetchData";

export default function OthersProfiles() {
    const [data, setData] = useState(null);
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        const url = `http://localhost:4000/home/user/${id}`;
        async function fetching() {
            const rawData = await fetchData(null, url, "GET");
            console.log(rawData);

            setData(rawData);
        }
        fetching();
    }, []);
    return (
        <div className="main-content">
            <div className="info-profile">
                {data && <AsideUserInfo info={data} />}
                {data && <ProfileImage photo={data.userPhoto} />}
            </div>
            <Link to={`/user/${id}/question`}>make a question</Link>
            <Link to={`/messages/${id}`}>Messages</Link>
            <div />
            <div className="publications" />
        </div>
    );
}
