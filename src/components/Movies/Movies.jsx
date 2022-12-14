import './Movies.css';

import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies() {
  return (
    <>
      <Header loggedIn={ true }/>
      <main>
        <SearchForm/>
        <MoviesCardList/>
      </main>
      <Footer/>
    </>
  )
};

export default Movies;
