import React, { useState } from "react";

export default function AsideUserInfo({ info }) {
    const [userData, setUserData] = useState(info[0]);

    console.log(setUserData);

    return (
        <div className="aside-user-info">
            <h3>{userData.user_name}</h3>
            <h3>Profession: {userData.profession}</h3>
            <h3>
                Lives in: {userData.city}, {userData.country}{" "}
            </h3>
        </div>
    );
}
