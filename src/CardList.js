import React from "react";
import CardRow from "./CardRow";

const CardList = ({ cards, deleteCard }) => {
  return (
    <div className="card-list">
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
