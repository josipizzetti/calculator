import React from 'react';
import PropTypes from 'prop-types';
import 'babel-polyfill';

import './App.scss';

const App = ({ children }) => <main className='App'>{children}</main>;

App.propTypes = {
  children: PropTypes.node
};

export default App;
