import React from "react";
import { Message } from "./Message";
import PropTypes from "prop-types";

export const MessageFild = props => {
    return props.messages.map((item, index) => (
        <Message name={item.name} content={item.content} key={index} />
    ));
};

MessageFild.propTypes = {
    messages: PropTypes.array
};
