import React, { Component } from 'react';
import App from '../../App';
import CreatePostForm from '../CreatePostForm/ CreatePostForm'
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Routes extends Component {
    render() {
        return (
            <Router>
            <div>
                <Route exact path="/" component={App}></Route>
                <Route exact path="/form" component={CreatePostForm}></Route>
            </div>
        </Router>
        );
    }
}

export default Routes;




