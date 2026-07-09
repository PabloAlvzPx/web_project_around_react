import { useState, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function NewCard({ onAddPlace }) {
  const { isLoading } = useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({ name, link });
  }

  return (
    <form onSubmit={handleSubmit} className="popup__form" noValidate>
      <label className="popup__label">
        <input
          className="popup__input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Título"
          required
        />
        <span className="popup__error"></span>
      </label>

      <label className="popup__label">
        <input
          className="popup__input"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="Enlace a la imagen"
          type="url"
          required
        />
        <span className="popup__error"></span>
      </label>

      <button className="popup__button popup__button_save" type="submit">
        {isLoading ? "Creando..." : "Crear"}
      </button>
    </form>
  );
}
