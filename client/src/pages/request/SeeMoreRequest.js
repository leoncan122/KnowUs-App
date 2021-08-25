import React from "react";
import { useLocation } from "react-router-dom";
import AnswerMessage from "./components/textboard/AnswerMessage";
import QuestionMessage from "./components/textboard/QuestionMessage";

const SeeMoreRequest = () => {
    const posts = useLocation().state;
    let question;
    let answer;

    if (posts) {
        question = {
            senderid: posts.sender_id,
            sender: posts.sender_username,
            photo: posts.sender_photo,
            title: posts.title,
            text: posts.question_text,
            category: posts.category,
            date: posts.question_date,
            is_answered: posts.is_answered,
        };
        answer = {
            prof_id: posts.prof_id,
            prof_username: posts.prof_username,
            photo: posts.prof_photo,
            answer_id: posts.answer_id,
            text: posts.answer_text,
            date: posts.answer_date,
        };
    }
    return (
        <div>
            <div className="displayer-content">
                {/* <Link to="/home">Back</Link> */}
                <div className="question-area">
                    <QuestionMessage data={question} />

                    {/* {error && <center>{error}</center>} */}
                    {answer && <AnswerMessage response={answer} />}
                </div>
            </div>
        </div>
    );
};

export default SeeMoreRequest;
