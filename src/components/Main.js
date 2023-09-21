import React, { useContext } from "react";

import PopupConfirmation from "./PopupConfirmation";
import Profile from "./Profile";

import ImagePopup from "./ImagePopup";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  onClose,
  onCardClick,
  selectedCard,
  children,
  cards,
  onCardLike,
  onCardDelete,
}) {
  const currentUser = useContext(CurrentUserContext);

  //visual//
  return (
    <main className="content">
      <Profile
        onEditAvatarClick={onEditAvatarClick}
        userAvatar={currentUser.avatar}
        onEditProfileClick={onEditProfileClick}
        userName={currentUser.name}
        userDescrprion={currentUser.about}
        onAddPlaceClick={onAddPlaceClick}
      />
      <section className="card-container">
        {cards.map((card) => {
          return (
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          );
        })}
      </section>

      <ImagePopup name="photo" onClose={onClose} selectedCard={selectedCard} />
      <PopupConfirmation />
      {children}
    </main>
  );
}

export default Main;
