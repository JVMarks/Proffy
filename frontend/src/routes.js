import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import Landing2 from './pages/landing2';
import registration from './pages/registration';
import forgotAccontt from './pages/forgotAccont';

import Acconted from './pages/accepted';
import fortgotemail from './pages/ForgotedEmail';

function Routes() {
  return (
    <BrowserRouter>

      <Route path="/Accept" component={Acconted} />
      <Route path="/fortgot" component={fortgotemail} />
      <Route path="/" exact component={Landing2} />
      <Route path="/registration" component={registration} />
      <Route path="/forgotaccont" component={forgotAccontt} />
      <Route path="/aaa" exact component={Landing} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
    </BrowserRouter>
  );
}

export default Routes;

//yarn add