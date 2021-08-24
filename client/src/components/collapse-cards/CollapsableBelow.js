import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const CollapsableBelow = ({ posts }) => {
    const answerText = useRef();
    useEffect(() => {
        answerText.current.innerHTML = posts.answer_text;
    }, []);
    return (
        <div className="receiver-info">
            <img
                src={posts.prof_photo}
                alt=""
                width="20px"
                className="prof-img-card"
            />
            <p className="card-title-question" ref={answerText} />
            <Link
                className="see-more"
                to={{
                    pathname: "/question/see-more",
                    state: posts,
                }}
            >
                See more
            </Link>
        </div>
    );
};
export default CollapsableBelow;
