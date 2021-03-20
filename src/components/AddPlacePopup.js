import React from 'react';
import PopupWithForm from './PopupWithForm';


function AddPlacePopup(props) {
  const [name, setName]=React.useState('');
  const [link, setLink]=React.useState('');

  function handleName(e){
    setName(e.target.value);
  }

  function handleLink(e){
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      name,
      link: link,
    });
  }

React.useEffect(()=>{
  setName('');
  setLink('');
}, [props.isOpen])


  return (
    <PopupWithForm 
      name="gallery" 
      title="Новая карточка" 
      button={props.buttonTitle}
      isOpen={props.isOpen}
      onClose={props.onClose}
      escClose={props.escClose}
      overlayClose={props.overlayClose}
      onSubmit={handleSubmit}>
        <input value={name || ''} onChange={handleName} className="popup__name popup__name_gallery popup__input" id="name-card" type="text" minLength="2" maxLength="30" placeholder="Название карточки" name="input_name_gallery" required/>
        <span className="popup__error" id="name-card-error"></span>
        <input value={link || ''} onChange={handleLink} className="popup__job popup__link popup__input" id="link-card" type="url" placeholder="Ссылка для картинки" name="input_link_gallery" required/>
        <span className="popup__error" id="link-card-error"></span>
    </PopupWithForm>
    );
  }
  
  export default AddPlacePopup;