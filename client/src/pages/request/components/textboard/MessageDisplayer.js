import React, { useState } from "react";
import fetchData from "../../../../utils/fetchData";
import "./messageDisplay.css";

function MessageDisplayer({ data }) {
    const [answer, setAnswer] = useState({
        text: "",
        questionId: data.id,
        draft: false,
    });

    const handleAnswer = (e) => {
        setAnswer({
            ...answer,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        // declare draft value from input value
        function draft() {
            if (e.target.value === "send") {
                return false;
            }
            return true;
        }

        setAnswer({
            ...answer,
            [e.target.name]: draft(),
        });
        const url = "http://localhost:4000/user/answer";

        async function fetching() {
            const rawData = await fetchData(answer, url, "POST");
            console.log(rawData);
        }
        fetching();
    };

    return (
        <>
            <div className="question-area">
                <div className="text-question">
                    <h4>{data.text}</h4>
                    <div className="question-info">
                        <img src={data.photo} alt="" width="30px" />
                        <p>From: </p>
                        <p>Date:</p>
                    </div>
                    <div className="question-desc">Description of question</div>
                </div>
                <div className="text-answer">{answer.text}</div>
            </div>

            <form className="text-area">
                <textarea
                    className="dashboard"
                    name="text"
                    type="textarea"
                    onChange={handleAnswer}
                    required
                />
                <input
                    className="send-btn"
                    name="draft"
                    type="submit"
                    value="send"
                    onClick={handleSubmit}
                />
                <input
                    className="draft-btn"
                    name="draft"
                    type="submit"
                    value="save"
                    onClick={handleSubmit}
                />
            </form>
        </>
    );
}

export default MessageDisplayer;
