import React from 'react';

import { Link } from 'react-router-dom';

import logoimg from '../../assets/images/logo.svg';
import backgroundImg from '../../assets/images/success-background.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import './styles.css';

function landing2() {
  return (

    <div id="page-landing2">
      <div className="background-page">
        <img src={backgroundImg} alt="blckground" className="background_img" />
        <div id="page-landing-content2" className="container2">
          <div className="logo-container2">
            <img src={logoimg} alt="Proffy" />
            <h2>Sua plataforma de estudos online.</h2>
          </div>
        </div>
      </div>

      <article>
        <form action="" className="Loginform">

          <legend>Fazer login</legend>
          <input
            type="text"
            id="e-mail"
            name="e-mail"
            placeholder="E-mail"
            className="Input"
          />
          <input
            type="password"
            id="pwd"
            name="pwd"
            placeholder="Senha"
            className="Input"
          />
          <div className="CheckboxInput">

            <label className="checkboxText">
              <input
                id="checkbox"
                name="checkbox"
                type="checkbox"
              />
              <span className="checkmark"></span>
              Lembrar-me</label>

            <Link to="/forgotaccont" className="esqueci">
              Esqueci minha senha
            </Link>
          </div>

          <Link to="/aaa" className="button-in">
            Entrar
          </Link>

          <footer>
            <p>Não tem conta?</p>
            <span>É de graça <img src={purpleHeartIcon} alt="Coração roxo" /></span>
            <Link to="/registration" className="footer-link">Cadastre-se</Link>
          </footer>
        </form>
      </article>

    </div>
  )
}

export default landing2;