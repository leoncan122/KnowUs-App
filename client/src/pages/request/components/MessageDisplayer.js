import React, { useState, useEffect } from "react";
import fetchData from "../../../utils/fetchData";
import useAnswer from "../useAnswer";

function MessageDisplayer({ data, url }) {
    const [state, dispatch] = useAnswer({
        questionId: data.id,
        draft: false,
    });
    const [answer, setAnswer] = useState();
    const currentState = state[state.length - 1];

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

    return (
        <>
            <div>
                {data.text}
                {currentState.text}
            </div>
            <form>
                <input name="input" type="input" onKeyUp={handleAnswer} />
                <input name="text" type="submit" onClick={handleSendAnswer} />
            </form>
        </>
    );
}

export default MessageDisplayer;
