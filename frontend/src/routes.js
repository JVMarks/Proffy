import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import landing from './pages/Landing';
import Acconted from './pages/accepted';
import forgotAccontt from './pages/forgotAccont';
import fortgotemail from './pages/ForgotedEmail';

import Home from './pages/Home';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import registration from './pages/registration';


function Routes() {

  const Pagina404 = () => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <h2>¯\_(ツ)_/¯ Ops, Deu pau na maquina ¯\_(ツ)_/¯</h2>
      <p>
        <a href="/"><strong>Você pode jogar ou voltar para HOME</strong></a>
      </p>
      <iframe title="Flappy Bird Game"
        src="https://flappy-bird-blue.vercel.app/"
        width="370"
        height="550"
      />
    </div>
  )

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={landing} />
        <Route path="/Accept" component={Acconted} />
        <Route path="/fortgot" component={fortgotemail} />


        <Route path="/registration" component={registration} />
        <Route path="/forgotaccont" component={forgotAccontt} />

        <Route path="/Home" exact component={Home} />

        <Route path="/study" component={TeacherList} />
        <Route path="/give-classes" component={TeacherForm} />


        <Route component={Pagina404} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

//yarn add