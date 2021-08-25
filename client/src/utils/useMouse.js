import { useState } from "react";

const useMouse = () => {
    const [state, setState] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 5;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 5;
        e.persist();
        setState((oldState) => ({ ...oldState, x: xAxis, y: yAxis }));
    };
    return {
        x: state.x,
        y: state.y,
        handleMouseMove,
    };
};

export default useMouse;
