import React, { useContext } from "react";

import { userContext } from "../../context/userContext";

export default function AsideUserInfo() {
    const { userLoged } = useContext(userContext);

    console.log(userLoged);

    return (
        <div className="aside-user-info">
            <h3>Lorenzo Bandoneon</h3>
            <h3>Profession: Manager de ventas</h3>
            <h3>Lives in: Alicante </h3>
        </div>
    );
}
