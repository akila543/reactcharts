import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';
import Home1 from './client/views/Home1.jsx';


ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path='/' component={Home1} />
    </div>
  </HashRouter>,
  document.getElementById('app'));
