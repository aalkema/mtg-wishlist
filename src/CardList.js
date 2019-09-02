import React from "react";
import CardRow from "./CardRow";
import "./CardList.css";

const CardList = ({ cards, deleteCard }) => {
  return (
    <div className="cardList">
      {cards.map((card, index) => (
        <CardRow
          key={index}
          index={index}
          card={card}
          deleteCard={deleteCard}
        />
      ))}
    </div>
  );
};

export default CardList;
