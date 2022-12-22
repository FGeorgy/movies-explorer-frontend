import './Register.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';


function Register() {
  return (
    <section className="register">
      <Link to='/' className='register__logo'>
        <img className='register__logo-img' alt='Логотип' src={logo} />
      </Link>
      <h3 className="register__title">Добро пожаловать!</h3>
      <form className="register__form">
        <div className="register__input-wrapper">
          <p className="register__caption">Имя</p>
          <input
            type="text"
            className="register__input"
            placeholder="Виталий"
          />
        </div>
        <div className="register__input-wrapper">
          <p className="register__caption">E-mail</p>
          <input
            type="text"
            className="register__input"
            placeholder="pochta@yandex.ru|"
          />
        </div>
        <div className="register__input-wrapper">
          <p className="register__caption">Пароль</p>
          <input
            type="password"
            className="register__input"
            placeholder="password"
          />
        </div>
      </form>
        <button
          className="register__reg-button"
          type="submit"
        >Зарегистрироваться</button>
        <p className="register__text">
          Уже зарегистрированы?
          <Link
            to="/signin"
            className="register__log-link"
          >Войти</Link>
        </p>
    </section>
  )
};

export default Register;
