import React from 'react';

import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Card from './Card'

const card = {
    "date": "2nd Januray, 2018",
    "readingTime": "2 mins",
    "title": "The future of abstract art and the culture ...",
    "description": "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...",
    "claps": 10,
    "liked": false,
    "image": "abstract.png"
}
describe('Card', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<Card />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

});

describe('Card Counter', () => {
    it('checks if counter function increment by 1 ', () => {
        const wrapper = shallow(<Card
            date={card.date}
            readingTime={card.readingTime}
            title={card.title}
            description={card.description}
            claps={card.claps}
            liked={card.liked}
            imageSrc={`./Images/${card.image}`}
            
        />)
        expect(wrapper.instance().state.count).toEqual(card.claps);
        wrapper.instance().Counter();
        expect(wrapper.instance().state.count).toEqual(card.claps + 1);

    });

});

describe('Card likeDislike', () => {
    it('checks if state of islike is changed ', () => {
        const wrapper = shallow(<Card
            date={card.date}
            readingTime={card.readingTime}
            title={card.title}
            description={card.description}
            claps={card.claps}
            liked={card.liked}
            imageSrc={`./Images/${card.image}`}
            
        />)
        expect(wrapper.instance().state.isLike).toEqual(card.liked);
        wrapper.instance().likeDislike();
        expect(wrapper.instance().state.isLike).toEqual(!card.liked);

    });

});


