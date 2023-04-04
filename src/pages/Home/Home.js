import { useEffect, useState } from 'react';
import { useContextFetchFilm } from 'components/ContextFetchFilm/ContextFetchFilm';

import Loader from 'components/Loader';
import MoviesList from 'components/MoviesList';

const Home = () => {
  const [showLoad, setShowLoad] = useState(false);
  const [films, setFilms] = useState([]);
  // * Беру контекст для роботи із APIзапросами
  const { apiThemoviedb } = useContextFetchFilm();

  useEffect(() => {
    const controller = new AbortController();

    async function fetchFilms() {
      setShowLoad(true);
      try {
        const trandingFilms = await apiThemoviedb.fetchTrending({ controller });
        setFilms(trandingFilms.results);
      } catch {
        setFilms([]);
        console.log('Error fetch');
      } finally {
        setShowLoad(false);
      }
    }

    fetchFilms();

    return () => {
      controller.abort();
    };
  }, [apiThemoviedb]);
  // ! З попререднім рядком нема проблем? Не треба мемозувати apiThemoviedb??

  return (
    <>
      <h1>Trending today</h1>
      {showLoad && <Loader />}
      {films.length > 0 && <MoviesList films={films} />}
    </>
  );
};

export default Home;
