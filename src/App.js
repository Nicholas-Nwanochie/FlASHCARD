import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import DrawButton from "./components/DrawButton/DrawButton";
import Header from "./components/Header";
import "./App.css";
import Login from "./components/login";
import Main from "./components/main";
import Card from "./components/cards/Card";
import Deck from "./Data/cards.js";
import Data from './Data/cards'



// import firebase from "firebase/app";
// import "firebase/database";

// import { DB_CONFIG } from "./config/firebase/db_config";

class App extends Component {
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
      
      cards: [ {
            id: 1,
            eng: "Coding Bootcamp",
            word: "DigitalCrafts",
            question: "Is what?",
          },
          {
            id: 2,
            eng: "Coding23 Bootcamp",
            word: "Digital Craft1s",
            question: "Is what?",
          },],
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
console.log(card)
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
       (card)
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
        <BrowserRouter>
          <div>
            <Route exact path="/">
              <Login />
            </Route>

            <Route exact path="/main">
              <Main />
            </Route>

            <Route exact path="/main/study">
              <Card
                eng={this.state.currentCard.eng}
                word={this.state.currentCard.word}
                question={this.state.currentCard.question}
              />
              <DrawButton drawCard={this.updateCard} />
            </Route>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;


// make mapdispatch to props for cards to call a reducer with matching type and take the data to put it in in store