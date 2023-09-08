import styles from '../styles/Favorite.module.css';
import useFavoriteMovies from 'hooks/useFavoriteMovies';
import { Link } from 'react-router-dom';

const Favorite = () => {
  const { favorites } = useFavoriteMovies();
  return (
    <ul className={styles.movieList}>
      {favorites.length > 0 ? (
        favorites.map(
          ({
            id,
            large_cover_image,
            medium_cover_image,
            title,
            rating,
            genres,
            summary,
          }) => (
            <Link
              key={id}
              to={`/${id}`}
              state={{
                id,
                title,
                large_cover_image,
                medium_cover_image,
                rating,
                genres,
                summary,
              }}
            >
              <li className={styles.movieItem} key={id}>
                <img
                  src={medium_cover_image}
                  alt="이미지"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/250x345';
                  }}
                />
                <h3>{title}</h3>
              </li>
            </Link>
          )
        )
      ) : (
        <h1 style={{ color: 'white', textAlign: 'center', marginTop: '20px' }}>
          favorite 영화가 없습니다.
        </h1>
      )}
    </ul>
  );
};

export default Favorite;
