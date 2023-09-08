import { useLocation } from 'react-router-dom';
import styles from 'styles/Detail.module.css';
import useFavoriteMovies from 'hooks/useFavoriteMovies';

const Detail = () => {
  const { state } = useLocation();
  const { title, large_cover_image, rating, genres, summary, id } = state;
  const { addFavorite, removeFavorite, isLike } = useFavoriteMovies();
  return (
    <div className={styles.movieDetail}>
      <div>
        <img
          src={large_cover_image}
          alt="이미지"
          width="263"
          height="390"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/290x345';
          }}
        />
        <button
          className={styles.favBtn}
          onClick={isLike ? () => removeFavorite(id) : () => addFavorite(state)}
        >
          {isLike ? '❤️' : '🤍'} Favorite
        </button>
      </div>

      <div className={styles.detailItem}>
        <div className={styles.title}>{title}</div>
        <div>⭐ {rating}</div>
        <div>{genres[0]}</div>
        <div>{summary}</div>
      </div>
    </div>
  );
};

export default Detail;
