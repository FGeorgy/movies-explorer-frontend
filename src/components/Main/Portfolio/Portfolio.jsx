import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h4 className="portfolio__title">Портфолио</h4>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a href="https://github.com/FGeorgy/how-to-learn" className="portfolio__link">Статичный сайт</a>
        </li>
        <li className="portfolio__item">
          <a href="https://github.com/FGeorgy/russian-travel" className="portfolio__link">Адаптивный сайт</a>
        </li>
        <li className="portfolio__item">
          <a href="https://github.com/FGeorgy/react-mesto-api-full" className="portfolio__link">Одностраничное приложение</a>
        </li>
      </ul>
    </section>
  )
};

export default Portfolio;
