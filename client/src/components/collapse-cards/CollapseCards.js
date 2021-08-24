import React, { useState } from "react";
import "./CollapseCards.css";
import ExpandMore from "@material-ui/icons/ExpandMore";
import CollapsableBelow from "./CollapsableBelow";

const CollapseCards = ({ posts }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className="tab-style">#{posts.category}</div>
            <div className="sender-info">
                <img
                    src={posts.sender_photo}
                    alt=""
                    className="sender-img-card"
                />

                <p className="card-title-question">Ask: {posts.title}</p>

                <div className="arrow-btn">
                    <ExpandMore
                        type="button"
                        className="toggleUp"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        Ve la respuesta
                    </ExpandMore>
                </div>
            </div>

            {
                // if open is true show the this card below
                isOpen && <CollapsableBelow posts={posts} />
            }
        </div>
    );
};

export default CollapseCards;
