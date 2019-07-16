import React, { Component } from "react";

import axios from "axios";

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        };
        this.loadCards = this.loadCards.bind(this);
    }

    componentWillMount() {
        this.loadCards();
    }

    async loadCards() {
        const promise = await axios.get("http://localhost:8000/api");
        const status = promise.staus;
        if (status === 200) {
            const data = promise.data.data;
            this.setState({cards:data});
        }
    }

    render() {
        return(
        <div>
            <h1>Cards</h1>
            {this.state.cards.map((index, value) => {
                return <h1 key={index}>{value}</h1>
            })}
        </div>
        )
    }
}
