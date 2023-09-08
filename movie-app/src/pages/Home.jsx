import useFetchMovies from 'hooks/useFetchMovies';
import useSearchMovies from 'hooks/useSearchMovies';
import React from 'react';
import SearchBar from '../components/Search';
import MovieList from '../components/MovieList';

const Home = () => {
  const { isLoading, error, movies } = useFetchMovies();
  const { handleSearch, handleInput, movieList, searchLoading } =
    useSearchMovies();

  if (error) {
    alert('에러임');
    return null;
  }

  return (
    <div>
      <SearchBar handleSearch={handleSearch} handleInput={handleInput} />
      <MovieList
        isLoading={isLoading}
        movies={movies}
        searchLoading={searchLoading}
        movieList={movieList}
      />
    </div>
  );
};

export default Home;
