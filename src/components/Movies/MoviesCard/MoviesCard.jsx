import './MoviesCard.css';
import poster from "../../../images/pic__movie.jpg";
// import { useLocation } from 'react-router-dom';

function MoviesCard() {
  // location = useLocation();

  return (
    <article className="movies-card">
      <h3 className="movies-card__title">33 слова о дизайне</h3>
      <p className="movies-card__duration">1ч 42м</p>
      <input className="movies-card__save" type="checkbox"/>
      {/* {location.pathname !== "/movies" ? (
        <input className="movies-card__save" type="checkbox"/>
      ) : (
        <input className="movies-card__delete" type="checkbox"/>
      )} */}
      <img src={poster} alt="Постер к фильму" className="movies-card__image" />

    </article>
  )
};

export default MoviesCard;
