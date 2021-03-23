import React from 'react';

function DeletePopup(props) {


  function handleSubmit(e) {
    e.preventDefault();
    props.onCardDelete(props.card);
    props.onClose();
  }
<<<<<<< HEAD

  React.useEffect(() => {
    props.escClose(props.isOpen);
  }, [props.isOpen, props.escClose])

  return (
    <div className={`popup popup_delete_card ${props.isOpen && 'popup_opened'}`} onClick={props.overlayClose}> 
<form className="popup__container popup__container_form popup__delete-form" name="popup_delete" noValidate> 
    <button className="popup__close popup__close_delete" type="button"  onClick={props.onClose}></button> 
    <h2 className="popup__title popup__title-delete">Вы уверены?</h2> 
    <button className="popup__submit popup__submit_delete" type="button" onClick={handleSubmit}>{props.buttonTitle}</button> 
</form> 
</div> 
  );
}

export default DeletePopup;


=======
  return (
    <PopupWithForm
      name="delete"
      title="Вы уверены?"
      button="Да"
      isOpen={props.isOpen}
      onClose={props.onClose}
      escClose={props.escClose}
      overlayClose={props.overlayClose}
      onSubmit={handleSubmit} />
  );
}

export default DeletePopup;
>>>>>>> 4cc44074ff0f0bc48b5d020db714eefcf350e2a2
