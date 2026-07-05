import Popup from "../Popup/Popup";
export default function ImagePopup({ card }) {
  return (
    <div className="popup__container popup__container_image">
      <img className="popup__image" src={card?.link} alt={card?.name} />
      <p className="popup__paragraph">{card?.name}</p>
    </div>
  );
}
