import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';
import Home from './client/views/Home.jsx';
import CustomerInformation from './client/views/customerInformation.jsx';


ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/customerInformation' component={CustomerInformation} />

    </div>
  </HashRouter>,
  document.getElementById('app'));
