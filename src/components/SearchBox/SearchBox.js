import PropTypes from 'prop-types';
import { FormSearch, Input, Button } from './SearchBox.styled';

const SearchBox = ({ onSubmitForm }) => {
  return (
    <FormSearch onSubmit={onSubmitForm}>
      <Input
        name="searchFilm"
        type="text"
        autoComplete="on"
        autoFocus
        placeholder="Search films"
      />
      <Button type="submit">Search</Button>
    </FormSearch>
  );
};
SearchBox.propTypes = {
  onSubmitForm: PropTypes.func,
};

export default SearchBox;
