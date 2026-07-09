import { useState, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import avatar from "../../images/yo.jpg";
import editIcon from "../../images/edit.svg";

import Card from "../Card/Card";
import Popup from "../Popup/Popup";
import NewCard from "../NewCard/NewCard";
import EditProfile from "../EditProfile/EditProfile";
import EditAvatar from "../EditAvatar/EditAvatar";
import ImagePopup from "../ImagePopup/ImagePopup";
import ConfirmDelete from "../ConfirmDelete/ConfirmDelete";

export default function Main({
  popup,
  onOpenPopup,
  onClosePopup,
  cards,
  onCardLike,
  onCardDelete,
  onAddPlace,
}) {
  const { currentUser } = useContext(CurrentUserContext);
  const [selectedCard, setSelectedCard] = useState(null);

  const newCardPopup = {
    title: "Nuevo lugar",
    children: <NewCard onAddPlace={onAddPlace} />,
  };
  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };
  const editAvatarPopup = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar />,
  };

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleCloseAll() {
    onClosePopup();
    setSelectedCard(null);
  }

  function handleCardDeleteClick(card) {
    onOpenPopup({
      title: "¿Estás seguro/a?",
      children: <ConfirmDelete card={card} onDeleteConfirm={onCardDelete} />,
    });
  }

  return (
    <main className="main">
      <div className="main__profile">
        <div className="main__content-image">
          <img
            src={currentUser?.avatar || avatar}
            alt="Profile image"
            className="main__profile-image"
          />
          <button
            type="button"
            className="main__profile-image-overlay"
            onClick={() => onOpenPopup(editAvatarPopup)}
          ></button>
        </div>

        <div className="main__content-paragraph">
          <p className="main__paragraph main__paragraph_name">
            {currentUser?.name || "Cargando..."}
          </p>
          <p className="main__paragraph main__paragraph_about">
            {currentUser?.about || "Cargando..."}
          </p>
          <button
            type="button"
            className="main__button main__button_edit"
            onClick={() => onOpenPopup(editProfilePopup)}
          >
            <img src={editIcon} alt="Edit Button" />
          </button>
        </div>

        <button
          type="button"
          className="main__button main__button_add"
          onClick={() => onOpenPopup(newCardPopup)}
        >
          +
        </button>
      </div>

      <div className="main__gallery">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={handleCardClick}
            onCardLike={onCardLike}
            onCardDelete={handleCardDeleteClick}
          />
        ))}
      </div>

      {(popup || selectedCard) && (
        <Popup
          isOpen={!!popup || !!selectedCard}
          onClose={handleCloseAll}
          title={popup?.title || ""}
          name={
            popup ? popup.title.toLowerCase().replace(/\s+/g, "-") : "image"
          }
          containerClass={selectedCard ? "popup__container_image" : ""}
        >
          {popup && popup.children}
          {selectedCard && <ImagePopup card={selectedCard} />}
        </Popup>
      )}
    </main>
  );
}
