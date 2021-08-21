import React, { useEffect, useState, useContext } from "react";
import "./Search.css";
import SearchIcon from '@material-ui/icons/Search';
import fetchData from "../../utils/fetchData";
import { SearchContext } from "../../context/SearchContext";

const Search = () => {
    const { setResult } = useContext(SearchContext);
    const [word, setWord] = useState("");

    useEffect(() => {
        const url = `http://localhost:4000/home/search?word=${word}`;
        async function fetching() {
            const data = await fetchData(null, url, "GET");
            console.log(data);
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
                type="search"
                placeholder="Search something"
                className="search-bar"
                value={word}
                onChange={handleSearch}
            />
            
            <span className="searchIcon"><SearchIcon/></span>
        </div>
    );
};

export default Search;
