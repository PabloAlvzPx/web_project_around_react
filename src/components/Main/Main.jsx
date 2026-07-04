import { useState } from "react";
import avatar from "../../images/yo.jpg";
import editIcon from "../../images/edit.svg";

import Card from "../Card/Card";
import Popup from "../Popup/Popup";
import NewCard from "../NewCard/NewCard";
import EditProfile from "../EditProfile/EditProfile";
import EditAvatar from "../EditAvatar/EditAvatar";
import ImagePopup from "../ImagePopup/ImagePopup";

const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
];

export default function Main() {
  const [popup, setPopup] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };
  const editAvatarPopup = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar />,
  };

  function handleOpenPopup(popupConfig) {
    setPopup(popupConfig);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleClosePopup() {
    setPopup(null);
    setSelectedCard(null);
  }

  return (
    <main className="main">
      <div className="main__profile">
        <div className="main__content-image">
          <img
            src={avatar}
            alt="Profile image"
            className="main__profile-image"
          />
          <button
            type="button"
            className="main__profile-image-overlay"
            onClick={() => handleOpenPopup(editAvatarPopup)}
          ></button>
        </div>

        <div className="main__content-paragraph">
          <p className="main__paragraph main__paragraph_name">Pablo Alvarez</p>
          <p className="main__paragraph main__paragraph_about">Estudiante</p>
          <button
            type="button"
            className="main__button main__button_edit"
            onClick={() => handleOpenPopup(editProfilePopup)}
          >
            <img src={editIcon} alt="Edit Button" />
          </button>
        </div>

        <button
          type="button"
          className="main__button main__button_add"
          onClick={() => handleOpenPopup(newCardPopup)}
        >
          +
        </button>
      </div>

      <div className="main__gallery">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={handleCardClick} />
        ))}
      </div>

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}

      <ImagePopup card={selectedCard} onClose={handleClosePopup} />
    </main>
  );
}
