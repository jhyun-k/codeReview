import Loading from './Loading';
import React, { useEffect } from 'react';
import styles from 'styles/Home.module.css';
import { Link } from 'react-router-dom';
import MovieItem from './MovieItem';

const MovieList = ({ isLoading, movies, searchLoading, movieList }) => {
  useEffect(() => {
    if (movieList && movieList.length === 0) {
      alert('검색 결과가 없습니다');
    }
  }, [movieList]);
  return (
    <div>
      {(isLoading || searchLoading) && <Loading />}
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
                  <MovieItem
                    medium_cover_image={medium_cover_image}
                    rating={rating}
                    genres={genres}
                    title={title}
                  />
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
                  <MovieItem
                    medium_cover_image={medium_cover_image}
                    rating={rating}
                    genres={genres}
                    title={title}
                  />
                </Link>
              )
            )}
      </ul>
    </div>
  );
};

export default MovieList;
