import React, { Component } from 'react';
import './Card.css';
import BlackHeartImage from '../../Icons/heart-black.svg'
import RedHeartImage from '../../Icons/heart-red.svg';
import ClappingImage from '../../Icons/clapping.svg';


class Card extends Component {
    render() {
        return (
            <div class="card">
                <img src= {this.props.imageSrc} alt="abstract" className='image' />
                <div className="container">
                    <span className="date">{this.props.date}</span>
                    <span className='date' id="readTime">{this.props.readingTime}</span>
                    <p className='title'>{this.props.title}</p>
                    <p className='abstract'>{this.props.description}</p>
                    <hr />
                    <img alt="clap" src={ClappingImage} className='clap' />
                    <span>{this.props.claps}</span>
                    {this.props.liked?<img alt="heart" src={RedHeartImage} className='heart' />:<img alt="heart" src={BlackHeartImage} className='heart' />}
                </div>
            </div>
        );
    }
}

export default Card;
