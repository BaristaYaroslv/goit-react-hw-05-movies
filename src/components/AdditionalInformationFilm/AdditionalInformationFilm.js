import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Wrap } from './AdditionalInformationFilm.styled';

const AdditionalInformationFilm = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  return (
    <Wrap>
      <h2>Additional information</h2>
      <ul>
        <li>
          <Link to="cast" state={{ from: backLinkHref }}>
            Cast &#128064;
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: backLinkHref }}>
            Reviews &#9997;
          </Link>
        </li>
      </ul>
    </Wrap>
  );
};

export default AdditionalInformationFilm;
