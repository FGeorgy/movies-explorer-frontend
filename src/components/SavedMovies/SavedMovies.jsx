import './SavedMovies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCard from '../Movies/MoviesCard/MoviesCard';

function SavedMovies() {
return (
  <>
    <Header/>
    <SearchForm/>
    <section className="saved-movies">
      <MoviesCard/>
    </section>
    <Footer/>
  </>
)
};

export default SavedMovies;
