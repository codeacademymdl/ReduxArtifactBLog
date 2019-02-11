import React, { Component } from 'react';
import './Card.css';
import BlackHeartImage from '../../Icons/heart-black.svg'
import RedHeartImage from '../../Icons/heart-red.svg';
import ClappingImage from '../../Icons/clapping.svg';


class Card extends Component {
    render() {
        return (
<<<<<<< HEAD
            <div className="main" >
                <div className="backgroundImage" style={{ backgroundImage: `url(${this.props.imageSrc})` }} />

                <div className="imageInfo">

                     <span>{this.props.date}</span><span>{this.props.readingTime}</span>
                </div>
                <div className="imageDesc">
                    <span >{this.props.title}</span>
                    <span className="imageContent">{this.props.description}</span>

                </div>
                <div className="imageFooter">
                    <div className="reaction">
                        <img src={ClappingImage} />
                        <span>{this.props.claps}</span>
                    </div>
                    {
                        this.props.liked?<img src={RedHeartImage} /> :<img src={BlackHeartImage} />   
                    } 

=======
            <div class="card">
                <img src= {this.props.imageSrc} alt="abstract" className='image' />
                <div className="container">
                    <span className="date">{this.props.date}</span>
                    <span className='date' id="readTime">{this.props.readingTime}</span>
                    <p className='title'>{this.props.title}</p>
                    <p className='abstract'>{this.props.description}</p>
                    <hr />
                    <img alt="clap" src={ClappingImage} className='clap' />
                    <img alt="heart" src={RedHeartImage} className='heart' />
>>>>>>> 6be48bffc7bbbf05eda7ef6d565bf7d24ba2651e
                </div>
            </div>
        );
    }
}

export default Card;
