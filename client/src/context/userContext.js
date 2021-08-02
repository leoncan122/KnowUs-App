import React, { useState, createContext } from "react";

export const userContext = createContext();

export function UserProvider({ children }) {
    const [userLoged, setUserLoged] = useState(false);
    return (
        <userContext.Provider value={{ userLoged, setUserLoged }}>
            {children}
        </userContext.Provider>
    );
}
