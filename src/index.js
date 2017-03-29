import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Phrase from './component/Phrase';
import Setting from './component/Setting';
import Search from './component/Search';
import './css/index.css';


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Phrase}></Route>
        <Route path="setting" component={Setting}></Route>
        <Route path="search" component={Search}></Route>
    </Router>,
  document.getElementById('root')
);
