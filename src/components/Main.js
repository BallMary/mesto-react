import React, {useState, useEffect} from 'react';
import api from '../utils/api';
import Card from './Card';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick} ) {

    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);

    useEffect(() => {
        Promise.all([api.getUserInfo(), api.getCards()])
        .then(([userData, cardsData]) => {
            setUserName(userData.name);
            setUserDescription(userData.about);
            setUserAvatar(userData.avatar);
            setCards(cardsData);
        })
        .catch(err => {
            console.log(err)
        });
    }, [])
   
  return (
    <main className="content">
    <section className="profile">
        <div className="profile__info">
            <div className="profile__user" onClick={onEditAvatar}>
                <img src={userAvatar}  className="profile__avatar" alt="аватар"/>
            </div>
            <div className="profile__container">
                <div className="profile__container-title">
                    <h1 className="profile__title">{userName}</h1>
                    <button className="profile__info-button" onClick={onEditProfile} aria-label="Open" type="button"></button>
                </div>
                <p className="profile__subtitle">{userDescription}</p>
            </div>
        </div>
        <button className="profile__button" onClick={onAddPlace} aria-label="PlusCard" type="button"></button>
    </section>

    <section className="elements">
    {
					cards.map(card => (
						<Card card={card} key={card._id} onCardClick={onCardClick} />
					))
				}
    </section>

    </main>
  );

}

 

export default Main;