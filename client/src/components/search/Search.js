import React, { Fragment, useState } from "react";

const Search = () => {
    const [word, setWord] = useState("");
    const [posts, setPosts] = useState([]);

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                `http://localhost:4000/search/?word=${word}`
            );
            const parseResponse = await response.json();
            // console.log(parseResponse);
            setPosts(parseResponse);
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <>
            <div>
                <form onSubmit={onSubmitForm}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Search something"
                        className="search-bar"
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                    />
                    <button type="submit" className="search-btn">
                        Search
                    </button>
                </form>
                <table className="table my-5">
                    <thead>
                        <tr>
                            <th>Question:</th>
                            <th>Answer:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post) => (
                            <tr>
                                <td key="{text}">{post.text}</td>
                                <td key="{text}">{post.text}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Search;
