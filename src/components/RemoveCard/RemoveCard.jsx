import React from "react";

export default function RemoveCard({ onClose, onDeleteCard, card }) {
  function handleSubmit(e) {
    e.preventDefault();
    onDeleteCard(card);
  }

  return (
    <form className="popup__form" name="remove-card" onSubmit={handleSubmit}>
      <button type="submit" className="popup__button">
        Sí
      </button>
    </form>
  );
}
