import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { List, Item } from './MovieList.styled';

const MoviesList = ({ films }) => {
  const location = useLocation();
  return (
    <List>
      {films.map(element => {
        return (
          <Item key={element.id}>
            <Link to={`/movies/${element.id}`} state={{ from: location }}>
              {element.title}
            </Link>
          </Item>
        );
      })}
    </List>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default MoviesList;
