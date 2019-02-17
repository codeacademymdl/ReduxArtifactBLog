import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';

import Routes from './Routes/Routes'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';


import AddCards from './Reducers/AddCards';
// import AddBlog from './Reducers/AddCards';

// import AddCardContainer from './Container/addCard.container';


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(AddCards, devTools);


ReactDOM.render(<Provider store={store}><Routes/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
