import React from 'react';
import styles from 'styles/Home.module.css';

const MovieItem = ({ medium_cover_image, rating, genres, title }) => {
  return (
    <div>
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
    </div>
  );
};

export default MovieItem;
