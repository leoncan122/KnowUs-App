import React, { useEffect, useState } from "react";
import fetchData from "../../utils/fetchData";
import "./Search.css";

const Search = ({ fn }) => {
    const [word, setword] = useState();

    useEffect(() => {
        const url = `http://localhost:4000/home/search?word=${word}`;
        async function fetching() {
            const data = await fetchData(null, url, "GET");

            if (data.isSuccesful) {
                fn(data.publications);
            }
        }
        fetching();
    }, [word]);

    const handleSearch = (e) => {
        setword(e.target.value);
    };
    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search something"
                className="search-bar"
                onChange={handleSearch}
            />
        </div>
    );
};

export default Search;
