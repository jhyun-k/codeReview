import useFetchMovies from 'hooks/useFetchMovies';
import useSearchMovies from 'hooks/useSearchMovies';
import Loading from './Loading';
import React, { useEffect } from 'react';
import styles from 'styles/Home.module.css';
import { Link } from 'react-router-dom';
import SearchBar from './Search';

const Home = () => {
  const { isLoading, error, movies } = useFetchMovies();
  const { handleSearch, handleInput, movieList, searchLoading } =
    useSearchMovies(movies);

  if (error) {
    alert('에러임');
    return null;
  }

  return (
    <div>
      <SearchBar handleSearch={handleSearch} handleInput={handleInput} />
      {isLoading ? (
        <Loading />
      ) : searchLoading ? (
        <Loading />
      ) : (
        <ul className={styles.movieList}>
          {movieList && movieList.length > 0 // movieList에 결과가 있을 때
            ? movieList.map(
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
                          e.target.src = 'https://via.placeholder.com/250x345';
                        }}
                      />
                      <div className={styles.title}>{title}</div>
                      <div>⭐{rating}</div>
                      <div>{genres[0]}</div>
                    </li>
                  </Link>
                )
              )
            : // 검색 결과가 없을 때 기존의 영화 리스트를 표시
              movies.map(
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
                          e.target.src = 'https://via.placeholder.com/250x345';
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
