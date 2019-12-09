import React from 'react';

export default class Form extends React.Component {
    state = {
        valueInput: '',
        valueText: ''
    };

    handleChangeInput = this.handleChangeInput.bind(this);
    handleChangeText = this.handleChangeText.bind(this);
    handleSubmit = this.handleSubmit.bind(this);

    handleChangeInput(event) {
        this.setState({valueInput: event.target.value});
    }

    handleChangeText(event) {
        this.setState({valueText: event.target.value});
    }

    handleSubmit(event) {
        alert('Отправленное имя: ' + this.state.valueInput);
        alert('Отправленное сочинение: ' + this.state.valueText);
        event.preventDefault();
    }
    render() {
        return (
            <form>
                <label>
                    Имя:
                    <br/>
                    <input type="text" value={this.state.valueInput} onChange={this.handleChangeInput} />
                    <br/>
                    Сочинение:
                    <br/>
                    <textarea value={this.state.valueText} onChange={this.handleChangeText} />
                    <br/>
                </label>
                <button onClick={this.props.onClick}>Отправить</button>
            </form>
        );
    }
}
            {/* <form onSubmit={this.handleSubmit}> */}
                {/* <input type="submit" value="Отправить" /> */}

            {/* <input name="user" type="text" placeholder="Имя пользователя" required="required"></input><br/>
            <textarea name="content" placeholder="Введите текст" required="required"></textarea><br/>
            <SendButton
                name="Отправить"
                onClick={this.handleClick.bind(this)}
            /> */}
