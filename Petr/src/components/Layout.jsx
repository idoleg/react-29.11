import React, { Component } from "react";
import {Header} from "./Header"
import {ChatList} from "./ChatList"
import {Messenger} from "./Messenger"
import Grid from '@material-ui/core/Grid';

export class Layout extends Component {

    render() {
        const { id } = this.props.match.params;
        return (
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Header />
                </Grid>
                <Grid item xs={9}>
                    <Messenger id={id}/>
                </Grid>
                <Grid item xs={3}>
                    <ChatList />
                </Grid>
            </Grid>
        );
    }
}