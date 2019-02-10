import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import store from './store';
import './index.css';
import App from './App';
import Calculator from './components/Calculator'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Switch>
          <Route path='*/calc' exact component={Calculator} />
          <Redirect from='/' to='/calc' />
        </Switch>
      </App>
    </Router>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
