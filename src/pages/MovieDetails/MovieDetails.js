import { useLocation, useParams } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import BackLink from 'components/BackLink';
import AdditionalInformationFilm from 'components/AdditionalInformationFilm';
import MovieInformation from 'components/MovieInformation';
import Loader from 'components/Loader';
import { useContextFetchFilm } from 'components/ContextFetchFilm/ContextFetchFilm';

const MovieDetails = () => {
  // * Беру контекст для роботи із APIзапросами
  const { apiThemoviedb } = useContextFetchFilm();
  const [filmInformatioin, setFilmInformatioin] = useState(null);
  const [showLoad, setShowLoad] = useState(false);

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    const controller = new AbortController();
    async function fetchInformation() {
      setShowLoad(true);
      try {
        const {
          poster_path,
          overview,
          original_title,
          release_date,
          vote_average,
          genres,
        } = await apiThemoviedb.fetchFullInformationFromFilm(
          movieId,
          controller
        );

        const posterPath = await apiThemoviedb.getUrlImage('w342');

        setFilmInformatioin({
          posterPath: `${posterPath}${poster_path}`,
          original_title,
          releaseDate: release_date.slice(0, 4),
          voteAverage: Math.ceil(Number(vote_average) * 10),
          overview,
          genresText: apiThemoviedb.getGendeText(genres),
        });
      } catch {
        setFilmInformatioin(null);
        console.log('Error fetch');
      } finally {
        setShowLoad(false);
      }
    }

    fetchInformation();

    return () => {
      controller.abort();
    };
  }, [apiThemoviedb, movieId]);

  return (
    <>
      {showLoad && <Loader />}

      {!showLoad && (
        <>
          <BackLink to={backLinkHref}> Go back</BackLink>
          {filmInformatioin !== null && (
            <MovieInformation filmInformatioin={filmInformatioin} />
          )}
          <AdditionalInformationFilm state={{ from: backLinkHref }} />
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};

export default MovieDetails;
