import { createContext, useContext } from 'react';
import ApiThemoviedb from 'servises/fetchFilms';

const MyContext = createContext();

const useContextFetchFilm = () => useContext(MyContext);
const ContextFetchFilm = ({ children }) => {
  const apiThemoviedb = new ApiThemoviedb();

  return (
    <MyContext.Provider value={{ apiThemoviedb }}>
      {children}
    </MyContext.Provider>
  );
};
export { ContextFetchFilm, useContextFetchFilm };
