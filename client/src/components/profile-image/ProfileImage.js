import React from "react";
import "./ProfileImage.css";

const ProfileImage = ({ photo }) => (
    <img className="photo" src={photo} alt="profileimage" />
);

export default ProfileImage;
