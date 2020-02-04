import React from "react";
import {MessageList} from "./MessageList";
import {Message} from "../Message/Message";
import {shallow} from "enzyme";

describe("<MessageList>", () => {

    it("renders with message list", () => {
        const props = [
            {name: "My user#1", content: "My content 1"},
            {name: "My user#2", content: "My content 2"},
            {name: "My user#3", content: "My content 3"},
            {name: "My user#4", content: "My content 4"},
        ];

        const element = shallow(<MessageList messages={props} />);
        
        props.map((item) => {
            expect(element.contains(<Message {...item}/>)).toBe(true);
        });

    })
});