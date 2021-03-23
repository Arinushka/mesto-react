import React from "react";

function PopupWithForm(props) {

<<<<<<< HEAD
  const children = props.children;
  const [buttonState, setButtonState] = React.useState(true);
  const formRef = React.useRef();

=======
>>>>>>> 4cc44074ff0f0bc48b5d020db714eefcf350e2a2
  React.useEffect(() => {
    props.escClose(props.isOpen);
  }, [props.isOpen, props.escClose])

  React.useEffect(() => {
    if (formRef.current && formRef.current.checkValidity() && Array.from(children).every((input) => input.props.value.trim() !== '')) {
      setButtonState(false);
      props.onButtonActive(false);
    } else {
      setButtonState(true);
      props.onButtonActive(true);
    }
  })

  return (
    <div className={`popup popup_${props.name} ${props.isOpen && 'popup_opened'}`} onClick={props.overlayClose}>
<<<<<<< HEAD
      <form ref={formRef} className={`popup__container popup__container_form popup__${props.name}-form`} name={`popup_${props.name}`} onSubmit={props.onSubmit} noValidate>
        <button className="popup__close" type="button" onClick={props.onClose} ></button>
        <h2 className={`popup__title popup__title-${props.name}`}>{props.title}</h2>
        {children}
        <button className={`popup__submit ${props.isButtonActive && 'popup__button_invalid'}`} type="submit" disabled={buttonState}>{props.button}</button>
=======
      <form className={`popup__container popup__container_form popup__${props.name}-form`} name={`popup_${props.name}`} onSubmit={props.onSubmit} noValidate>
        <button className="popup__close" type="button" onClick={props.onClose} ></button>
        <h2 className={`popup__title popup__title-${props.name}`}>{props.title}</h2>
        {props.children}
        <button className="popup__submit" type="submit">{props.button}</button>
>>>>>>> 4cc44074ff0f0bc48b5d020db714eefcf350e2a2
      </form>
    </div>
  );
}

export default PopupWithForm;