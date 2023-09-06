import { useState } from "react";
import { useParams } from "react-router-dom";

const useFavoriteMovies = () => {
  const { id } = useParams();
  let localItem = JSON.parse(window.localStorage.getItem("fav")) ?? [];
  const [favorites, setFavorites] = useState(localItem);
  const [isLike, setIsLike] = useState(
    localItem.some((favorite) => favorite.id === +id)
  );

  const addFavorite = (movie) => {
    setIsLike(true);
    const newFavorites = [...favorites, movie];
    setFavorites(newFavorites);
    window.localStorage.setItem("fav", JSON.stringify(newFavorites));
  };

  const removeFavorite = (id) => {
    const newFavorites = favorites.filter((favorite) => favorite.id !== id);
    setFavorites(newFavorites);
    window.localStorage.setItem("fav", JSON.stringify(newFavorites));
    setIsLike(false);
  };

  return { favorites, addFavorite, removeFavorite, isLike };
};

export default useFavoriteMovies;
