import { SEND_MESSAGE } from '../actions/messageActions';

export default store => next =>(action) => {

  // const date = Date.now();

  // switch (action.type) {
  //   case SEND_MESSAGE:
  //     if (action.sender === 'me') {
  //       setTimeout(() => store.dispatch( 
  //         sendMessage(Object.keys(store.getState().messageReducer.messages).length + 1,
  //         'Не приставай ко мне, я робот!', 'bot', date, action.chatId)
  //       ), 1000);
  //     }
  // }
  return next(action)
}

// function sendMessage( message, sender, date ) {
//   const { messages } = this.state;
//   const { chatId } = this.props;

//   const messageId = Object.keys(messages).length + 1;
//     this.setState({
//       messages: { ...messages, [messageId]: { text: message, sender: sender, created: date }},
//     });
//     this.props.sendMessage(messageId, message, sender, chatId, date);
// };
