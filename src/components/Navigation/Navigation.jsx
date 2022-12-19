import './Navigation.css';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <NavLink
        to='/movies'
        className='navigation-link navigation-link_weight_medium'
      >
        Фильмы
      </NavLink>
      <NavLink
        to='/saved-movies'
        className='navigation-link navigation-link_active'
      >
        Сохранённые фильмы
      </NavLink>
    </>
  )
};

export default Navigation;
