import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCard: 0,
      position: 0,
      cardStyle: {
        transform: 'translateX(0px)'
      },
      width: 0,
      rtn : [{
        title: "HARI",
        url: "https://cdn.pixabay.com/photo/2017/07/24/02/40/pink-roses-2533389__340.jpg"
      }, {
        title: "HARI",
        url: "https://cdn.pixabay.com/photo/2017/07/24/02/40/pink-roses-2533389__340.jpg"
      }, {
        title: "HARI",
        url: "https://cdn.pixabay.com/photo/2017/07/24/02/40/pink-roses-2533389__340.jpg"
      },  {
        title: "HARI",
        url: "https://cdn.pixabay.com/photo/2017/07/24/02/40/pink-roses-2533389__340.jpg"
      }, {
        title: "HARI",
        url: "https://cdn.pixabay.com/photo/2017/07/24/02/40/pink-roses-2533389__340.jpg"
      }, {
        title: "HARI",
        url: "https://cdn.pixabay.com/photo/2017/07/24/02/40/pink-roses-2533389__340.jpg"
      }
    ]
    };
  }

  componentDidMount() {
    let boxWidth = document.getElementById("card").clientWidth;
    this.setState({ width: boxWidth });
  }
    handleClick(type) {
     

    const cardWidth = this.state.width; 
    const cardNumber = this.state.rtn.length; 
    let currentCard = this.state.currentCard; 
    let position = this.state.position;

   
    if(type === 'next' && currentCard < cardNumber-1) {
      currentCard++;
      console.log(currentCard)
      // if(cardNumber==this.state.rtn.length){
      //   break;
      // }
      position -= (cardWidth);
    } else if(type === 'prev' && currentCard > 0) {
      currentCard--;
      position += (cardWidth);
    }
    this.setCard(currentCard, position);
  }
  
  setCard(currentCard, position) {
    this.setState({
      currentCard: currentCard,
      position: position,
      cardStyle: {
        transform: `translateX(${position}px)`
      }
    })
  }

  render() {
    return (
      <div className="cards-slider">
        <div className="slider-btns">
          <button className="slider-btn btn-l" onClick={() => this.handleClick('prev')}>&lt;</button>
          <button className="slider-btn btn-r" onClick={() => this.handleClick('next')}>&gt;</button>
        </div>
        <Cards cardStyle={this.state.cardStyle}
        len={this.state.rtn}
         />
      </div>
    )
  }
}

class Cards extends React.Component {
  render() {
    const cardData = this.props.len;
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



export default App;