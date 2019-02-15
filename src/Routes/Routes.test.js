import React from 'react';

import { shallow,mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Routes from './Routes'
import CreatePostForm from '../Components/CreatePostForm/ CreatePostForm';
import { MemoryRouter, BrowserRouter as Router, Route, Link  } from 'react-router-dom';

describe('Routes', () => {
    it('renders correctly', () => {
        const tree = renderer
          .create(<Routes />)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });
});





describe ('Route', () => {

beforeAll(()=>{
    const reactRouterDom = require('react-router-dom');
    reactRouterDom.BrowserRouter = ({children}) => <div>{children}</div>
    
})

 
  it (' should redirect to 404 for random path', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/random']}>
        <Routes />
      </MemoryRouter>
    );
    expect(wrapper.find(CreatePostForm)).toHaveLength(0);
  });
  it (' should redirect to /form page', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/form']}>
        <Routes />
      </MemoryRouter>
    );

    expect(wrapper.find(CreatePostForm)).toHaveLength(1);
  });
})

