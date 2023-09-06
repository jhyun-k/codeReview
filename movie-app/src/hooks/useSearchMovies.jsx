import { useState } from "react";

const useSearchMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      const res = await fetch(
        `https://yts.mx/api/v2/list_movies.json?query_term=${keyword}`
      );
      console.log(res);
      const {
        data: { movies },
      } = await res.json();
      setIsLoading(false);
      setMovies(movies);
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  const handleInput = (e) => {
    setKeyword(e.target.value);
  };

  return { handleSearch, handleInput, isLoading, movies, error };
};

export default useSearchMovies;
