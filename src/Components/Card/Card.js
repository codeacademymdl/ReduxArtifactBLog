import React, { Component } from 'react';
import './Card.css';
import BlackHeartImage from '../../Icons/heart-black.svg'
import RedHeartImage from '../../Icons/heart-red.svg';
import ClappingImage from '../../Icons/clapping.svg';


class Card extends Component {


    state={
        count: this.props.claps,
        isLike:this.props.liked,
    }

    Counter=()=>{
        this.setState({
            count: this.state.count+1
        })
    }

    likeDislike = () =>{

        this.setState({
            isLike:!this.state.isLike
        })

    }
    getImage = () => this.state.isLike ? BlackHeartImage : RedHeartImage;

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
                    <img alt="clap" src={ClappingImage} className='clap' onClick={this.Counter} />
                    <span>{this.state.count}</span>
                    <img alt="" className="heart" src={this.getImage()} onClick={this.likeDislike}/>
                </div>
            </div>
        );
    }
}

export default Card;
