import React from "react";
import "./ProfileImage.css";
import img from "./download.png";

const ProfileImage = () => (
    <div className="main-div">
        <div className="second-div">
            <img src={img} alt="profileimage" />
        </div>
    </div>
);

export default ProfileImage;
