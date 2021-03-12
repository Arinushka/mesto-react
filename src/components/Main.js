import React from 'react';
import { api } from '../utils/api';
import Card from './Card';

function Main(props) {

const [userName, setUsername] = React.useState('');
const [userDescription, setUserDescription] = React.useState('');
const [userAvatar, setUserAvatar] = React.useState('');
const [cards, setCards] = React.useState([]);


React.useEffect(()=>{
  api.getUserInfo()
    .then((data)=>{
      setUsername(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    })
    .catch((err)=>{
      console.log(err);
    })
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
          <img className="profile__avatar" src={userAvatar} alt="Avatar"/>
          <button className="profile__avatar-button" onClick={props.onEditAvatar}></button>
        </div>
        <h1 className="profile__name">{userName}</h1>
        <p className="profile__job">{userDescription}</p>
        <button className="profile__button-edit" type="button" onClick={props.onEditProfile}></button>
      </div>
      <button className="profile__button-add" type="button" onClick={props.isAddPlacePopupOpen}></button>
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