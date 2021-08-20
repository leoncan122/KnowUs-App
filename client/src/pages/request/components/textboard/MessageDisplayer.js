import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import fetchData from "../../../../utils/fetchData";
import "./messageDisplay.css";

function MessageDisplayer() {
    // receiving question data from Link
    const data = useLocation().state;

    const [answer, setAnswer] = useState({
        text: "",
        questionId: data.id,
        draft: false,
    });
    // response of POST answer
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");

    const handleAnswer = (e) => {
        setAnswer({
            ...answer,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // choose draft value from input value with this function
        function draft() {
            if (e.target.value === "send") {
                return false;
            }
            return true;
        }

        // declare draft value with the function
        setAnswer({
            ...answer,
            [e.target.name]: draft(),
        });

        async function fetching() {
            const url = "http://localhost:4000/user/answer";
            const rawData = await fetchData(answer, url, "POST");
            if (rawData.error) {
                setError(rawData.error);
            }
            setResponse(rawData.response);
            setAnswer({
                ...answer,
                text: "",
            });
        }
        fetching();
    };

    return (
        <>
            <Link to="/question">Back</Link>
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

                {error && <center>{error}</center>}
                {response && (
                    <div className="text-answer">
                        <div className="question-desc">{response.text}</div>
                        <div className="question-info">
                            <img src={response.photo} alt="" width="30px" />
                            <p>Date:</p>
                        </div>
                    </div>
                )}
            </div>

            <form className="text-area">
                <textarea
                    className="input-area"
                    name="text"
                    type="textarea"
                    value={answer.text}
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
