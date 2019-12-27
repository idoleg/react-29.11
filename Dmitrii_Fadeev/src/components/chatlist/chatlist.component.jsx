import React from 'react';
import './chatlist.style.css'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class ChatList extends React.Component {

    static propTypes = {
        push: PropTypes.func.isRequired,
    };

    handlePush = (link) => {
        console.log("props", this.props);
        this.props.push(link);
        console.log("link", link);
    };
    render() {
        const { chats, notifyChat } = this.props;
        const list = [];
        for (let chat in chats) {
            list.push({
                num: chat,
                link: "/chat/"+chat
            });
        }
        return (

            <List className="chatlist">
                {list.map((item) => {
                        const chatItemClasses = classNames(
                            {"chat-item-highlight": notifyChat == item.num},
                        );
                        return <ListItem className={chatItemClasses} button onClick={() => this.handlePush(item.link)}>{item.num}</ListItem>
                    }
                )}
                <ListItem button onClick={this.props.createNewChat}>+</ListItem>
            </List>
        )
    }
}

const mapStateToProps = () => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({ push }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);