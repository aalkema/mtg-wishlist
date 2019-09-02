import { useState } from "react";

export default initialvalue => {
  const [cards, setCards] = useState(initialvalue);

  return {
    cards,
    addCard: card => {
      setCards([...cards, card]);
    },
    deleteCard: cardIndex => {
      const newCards = cards.filter((_, index) => index !== cardIndex);

      setCards(newCards);
    }
  };
};
