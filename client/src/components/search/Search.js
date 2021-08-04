import React from "react";
import "./Search.css";

const Search = () => (
    <form>
        <input
            type="text"
            placeholder="Search something"
            className="search-bar"
        />
        <button type="submit" className="search-btn">
            Search
        </button>
    </form>
);

export default Search;
