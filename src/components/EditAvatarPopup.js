import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value
    });
  } 

  return( 
    <PopupWithForm 
      name="save_avatar" 
      title="Обновить аватар" 
      button="Сохранить" 
      isOpen={props.isOpen}
      onClose={props.onClose}
      escClose={props.escClose}
      overlayClose={props.overlayClose}
      onSubmit={handleSubmit}>
        <input ref={avatarRef} className="popup__job popup__link popup__input" id="link-avatar" type="url" placeholder="Ссылка для картинки" name="input_link_profile" required/>
        <span className="popup__error" id="link-avatar-error"></span>
    </PopupWithForm>
  );
}
 
  
  export default EditAvatarPopup;