import React from "react";
import PropTypes from "prop-types";

export const Message = props => {
    return (
        <div>
            <b>{props.name}</b>: {props.content}
        </div>
    );
};

Message.propTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};
