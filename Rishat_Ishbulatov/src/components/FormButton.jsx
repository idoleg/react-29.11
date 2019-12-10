import React from "react";
import PropTypes from "prop-types";

export const FormButton = props => {
    return <button onClick={props.onClick}>{props.content}</button>;
};

FormButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    content: PropTypes.string.isRequired
};
