// import { useContext } from "react";
// import { userContext } from "../context/userContext";

const fetchData = async (handleData, url) => {
    const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(handleData),
    });
    if (!res.ok) {
        return res.ok;
    }
    const data = await res.json();

    return data;
};

export default fetchData;
