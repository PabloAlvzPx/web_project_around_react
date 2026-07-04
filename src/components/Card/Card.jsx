export default function Card({ card, onCardClick }) {
  const { name, link } = card;

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
      ></button>
      <div className="main__gallery-content">
        <p className="main__gallery-paragraph">{name}</p>
        <div className="main__like-container">
          <button
            className="main__button main__button_like"
            type="button"
            aria-label="Like card"
          ></button>
          <span className="main__like-count">0</span>
        </div>
      </div>
    </div>
  );
}
