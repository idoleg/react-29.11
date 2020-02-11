import React from 'react';
import {Message} from './Message';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import {botName} from '../../utils/constants';

describe('<Message>', () => {
  it('renderer Message', () => {
    const props = {
      author: 'Klim',
      content: 'AnyText',
      date: '2019-12-29 13:06',
    };
    const elem = renderer.create(<Message {...props} />).toJSON;
    expect(elem()).toMatchSnapshot();
  });

  it('message with others names', () => {
    const props = {
      content: 'AnyText',
      date: '2019-12-29 13:24',
    };
    const elem = shallow(<Message {...props}/>);
    expect(elem.contains(<span
      className='user-name'>Anonymous</span>)).toBe(true);

    elem.setProps({author: botName});
    expect(elem.contains(<span
      className='user-name'>{botName}</span>)).toBe(true);
  });
});
