import React, { createContext } from "react";

export const FavouriteContext = createContext({
  ids: [],
  addFavourite: () => {},
  removeFavourite: () => {},
});

export const FavouriteContextProvider = ({ children }) => {
  const [favourteMealIds, setFavouriteMealIds] = React.useState([]);

  function addFavourite(id) {
    setFavouriteMealIds((oldState) => [...oldState, id]);
  }
  function removeFavourite(id) {
    setFavouriteMealIds((oldState) =>
      oldState.filter((mealId) => mealId !== id)
    );
  }

  return (
    <FavouriteContext.Provider
      value={{ ids: favourteMealIds, addFavourite, removeFavourite }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};
