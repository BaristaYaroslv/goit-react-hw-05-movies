import PropTypes from 'prop-types';
import { Wrap, WrapImage, Image, H1, H2, P,} from './MovieInformation.styled';

const MovieInformation = ({ filmInformatioin }) => {
  const {
    posterPath,
    original_title,
    releaseDate,
    voteAverage,
    overview,
    genresText,
  } = filmInformatioin;

  return (
    <Wrap>
      <WrapImage>
        <Image src={posterPath} alt={original_title} />
      </WrapImage>

      <div>
        <H1>{`${original_title} (${releaseDate})`}</H1>
        <P>{`User Score: ${voteAverage}%`}</P>
        <H2>Overviews</H2>
        <P>{overview}</P>
        <H2>Genders</H2>
        <P>{genresText}</P>
      </div>
    </Wrap>
  );
};

MovieInformation.propTypes = {
  filmInformatioin: PropTypes.exact({
    posterPath: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    voteAverage: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genresText: PropTypes.string.isRequired,
  }).isRequired,
};
export default MovieInformation;
