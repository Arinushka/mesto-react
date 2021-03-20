import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import EditProfilePopup from './EditProfilePopup';
import ImagePopup from './ImagePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import DeletePopup from './DeletePopup';
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
    const [cards, setCards] = React.useState([]);
    const [buttonSave, setButtonSave] = React.useState('Сохранить');
    const [buttonAdd, setButtonAdd] = React.useState('Создать');

    function handleButtonSave(state){
      setButtonSave(state);   
    }

    function handleButtonAdd(state){
      setButtonAdd(state);
    }
  
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
        document.removeEventListener('keydown', escClose);
    }
    function escClose(evt){
      if (evt.key === 'Escape') {       
        closeAllPopups();
        console.log('ggggggggggg')
      }
    }

    function handleEscClose(isOpen){
      if(isOpen){
        document.addEventListener('keydown', escClose)
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

    function handleDeleteCard (card){
      setSelectedCard(card)
    }

React.useEffect(()=>{
  api.getUserInfo()
    .then((data)=>{
      setCurrentUser(data)
    })
    .catch((err)=>{
      console.log(err);
    })
    api.getInitialCards()
    .then((data)=>{
      setCards(data);
      console.log(data);
     })
    .catch((err)=>{
      console.log(err);
    })
}, [])
   
function handleCardLike(card) {
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
  })
  .catch((err)=>{
    console.log(err);
  })
} 

function handleCardDelete(card){
  api.deleteCard(card._id)
   .then(()=>{
      const newCards = cards.filter(item => item._id !== card._id);
      setCards(newCards);
   })
   .catch((err)=>{
      console.log(err);
  })
}

function handleUpdateUser ({name, about}){
  handleButtonSave('Сохранение...');
  api.setUserInfo(name, about)
    .then((data)=>{
      setCurrentUser(data);
      handleButtonSave('Сохранить');
      closeAllPopups();
      
  })
    .catch((err)=>{
      console.log(err);
  })
 }

 function handleUpdateAvatar({avatar}){
   handleButtonSave('Сохранение...');
   api.updateAvatarImage(avatar)
    .then((data)=>{
      setCurrentUser(data);
      handleButtonSave('Сохранить');
      closeAllPopups();
   })
   .catch((err)=>{
      console.log(err);
  })
 }

 function handleAddPlace ({name, link}){
  handleButtonAdd('Создание...')
  api.addCard(name, link)
  .then((newCard)=>{
    setCards([newCard, ...cards]);
    handleButtonAdd('Создать')
    closeAllPopups();
  })
  .catch((err)=>{
    console.log(err);
  })
 }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header/>
      <Main 
        onEditAvatar={handleEditAvatarClick} 
        onEditProfile={handleEditProfileClick} 
        onAddPlace={handleAddPlaceClick}
        onCardClick = {handleCardClick}
        onDeleteClick = {handleDeleteClick}
        cards = {cards}
        onCardLike = {handleCardLike}
        onCardDelete = {handleDeleteCard}
      />
      <Footer/>
      <EditProfilePopup 
        isOpen={isEditProfilePopupOpen} 
        onClose={closeAllPopups} 
        escClose={handleEscClose}
        overlayClose={handleOverlayClose}
        onUpdateUser={handleUpdateUser}
        buttonTitle={buttonSave}/>
      <AddPlacePopup 
        isOpen={isAddPlacePopupOpen} 
        onClose={closeAllPopups} 
        escClose={handleEscClose}
        overlayClose={handleOverlayClose}
        onAddPlace = {handleAddPlace}
        buttonTitle={buttonAdd}/>
      <EditAvatarPopup 
        isOpen={isEditAvatarPopupOpen} 
        onClose={closeAllPopups}
        escClose={handleEscClose}
        overlayClose={handleOverlayClose}
        onUpdateAvatar={handleUpdateAvatar}
        buttonTitle={buttonSave}/> 
      <DeletePopup 
        card = {selectedCard}
        isOpen={isDeletePopupOpen}
        onClose={closeAllPopups}
        escClose={handleEscClose}
        overlayClose={handleOverlayClose}
        onCardDelete={handleCardDelete}/>
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