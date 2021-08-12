import React from "react";
import { Link } from "react-router-dom";
import "./profileCard.css";

const ProfileCard = ({ data }) => (
    <Link to={`/user/${data.id}`}>
        <div key={data.id} className="card">
            <img src={data.photo} alt="profile" />
            <p>{data.user_name}</p>
        </div>
    </Link>
);

export default ProfileCard;
