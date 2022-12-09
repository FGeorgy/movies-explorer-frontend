import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Header({ loggedIn }) {
  return (
    <header className='header'>
      <Link to='#' className='header__logo'>
        <img className='header__logo-img' alt='Логотип' src={logo} />
      </Link>
      {loggedIn && (
        <div className='header__navigation'>
          <NavLink
            to='#'
            className='header__navigation-link header__navigation-link_weight_medium'
          >
            Фильмы
          </NavLink>
          <NavLink
            to='#'
            className='header__navigation-link header__navigation-link_active'
          >
            Сохранённые фильмы
          </NavLink>
          <button className="header__burger"/>
        </div>
      )}
      <div className='header__profile'>
        {loggedIn ? (
          <Link
            to='#'
            className='header__profile-button'
          >Аккаунт
            <div className='header__profile-icon'></div>
          </Link>
        ) : (
          <>
            <Link
              to='#'
              className='header__profile-link'
            >Регистрация</Link>
            <Link
              to='#'
              className='header__profile-link header__profile-link_theme_black'
            >Войти</Link>
          </>
        )}
      </div>
    </header>
  )
};

export default Header;
