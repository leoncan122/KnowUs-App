import { useContext } from "react";
import { userContext } from "../context/userContext";

const fetchData = async (handleData, url) => {
    const { setUserLoged } = useContext(userContext);

    const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(handleData),
    });
    const data = await res.json();
    setUserLoged(data.isAuthenticated);
};

export default fetchData;
