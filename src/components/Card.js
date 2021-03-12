import React from 'react';
function Card (props){
  const card = props.card;
  function handleClick() {
   props.onClick(card)
  }  
  return(
    <>
      <button className="gallery__button-delete" type="button" onClick={props.onDeleteClick}></button>
      <img className="gallery__image" src={card.link} alt={card.name} onClick={handleClick}/>
      <div className="gallery__wrapper">
        <h2 className="gallery__name">{card.name}</h2>
          <div className="gallery__button-wrapper">
            <button className="gallery__button" type="button"></button>
            <span className="gallery__button-counter">{card.likes.length}</span>
         </div>
      </div>
    </>
  );
}

export default Card;