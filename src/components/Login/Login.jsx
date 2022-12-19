import './Login.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Login() {
  return (
    <section className="login">
      <Link to='/' className='login__logo'>
        <img className='login__logo-img' alt='Логотип' src={logo} />
      </Link>
      <h3 className="login__title">Добро пожаловать!</h3>
      <form className="login__form">
        <div className="login__input-wrapper">
          <p className="login__caption">E-mail</p>
          <input
            type="text"
            className="login__input"
            placeholder="pochta@yandex.ru|"
          />
        </div>
        <div className="login__input-wrapper">
          <p className="login__caption">Пароль</p>
          <input
            type="password"
            className="login__input"
            placeholder="password"
          />
        </div>
      </form>
        <button
          className="login__reg-button"
          type="submit"
        >Войти</button>
        <p className="login__text">
          Ещё не зарегистрированы?
          <Link
            to='/signup'
            className="login__log-link"
          >Регистрация</Link>
        </p>
    </section>
  )
};

export default Login;
