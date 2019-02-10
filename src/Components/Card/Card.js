import React, { Component } from 'react';
import './Card.css';
import BlackHeartImage from '../../Icons/heart-black.svg'
import RedHeartImage from '../../Icons/heart-red.svg';
import ClappingImage from '../../Icons/clapping.svg';


class Card extends Component {
    render() {
        return (
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

                </div>
            </div>
        );
    }
}

export default Card;
