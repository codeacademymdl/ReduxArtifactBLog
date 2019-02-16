import React, { Component } from 'react';
import './CardGrid.css';
import Card from '../Card/Card'

class CardGrid extends Component {

   
  render() {
    console.log("inside card",    this.props.cards );
    return (
      <div className="card_grid">
        {
            
          this.props.cards.map((card, index) => {
            return <Card
              date = {card.date}
              readingTime = {card.readingTime}
              title = {card.title}
              description = {card.description}
              claps = {card.claps}
              liked = {card.liked}
              imageSrc = {`./Images/${card.image}`}
              key={index}
            ></Card>
          })
        }
      </div>
    );
  }
}

export default CardGrid;
