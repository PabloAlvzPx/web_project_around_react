import { useEffect } from "react";

export default function ImagePopup({ card, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("popup_opened")) {
      onClose();
    }
  };

  return (
    <div
      className={`popup ${card ? "popup_opened" : ""}`}
      onMouseDown={handleOverlayClick}
    >
      <div className="popup__container popup__container_image">
        <button
          type="button"
          className="popup__button popup__button_close"
          onClick={onClose}
          aria-label="Close modal"
        ></button>
        <img className="popup__image" src={card?.link} alt={card?.name} />
        <p className="popup__paragraph">{card?.name}</p>
      </div>
    </div>
  );
}
