import './App.css';
import React from 'react';
import { Routes, Route} from 'react-router-dom';

import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profiler from '../Profile/Profile';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import BurgerMenuPopup from '../Header/BurgerMenuPopup/BurgerMenuPopup';

function App() {
  return (
    <CurrentUserContext.Provider>
      <div className='page'>
        <Routes>
          <Route
            exact path='/'
            element={<Main/>}
          />
          <Route
            path='/movies'
            element={<Movies/>}
          />
          <Route
            path='/saved-movies'
            element={<SavedMovies/>}
          />
          <Route
            path='/profile'
            element={<Profiler/>}
          />
          <Route
            path='/signin'
            element={<Login/>}
          />
          <Route
            path='/signup'
            element={<Register/>}
          />
          <Route
            path='*'
            element={<NotFound/>}
          />
        </Routes>
        <BurgerMenuPopup/>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
