import React from "react";
import PropTypes from "prop-types";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import classNames from "classnames";
import("./Message.sass");

export function Message({ id, name, content, date, isNew, onDelete }) {
    const msgClass = classNames("message", {
        "message-person": name !== "Robot",
        "message-new": isNew
    });
    return (
        <SnackbarContent
            className={msgClass}
            message={
                <div>
                    <p>{content}</p>
                    <small>
                        created on {date} by <b>{name}</b>
                    </small>
                </div>
            }
            action={
                <DeleteOutlinedIcon
                    aria-label="Delete Message"
                    className="message-delete"
                    viewBox="0 0 24 24"
                    onClick={() => onDelete(id)}
                />
            }
        />
    );
}
Message.propTypes = messageType;
export const messageType = {
    id: PropTypes.string,
    name: PropTypes.string,
    content: PropTypes.string,
    date: PropTypes.string,
    isNew: PropTypes.bool,
    onDelete: PropTypes.func
};
