export default function EditAvatar() {
  return (
    <form className="popup__form" name="avatar-form" noValidate>
      <label className="popup__field">
        <input
          className="popup__input"
          placeholder="Enlace del avatar"
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
