import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function ConfirmDelete({ card, onDeleteConfirm }) {
  const { isLoading } = useContext(CurrentUserContext);

  function handleSubmit(e) {
    e.preventDefault();
    onDeleteConfirm(card);
  }

  return (
    <form onSubmit={handleSubmit} className="popup__form" noValidate>
      <button
        className="popup__button popup__button_save"
        type="submit"
        style={{ marginTop: "15px" }}
      >
        {isLoading ? "Borrando..." : "Sí"}
      </button>
    </form>
  );
}
