import React from "react";
import PropTypes from "prop-types";

function MessageDisplayer({ data }) {
    console.log(data);
    return <div>{data.text}</div>;
}
MessageDisplayer.propTypes = {
    data: PropTypes.string.isRequired,
};

export default MessageDisplayer;
