import React from "react";

const url = `http://localhost:4000/home/user/4`;

export default function OthersProfiles() {
    fetch(url)
        .then((res) => {
            const data = res.json();
            return data;
        })
        .then((data) => {
            // console.log(data.userName);
            const prueba = data.userName;
            console.log(data.userName);
            return prueba;
        });

    return <div>dsada</div>;
}
