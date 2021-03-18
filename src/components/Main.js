import React from 'react';
import { api } from '../utils/api';
import Card from './Card';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Main(props) {

const [cards, setCards] = React.useState([]);
const currentUser = React.useContext(CurrentUserContext);



React.useEffect(()=>{
  api.getInitialCards()
    .then((data)=>{
      setCards(data);
     })
    .catch((err)=>{
      console.log(err);
    })
}, []);

return (
  <main className="content">
    <section className="profile">
      <div className="profile__info">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src={currentUser.avatar} alt="Avatar"/>
          <button className="profile__avatar-button" onClick={props.onEditAvatar}></button>
        </div>
        <h1 className="profile__name">{currentUser.name}</h1>
        <p className="profile__job">{currentUser.about}</p>
        <button className="profile__button-edit" type="button" onClick={props.onEditProfile}></button>
      </div>
      <button className="profile__button-add" type="button" onClick={props.onAddPlace}></button>
      </section>
        <section className="gallery">
          {cards.map((item)=>(
            <article className="gallery__card" key={item._id}>
              <Card
                card = {item}
                onClick={props.onCardClick}
                onDeleteClick={props.onDeleteClick}/>
            </article>
         ))}   
        </section>
  </main>
  );
}
  
  export default Main;