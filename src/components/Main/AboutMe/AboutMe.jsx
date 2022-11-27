import './AboutMe.css';
import photo from '../../../images/profile.jpg';

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className='title'>Студент</h2>
      <article className="about-me__description">
        <h3 className="about-me__name">Георгий</h3>
        <p className="about-me__subtitle">Фронтенд-разработчик, 32 года</p>
        <p className="about-me__text">Я родился и живу в Улан-Удэ. У меня есть жена и двое детей. Я люблю читать книги и создавать поделки из дерева. Занимался производством огнезащитных работ. После того, как прошёл курсы веб-разработчика в Яндекс.Практикуме, начал заниматься фриланс-заказами и ушел с предыдущей работы.</p>
        <a href="1" className="about-me__github">Github</a>
        <img src={photo} alt="" className="about-me__photo" />
      </article>
      <h4 className="about-me__portfolio">Портфолио</h4>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a href="1" className="portfolio__link">Статичный сайт</a>
        </li>
        <li className="portfolio__item">
          <a href="2" className="portfolio__link">Адаптивный сайт</a>
        </li>
        <li className="portfolio__item">
          <a href="3" className="portfolio__link">Одностраничное приложение</a>
        </li>
      </ul>
    </section>
  )
};

export default AboutMe;
