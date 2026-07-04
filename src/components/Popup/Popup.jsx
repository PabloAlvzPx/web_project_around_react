import { useEffect } from "react";

export default function Popup({ onClose, title, children }) {
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
    <div className="popup popup_opened" onMouseDown={handleOverlayClick}>
      <div className="popup__container">
        <button
          aria-label="Close modal"
          className="popup__button popup__button_close"
          type="button"
          onClick={onClose}
        />
        <h2 className="popup__subtitle">{title}</h2>
        {children}
      </div>
    </div>
  );
}
