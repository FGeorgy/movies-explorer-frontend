import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

function Header({ loggedIn=true }) {
  return (
    <header className='header'>
      <Link to='/' className='header__logo'>
        <img className='header__logo-img' alt='Логотип' src={logo}/>
      </Link>
        {loggedIn ? (
          <>
            <nav className="header__nevigation">
              <Navigation/>
            </nav>
            <div className='header__profile'>
              <Link
                to='/profile'
                className='header__profile-button'
              >Аккаунт
                <div className='header__profile-icon'></div>
              </Link>
              <button className="header__burger"/>
            </div>
          </>
        ) : (
          <nav className='header__auth'>
            <Link
              to='signup'
              className='header__profile-link'
            >Регистрация</Link>
            <Link
              to='signin'
              className='header__profile-link header__profile-link_theme_black'
            >Войти</Link>
          </nav>
        )}
    </header>
  )
};

export default Header;
