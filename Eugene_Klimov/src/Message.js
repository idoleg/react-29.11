import React from "react";

const Message = ({id, name, content}) =>
    <div key={id} className="user-item">
        <span className="user-name">{name}: </span>
        <span className="user-content">{content}</span>
    </div>;

export default Message;