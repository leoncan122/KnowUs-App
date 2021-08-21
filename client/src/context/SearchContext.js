import React, { useState, createContext } from "react";

export const SearchContext = createContext();

export function SearchProvider({ children }) {
    const [result, setResult] = useState({});

    return (
        <SearchContext.Provider value={{ result, setResult }}>
            {children}
        </SearchContext.Provider>
    );
}
