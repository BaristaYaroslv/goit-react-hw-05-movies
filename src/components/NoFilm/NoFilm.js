import PropTypes from 'prop-types';

const NoFilm = ({ nameFilms }) => {
  return <p>No find film with name {nameFilms}</p>;
};

NoFilm.propTypes = {
  nameFilms: PropTypes.string.isRequired,
};

export default NoFilm;
