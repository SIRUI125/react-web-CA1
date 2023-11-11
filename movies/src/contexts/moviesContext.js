import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  

  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
    }
    else{
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites)
  };

  const [myReviews, setMyReviews] = useState( {} ) 
  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
  console.log(myReviews);

  // We will use this function in a later section
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const [toPlaylist, setToPlaylist] = useState( [] )

  const addToPlaylist = (movie) => {
    let newPlaylist = [];
    if (!toPlaylist.includes(movie.id)){
        newPlaylist = [...toPlaylist, movie.id];
    }
    else{
        newPlaylist = [...toPlaylist];
    }
    setToPlaylist(newPlaylist);
    console.log(newPlaylist);
};

 return (
    <MoviesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        addReview,
        addToPlaylist,
        toPlaylist
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;