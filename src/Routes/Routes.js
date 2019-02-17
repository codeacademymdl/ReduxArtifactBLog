import React, { Component } from 'react';
import App from '../App';
import CreatePostForm from '../Components/CreatePostForm/CreatePostForm'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddCardContainer from '../Container/addCard.container';
import AddBlogContainer from '../Container/addBlog.container'
class Routes extends Component {
    render() {

        return (
            
            <Router>
            <div>
                

                    <Route exact path="/" component={AddCardContainer}></Route>
                    {/* <Route exact path="/form" component={CreatePostForm}></Route> */}
                    <Route exact path="/form" component={AddBlogContainer}></Route>

                
            </div>
            </Router>
        );
    }
}

export default Routes;




