
import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Header from "../components/Header";
import Data from "../Data/ComicsData";
import Cards from '../components/cards/comicsCards'
import DrawButton from "../components/DrawButton/DrawButton";



class Comics extends Component {
  constructor(props) {
    super(props);
    // if (!firebase.apps.length) {
    // firebase.initializeApp(DB_CONFIG);
    // console.log("CHECKING THIS.APP IN CONSTRUCTOR");
    // console.log(this.app);
    // }
    // this.database = this.app.database().ref().child("cards");
    this.updateCard = this.updateCard.bind(this);

    this.state = {
      cards: [
        {
          id: 1,
          eng: "You didn't hit it did you",
          word: "Start by hitting the button",
          question: "don't be shy",
        }
      ],
      currentCard: {},
    };
  }

  componentWillMount() {
    // console.log(this.app.database().ref().child("cards"));
    const currentCards = this.state.cards;
    // this.database.on("child_added", (snap) => {
    //   currentCards.concat({
    //     id: snap.key,
    //     eng: snap.val().eng,
    //     word: snap.val().word,
    //     question: snap.val().question,
    //   });

    this.setState({
      cards: Data,
      // cards: [
      //   {
      //     id: 1,
      //     eng: "Coding Bootcamp",
      //     word: "DigitalCrafts",
      //     question: "Is what?",
      //   },
      //   {
      //     id: 2,
      //     eng: "Coding23 Bootcamp",
      //     word: "DigitalCraft1s",
      //     question: "Is what?",
      //   },
      // ],
      // currentCard: {},

      currentCard: this.getRandomCard(currentCards),
    });
    // });
  }

  // componentWillMount() {
  //   console.log(this.app.database().ref().child('cards'))
  //   const currentCards = this.state.cards;

  //     this.database.on('child_added', snap => {
  //       currentCards.concat({
  //         id: snap.key,
  //         eng: snap.val().eng,
  //         han: snap.val().han,
  //         pin: snap.val().pin,
  //       });

  //       this.setState({
  //         cards: currentCards,
  //         currentCard: this.getRandomCard(currentCards)
  //       })
  //     }
  // }

  getRandomCard(currentCards) {
    var randomIndex = Math.floor(Math.random() * currentCards.length);
    var card = currentCards[randomIndex];
    console.log(card);
    // if (card === this.state.currentCard) {
    //   this.getRandomCard(currentCards);
    // }
    // return(card)
    return (
      // {
      //   id: 1,
      //   eng: "Coding Bootcamp",
      //   word: "DigitalCrafts",
      //   question: "Is what?",
      // },
      // {
      //   id: 2,
      //   eng: "Coding23 Bootcamp",
      //   word: "DigitalCraft1s",
      //   question: "Is what?",
      // }
      card
    );
  }

  updateCard() {
    const currentCards = this.state.cards;
    this.setState({
      // cards: currentCards,
      currentCard: this.getRandomCard(currentCards),
    });
  }

  render() {
    console.log("checking this.app");
    console.log(this.app);

    return (
      <div>
        <Cards
          eng={this.state.currentCard.eng}
          word={this.state.currentCard.word}
          question={this.state.currentCard.question}
        />
        <DrawButton drawCard={this.updateCard} />
      </div>
    );
  }
}

export default Comics;
