import React from 'react';

import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import CreatePostForm from './ CreatePostForm';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

describe('CreatePostForm', () => {
    it('renders correctly', () => {
        const tree = renderer
          .create(<Router><CreatePostForm/></Router>)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });
});

