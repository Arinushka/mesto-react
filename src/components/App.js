import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { api } from '../utils/api';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import React from 'react';

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isDeletePopupOpen, setIsDeletePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({link:''});
    const [isPopupWithImageOpen, setIsPopupWithImageOpen] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState({});

    function handleEditProfileClick (){
       setIsEditProfilePopupOpen(true);
    }
    function handleAddPlaceClick (){
       setIsAddPlacePopupOpen(true);
    }
    function  handleEditAvatarClick (){
        setIsEditAvatarPopupOpen(true);
    }
     
    function closeAllPopups (){
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setIsDeletePopupOpen(false);
        setIsPopupWithImageOpen(false);
    }
    function handleEscClose(evt){
      if (evt.key === 'Escape') {
        closeAllPopups();
    }
    }
    function handleOverlayClose(evt) {
      if (evt.target.classList.contains('popup_opened')) {
        closeAllPopups();
      }
    }

    function handleDeleteClick(){
      setIsDeletePopupOpen(true);
    }
    function handleCardClick (card){
      setSelectedCard(card) ;
      setIsPopupWithImageOpen(true)
    }
React.useEffect(()=>{
  api.getUserInfo()
    .then((data)=>{
      setCurrentUser(data)
    })
    .catch((err)=>{
      console.log(err);
    })
}, [])
   

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <Header/>
    <Main 
      onEditAvatar={handleEditAvatarClick} 
      onEditProfile={handleEditProfileClick} 
      onAddPlace={handleAddPlaceClick}
      onCardClick = {handleCardClick}
      onDeleteClick = {handleDeleteClick}
    />
    <Footer/>
    <PopupWithForm 
      name="profile" 
      title="Редактировать профиль" 
      button="Сохранить" 
      isOpen={isEditProfilePopupOpen} 
      onClose={closeAllPopups}
      escClose={handleEscClose}
      overlayClose={handleOverlayClose}>
        <input className="popup__name popup__input popup_profile_name" id="name-card-profile" type="text" minLength="2" maxLength="40" placeholder="Имя" name="input_name_profile" required/>
        <span className="popup__error" id="name-card-profile-error"></span>
        <input className="popup__job popup__input popup_profile_job" id="job-card" type="text" minLength="2" maxLength="200" placeholder="Профессия" name="input_job_profile" required/>
        <span className="popup__error" id="job-card-error"></span>
    </PopupWithForm>

    <PopupWithForm 
      name="gallery" 
      title="Новая карточка" 
      button="Создать"
      isOpen={isAddPlacePopupOpen}
      onClose={closeAllPopups}
      escClose={handleEscClose}
      overlayClose={handleOverlayClose}>
        <input className="popup__name popup__name_gallery popup__input" id="name-card" type="text" minLength="2" maxLength="30" placeholder="Название карточки" name="input_name_gallery" required/>
        <span className="popup__error" id="name-card-error"></span>
        <input className="popup__job popup__link popup__input" id="link-card" type="url" placeholder="Ссылка для картинки" name="input_link_gallery" required/>
        <span className="popup__error" id="link-card-error"></span>
    </PopupWithForm>

    <PopupWithForm 
      name="save_avatar" 
      title="Обновить аватар" 
      button="Сохранить" 
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllPopups}
      escClose={handleEscClose}
      overlayClose={handleOverlayClose}>
        <input className="popup__job popup__link popup__input" id="link-avatar" type="url" placeholder="Ссылка для картинки" name="input_link_profile" required/>
        <span className="popup__error" id="link-avatar-error"></span>
    </PopupWithForm>
    <PopupWithForm 
      name="delete" 
      title="Вы уверены?" 
      button="Да"
      isOpen={isDeletePopupOpen}
      onClose={closeAllPopups}
      escClose={handleEscClose}
      overlayClose={handleOverlayClose}/>
    <ImagePopup
      isOpen={isPopupWithImageOpen}
      card={selectedCard}
      onClose={closeAllPopups}
      escClose={handleEscClose}
      overlayClose={handleOverlayClose}/>
   </CurrentUserContext.Provider>
  );
  
}

export default App;