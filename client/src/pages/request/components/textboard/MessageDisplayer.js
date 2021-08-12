import React, { useState, useEffect } from "react";
import fetchData from "../../../../utils/fetchData";
import useAnswer from "../../useAnswer";
import "./messageDisplayer";

function MessageDisplayer({ data, url }) {
    const [state, dispatch] = useAnswer({
        questionId: data.id,
        draft: false,
    });
    const [answer, setAnswer] = useState();
    const currentState = state[state.length - 1];
    console.log(state);
    useEffect(() => {
        async function fetching() {
            const rawData = await fetchData(currentState, url, "POST");
            console.log(rawData);
        }
        fetching();
    }, [state]);

    const handleAnswer = (e) => {
        setAnswer(e.target.value);
    };
    const handleSendAnswer = (e) => {
        e.preventDefault();
        dispatch({
            type: "send_answer",
            input: {
                name: e.target.name,
                value: answer,
            },
        });
    };
    const handleDraftAnswer = (e) => {
        e.preventDefault();
        dispatch({
            type: "draft_answer",
            input: {
                name: e.target.name,
                value: answer,
            },
        });
    };

    return (
        <>
            <div className="messages-area">
                <div className="text-question">{data.text}</div>
                <div className="text-answer">{currentState.text}</div>
            </div>

            <form className="text-area">
                <input
                    name="input"
                    type="input"
                    defaultValue="mike"
                    onKeyUp={handleAnswer}
                />
                <input
                    name="text"
                    type="submit"
                    value="send"
                    onClick={handleSendAnswer}
                />
                <input
                    name="text"
                    type="submit"
                    value="save"
                    onClick={handleDraftAnswer}
                />
            </form>
        </>
    );
}

export default MessageDisplayer;
