export default function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const { name, link, isLiked } = card;

  const cardLikeButtonClassName = `main__button main__button_like ${
    isLiked ? "main__button_like_active" : ""
  }`;

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <div className="main__gallery-card">
      <img
        className="main__gallery-image"
        src={link}
        alt={name}
        onClick={() => onCardClick(card)}
      />
      <button
        className="main__button main__button_trash"
        type="button"
        aria-label="Delete card"
        onClick={handleDeleteClick}
      ></button>
      <div className="main__gallery-content">
        <p className="main__gallery-paragraph">{name}</p>
        <div className="main__like-container">
          <button
            className={cardLikeButtonClassName}
            type="button"
            aria-label="Like card"
            onClick={handleLikeClick}
          ></button>
        </div>
      </div>
    </div>
  );
}
