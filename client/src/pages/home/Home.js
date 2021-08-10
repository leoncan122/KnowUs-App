import React, { useEffect, useState } from "react";
import "./Home.css";
import Aside from "./components/Aside";
import Search from "../../components/search/Search";

// import { userContext } from "../../context/userContext";

function Home() {
    // const { userLoged } = useContext(userContext);
    const [contentData, setContentData] = useState(null);
    const [error, setError] = useState("");

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

    const handleSearch = (result) => {
        if (result) {
            setContentData(result);
        }
    };

    return (
        <div className="home-content">
            <Search className="search-bar" fn={handleSearch} />
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
                {contentData
                    ? contentData.map((post) => (
                          <div className="post" key={post.answer_id}>
                              <div className="sender-info">
                                  <h4>{post.sender_username}</h4>
                                  <p>Ask: {post.question_text}</p>
                                  <p>#{post.category}</p>
                              </div>
                              <div className="receiver-info">
                                  <h4>{post.prof_username}</h4>
                                  <p>Answers: {post.answer_text}</p>
                              </div>
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
