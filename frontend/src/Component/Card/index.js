import React, { Component } from "react";
// import { response } from "express";

// import axios from "axios";

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        };
    }
   
    componentDidMount() {
        var url = "http://localhost:8000/api/";
        fetch(url)
            .then(d => d.json())
            .then(d => {
                this.setState({ cards: d })
            }).catch(error => {
                console.log(error)
            })
    }

    render() {
        if (this.state.cards && this.state.cards.length > 0) {
            return(
                <ul>
                    {this.state.cards.map(function(card, index) {
                        return(
                            <div>
                                <div>{card.image}</div>
                                <h1>{card.name}</h1>
                                <h4>Themes: {card.meaning}</h4>
                                <h4>Reversed Themes: {card.reversal}</h4>
                            </div>
                        )
                    })}
                </ul>
            );
        }
        return null;
    }

}