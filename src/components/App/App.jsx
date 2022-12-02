import logo from '../../logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Navigation from '../Navigation/Navigation';
import Profiler from '../Profile/Profile';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  return (
    <CurrentUserContext.Provider>
      <div className='page'>
        <Routes>
          <Route
            path='/'
            element={<Movies/>}
          />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
