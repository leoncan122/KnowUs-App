import React, { useEffect, useContext, useRef } from "react";
import { userContext } from "../../../../context/userContext";
import "./answerMessage.css";

const AnswerMessage = ({ response }) => {
    const { userLoged } = useContext(userContext);
    const refAnswer = useRef();

    useEffect(() => {
        refAnswer.current.innerHTML = response.text;
    }, []);

    return (
        <div className="text-answer">
            <div className="answer-desc" ref={refAnswer} />

            <div className="answer-info">
                <h4>{response.prof_username || userLoged.userName}</h4>
                <img
                    src={response.photo || userLoged.userPhoto}
                    alt=""
                    width="30px"
                />
                <p>Date:{response.date}</p>
            </div>
        </div>
    );
};

export default AnswerMessage;
