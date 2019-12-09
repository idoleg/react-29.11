import React from 'react';
import ReactDOM from 'react-dom';
import MessageField from './components/MessageField';
import Form from './components/Form';

class Container extends React.Component {
    state = {
        messages: [
            {id: 0, name: "Oleg", content: "Привет!"},
            {id: 1, name: "Ivan", content: "как дела?"},
            {id: 3, name: "Oleg", content: "Good"},
            {id: 4, name: "", content: "Good"},
        ]
    }

    handleMessages = ( nameValue, contentValue ) => {
        const count = this.state.messages.length;
        this.setState({ messages : [ ...this.state.messages , { id: count + 1, name: nameValue, content: contentValue } ] });
    }

    componentDidUpdate() {
        const nameRobot = "Robot";
        const count = this.state.messages.length;
        const copyArray = this.state.messages;
        const [lastMessage] = [...copyArray].reverse();
        if (lastMessage.name != nameRobot) {
            setTimeout(() => this.setState ({ messages : [ ...this.state.messages , {id: count + 1, name: nameRobot, content: lastMessage.name + " - отстань! Не видишь я кушаю!"} ] }), 1000);
        }
    }

    render() {
        return (
            <div>
                <h1>MESSAGE SYSTEM</h1>
                <MessageField messages={ this.state.messages } />
                <Form init={ this.state.messages } onSaveMessage={this.handleMessages} />
            </div>
        )
    }
}

ReactDOM.render(
    <Container />,
    document.getElementById('root'),
);