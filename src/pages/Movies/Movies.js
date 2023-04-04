import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useContextFetchFilm } from 'components/ContextFetchFilm/ContextFetchFilm';
import SearchBox from 'components/SearchBox';
import NoFilm from 'components/NoFilm';
import MoviesList from 'components/MoviesList';
import Loader from 'components/Loader';

const Movies = () => {
  // * Беру контекст для роботи із APIзапросами
  const { apiThemoviedb } = useContextFetchFilm();

  const [searchParams, setSearchParams] = useSearchParams();
  const [films, setFilms] = useState([]);
  const [showLoad, setShowLoad] = useState(false);

  const nameFilms = searchParams.get('nameFilms') ?? '';

  const handlerSubmitForm = event => {
    event.preventDefault();
    const form = event.target;
    const value = form.elements.searchFilm.value;

    setSearchParams(value !== '' ? { nameFilms: value } : {});
    setFilms([]);

    form.reset();
  };

  useEffect(() => {
    if (nameFilms === '') {
      setFilms([]);
      return;
    }

    const controller = new AbortController();

    async function fetchFilms(nameFilms) {
      setShowLoad(true);
      try {
        const searchFilms = await apiThemoviedb.searchFilm({
          controller,
          nameFilms,
        });
        setFilms(searchFilms.results);
      } catch (Error) {
        setFilms([]);
        console.log('Error fetch', Error);
      } finally {
        setShowLoad(false);
      }
    }

    fetchFilms(nameFilms);

    return () => {
      controller.abort();
    };
  }, [nameFilms, apiThemoviedb]);

  return (
    <>
      <SearchBox onSubmitForm={handlerSubmitForm} />

      {showLoad && <Loader />}
      {films.length === 0 && nameFilms !== '' && !showLoad && (
        <NoFilm nameFilms={nameFilms} />
      )}
      {films.length !== 0 && <MoviesList films={films} />}
    </>
  );
};

export default Movies;
