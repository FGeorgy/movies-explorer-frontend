import './BurgerMenuPopup.css'
import { NavLink } from 'react-router-dom';

function BurgerMenuPopup() {
  return (
    <div className="burger-menu">
      <div className="burger-menu__wrapper">
        <button className="burger-menu__close-button"/>
        <nav className="burger-menu__navigation">
          <NavLink to='/' className="burger-menu__link">Главная</NavLink>
          <NavLink to='/movies' className="burger-menu__link burger-menu__link_active">Фильмы</NavLink>
          <NavLink to='/saved-movies' className="burger-menu__link">Сохранённые фильмы</NavLink>
        </nav>
        <NavLink to='/profile' className="burger-menu__profile">Аккаунт
          <div className='header__profile-icon'></div>
        </NavLink>
      </div>
    </div>
  )
};

export default BurgerMenuPopup;
