import React, { createContext, useState } from "react";

export const Context = createContext({
  place: "",
  likeItems: []
});

export const API = (props) => {
  const [place, setPlace] = useState(null);
  const [likeItems, setLikeItems] = useState([]);
  const addlikeCart = (item) => {
    setLikeItems([...likeItems, item]);
  };
  console.log(likeItems);

  return (
    <Context.Provider
      value={{
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
