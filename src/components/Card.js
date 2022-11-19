function Card({ card, onCardClick }) {
  const handleClick = () => {
    onCardClick(card);
  };
  return (
    <article className="element">
      <button
        className="element__delete"
        aria-label="Delete"
        type="button"
      ></button>
      <img
        src={card.link}
        alt={card.name}
        onClick={() => handleClick()}
        className="element__image"
      />
      <div className="element__container">
        <p className="element__title">{card.name}</p>
        <div className="element__container-like">
          <button
            className="element__heart"
            aria-label="Like"
            type="button"
          ></button>
          <div className="element__like">{card.likes.length}</div>
        </div>
      </div>
    </article>
  );
}
export default Card;
