import React, {useState, useEffect} from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

    const [isEditAvatarPopupOpen, setIsEditAvatarClick] = useState(false);
    const [isEditProfilePopupOpen, setIsEditProfileClick] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlaceClick] = useState(false);
    const [selectedCard, setSelectedCard] = useState({})

   const handleEditAvatarClick = () => {
        setIsEditAvatarClick(true);
    };
    
   const handleEditProfileClick = () => {
        setIsEditProfileClick(true);
    };
    
   const handleAddPlaceClick = () => {
        setIsAddPlaceClick(true);
    }

    const closeAllPopups = () => {
        setIsAddPlaceClick(false);
        setIsEditAvatarClick(false);
        setIsEditProfileClick(false);
        setSelectedCard({})
    }

    const handleCardClick = (card) => {
        setSelectedCard(card)
    }

    useEffect(() => {
        const closeEscape = (evt) => {(evt.key === 'Escape') && closeAllPopups({})}
        return(isAddPlacePopupOpen || isEditAvatarPopupOpen || isEditProfilePopupOpen || selectedCard) 
        ? document.addEventListener('keydown', closeEscape)
        : () => document.removeEventListener('keydown', closeEscape)
    })
    
  return (
    <>
    <div className="page">
        <Header />
        <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
        />

        <PopupWithForm isOpen={isEditProfilePopupOpen}  onClose={closeAllPopups}  title='Редактировать профиль' name='edit' textButton='Сохранить'>
            <input className="popup__input popup__input_type_name" id="popup-edit"  name="name" type="text" placeholder="Имя" minLength="2" maxLength="40" required />
            <div id="popup-edit-error" className="popup__input-error" >
                <span className="popup__error-visible"></span>
            </div>

            <input className="popup__input popup__input_type_about" id="about" name="about" type="text" placeholder="О себе" minLength="2" maxLength="200" required />
            <div id="about-error" className="popup__input-error">
                <span className="popup__error-visible"></span>
            </div>
        </PopupWithForm>

        <PopupWithForm isOpen={isEditAvatarPopupOpen}  onClose={closeAllPopups}  title='Обновить аватар' name='avatar' textButton='Сохранить'>
            <input className="popup__input popup__input_type_link" id="lavatar" name="avatar" type="url" minLength="2" required placeholder="Ссылка на аватар"/>
            <div id="lavatar-error" className="popup__input-error">
                <span className="popup__error-visible"></span>
            </div>
        </PopupWithForm>

        <PopupWithForm isOpen={isAddPlacePopupOpen}  onClose={closeAllPopups}  title='Новое место' name='card' textButton='Создать'>
            <input className="popup__input popup__input_type_title" id="title-card" name="name" type="text" minLength="2" maxLength="30" required placeholder="Название" />
            <div id="title-card-error" className="popup__input-error">
                <span className="popup__error-visible"></span>
            </div>

            <input className="popup__input popup__input_type_link" id="link" name="link" type="url" minLength="2" required placeholder="Ссылка на картинку" />
            <div id="link-error" className="popup__input-error">
                <span className="popup__error-visible"></span>
            </div>
        </PopupWithForm>

        <PopupWithForm  title='Вы уверены?' name='confirm' textButton='Да'></PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
       

        {/* <div className="popup popup_confirm">
            <div className="popup__overlay"></div>
            <div className="popup__content">
                <h2 className="popup__title  popup__title_confirm">Вы уверены?</h2>
                <button className="popup__close-button" aria-label="Close" type="button"></button>
                <form className="popup__container popup__container_confirm" id="delete" name="form-delete" noValidate>
                    <button className="popup__button popup__button_confirm" type="submit">Да</button>
                </form>
            </div>
        </div> */}
       <Footer />
    </div>
    </>
  );
}

export default App;
