import React, { useState } from "react";
import fetchData from "../../utils/fetchData";
import "./makeQuestion.css";

const MakeQuestion = ({ match, history }) => {
    const [question, setQuestion] = useState({
        text: "",
        to: parseInt(match.params.id, 10),
        category: "",
        draft: false,
    });
    const [error, setError] = useState("");

    const handleQuestion = (e) => {
        setQuestion({ ...question, [e.target.name]: e.target.value });
    };
    const handleStatusQuestion = (boolean) => {
        setQuestion({
            ...question,
            draft: boolean,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const click = await e.nativeEvent.submitter.name;

        if (click === "save") {
            setQuestion({ ...question, draft: true });
        }
        console.log(question);
        const url = `http://localhost:4000/user/question`;
        const data = await fetchData(question, url, "POST");

        if (data.error) {
            setError(data.error);
        }
        if (data.message) {
            setTimeout(() => {
                console.log(data.message);
                history.push(`/user/${question.to}`);
            }, 1000);
        }
    };
    return (
        <div className="question-content">
            <form className="question-form" onSubmit={handleSubmit}>
                <textarea
                    type="text"
                    name="text"
                    className="input-question"
                    value={question.text}
                    onChange={handleQuestion}
                    placeholder="What are your doubts?"
                    required
                />
                <input
                    type="text"
                    name="category"
                    className="input-category"
                    value={question.category}
                    onChange={handleQuestion}
                    placeholder="category"
                    required
                />
                <button
                    name="send"
                    type="submit"
                    onClick={() => handleStatusQuestion(false)}
                >
                    send
                </button>
                <button
                    name="save"
                    type="submit"
                    onClick={() => handleStatusQuestion(true)}
                >
                    save
                </button>
            </form>
            {error && (
                <center>
                    <strong>{error}</strong>
                </center>
            )}
        </div>
    );
};

export default MakeQuestion;
