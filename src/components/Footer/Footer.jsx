import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h5 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h5>
      <div className="footer__wrapper">
        <p className="footer__copyright">© 2022. FGeorg</p>
        <ul className="footer__link-list">
          <li className="footer__item">
            <a href="https://practicum.yandex.ru/" className="footer__link">Яндекс.Практикум</a>
          </li>
          <li className="footer__item">
            <a href="https://github.com/FGeorgy" className="footer__link">Github</a>
          </li>
        </ul>
      </div>
    </footer>
  )
};

export default Footer;
