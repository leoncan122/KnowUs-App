import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import fetchData from "../../../../utils/fetchData";
import TextEditor from "../../../../utils/TextEditor";
import AnswerMessage from "./AnswerMessage";
import "./messageDisplay.css";
import QuestionMessage from "./QuestionMessage";

function MessageDisplayer() {
    // receiving question data from Link
    const data = useLocation().state;

    const [answer, setAnswer] = useState({
        text: "",
        questionId: data.questionid,
        draft: false,
    });
    // response of POST answer
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");

    const handleAnswer = (editedText) => {
        setAnswer({
            ...answer,
            text: editedText,
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
        }
        fetching();
    };

    return (
        <div className="displayer-content">
            <Link to="/question">Back</Link>
            <div className="question-area">
                <QuestionMessage data={data} />

                {error && <center>{error}</center>}
                {response && <AnswerMessage response={response} />}
            </div>

            <form className="text-area">
                <TextEditor fn={handleAnswer} />
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
        </div>
    );
}

export default MessageDisplayer;
