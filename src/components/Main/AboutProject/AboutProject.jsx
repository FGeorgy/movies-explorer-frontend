import './AboutProject.css';

function AboutProject() {
  return (
    <section className='about-project' id='about-project'>
      <h2 className='title'>О проекте</h2>
      <div className="about-project__wrapper">
        <article className='about-project__article'>
          <h3 className='about-project__heading'>Дипломный проект включал 5 этапов</h3>
          <p className='about-project__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </article>
        <article className='about-project__article'>
          <h3 className='about-project__heading'>На выполнение диплома ушло 5 недель</h3>
          <p className='about-project__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </article>
      </div>
      <ul className='about-project__scale'>
        <li className="about-project__scale-item-1">
          <p className="about-project__scale-part about-project__scale-part_theme_dark">1 неделя</p>
          <p className="about-project__scale-name">Back-end</p>
        </li>
        <li className="about-project__scale-item-2">
          <p className="about-project__scale-part about-project__scale-part_theme_light">4 недели</p>
          <p className="about-project__scale-name">Front-end</p>
        </li>
      </ul>
    </section>
  )
};

export default AboutProject;
