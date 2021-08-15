import React, { useState, createContext } from "react";
import cookieMonster from "../utils/cookieMonster";
import fetchData from "../utils/fetchData";

export const userContext = createContext();

export function UserProvider({ children }) {
    const id = cookieMonster("userId");
    // console.log(id);

    const [userLoged, setUserLoged] = useState(id);
    /* lo que viene a continuacion funciona cuando la pagina se refresca
    o sea cuando el user logged tiene un numero mayor a cero, este es el id que le va entregar la
    cookie monster o sea si hay cooki id, esto se ejecuta, en caso contrario se vuelve null, pero
     te tiene que redireccionar a home */
    if (userLoged > 0) {
        const url = `http://localhost:4000/home/user/${userLoged}`;

        const fetching = async () => {
            const data = await fetchData(false, url, "GET");

            setUserLoged(data);

            return data;
        };
        fetching();
    }
    const [isLoged, setIsLoged] = useState(null); // esto creo que sobra
    return (
        <userContext.Provider
            value={{ userLoged, setUserLoged, isLoged, setIsLoged }}
        >
            {children}
        </userContext.Provider>
    );
}
