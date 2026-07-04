export default function EditProfile() {
  return (
    <form className="popup__form" name="profile-form" noValidate>
      <label className="popup__field">
        <input
          className="popup__input"
          placeholder="Nombre"
          required
          type="text"
        />
      </label>
      <label className="popup__field">
        <input
          className="popup__input"
          placeholder="Acerca de mí"
          required
          type="text"
        />
      </label>
      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
