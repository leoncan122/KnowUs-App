import React, { useState, createContext } from "react";

export const userContext = createContext();

export function UserProvider({ children }) {
    const [userLoged, setUserLoged] = useState(null);
    const [isLoged, setIsLoged] = useState(null);
    return (
        <userContext.Provider
            value={{ userLoged, setUserLoged, isLoged, setIsLoged }}
        >
            {children}
        </userContext.Provider>
    );
}
