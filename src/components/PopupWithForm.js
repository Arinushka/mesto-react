import React from "react";

function PopupWithForm(props) {
 
  React.useEffect(()=>{ 
    props.escClose(props.isOpen);
  }, [props.isOpen, props.escClose])

  return (
    <div  className={`popup popup_${props.name} ${props.isOpen && 'popup_opened'}`} onClick={props.overlayClose}>
      <form  className={`popup__container popup__container_form popup__${props.name}-form`} name={`popup_${props.name}`} onSubmit={props.onSubmit} noValidate>
        <button className="popup__close" type="button" onClick={props.onClose} ></button>
        <h2 className={`popup__title popup__title-${props.name}`}>{props.title}</h2>
        {props.children}
        <button className="popup__submit"  type="submit">{props.button}</button>
      </form>
    </div>
  );
}
  
export default PopupWithForm;