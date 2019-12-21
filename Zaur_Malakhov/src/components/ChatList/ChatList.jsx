import React, {Component} from "react";
import("./ChatList.css");
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";

export class ChatList extends Component{

    render() {
        const chats = this.props.chats;

        const list = [];
        for (let chat in chats) {
            list.push({
                num: chat,
                link: "/chats/"+chat
            });
        }

        return (
            <div className={"chatlist"}>

                <List  component="nav" aria-label="main mailbox folders">
                    {
                        list.map( (item, index)=>
                            (
                                <ListItem key={index}>
                                    <Link to={item.link}><ListItemText primary={chats[item.num].name} /></Link>
                                </ListItem>
                            )
                        )
                    }
                </List>


                {/*<List component="nav" aria-label="main mailbox folders">*/}
                {/*    <ListItem button>*/}
                {/*        /!*<ListItemIcon>1</ListItemIcon>*!/*/}
                {/*        <ListItemText primary="java community" />*/}
                {/*    </ListItem>*/}
                {/*    <ListItem button>*/}
                {/*        /!*<ListItemIcon>2</ListItemIcon>*!/*/}
                {/*        <ListItemText primary="javascript" />*/}
                {/*    </ListItem>*/}
                {/*    <ListItem button>*/}
                {/*        /!*<ListItemIcon>3</ListItemIcon>*!/*/}
                {/*        <ListItemText primary="html5 css3" />*/}
                {/*    </ListItem>*/}
                {/*    <ListItem button>*/}
                {/*        /!*<ListItemIcon>4</ListItemIcon>*!/*/}
                {/*        <ListItemText primary="go-syntax" />*/}
                {/*    </ListItem>*/}
                {/*    <ListItem button>*/}
                {/*        /!*<ListItemIcon>5</ListItemIcon>*!/*/}
                {/*        <ListItemText primary="react js" />*/}
                {/*    </ListItem>*/}
                {/*</List>*/}

            </div>

        );
    }

}