import React, { useState, useEffect } from "react";
import fetchData from "../../../../utils/fetchData";
import useAnswer from "../../useAnswer";
import "./messageDisplay.css";

function MessageDisplayer({ data }) {
    const [state, dispatch] = useAnswer({
        questionId: data.id,
        draft: false,
    });
    const [answer, setAnswer] = useState("");
    const currentState = state[state.length - 1];

    useEffect(() => {
        const url = "http://localhost:4000/user/answer";
        async function fetching() {
            const rawData = await fetchData(currentState, url, "POST");
            console.log(rawData);
        }
        fetching();
    }, [state]);

    const handleAnswer = (e) => {
        setAnswer(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: `${e.target.value}_answer`,
            input: {
                name: e.target.name,
                value: answer,
            },
        });
        setAnswer("");
    };

    return (
        <>
            <div className="messages-area">
                <div className="text-question">{data.text}</div>
                <div className="text-answer">{currentState.text}</div>
            </div>

            <form className="text-area">
                <textarea
                    className="dashboard"
                    name="input"
                    type="textarea"
                    value={answer}
                    onChange={handleAnswer}
                    required
                />
                <input
                    className="send-btn"
                    name="text"
                    type="submit"
                    value="send"
                    onClick={handleSubmit}
                />
                <input
                    className="draft-btn"
                    name="text"
                    type="submit"
                    value="draft"
                    onClick={handleSubmit}
                />
            </form>
        </>
    );
}

export default MessageDisplayer;
