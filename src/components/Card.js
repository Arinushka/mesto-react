function Card (props){

  function handleClick() {
   props.onClick(props.name, props.link)
  }  
  return(
    <>
      <button className="gallery__button-delete" type="button" onClick={props.onDeleteClick}></button>
      <img className="gallery__image" src={props.link} alt="#" onClick={handleClick}/>
      <div className="gallery__wrapper">
        <h2 className="gallery__name">{props.name}</h2>
          <div className="gallery__button-wrapper">
            <button className="gallery__button" type="button"></button>
            <span className="gallery__button-counter">{props.likes.length}</span>
         </div>
      </div>
    </>
  );
}

export default Card;