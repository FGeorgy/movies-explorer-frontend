import './NotFound.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <section className="not-found">
      <div className="not-found__content">
        <h2 className="not-found__title">404</h2>
        <p className="not-found__subtitle">Страница не найдена</p>
      </div>
      <p
        className="not-found__go-back-link"
        onClick={goBack}
        >Назад</p>
    </section>
  )
};

export default NotFound;
