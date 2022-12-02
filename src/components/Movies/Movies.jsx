import './Movies.css';

import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';

function Movies() {
  return (
    <>
      <Header loggedIn={ true }/>
      <SearchForm/>
    </>
  )
};

export default Movies;
