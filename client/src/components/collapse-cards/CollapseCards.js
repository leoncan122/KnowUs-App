import React, { useEffect, useRef, useState } from "react";
import "./CollapseCards.css";
import ExpandMore from "@material-ui/icons/ExpandMore";

const CollapseCards = ({ posts }) => {
    const [isOpen, setIsOpen] = useState(false);
    const answerText = useRef();
    useEffect(() => {
        answerText.current.innerHTML = posts.answer_text;
    }, []);
    return (
        <div>
            <div className="sender-info">
                <h4>{posts.sender_username}</h4>
                <p>Ask: {posts.title}</p>
                <p>#{posts.category}</p>
                <div className="arrow-btn">
                    <ExpandMore
                        type="button"
                        className="toggleUp"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        Ve la respuesta
                    </ExpandMore>
                </div>
            </div>
            <div>
                <div className="receiver-info">
                    <h4>{posts.prof_username}</h4>
                    <p ref={answerText} />
                </div>
            </div>
        </div>
    );
};

export default CollapseCards;
