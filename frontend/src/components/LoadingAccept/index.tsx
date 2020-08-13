import React from 'react';

import { Link } from 'react-router-dom';

import successIcon from '../../assets/images/icons/success-check-icon.svg';
import './styles.css';

interface LoadingProps {
  title: string;
  description: string;
  button: string;
}

const LoadingAccept: React.FC<LoadingProps> = (props) => {
  return (
    <div id="Accept-page-information">
      <div className="backgound">
        <div className="discription">
          <img src={successIcon} alt="Voltar" />
          <strong>{props.title}</strong>
          <p>{props.description}</p>

          <div className="button-Accept">
            <Link to="/">
          {props.button}
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default LoadingAccept;