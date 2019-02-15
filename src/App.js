import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



import CardGrid from './Components/CardGrid/CardGrid';
import CreatePost from './Components/CreatePost/CreatePost';
// import cards from './mockData/index.json'
import axios from 'axios'

class App extends Component {

    state = {
        cards: [],
    }

    async componentDidMount() {

        const apiFetchedBlogContent = await axios.get('https://api.myjson.com/bins/hc5ye');
        this.setState({
            cards: apiFetchedBlogContent.data

        })

    }


    render() {
        return (
            <div>
                <Navigation />
                <CardGrid cards={this.state.cards} />

                    <Link to={`/form`} className="linkBtn">
                        <CreatePost />
                    </Link>


                {/* <CardGrid cards={[this.cards[0]]}/> */}


                <Footer />


            </div>

        );
    }
}

export default App;
