import React from "react";
import { Link } from "react-router-dom";
import "./profileCard.css";

const ProfileCard = ({ data, clase }) => (
    <Link to={`/user/${data.id}`} className="link-aside">
        <div key={data.id} className={`card card-${clase}`}>
            <img src={data.photo} alt="profile" />
            <p>{data.user_name}</p>
        </div>
    </Link>
);

export default ProfileCard;
