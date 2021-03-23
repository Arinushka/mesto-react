import React from 'react';
import PopupWithForm from './PopupWithForm';
import InputForm from './InputForm';

function EditAvatarPopup(props) {
  const [avatar, setAvatar] = React.useState('');

  function handleAvatar(e) {
    setAvatar(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatar
    });
  }

  return (
    <PopupWithForm
      name="save_avatar"
      title="Обновить аватар"
      button={props.buttonTitle}
      isOpen={props.isOpen}
      onClose={props.onClose}
      escClose={props.escClose}
      overlayClose={props.overlayClose}
<<<<<<< HEAD
      onSubmit={handleSubmit}
      isButtonActive={props.isButtonActive}
      onButtonActive={props.onButtonActive}>
      <InputForm
        value={avatar}
        onChange={handleAvatar}
        className="popup__job popup__link popup__input"
        id="link-avatar"
        type="url"
        placeholder="Ссылка для картинки"
        name="input_link_profile"
        isOpen={props.isOpen}>
      </InputForm>
=======
      onSubmit={handleSubmit}>
      <input ref={avatarRef} className="popup__job popup__link popup__input" id="link-avatar" type="url" placeholder="Ссылка для картинки" name="input_link_profile" required />
      <span className="popup__error" id="link-avatar-error"></span>
>>>>>>> 4cc44074ff0f0bc48b5d020db714eefcf350e2a2
    </PopupWithForm>
  );
}


export default EditAvatarPopup;