import React, { useEffect, useRef, useState } from "react";
import "./CollapseCards.css";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";

const CollapseCards = ({ posts }) => {
    const [isOpen, setIsOpen] = useState(false);
    const answerText = useRef();
    useEffect(() => {
        answerText.current.innerHTML = posts.answer_text;
    }, []);
    return (
        <div>
            <div className="sender-info">
                <img
                    src={posts.sender_photo}
                    alt=""
                    className="sender-img-card"
                />

                <p className="card-title-question">Ask: {posts.title}</p>
                <p className="category">#{posts.category}</p>
                <Link
                    className="arrow-btn"
                    to={{
                        pathname: "/question/see-more",
                        state: posts,
                    }}
                >
                    <div>
                        <ExpandMore
                            type="button"
                            className="toggleUp"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            Ve la respuesta
                        </ExpandMore>
                    </div>
                </Link>
            </div>
            <div>
                <div className="receiver-info">
                    <img
                        src={posts.prof_photo}
                        alt=""
                        width="20px"
                        className="prof-img-card"
                    />
                    <p className="card-title-question" ref={answerText} />
                </div>
            </div>
        </div>
    );
};

export default CollapseCards;
