import React from "react";

function ImagePopup(props) {

  React.useEffect(()=>{
    if(props.card.isOpen) document.addEventListener('keydown', props.escClose)
    return () => {
      document.removeEventListener('keydown', props.escClose);
    };
  }, [props.card.isOpen])

  return (
    <div className={`popup popup_fullsize_wrapper ${props.card.isOpen ? 'popup_opened' : ''}`}onClick={props.overlayClose}>
      <form className="popup__container popup__fullsize" name="popup_fullsize">
        <button className="popup__close popup__close-fullsize" type="button" onClick={props.onClose}></button>
        <img className="popup__image-fullsize" src={props.card.link} alt={props.card.name}/>
        <h2 className="popup__title popup__title-fullsize">{props.card.name}</h2>
      </form>
    </div>
    );
  }
 
  export default ImagePopup;