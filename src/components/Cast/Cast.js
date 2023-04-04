import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useContextFetchFilm } from 'components/ContextFetchFilm/ContextFetchFilm';
import Loader from 'components/Loader';
import noPhoto from '../../images/images.png';
import {CastImage, CastList, CastListItem } from 'components/Cast/Cast.styled'

const Cast = () => {
  // * Беру контекст для роботи із APIзапросами
  const { apiThemoviedb } = useContextFetchFilm();
  const [showLoad, setShowLoad] = useState(false);
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [posterPath, setPosterPath] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    async function fetchInformation() {
      setShowLoad(true);
      try {
        const information = await apiThemoviedb.fetchCreditsFromFilm(
          movieId,
          controller
        );

        setCast(information.cast);

        const posterPath = await apiThemoviedb.getUrlImage('w185');
        setPosterPath(posterPath);
      } catch {
        setCast([]);
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
      {!showLoad && cast.length === 0 && (
        <p>We don't have information about cast.</p>
      )}
      {!showLoad && cast.length !== 0 && (
        <CastList>
          {cast.map(element => {
            const src =
              element.profile_path !== null
                ? `${posterPath}${element.profile_path}`
                : noPhoto;

            return (
              <CastListItem key={element.cast_id}>
                <CastImage src={src} alt={element.name} width="185" />
                <p>{element.name}</p>
                <p>{element.character}</p>
              </CastListItem>
            );
          })}
        </CastList>
      )}
    </>
  );
};

export default Cast;
