import React from "react";
import { Route, useHistory, Switch } from "react-router-dom";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import ProtectedRoute from "./ProtectedRoute";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Login from "./Login";
import Register from "./Register";



function App(){
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);
    const [cards, setCards] = React.useState([]);    

    // В корневом компоненте App создана стейт-переменная currentUser. Она используется в качестве значения для провайдера контекста.
    const [currentUser, setCurrentUser] = React.useState({});

    const [isInfoToolTipOpen, setIsInfoToolTipOpen] = React.useState(false);
    const [tooltipStatus, setTooltipStatus] = React.useState("");

    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    //В компоненты добавлены новые стейт-переменные: email — в компонент App
    const [email, setEmail] = React.useState("");

    function handleEditProfileClick() {
        //setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        //setIsAddPlacePopupOpen(true);
    }

    function handleEditAvatarClick() {
        //setIsEditAvatarPopupOpen(true);
    }    

    function handleCardClick(card) {
        //setSelectedCard(card);
    }  

    function handleCardLike(card) {
    }

    function handleCardDelete(card) {
    }

    function onRegister() {
        //setSelectedCard(card);
    }        

    function onLogin() {
        //setSelectedCard(card);
    }     

    function onSignOut() {
        //setSelectedCard(card);
    }        

    return (
        // В компонент App внедрён контекст через CurrentUserContext.Provider
        <CurrentUserContext.Provider value={currentUser}>
          <div className="page__content">
            <Header email={email} onSignOut={onSignOut} />
            <Switch>
              <ProtectedRoute
                exact
                path="/"
                component={Main}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onCardClick={handleCardClick}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
                loggedIn={isLoggedIn}
              />
              <Route path="/signup">
                <Register onRegister={onRegister} />
              </Route>
              <Route path="/signin">
                <Login onLogin={onLogin} />
              </Route>
            </Switch>
            <Footer />
          
          </div>
        </CurrentUserContext.Provider>
      );


    // return (
    //     <Footer/>
    // );
}


export default App;  