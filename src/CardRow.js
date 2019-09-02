import React from "react";
import "./CardRow.css";

const CardRow = ({ index, card, deleteCard }) => {
  return (
    <div className="card">
      {card}
      <button className="xbutton" onClick={() => deleteCard(index)}>
        X
      </button>
    </div>
  );
};

export default CardRow;
