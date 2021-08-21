import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import AsideUserInfo from "../../components/asideUserInfo/AsideUserInfo";
import ProfileImage from "../../components/profile-image/ProfileImage";
import fetchData from "../../utils/fetchData";
import { userContext } from "../../context/userContext";
import MyProfileCards from "../../components/myProfileCards/MyProfileCards";

export default function OthersProfiles({ history }) {
    const { userLoged } = useContext(userContext);
    const [data, setData] = useState(null);
    const { id } = useParams();

    // redirects to my-profile when the profile selected it's mine
    if (userLoged.userId === parseInt(id, 10)) {
        history.push("/my-profile");
    }

    useEffect(() => {
        const url = `http://localhost:4000/home/user/${id}`;
        async function fetching() {
            const rawData = await fetchData(null, url, "GET");

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
            <MyProfileCards userId={id} />
        </div>
    );
}
