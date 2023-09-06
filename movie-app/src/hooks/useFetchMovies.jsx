import { useState, useEffect } from "react";

const useFetchMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://yts.mx/api/v2/list_movies.json?sort_by=like_count`
        );
        const {
          data: { movies },
        } = await res.json();
        setIsLoading(false);
        setMovies(movies);
      } catch (err) {
        setError(err);
        console.log(err);
      }
    })();
  }, []);

  return { movies, error, isLoading };
};

export default useFetchMovies;
