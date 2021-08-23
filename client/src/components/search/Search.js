import React, { useEffect, useState, useContext } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import fetchData from "../../utils/fetchData";
import { SearchContext } from "../../context/SearchContext";

const Search = () => {
    const { setResult } = useContext(SearchContext);
    const [word, setWord] = useState("");

    useEffect(() => {
        const url = `${process.env.REACT_APP_API_URL}home/search?word=${word}`;
        async function fetching() {
            const data = await fetchData(null, url, "GET");
            console.log(data);
            setResult(data);
        }
        fetching();
    }, [word]);

    const handleSearch = (e) => {
        setWord(e.target.value);
    };
    return (
        <div className="search-container">
            <input
                type="search"
                placeholder="..."
                className="search-bar"
                value={word}
                onChange={handleSearch}
            />

            <span className="searchIcon">
                <SearchIcon />
            </span>
        </div>
    );
};

export default Search;
