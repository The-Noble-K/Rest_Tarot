import React, {Component} from 'react';

class App extends Component {
  state = {
    cards: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://localhost:8000/RestTarot/');
      const cards = await res.json();
      this.setState({
        cards
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        {this.state.cards.map(card => (
          <div key={card.card_id}>
            <h1>{card.name}</h1>
            <img src={card.image} alt={card.name}></img>
            <span>{card.meaning}</span>
            <span>{card.reversal}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
