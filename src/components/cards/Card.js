import React from 'react'
import "./card.css";
import DrawButton from '../DrawButton/DrawButton'
import Header from '../Header'


const Card = (props) => {
    return(
    <>
        <Header/>
  <div className="card-container1">
    <div className="card1">
      <div className="front1">
        <div className="word">{props.word}</div>
        <br></br>
        <div className="question">{props.question}</div>
      </div>
      <div className="front1 back1">
        <div className="eng">{props.eng}</div>
      </div>
    </div>
  </div>
        {/* <DrawButton 
        drawCard={props.draw} 
           draw={this.updateCard}/>; */}
</>
)
    }

export default Card;
