import React from "react";
import github from "./icons/github.png";
import linkedin from "./icons/linkedin.png";
import "./asideUserInfo.css";

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
    //     userGithub:
    //     userLinkedin:
    // };

    return (
        <div className="aside-user-info">
            <h3>Name: {info.userName}</h3>
            <h3>Profession: {info.userProfession}</h3>
            <h3>
                Lives in: {info.userCity}, {info.userCountry}{" "}
            </h3>
            <div className="containter-social-icon">
                <div className="github-link">
                    {info.userGithub && (
                        <a
                            href={`https:${info.userGithub}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={github} alt="github-icons" />
                        </a>
                    )}
                </div>
                <div className="linkedin-link">
                    {info.userLinkedin && (
                        <a
                            href={`https:${info.userLinkedin}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={linkedin} alt="linkedin-icons" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
