import React from "react";
import ReactDOM from "react-dom";
import messages from "./messages"
import Messenger from "./Messenger";

const SendButton = () => (
    <button className="button" onClick={() => {
        const key = messages[messages.length - 1].id + 1;
        messages.push({id: key, name: "User " + key, content: "Нормааально"});
        ReactDOM.render(
            <Messenger messages={messages}/>,
            document.getElementById("root")
        );
    }}>
        Отправить
    </button>
);

export default SendButton;