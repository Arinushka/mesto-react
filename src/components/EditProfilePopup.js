import React from 'react';
import PopupWithForm from './PopupWithForm';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
  const [name, setName]=React.useState('');
  const [description, setDescription]=React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  function handleName(e) {
    setName(e.target.value);
  }

  function handleDescription(e){
    setDescription(e.target.value);
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  } 

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);
  return (
    <PopupWithForm 
      name="profile" 
      title="Редактировать профиль" 
      button={props.buttonTitle} 
      isOpen={props.isOpen} 
      onClose={props.onClose}
      escClose={props.escClose}
      overlayClose={props.overlayClose}
      onSubmit={handleSubmit}>
        <input value={name || ''} onChange={handleName} className="popup__name popup__input popup_profile_name" id="name-card-profile" type="text" minLength="2" maxLength="40" placeholder="Имя" name="input_name_profile" required/>
        <span className="popup__error" id="name-card-profile-error"></span>
        <input value={description || ''} onChange={handleDescription} className="popup__job popup__input popup_profile_job" id="job-card" type="text" minLength="2" maxLength="200" placeholder="Профессия" name="input_job_profile" required/>
        <span className="popup__error" id="job-card-error"></span>
    </PopupWithForm>
    );
  }
  
  export default EditProfilePopup;