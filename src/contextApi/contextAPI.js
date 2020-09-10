import React, { createContext, useState } from "react";

export const Context = createContext({
  place: "",
  likeItems: [],
  user: ""
});

export const API = (props) => {
  const [place, setPlace] = useState(null);
  const [user, setUser] = useState(null);
  const [likeItems, setLikeItems] = useState([]);
  const addlikeCart = (item) => {
    setLikeItems([...likeItems, item]);
  };

  const setUserPage = (user) => {
    setUser(user);
  };

  return (
    <Context.Provider
      value={{
        user: user,
        setUserPage,
        place: place,
        placeChos: (item) => {
          setPlace(item);
        },
        addlikeCart
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
