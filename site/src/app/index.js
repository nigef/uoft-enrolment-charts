import { render } from 'inferno';
import { Router, Route } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';

import App from './components/App';
import About from './components/About';

import './styles/styles.scss';

if (module.hot) {
  require('inferno-devtools');
}

const browserHistory = createBrowserHistory();

const routes = (
  <Router history={ browserHistory }>
    <Route component={ App }>
      <Route path="/about" component={ About } />
    </Route>
  </Router>
);

render(routes, document.getElementById('app'));

if (module.hot) {
  module.hot.accept()
}
