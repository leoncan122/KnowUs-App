import React, { useState, createContext } from "react";

export const SearchContext = createContext();

export function SearchProvider({ children }) {
    const [result, setResult] = useState(null);

    return (
        <SearchContext.Provider value={{ result, setResult }}>
            {children}
        </SearchContext.Provider>
    );
}
