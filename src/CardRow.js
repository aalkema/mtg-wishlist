import React, { useState, useEffect } from "react";
import "./CardRow.css";

const CardRow = ({ index, card, deleteCard }) => {
  const [imageUri, setImageUri] = useState("");

  async function getImage(card) {
    const res = await fetch(
      `https://api.scryfall.com/cards/named?exact=${card}`
    );
    res
      .json()
      .then(res => {
        if (res) {
          setImageUri(res.image_uris.small);
        }
      })
      .catch(e => console.log(e));
  }

  useEffect(() => {
    getImage(card);
  });

  return (
    <div className="card">
      <div className="cardHeader row">
        {card}
        <button className="xbutton" onClick={() => deleteCard(index)}>
          X
        </button>
      </div>
      <div className="cardImage column">
        <img src={imageUri} />
      </div>
    </div>
  );
};

export default CardRow;
