import { Link } from "react-router-dom";
import styles from "styles/Home.module.css";
import useFetchMovies from "hooks/useFetchMovies";
import useSearchMovies from "hooks/useSearchMovies";
import Loading from "./Loading";

const Home = () => {
  const { handleSearch, handleInput } = useSearchMovies();
  const { movies, isLoading, error } = useFetchMovies();

  if (error) {
    alert("에러임");
    return;
  }
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" onChange={handleInput} />
        <input type="submit" value="검색" />
      </form>
      {isLoading ? (
        <Loading />
      ) : (
        <ul className={styles.movieList}>
          {movies.map(
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
                <li className={styles.movieItem}>
                  <img
                    src={medium_cover_image}
                    alt="이미지"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/250x345";
                    }}
                  />
                  <div className={styles.title}>{title}</div>
                  <div>⭐{rating}</div>
                  <div>{genres[0]}</div>
                </li>
              </Link>
            )
          )}
        </ul>
      )}
    </div>
  );
};

export default Home;
