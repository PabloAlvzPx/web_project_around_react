export default function NewCard() {
  return (
    <form className="popup__form" name="card-form" noValidate>
      <label className="popup__field">
        <input
          className="popup__input"
          placeholder="Título"
          required
          type="text"
        />
      </label>
      <label className="popup__field">
        <input
          className="popup__input"
          placeholder="Enlace de la imagen"
          required
          type="url"
        />
      </label>
      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
