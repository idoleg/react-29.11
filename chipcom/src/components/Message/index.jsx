import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const dateFormat = require('dateformat');

class Message extends React.Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        sender: PropTypes.string.isRequired,
    };
    
    render() {
        dateFormat.i18n = {
            dayNames: [
                'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',
                'воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'
            ],
            monthNames: [
                'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
                'января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
            ],
            timeNames: [
                'a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM'
            ]
        };

        const strDate = dateFormat(this.props.created, 'd mmmm yyyy HH:MM');

        return <div
            className="message"
            style={ { alignSelf: this.props.sender === 'bot' ?
                'flex-start' : 'flex-end' } }
            >
            <div className="message-sender">{ this.props.sender }</div>
            <div className="message-date">Cоздан: { strDate }</div>
            <div>{ this.props.text }</div>
        </div>
    }
}

export default Message;