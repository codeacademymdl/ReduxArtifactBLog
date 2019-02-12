import React from 'react';

import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import CreatePost from './CreatePost'

describe('CreatePost', () => {
    it('renders correctly', () => {
        const tree = renderer
          .create(<CreatePost/>)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });
});

