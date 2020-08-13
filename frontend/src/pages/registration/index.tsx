import React from 'react';
import { Link } from 'react-router-dom';
import logoimg from '../../assets/images/logo.svg';
import backgroundImg from '../../assets/images/success-background.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

function registration() {

  return (
    <div id="page-registration">
      <header className="page-header2">
        <div className="top-bar-container2">
          <Link to="/">
            <img src={backIcon} alt="Voltar" />
          </Link>
        </div>
      </header>

      <article>
        <form className="registrationForm" >
          <legend>Cadastro</legend>
          <span>Preencha os dados abaixo para começar.</span>
          <input
            placeholder="Nome"
            id="nome"
            name="nome"
            type="text"
            className="Input"
          />
          <input
            type="text"
            id="sobrenome"
            name="sobrenome"
            placeholder="Sobrenome"
            className="Input"
          />
          <input
            type="text"
            id="e-mail"
            name="e-mail"
            placeholder="E-mail"
            className="Input"
          />
          <input
            id="pwd"
            name="pwd"
            type="password"
            placeholder="Senha"
            className="Input"
          />
          <Link to="/Accept" className="button-in" >
            Concluir cadastro
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

export default registration;