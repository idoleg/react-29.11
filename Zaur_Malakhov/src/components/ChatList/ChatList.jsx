import React, {Component} from "react";
import("./ChatList.css");
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

export class ChatList extends Component{
    render() {
        return (
            <div className={"chatlist"}>
                <List component="nav" aria-label="main mailbox folders">
                    <ListItem button>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText primary="java community" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText primary="javascript" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText primary="html5 css3" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText primary="go-syntax" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText primary="react js" />
                    </ListItem>
                </List>

            </div>

        );
    }

}