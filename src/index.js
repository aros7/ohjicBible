import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Phrase from './component/Phrase';
import Setting from './component/Setting';
import './css/index.css';
import './css/component/menu.css';
import './css/component/header.css';
import './css/component/content.css';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Phrase}></Route>
        <Route path="setting" component={Setting}></Route>
    </Router>,
  document.getElementById('root')
);
