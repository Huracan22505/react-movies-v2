import s from './FavoritePage.module.css';

import MoviesList from 'components/MoviesList';

export default function FavoritePage() {
  const localStore = localStorage.getItem('favorite');
  if (typeof localStore !== 'string')
    throw new Error('Local Storage not found');

  const movies = JSON.parse(localStore);

  return (
    <div className={`container`}>
      <h1 className={s.title}>Favorite films</h1>

      {movies.length > 0 ? (
        <MoviesList movies={movies} />
      ) : (
        <a href="./" className={s.text}>
          Add some movies to favorite
        </a>
      )}
    </div>
  );
}
