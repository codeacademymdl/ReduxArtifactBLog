import React from 'react';

import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Routes from './Routes'

describe('Routes', () => {
    it('renders correctly', () => {
        const tree = renderer
          .create(<Routes />)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });
});

