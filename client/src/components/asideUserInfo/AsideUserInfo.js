import React, { useState, useEffect, useContext } from "react";
import cookieMonster from "../../utils/cookieMonster";
import fetchData from "../../utils/fetchData";
import { userContext } from "../../context/userContext";

export default function AsideUserInfo() {
    const [userName, setUserName] = useState(null);
    const [userProfession, setUserProfession] = useState(null);
    const [userCity, setUserCity] = useState(null);

    const { isLoged } = useContext(userContext);

    useEffect(() => {
        if (isLoged) {
            const userId = cookieMonster("userId");
            const url = `http://localhost:4000/home/user/${userId}`;

            const fetching = async () => {
                const data = await fetchData(false, url, "GET");

                setUserName(data[0].user_name);
                setUserProfession(data[0].profession);
                setUserCity(data[0].city);
            };
            fetching();
        }
    });

    return (
        <div className="aside-user-info">
            <h3>
                <span>{userName}</span>
            </h3>
            <h3>
                Profession: <span>{userProfession}</span>
            </h3>
            <h3>
                Lives in: <span>{userCity}</span>
            </h3>
        </div>
    );
}
