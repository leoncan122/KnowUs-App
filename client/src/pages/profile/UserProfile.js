import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import fetchData from "../../utils/fetchData";
import "./userProfile.css";
import AsideUserInfo from "../../components/asideUserInfo/AsideUserInfo";
import ProfileImage from "../../components/profile-image/ProfileImage";
import ButtonOnOf from "../../components/userInfo/ButtonOnOf";
import { userContext } from "../../context/userContext";

const UserProfile = () => {
    const { userLoged } = useContext(userContext);
    console.log(userLoged);

    // const [data, setData] = useState(null);
    // const [error, setError] = useState("");
    // const { id } = useParams();
    // const userId = userLoged.id;

    // useEffect(() => {
    //     const url = `http://localhost:4000/home/user/${id}`;
    //     async function fetching() {
    //         const rawData = await fetchData(null, url, "GET");
    //         if (rawData.error) {
    //             setError(rawData.error);
    //         }
    //         setData(rawData[0]);
    //     }
    //     fetching();
    // }, []);

    return (
        <div className="main-content">
            <div className="info-profile">
                {userLoged.userCity.length !== 0 && (
                    <AsideUserInfo info="prueba" />
                )}
                {userLoged && <ProfileImage photo={userLoged.userPhoto} />}

                <Link to={`${userLoged.userId}/question`}>public question</Link>
            </div>
            <div className="publications" />
            {/* {error && (
                <center>
                    <strong>{error}</strong>
                </center>
            )} */}

            <div>
                <ButtonOnOf
                    userId={userLoged.userId}
                    state={userLoged.userProfessional}
                />
            </div>
        </div>
    );
};

export default UserProfile;
