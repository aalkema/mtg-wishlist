import React from "react";
import CardForm from "./CardForm";
import CardList from "./CardList";
import "./app.css";
import useCardState from "./useCardState";

function App() {
  const { cards, addCard, deleteCard } = useCardState([]);

  return (
    <div className="app">
      <CardForm addCard={addCard} />
      <CardList cards={cards} deleteCard={deleteCard} />
    </div>
  );
}

export default App;
