import React from 'react';

import { Link } from 'react-router-dom';

import logoimg from '../../assets/images/logo.svg';
import backgroundImg from '../../assets/images/success-background.svg';
import backIcon from '../../assets/images/icons/back.svg';
import './styles.css';

function forgotAccont() {

  return (
    <div id="page-forgotAccont">

      <header className="page-header2">
        <div className="top-bar-container2">
          <Link to="/">
            <img src={backIcon} alt="Voltar" />
          </Link>
        </div>
      </header>

      <article>


        <form action="" className="registrationForm">
          <legend>Eita, esqueceu sua senha?</legend>
          <span>Não esquenta, vamos dar um geito nisso.</span>
          <input
            type="text"
            id="e-mail"
            name="e-mail"
            placeholder="E-mail"
            className="Input"
          />
          <Link to="/" className="button-in">
            Entrar
        </Link>
        </form>
      </article>

      <div className="background-page">
        <img src={backgroundImg} alt="blckground" className="background_img" />
        <div id="page-landing-content2" className="container2">
          <div className="logo-container2">
            <img src={logoimg} alt="Proffy" />
            <h2>Sua plataforma de estudos online.</h2>
          </div>
        </div>
      </div>

    </div>
  )
}

export default forgotAccont;