import React, { useState } from "react"
import List from "@material-ui/core/List"
import ListItemText from "@material-ui/core/ListItemText"
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export function ChatList({ chats, addChat }) {

    const [chatName, setChatName] = useState("");
    const chatArray = Object.keys(chats);

    return (
        <>
            {chatArray == [] && "Чатов еще нет"}
            <List>
                {chatArray.map((id) => <Link key={id} to={"/chats/" + id}><ListItemText primary={chats[id].name} /></Link>)}

                <div>
                    <TextField id="standard-basic" label="Add chat" value={chatName}  onChange={(e) => setChatName(e.target.value)}/>
                    <Button variant="contained" color="primary" onClick={() => {addChat(chatName); setChatName("")}}>
                        Add Chat
                    </Button>
                </div>
            </List>


        </>
    )

}