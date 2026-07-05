import { useEffect } from "react";

export default function Popup({
  isOpen,
  onClose,
  name,
  title = "",
  children,
  containerClass = "",
}) {
  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("popup_opened")) onClose();
  };

  return (
    <div
      className={`popup ${isOpen ? "popup_opened" : ""} popup_type_${name}`}
      onMouseDown={handleOverlayClick}
    >
      <div className={`popup__container ${containerClass}`}>
        <button
          className="popup__button popup__button_close"
          type="button"
          onClick={onClose}
        />

        {title && <h2 className="popup__subtitle">{title}</h2>}

        {children}
      </div>
    </div>
  );
}
