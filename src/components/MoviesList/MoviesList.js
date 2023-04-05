import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { List, Item } from './MovieList.styled';

const MoviesList = ({ films }) => {
  const location = useLocation();
  console.log(films)
  return (
    <List>
      {films.map(element => {
        console.log(element)
        return (
          <Item key={element.id}>
            <Link to={`/movies/${element.id}`} state={{ from: location }}>
              <img src={element.poster_path ? (`https://www.themoviedb.org/t/p/original/${element.poster_path}`): ("https://i.ibb.co/z703XMd/film-plug.png")} alt={element.title}></img>
          <div>
              <h3>{element.title}</h3>
              <p>{element.release_date}</p>
          </div>
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
