// import { useState, useEffect } from "react";
// import { userContext } from "../context/userContext";

const fetchData = async (handleData, url, methodType) => {
    // const res = await fetch(url, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     credentials: "include",
    //     body: JSON.stringify(handleData),
    // });
    // if (!res.ok) {
    //     return res.ok;
    // }

    // const data = await res.json();

    // return data
    let data = null;
    if (methodType === "POST" || methodType === "PUT") {
        const res = await fetch(url, {
            method: methodType,
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(handleData),
        });
        if (!res.ok) {
            return res.ok;
        }
        data = await res.json();
    }

    if (!handleData && methodType === "GET") {
        const res = await fetch(url);
        if (!res.ok) {
            return res.ok;
        }

        data = await res.json();
    }
    return data;
};

export default fetchData;
