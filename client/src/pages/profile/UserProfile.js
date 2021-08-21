import React, { useContext } from "react";
import "./userProfile.css";
import AsideUserInfo from "../../components/asideUserInfo/AsideUserInfo";
import ProfileImage from "../../components/profile-image/ProfileImage";
import ButtonOnOf from "../../components/userInfo/ButtonOnOf";
import { userContext } from "../../context/userContext";
import MyProfileCards from "../../components/myProfileCards/MyProfileCards";

const UserProfile = () => {
    const { userLoged } = useContext(userContext);

    return (
        <div className="main-content">
            <div className="info-profile">
                <div className="professional-btn">
                    {userLoged && (
                        <ButtonOnOf
                            userId={userLoged.userId}
                            state={userLoged.userProfessional}
                        />
                    )}
                </div>
                {userLoged && <AsideUserInfo info={userLoged} />}

                {userLoged && <ProfileImage photo={userLoged.userPhoto} />}
            </div>
            <div className="publications" />
            {/* {error && (
                <center>
                    <strong>{error}</strong>
                </center>
            )} */}

            {userLoged && <MyProfileCards />}
        </div>
    );
};

export default UserProfile;
