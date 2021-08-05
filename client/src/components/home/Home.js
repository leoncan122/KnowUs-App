import React, { useEffect, useState } from "react";
import "./Home.css";

function Home() {
    const [contentData, setContentData] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        const url = "http://localhost:4000/home";
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setContentData(data);
            })
            .catch((err) => setError(err));
    }, [error]);

    const lastPosts = contentData?.publications;

    return (
        <div>
            <div className="main-heading">
                <h2>
                    Bienvenido a la plataforma dondé podras interactuar con
                    Trabajadores, emprendedores y profesionales de todo el mundo
                    a través de preguntas publicas y mensajes.
                </h2>
            </div>
            <div className="posts-heading">
                <h1>Last Answers / Result of search</h1>
            </div>

            {lastPosts
                ? lastPosts.map((post) => (
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
                : error && <p>{error}</p>}
        </div>
    );
}

export default Home;
