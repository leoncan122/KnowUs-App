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
    if (userLoged && userLoged.userId === parseInt(id, 10)) {
        history.push("/my-profile");
    }

    useEffect(() => {
        const url = `${process.env.REACT_APP_API_URL}home/user/${id}`;
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
                <div className="right-aside-info">
                    {data && data.userProfessional && (
                        <Link to={`/user/${id}/question`}>
                            make public question
                        </Link>
                    )}

                    <Link to={`/messages/${id}`}>message</Link>
                </div>
            </div>

            {data && data.userProfessional ? (
                <MyProfileCards userId={id} />
            ) : (
                <center>
                    <strong>This User is not a professional already</strong>
                </center>
            )}
        </div>
    );
}
