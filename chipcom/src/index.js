import React from 'react';
import ReactDOM from 'react-dom';

// let messages = [ 'П р и в е т', 'К а к   д е л а?'];

const MessageComponent = (props) => 
    <div><b>{props.name}: </b>{props.text}
    </div>;

const MessageField = (props) => {
    // return props.messages.map(message => <MessageComponent key={ message } text={ message } />);
    return props.messages.map(message => <MessageComponent key={ message.id } name={message.name.length === 0 ? "Anonymous" : message.name} text={ message.content } />);
};

function SendButton(props) {
    return <button  onClick={props.onClick}>{props.name}</button>;
    }

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isAdd: false };
        // this.messages = [ 'П р и в е т', 'К а к   д е л а?']; 
        this.messages = [
            {id: 0, name: "Oleg", content: "Привет!"},
            {id: 1, name: "Ivan", content: "как дела?"},
            {id: 3, name: "Oleg", content: "Good"},
            {id: 4, name: "", content: "Good"},
        ]
            }

    handleClick() {
        // this.messages.push("Нормально!");
        this.messages.push({id: this.messages.length + 1, name: "Vladimir", content: "Нормально!"});
        this.setState({ isAdd: true });
    }
    
    render() {

        return (
            <div>
                <h1>HELLO</h1>
                <MessageField messages={ this.messages } />
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
    // <MessageField messages={ messages } />,


// const content = 'Кажется мы подключили React';

// const Component = (props) => <h1 className="element">{props.content}</h1>;

// ReactDOM.render(
//     <Component content={ content } />,
//     document.getElementById('root'),
// );

// const element = <h1 className="element">Кажется мы подключили React</h1>;

// const element = React.createElement(
//     'h1',
//     { className: "element" },
//     'Кажется мы подключили React',
// );

// ReactDOM.render(
//     element,
//     document.getElementById('root'),
// );
