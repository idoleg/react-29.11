import React from 'react';
import ReactDOM from 'react-dom';
import MessageField from './components/MessageField';

function SendButton(props) {
    return <button  onClick={props.onClick}>{props.name}</button>;
    }

class Container extends React.Component {
    state = {
        messages: [
            {id: 0, name: "Oleg", content: "Привет!"},
            {id: 1, name: "Ivan", content: "как дела?"},
            {id: 3, name: "Oleg", content: "Good"},
            {id: 4, name: "", content: "Good"},
        ]
    }

    handleClick = () => {
        const count = this.state.messages.length;
        this.setState ({ messages : [ ...this.state.messages , {id: count + 1, name: "Vladimir", content: "Нормально!"} ] });
    }
    
    componentDidUpdate() {
        const nameRobot = "Robot";
        const count = this.state.messages.length;
        const copyArray = this.state.messages;
        const [lastMessage] = [...copyArray].reverse();
        console.log(lastMessage);
        if (lastMessage.name != nameRobot) {
            setTimeout(() => this.setState ({ messages : [ ...this.state.messages , {id: count + 1, name: nameRobot, content: "Отстань! Не видишь я кушаю!"} ] }), 1000);
        }
    }

    render() {

        return (
            <div>
                <h1>MESSAGE SYSTEM</h1>
                <MessageField messages={ this.state.messages } />
                <input name="user" type="text" placeholder="Имя пользователя"></input><br/>
                <textarea name="content" placeholder="Введите текст" required="required"></textarea><br/>
                <SendButton
                    name="Отправить"
                    onClick={this.handleClick.bind(this)}
                />
            </div>
        )
    }
}

ReactDOM.render(
    <Container />,
    document.getElementById('root'),
);