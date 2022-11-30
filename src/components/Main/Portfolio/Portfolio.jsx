import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h4 className="portfolio__title">Портфолио</h4>
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

export default Portfolio;
