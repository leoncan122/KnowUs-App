import { useReducer } from "react";

function useAnswer(props) {
    const initState = [
        {
            ...props,
            text: "",
        },
    ];
    const reducer = (state, action) => {
        if (action.type === "send_answer") {
            const currentState = state[state.length - 1];
            return [
                ...state,
                {
                    ...currentState,
                    [action.input.name]: action.input.value,
                },
            ];
        }
        if (action.type === "draft_answer") {
            const currentState = state[state.length - 1];
            return [
                ...state,
                {
                    ...currentState,
                    text: action.input.text,
                    [action.input.name]: action.input.value,
                },
            ];
        }

        return state;
    };

    return useReducer(reducer, initState);
}
export default useAnswer;
