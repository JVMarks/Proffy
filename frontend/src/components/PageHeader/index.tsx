import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';
import rocket from '../../assets/images/rocket.svg';

import './styles.css';

interface PegeHeaderProps {
  title: string;
  textIcon: String;
  information: String;
  description?: string;
}

const PageHeader: React.FC<PegeHeaderProps> = (props) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/Home">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <p>{props.information}</p>
        <img src={logoImg} alt="Proffy" />
      </div>

      <div className="header-content">
        <strong>{props.title}</strong>
        {props.description && <p>{props.description}</p>}
        {props.children}
        <img src={rocket} alt="rocket" />
        <span>{props.textIcon}</span>
      </div>
    </header>
  );
}

export default PageHeader;