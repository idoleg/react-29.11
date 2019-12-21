import React, {Component} from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ("./ChatForm.css");


export class ChatForm extends Component {
    state ={
        name: "",
    }

    static propTypes = {
        onAddChat: PropTypes.func.isRequired,
    }

    handleAddChat = () => {
        console.log(this.state.name);
        const chatName = this.state.name;
        const chatContent = "Привет из чата " + chatName + "!";
        this.props.onAddChat({
            name: chatName,
            messages: [
                { name: "Bot", content: chatContent }
            ]
        });

        this.setState({
            name: ""
        });


    };

    handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    };


    render() {
        const {name} = this.state;
        return (
            <div className={"chat-form"}>
                <TextField id="ChatName" label="ChatName" variant="outlined"
                    name={"name"}  type="text" value={name} onChange={this.handleInputChange}/>

                <Button onClick={this.handleAddChat} variant="contained" color="primary">Add</Button>
            </div>

        );
    }
}





