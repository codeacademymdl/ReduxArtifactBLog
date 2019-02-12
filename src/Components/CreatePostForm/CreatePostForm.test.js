import React from 'react';

import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import CreatePostForm from './ CreatePostForm'

describe('CreatePostForm', () => {
    it('renders correctly', () => {
        const tree = renderer
          .create(<CreatePostForm/>)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });
});

