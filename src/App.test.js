import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

xit('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('checks if data is empty array', () => {
    const wrapper = shallow(<App />);
    
    
    expect(wrapper.instance().state.cards.length).toEqual(0);

  });

    it('checks if data is fetched and assigned to cards', async (done) => {
        const wrapper = shallow(<App />);
        
        await wrapper.instance().componentDidMount();
        expect(wrapper.instance().state.cards.length).toEqual(6);
        done();

      });

  