import './Techs.css';

function Techs() {
  return (
    <section className="techs" id="techs">
      <h2 className='title'>Технологии</h2>
      <div className="techs__wrapper">
        <h3 className="techs__title">7 технологий</h3>
        <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      </div>
      <ul className="techs__stack">
        <li className="techs__stack-item">
          <p className="techs__stack-name">HTML</p>
        </li>
        <li className="techs__stack-item">
          <p className="techs__stack-name">CSS</p>
        </li>
        <li className="techs__stack-item">
          <p className="techs__stack-name">JS</p>
        </li>
        <li className="techs__stack-item">
          <p className="techs__stack-name">React</p>
        </li>
        <li className="techs__stack-item">
          <p className="techs__stack-name">Git</p>
        </li>
        <li className="techs__stack-item">
          <p className="techs__stack-name">Express.js</p>
        </li>
        <li className="techs__stack-item">
          <p className="techs__stack-name">mongoDB</p>
        </li>
      </ul>
    </section>
  )
};

export default Techs;
