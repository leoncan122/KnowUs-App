import React, { useState } from "react";
import fetchData from "../../utils/fetchData";
import "./makeQuestion.css";

const MakeQuestion = ({ match, history }) => {
    const [question, setQuestion] = useState({
        title: "",
        text: "",
        to: parseInt(match.params.id, 10),
        category: "",
        draft: false,
    });
    const [error, setError] = useState("");

    const handleQuestion = (e) => {
        setQuestion({ ...question, [e.target.name]: e.target.value });
    };

    // this sets if message will be drafted
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

        const url = `${process.env.REACT_APP_API_URL}user/question`;
        const data = await fetchData(question, url, "POST");
        console.log(data);

        if (data.error) {
            setError(data.error);
        }
        if (data.message) {
            setTimeout(() => {
                history.push(`/user/${question.to}`);
            }, 1000);
        }
    };
    return (
        <div className="question-main-content">
            <form className="question-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    className="title-question"
                    value={question.title}
                    onChange={handleQuestion}
                    required
                />
                <textarea
                    type="text"
                    name="text"
                    className="input-question"
                    value={question.text}
                    onChange={handleQuestion}
                    placeholder="Describe your question"
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
