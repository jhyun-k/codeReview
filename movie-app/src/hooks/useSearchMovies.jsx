import { useState } from 'react';

const useSearchMovies = () => {
  const [searchLoading, setSearchLoading] = useState(false);
  const [movieList, setMovieList] = useState();
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setSearchLoading(true);
    try {
      const {
        data: { movies },
      } = await (
        await fetch(
          `https://yts.mx/api/v2/list_movies.json?query_term=${keyword}&sort_by=like_count`
        )
      ).json();
      setMovieList(movies);
      setSearchLoading(false);
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  const handleInput = (e) => {
    setKeyword(e.target.value);
  };

  return {
    handleSearch,
    handleInput,
    searchLoading,
    movieList,
    setMovieList,
    error,
  };
};

export default useSearchMovies;
