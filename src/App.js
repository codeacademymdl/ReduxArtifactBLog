import React, { Component } from 'react';
import './App.css';
import Navigation from '../src/Components/Navigation/Navigation';
import Footer from '../src/Components/Footer/Footer';
import{ Link } from 'react-router-dom';

import CardGrid from '../src/Components/CardGrid/CardGrid';
import CreatePost from '../src/Components/CreatePost/CreatePost';
import cards from './mockData/index.json'


class App extends Component {

	render() {
		return (
			<div>
				<Navigation />
				<CardGrid cards={cards} />

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
