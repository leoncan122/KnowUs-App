import React from "react";

export default function AsideUserInfo({ info }) {
    // const info = {
    //     isAuthenticated:
    //     message:
    //     userCity: ,
    //     userCountry:
    //     userId:
    //     userMail:
    //     userName:
    //     userPhoto:
    //     userProfession:
    //     userProfessional:
    // };

    return (
        <div className="aside-user-info">
            <h3>Name: {info.userName}</h3>
            <h3>Profession: {info.userProfession}</h3>
            <h3>
                Lives in: {info.userCity}, {info.userCountry}{" "}
            </h3>
        </div>
    );
}
