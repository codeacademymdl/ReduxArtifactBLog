import React from 'react';

import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Navigation from './Navigation'

describe('Navigation', () => {
    it('renders correctly', () => {
        const tree = renderer
          .create(<Navigation/>)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });
});

