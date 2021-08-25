import React, { useState } from "react";
import idea from "../idea.png";
import useMouse from "../../../utils/useMouse";
import "./card.css";

const Card = () => {
    const { x, y, handleMouseMove } = useMouse();
    const [mouseEnter, setMouseEnter] = useState(false);
    const [mouseLeave, setMouseLeave] = useState(false);

    function setStyle() {
        let styles = {};
        if (mouseEnter) {
            const firstStyle = { transform: "none" };
            styles = Object.assign(styles, firstStyle);
        }
        if (mouseLeave) {
            const secondStyle = {
                transition: "all 0.25s ease",
                transform: "rotateY(0deg) rotateX(0deg)",
            };
            styles = Object.assign(styles, secondStyle);
        }
        return styles;
    }
    function setStyleImg() {
        let styles = {};
        if (mouseEnter) {
            const firstStyle = { transform: "translateZ(300px)" };
            styles = Object.assign(styles, firstStyle);
        }
        if (mouseLeave) {
            const secondStyle = {
                transform: "translateZ(90px)",
            };
            styles = Object.assign(styles, secondStyle);
        }

        return styles;
    }

    return (
        <div
            className="container-logo"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setMouseEnter(!mouseEnter)}
            onMouseLeave={() => setMouseLeave(!mouseLeave)}
        >
            <div
                className="card"
                style={
                    setStyle() && {
                        transform: `rotateY(${x}deg) rotateX(${y}deg)`,
                    }
                }
            >
                <div className="logo">
                    <img
                        clasName="logo-img"
                        src={idea}
                        alt=""
                        style={setStyleImg()}
                    />
                </div>
            </div>
        </div>
    );
};

export default Card;
