import React, { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import api from "../utils/api";
import Card from "./Card";

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  onDeleteClick,
}) {
  const currentUser = useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  useEffect(() => {
    api
      .getCards()
      .then((cardsData) => {
        setCards(cardsData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__user" onClick={onEditAvatar}>
            <img
              src={currentUser.avatar}
              className="profile__avatar"
              alt="аватар"
            />
          </div>
          <div className="profile__container">
            <div className="profile__container-title">
              <h1 className="profile__title">{currentUser.name}</h1>
              <button
                className="profile__info-button"
                onClick={onEditProfile}
                aria-label="Open"
                type="button"
              ></button>
            </div>
            <p className="profile__subtitle">{currentUser.about}</p>
          </div>
        </div>
        <button
          className="profile__button"
          onClick={onAddPlace}
          aria-label="PlusCard"
          type="button"
        ></button>
      </section>

      <section className="elements">
        {cards.map((card) => (
          <Card
            card={card}
            key={card._id}
            onCardClick={onCardClick}
            onCardLike={handleCardLike}
            onDeleteClick={onDeleteClick}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
