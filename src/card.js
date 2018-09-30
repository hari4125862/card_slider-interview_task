import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App.js'


class Cards extends React.Component {
  render() {
    const cardData = CardData();
    return (
      <section>
      {
        cardData.map((card, i) => {
          return (
            <div className="card" id="card" style={this.props.cardStyle} key={i}>
              <p className="title">{card.title}</p>
              <a href="#"><img src={card.url} /></a>
            </div>
          )
        })
      }
      </section>
    )
  }
}



export default Cards;