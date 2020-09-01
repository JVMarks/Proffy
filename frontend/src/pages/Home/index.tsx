import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../server/api';

import logoimg from '../../assets/images/logo.svg';
import logoutIcon from '../../assets/images/off.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveGlassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

function Home() {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then(response => {
      const { total } = response.data;

      setTotalConnections(total);
    })
  }, []);

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">

        <header className="home-header">
          <Link to="/" className="Logout">
            <img src={logoutIcon} alt="Logout" />
          </Link>
        </header>

        <div className="logo-container">
          <img src={logoimg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img
          src={landingImg}
          alt="Plataforma de estudo"
          className="hero-image"
        />
      </div>

      <div className="info-container">
          <p>Seja bem-vindo. <strong>O que deseja fazer?</strong></p>
          <h6 className="total-connections">
            Total de {totalConnections} conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo" />
          </h6>
        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
           Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveGlassesIcon} alt="Dar Aulas" />
           Dar Aulas
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home;