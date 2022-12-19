import './Profile.css';
import Header from '../Header/Header';

function Profile() {
  return (
    <>
      <Header/>
      <section className="profile">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <form className="profile__form">
          <label className="profile__info">
            <p className="profile__caption">Имя</p>
            <input
              type="text"
              className="profile__input"
              placeholder="Виталий"
            />
          </label>
          <label className="profile__info">
            <p className="profile__caption">E-mail</p>
            <input
              type="email"
              className="profile__input"
              placeholder="pochta@yandex.ru"
            />
          </label>
        </form>
        <div className="profile__buttons">
          <button
            className="profile__button profile__edit-button"
            type="submit"
          >Редактировать</button>
          <button
            className="profile__button profile__sign-out-button"
            type="button"
          >Выйти из аккаунта</button>
        </div>
      </section>
    </>
  )
};

export default Profile;
