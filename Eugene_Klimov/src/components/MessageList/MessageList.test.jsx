import React from 'react';
import {MessageList} from './MessageList';
import {Message} from '../Message/Message';
import {shallow} from 'enzyme';

describe('<MessageList>', () => {
  it('renders with message list', () => {
    const messages = {
      1: {author: 'Klim-1', content: 'AnyText-1', date: '2019-12-29 15:32'},
      2: {author: 'Klim-2', content: 'AnyText-2', date: '2019-12-29 15:33'},
      3: {author: 'Klim-3', content: 'AnyText-3', date: '2019-12-29 15:34'},
    };
    const chats = {
      1: {
        title: 'Chat-1',
        messageList: [1, 2, 3],
      },
    };
    const elem = shallow(<MessageList messages={messages} chatId='1'
                                      chats={chats}/>);

    for (const message of Object.entries(messages)) {
      const {author, content, date} = (<Message {...message[1]}/>).props;
      console.log(author, content, date);
      expect(elem.debug()).toMatch(author);
      expect(elem.debug()).toMatch(content);
      expect(elem.debug()).toMatch(date);
    }
  });
});
