import React, { useState } from "react";
import "./CollapseCards.css";
import ExpandMore from "@material-ui/icons/ExpandMore";
<<<<<<< HEAD
// import ExpandLessIcon from '@material-ui/icons/ExpandLess';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
=======
>>>>>>> develop

const CollapseCards = ({ posts }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div className="sender-info">
                <h4>{posts.sender_username}</h4>
                <p>Ask: {posts.question_text}</p>
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

            {isOpen && (
                <div className="receiver-info">
                    <h4>{posts.prof_username}</h4>
                    <p>Answers: {posts.answer_text}</p>
                </div>
            )}
        </div>
    );
};

export default CollapseCards;
