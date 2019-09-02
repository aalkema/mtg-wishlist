import React, { useState } from "react";
import "./CardForm.css";
import useInputState from "./useInputState";

const CardForm = ({ addCard }) => {
  const { value, reset, onChange } = useInputState("");

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        addCard(value);
        reset();
      }}
    >
      <input
        className="cardInput"
        variant="outlined"
        placeholder="Card name"
        margin="normal"
        onChange={onChange}
        value={value}
      />
    </form>
  );
};

export default CardForm;
