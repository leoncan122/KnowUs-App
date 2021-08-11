import React from "react";
import "./ProfileImage.css";

const ProfileImage = ({ photo }) => (
    <div className="second-div">
        <img className="photo" src={photo} alt="profileimage" />
    </div>
);

export default ProfileImage;
