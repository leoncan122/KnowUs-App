import React, { useEffect, useState, useContext } from "react";
import "./Home.css";
import Aside from "./components/Aside";
import Search from "../../components/search/Search";
import { SearchContext } from "../../context/SearchContext";
import CollapseCards from "../../components/collapse-cards/CollapseCards";

function Home() {
    const { result } = useContext(SearchContext);
    const [contentData, setContentData] = useState(null);
    const [error, setError] = useState("");

    // Here result of search or fetchedData
    const publications = result || contentData;

    useEffect(() => {
        const url = "http://localhost:4000/home/lastones";

        async function fetching() {
            try {
                const res = await fetch(url);
                const data = await res.json();

                if (!res.ok) {
                    setError(data.error);
                }

                setContentData(data.publications);
            } catch (err) {
                setError("The comunication failed, try again later");
            }
        }

        fetching();
    }, []);

    return (
        <div className="home-content">
            <div className="search-box">
                <Search />
            </div>
            <div className="main-heading">
                <h2>
                    Bienvenido a la plataforma dondé podras interactuar con
                    Trabajadores, emprendedores y profesionales de todo el mundo
                    a través de preguntas publicas y mensajes.
                </h2>
            </div>
            <Aside />
            <div className="posts-heading">
                <h1>Last Answers / Result of search</h1>
            </div>
            <div className="post-content">
                {publications
                    ? publications.map((post) => (
                          <div className="post" key={post.answer_id}>
                              <CollapseCards posts={post} />
                          </div>
                      ))
                    : error && (
                          <center>
                              <strong>{error}</strong>
                          </center>
                      )}
            </div>
        </div>
    );
}

export default Home;
