import { useRef, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function EditAvatar() {
  const { handleUpdateAvatar, isLoading } = useContext(CurrentUserContext);

  const avatarRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    handleUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <form
      className="popup__form"
      name="edit-avatar-form"
      id="edit-avatar-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <label className="popup__label">
        <input
          ref={avatarRef}
          className="popup__input popup__input_type_link"
          id="avatar-link"
          name="avatarLink"
          placeholder="Enlace a la nueva imagen"
          required
          type="url"
        />
        <span className="popup__error" id="avatar-link-error"></span>
      </label>
      <button className="popup__button popup__button_save" type="submit">
        {isLoading ? "Guardando..." : "Guardar"}
      </button>
    </form>
  );
}
