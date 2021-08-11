import React, { useEffect, useState, useContext } from "react";
import fetchData from "../../utils/fetchData";
import "./Search.css";
import { SearchContext } from "../../context/SearchContext";

const Search = () => {
    const { setResult } = useContext(SearchContext);
    const [word, setWord] = useState("");

    useEffect(() => {
        const url = `http://localhost:4000/home/search?word=${word}`;
        async function fetching() {
            const data = await fetchData(null, url, "GET");

            if (data.isSuccesful) {
                setResult(data.publications);
            }
        }
        fetching();
    }, [word]);

    const handleSearch = (e) => {
        setWord(e.target.value);
    };
    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search something"
                className="search-bar"
                value={word}
                onChange={handleSearch}
            />
        </div>
    );
};

export default Search;
