import React, { Component } from 'react';
import './CreatePostForm.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class CreatePostForm extends Component {

	render() {
		return (

			<form className="form-width">
				<ul className="flex-outer">
					<li>
						<label for="date-form">Date</label>
						<input type="date" id="date" />
					</li>
					<li>
						<label for="read-time">Read Time</label>
						<input type="text" id="read-time" placeholder="Enter the read time for blog" />
					</li>
					<li>
						<label for="title">Title</label>
						<input type="text" id="title" placeholder="Enter the Title of Post" />
					</li>
					<li>
						<label for="message">Message</label>
						<textarea rows="6" id="message" placeholder="Enter your message here"></textarea>
					</li>
					<li>
						<Router>
						<Link to={`/`}>
							<button type="submit">Submit</button>
						</Link>

						</Router>

					</li>
				</ul>
			</form>


		);
	}
}








export default CreatePostForm;



