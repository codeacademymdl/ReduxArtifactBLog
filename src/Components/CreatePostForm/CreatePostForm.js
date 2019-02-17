import React, { Component } from 'react';
import './CreatePostForm.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
// import AddCardContainer from '../../Container/addCard.container'



class CreatePostForm extends Component {


    state = {
        date: "",
        readtime: "",
        title: "",
        description: "",

    }

    formDataContent = (e) => {
        // console.log(e.target.value);
        return this.setState({
            [e.target.name]: e.target.value,
        })

    }

    // postForm = (e) => {
    //     e.preventDefault();

    //     const payload = this.state;
    //     console.log(payload)

    //     axios.post('http://localhost:8080/blog', payload
    //     ).then(response => console.log(response));
    // }
   postForm = (e) => {
        e.preventDefault();

        const payload = this.state;
        console.log(payload);

        this.props.insertCard(payload);
    }
    


    render() {
        console.log(this.props)
        return (

            <form className="form-width" onSubmit={this.postForm}>
                <ul className="flex-outer">
                    <li>
                        <label >Date</label>
                        <input type="date" name="date" onChange={this.formDataContent} />
                    </li>
                    <li>
                        <label >Read Time</label>
                        <input type="text" name="readtime" onChange={this.formDataContent} placeholder="Enter the read time for blog" />
                    </li>
                    <li>
                        <label >Title</label>
                        <input type="text" name="title" onChange={this.formDataContent} placeholder="Enter the Title of Post" />
                    </li>
                    <li>
                        <label >Description</label>
                        <input type="text" name="description" onChange={this.formDataContent} placeholder="Enter the Description of Post" />
                    </li>
                    
                    
                    {/* <li>
                        <label >Message</label>
                        <textarea rows="6" name="message" onChange={this.formDataContent} placeholder="Enter your message here"></textarea>
                    </li> */}
                    
                    <li>


                        <button type="submit">Submit</button>
                        <Link to={`/`}>
                            <button type="back">Back</button>
                        </Link>



                    </li>
                </ul>
            </form>


        );
    }
}


export default CreatePostForm;



