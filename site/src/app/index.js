import { render } from 'inferno';
import { Router, IndexRoute, Route } from 'inferno-router';
import createHashHistory from 'history/createHashHistory';

import Home from './components/Home';
import Course from './components/Course';

import './styles/styles.scss';

const devMode = process.env.NODE_ENV === 'development' && module.hot;

if (devMode) {
  require('inferno-devtools');
}

const hashHistory = createHashHistory();

const routes = (
  <Router history={ hashHistory }>
    <IndexRoute component={ Home } />
    <Route path="courses" component={ Course }>
      <Route path="course/:dept/:course" />
    </Route>
  </Router>
);

render(routes, document.getElementById('app'));

if (devMode) {
  module.hot.accept()
}
