import styles from "../styles/Favorite.module.css";
import useFavoriteMovies from "hooks/useFavoriteMovies";

const Favorite = () => {
  const { favorites } = useFavoriteMovies();
  return (
    <ul className={styles.movieList}>
      {favorites.map((item) => (
        <li className={styles.movieItem} key={item.id}>
          <img
            src={item.medium_cover_image}
            alt="이미지"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/250x345";
            }}
          />
          <h3>{item.title}</h3>
        </li>
      ))}
    </ul>
  );
};

export default Favorite;
